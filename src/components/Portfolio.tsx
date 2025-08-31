import washiSvg from '../assets/home-page/icon-washi.svg'
import ProjectSummary from './ProjectSummary'
import { PORTFOLIO_PROJECTS_LIST } from '../utils/Constants'

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
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-10 md:py-16">
          <h2 className="text-center text-2xl md:text-3xl font-semibold text-slate-900 mb-10">portfolio</h2>
          <div className="space-y-16 md:space-y-20">
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
