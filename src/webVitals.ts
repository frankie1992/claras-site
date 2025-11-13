// src/webVitals.ts
import {
  onCLS,
  onFCP,
  onINP,
  onLCP,
  onTTFB,
  type CLSMetric,
  type FCPMetric,
  type INPMetric,
  type LCPMetric,
  type TTFBMetric,
} from 'web-vitals';

type WebVitalMetric =
  | CLSMetric
  | FCPMetric
  | INPMetric
  | LCPMetric
  | TTFBMetric;

declare global {
  interface Window {
    umami?: {
      track: (eventName: string, data?: Record<string, unknown>) => void;
    };
  }
}

function reportToUmami(metric: WebVitalMetric) {
  if (!window.umami?.track) return;

  window.umami.track('web-vital', {
    name: metric.name,             
    value: metric.value,           
    id: metric.id,                 
    rating: (metric as any).rating,
    path: window.location.pathname,
  });
}

export function initWebVitals() {
  onCLS(reportToUmami);
  onFCP(reportToUmami);
  onINP(reportToUmami);
  onLCP(reportToUmami);
  onTTFB(reportToUmami);
}