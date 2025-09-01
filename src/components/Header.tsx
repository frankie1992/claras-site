import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import ContactButton from './ContactButton'
import { HeartIcon, BriefcaseIcon, InfoIcon, MenuIcon, XIcon } from '../utils/icons'
import {
  SITE_BRAND_NAME,
  NAV_HOME_LABEL,
  NAV_PORTFOLIO_LABEL,
  NAV_ABOUT_LABEL,
  NAV_MOBILE_HOME_LABEL,
  NAV_MOBILE_PORTFOLIO_LABEL,
  NAV_MOBILE_ABOUT_LABEL,
  NAV_TOGGLE_SR_LABEL,
} from '../utils/Constants'

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
    <header className="w-full border-b bg-white border-slate-300">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="h-16 grid grid-cols-[auto_1fr_auto] items-center">
          <NavLink to="/" className="text-xl font-semibold text-slate-900">
            {SITE_BRAND_NAME}
          </NavLink>

          {/* Desktop nav (center column) */}
          <nav className="hidden md:flex items-center justify-center gap-3">
            <NavLink to="/" end className={linkClass}>
              <HeartIcon className="size-4 text-slate-500 group-hover:text-slate-700" />
              <span>{NAV_HOME_LABEL}</span>
            </NavLink>
            <NavLink to="/#portfolio" className={linkClass}>
              <BriefcaseIcon className="size-4 text-slate-500 group-hover:text-slate-700" />
              <span>{NAV_PORTFOLIO_LABEL}</span>
            </NavLink>
            <NavLink to="/about" className={linkClass}>
              <InfoIcon className="size-4 text-slate-500 group-hover:text-slate-700" />
              <span>{NAV_ABOUT_LABEL}</span>
            </NavLink>
          </nav>

          {/* Right actions (contact on desktop, hamburger on mobile) */}
          <div className="justify-self-end flex items-center">
            <ContactButton/>

            {/* Mobile toggle */}
            <button
              type="button"
              aria-expanded={open}
              aria-controls="site-mobile-nav"
              onClick={() => setOpen((v) => !v)}
              className="md:hidden inline-flex items-center justify-center rounded-xl border border-gray-200 p-2 text-black hover:bg-gray-100 focus:outline-hidden"
            >
              <span className="sr-only">{NAV_TOGGLE_SR_LABEL}</span>
              <span className={!open ? 'block' : 'hidden'}>
                <MenuIcon />
              </span>
              <span className={open ? 'block' : 'hidden'}>
                <XIcon />
              </span>
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
            {NAV_MOBILE_HOME_LABEL}
          </NavLink>
          <NavLink to="/#portfolio" className={linkClass}>
            {NAV_MOBILE_PORTFOLIO_LABEL}
          </NavLink>
          <NavLink to="/about" className={linkClass}>
            {NAV_MOBILE_ABOUT_LABEL}
          </NavLink>
        </div>
      </div>
    </header>
  )
}
