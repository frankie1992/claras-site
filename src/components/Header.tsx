import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

export default function Header() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    [
      'group inline-flex items-center gap-2 px-3 py-1.5 rounded-xl text-sm transition-colors',
      isActive
        ? 'bg-slate-100 text-slate-900 shadow-sm'
        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
    ].join(' ')

  return (
    <header className="w-full border-b bg-white">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="h-16 grid grid-cols-[auto_1fr_auto] items-center">
          <NavLink to="/" className="text-xl font-semibold text-slate-900">
            clara oliva.
          </NavLink>

          {/* Desktop nav (center column) */}
          <nav className="hidden md:flex items-center justify-center gap-3">
            <NavLink to="/" end className={linkClass}>
              <svg
                className="size-4 text-slate-500 group-hover:text-slate-700"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
              <span>home</span>
            </NavLink>
            <NavLink to="/portfolio" className={linkClass}>
              <svg
                className="size-4 text-slate-500 group-hover:text-slate-700"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect x="2" y="7" width="20" height="14" rx="2" />
                <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
              </svg>
              <span>portfolio</span>
            </NavLink>
            <NavLink to="/about" className={linkClass}>
              <svg
                className="size-4 text-slate-500 group-hover:text-slate-700"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="9" />
                <path d="M12 16v-4" />
                <path d="M12 8h.01" />
              </svg>
              <span>about</span>
            </NavLink>
          </nav>

          {/* Right actions (contact on desktop, hamburger on mobile) */}
          <div className="justify-self-end flex items-center">
            <button
              type="button"
              className="hidden md:inline-flex py-1.5 px-3 items-center gap-x-2 text-sm font-medium text-nowrap rounded-xl border border-transparent bg-rose-500 text-white hover:bg-rose-600 focus:outline-hidden transition disabled:opacity-50 disabled:pointer-events-none"
            >
              contact
            </button>

            {/* Mobile toggle */}
            <button
              type="button"
              aria-expanded={open}
              aria-controls="site-mobile-nav"
              onClick={() => setOpen((v) => !v)}
              className="md:hidden inline-flex items-center justify-center rounded-xl border border-gray-200 p-2 text-black hover:bg-gray-100 focus:outline-hidden"
            >
              <span className="sr-only">Toggle navigation</span>
              <svg
                className={!open ? 'block h-5 w-5' : 'hidden h-5 w-5'}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
              <svg
                className={open ? 'block h-5 w-5' : 'hidden h-5 w-5'}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile nav */}
      <div
        id="site-mobile-nav"
        className={
          open
            ? 'md:hidden block border-t'
            : 'md:hidden hidden border-t'
        }
      >
        <div className="mx-auto max-w-7xl px-4 py-2 flex flex-col gap-1">
          <NavLink to="/" end className={linkClass}>
            Home
          </NavLink>
          <NavLink to="/portfolio" className={linkClass}>
            Portfolio
          </NavLink>
          <NavLink to="/about" className={linkClass}>
            About
          </NavLink>
        </div>
      </div>
    </header>
  )
}
