import portraitFallback from '../assets/home-page/clara-pencil-portrait.png'
import Timeline from '../components/Timeline'
import { HOME_PORTRAIT_ALT, HOME_PAGE_TITLE, HOME_PAGE_SUBTITLE } from '../utils/Constants'
import PortfolioSection from '../components/Portfolio'

export default function Home() {
  const portrait = portraitFallback

  return (
    <>
      {/* Hero – mobile layout */}
      <section className="lg:hidden mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-6 md:py-10">
        <div className="rounded-2xl p-5 sm:p-8">
          {/* Intro */}
          <div className="text-center">
            <h1 className="text-3xl md:text-6xl font-extrabold tracking-tight text-slate-900">
              {HOME_PAGE_TITLE}
            </h1>
            <p className="mt-2 text-slate-700 text-base md:text-lg max-w-prose mx-auto">
              {HOME_PAGE_SUBTITLE}
            </p>
          </div>

          {/* Portrait with selection-style frame */}
          <div className="relative mt-6 mx-auto max-w-sm">

            {/* Image */}
            <img
              src={portrait}
              alt={HOME_PORTRAIT_ALT}
              className="w-full h-auto object-cover select-none"
              draggable={false}
            />
          </div>

          {/* Timeline */}
          <div className="mt-8">
            <Timeline />
          </div>
        </div>
      </section>

      {/* Hero – desktop layout (preserves original 3-column grid) */}
      <section className="hidden lg:block mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-10 md:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(260px,420px)_1fr_minmax(260px,360px)] gap-8 lg:gap-12 items-start lg:min-h-[70vh]">
          {/* Portrait with selection-style frame */}
          <div className="relative">
            {/* Image */}
            <img
              src={portrait}
              alt={HOME_PORTRAIT_ALT}
              className="w-full h-auto object-cover select-none"
              draggable={false}
            />

          </div>

          {/* Intro */}
          <div className="self-center flex flex-col items-start justify-center text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900">
              {HOME_PAGE_TITLE}
            </h1>
            <p className="mt-4 text-slate-700 text-base md:text-lg max-w-prose mx-auto lg:mx-0">
              {HOME_PAGE_SUBTITLE}
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            <Timeline />
          </div>
        </div>
      </section>

      {/* Portfolio section */}
      <PortfolioSection />
    </>
  )
}
