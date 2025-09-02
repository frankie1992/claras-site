import { useState, useEffect } from 'react';

function useInViewPort(ref: HTMLElement, options?: IntersectionObserverInit) {
  const [ inViewport, setInViewport ] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([ entry ]) => {
      setInViewport(entry.isIntersecting);
    }, options);
    if (ref) {
      observer.observe(ref);
    }
    return () => {
      if (ref) {
        observer.unobserve(ref);
      }
    };
  }, [ options, ref ]);
  return inViewport;
}
export default useInViewPort;