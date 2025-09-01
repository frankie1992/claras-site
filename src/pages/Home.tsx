import portraitFallback from '../assets/home-page/clara-pencil-portrait.png'
import Timeline from '../components/Timeline'
import { HOME_PORTRAIT_ALT, HOME_PAGE_TITLE, HOME_PAGE_SUBTITLE } from '../utils/Constants'
import PortfolioSection from '../components/Portfolio'

export default function Home() {
  const portrait = portraitFallback

  return (
    <>
      {/* Hero – mobile layout */}
      <section className="md:hidden lg:hidden mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-6 md:py-10">
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
          <div className="mt-4 flex justify-center">
            <Timeline />
          </div>
        </div>
      </section>

      {/* Hero – desktop layout */}
      <section className="sm:hidden md:block lg:block mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-10 md:py-14">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 lg:gap-8">
          {/* Portrait with selection-style frame */}
          <div className="md:col-span-1">
            {/* Image */}
            <img
              src={portrait}
              alt={HOME_PORTRAIT_ALT}
              className="w-full h-auto object-cover select-none"
              draggable={false}
            />

          </div>

          {/* Intro */}
          <div className="self-center flex flex-col justify-center text-center lg:text-left">
            <h1 className="text-6xl md:text-6xl font-semibold tracking-tight">
              {HOME_PAGE_TITLE}
            </h1>
            <p className="mt-4 text-slate-700 text-2xl md:text-2xl  mx-auto lg:mx-0">
              {HOME_PAGE_SUBTITLE}
            </p>
          </div>

          {/* Timeline */}
          <div className="lg:mt-8 lg:col-span-1 md:col-span-2 flex justify-center">
            <Timeline />
          </div>
        </div>
      </section>

      {/* Portfolio section */}
      <PortfolioSection />
    </>
  )
}
