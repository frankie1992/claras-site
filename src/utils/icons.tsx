import type { SVGProps } from 'react'

export type IconProps = SVGProps<SVGSVGElement> & { title?: string }

function baseProps(title?: string) {
  return {
    role: title ? 'img' : undefined,
    'aria-hidden': title ? undefined : true,
    focusable: false as const,
  }
}

export function HeartIcon({ className = 'size-4', title, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...baseProps(title)}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  )
}

export function BriefcaseIcon({ className = 'size-4', title, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...baseProps(title)}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
    </svg>
  )
}

export function InfoIcon({ className = 'size-4', title, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...baseProps(title)}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <circle cx="12" cy="12" r="9" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  )
}

export function MenuIcon({ className = 'h-5 w-5', title, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...baseProps(title)}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  )
}

export function XIcon({ className = 'h-5 w-5', title, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...baseProps(title)}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path d="M18 6 6 18" />
      <path d="M6 6l12 12" />
    </svg>
  )
}

export function CodeIcon({ className = 'size-3.5', title, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...baseProps(title)}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <polyline points="10 13 7 12 10 11" />
      <polyline points="14 11 17 12 14 13" />
      <line x1="12" y1="15" x2="12" y2="9" />
    </svg>
  )
}

export function LeafIcon({ className = 'size-6', title, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 30 46"
      fill="none"
      className={className}
      {...baseProps(title)}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path d="M24.6789 22.774C29.7398 22.774 31.005 16.0684 28.095 14.4236C26.1971 13.4114 21.7689 15.1827 18.8588 16.701C18.8588 16.5744 18.8588 16.5744 18.8588 16.5744C18.8588 16.5744 23.4136 12.3992 25.5645 7.71787C27.7154 3.03654 24.6789 -1.51827 19.9975 1.01218C15.3162 3.54263 15.4427 14.4236 15.4427 14.4236C15.4427 14.5501 15.3162 14.5501 15.3162 14.6766C14.5571 11.134 12.9123 6.32613 9.62269 5.94656C4.5618 5.56699 2.03135 11.387 5.82702 15.1827C8.48399 17.8397 11.394 19.4845 12.7858 20.2436C11.9001 22.774 10.8879 25.6841 10.0023 28.5941C9.74922 25.178 8.86356 20.6232 5.82702 19.864C0.766122 18.5988 -0.499103 24.0393 1.27221 27.8349C3.04353 31.6306 8.10443 35.4263 8.10443 35.4263C6.8392 39.9811 5.95354 43.3972 5.95354 43.3972L9.36965 45.5481C9.74922 43.3972 10.8879 39.6015 12.2797 35.4263C12.2797 35.4263 18.2262 37.5772 22.781 34.1611C27.3358 30.745 27.3358 26.5697 22.781 26.1902C19.7445 25.9371 16.2019 28.341 14.051 29.9858C15.1897 26.8228 16.3284 23.6597 17.214 21.2558C18.4793 21.8884 21.2628 22.774 24.6789 22.774Z" fill="currentColor" />
    </svg>
  )
}

export function DnaIcon({ className = 'size-4', title, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...baseProps(title)}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path d="m10 16 1.5 1.5" />
      <path d="m14 8-1.5-1.5" />
      <path d="M15 2c-1.798 1.998-2.518 3.995-2.807 5.993" />
      <path d="m16.5 10.5 1 1" />
      <path d="m17 6-2.891-2.891" />
      <path d="M2 15c6.667-6 13.333 0 20-6" />
      <path d="m20 9 .891.891" />
      <path d="M3.109 14.109 4 15" />
      <path d="m6.5 12.5 1 1" />
      <path d="m7 18 2.891 2.891" />
      <path d="M9 22c1.798-1.998 2.518-3.995 2.807-5.993" />
    </svg>
  )
}

export function StethoscopeIcon({ className = 'size-4', title, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...baseProps(title)}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path d="M11 2v2" />
      <path d="M5 2v2" />
      <path d="M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1" />
      <path d="M8 15a6 6 0 0 0 12 0v-3" />
      <circle cx="20" cy="10" r="2" />
    </svg>
  )
}

export function PaletteIcon({ className = 'size-4', title, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...baseProps(title)}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z" />
      <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
      <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
      <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
      <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
    </svg>
  )
}
