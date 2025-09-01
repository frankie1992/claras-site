import washiSvg from '../assets/home-page/icon-washi.svg'
import ProjectSummary from './ProjectSummary'
import { PORTFOLIO_PROJECTS_LIST } from '../utils/Constants'
import backgroundFullCircle from '../assets/home-page/background-full-circle.png'
import backgroundPurpleDots from '../assets/home-page/background-purple-dots.svg'
import backgroundStars from '../assets/home-page/background-stars.svg'

export default function PortfolioSection() {
  const toTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <section id="portfolio" className="relative">
      {/* Full‑bleed white background + washi divider */}
      <div className="bg-white mx-[calc(50%-50vw)] w-screen">
        <div
          className="h-10 bg-repeat-x bg-center"
          style={{ backgroundImage: `url(${washiSvg})`, backgroundSize: 'auto 100%' }}
          aria-hidden
        />

        {/* Content container */}
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-10 md:py-16 relative">
          {/* Decorative backgrounds */}
          <img src={backgroundFullCircle} alt="" aria-hidden className="hidden md:block pointer-events-none select-none absolute right-[-32px] top-6 w-44 lg:w-64" />
          <img src={backgroundStars} alt="" aria-hidden className="hidden md:block pointer-events-none select-none absolute left-3 top-[400px] lg:top-[420px] md:top-[420px] w-16 lg:w-24 opacity-90" />
          <img src={backgroundPurpleDots} alt="" aria-hidden className="hidden md:block pointer-events-none select-none absolute right-[-24px] bottom-[0px] w-44 lg:w-64 opacity-90" />

          <h2 className="relative z-10 text-center text-2xl md:text-3xl font-semibold text-slate-900 mb-10">portfolio</h2>
          <div className="relative z-10 space-y-16 md:space-y-20">
            {PORTFOLIO_PROJECTS_LIST.map((p, idx) => (
              <ProjectSummary key={p.title} {...p} reverse={idx % 2 === 1} />
            ))}
          </div>
        </div>
      </div>

      {/* Back to top button */}
      <button
        onClick={toTop}
        aria-label="Back to top"
        className="fixed bottom-6 right-6 z-40 inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-white shadow-md hover:bg-slate-800"
      >
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="m18 15-6-6-6 6" />
        </svg>
      </button>
    </section>
  )
}
