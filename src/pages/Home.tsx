import portraitFallback from '../assets/clara-pencil-portrait.png'
import Timeline from '../components/Timeline'
import { CodeIcon } from '../utils/icons'
import { HOME_NAME_LABEL, HOME_PORTRAIT_ALT, HOME_PAGE_TITLE, HOME_PAGE_SUBTITLE } from '../utils/Constants'

export default function Home() {
  // Replace with: import portrait from '../assets/clara-pencil-portrait.png'
  const portrait = portraitFallback

  return (
    <section className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-10 md:py-14">
      <div className="grid grid-cols-1 lg:grid-cols-[minmax(260px,420px)_1fr_minmax(260px,360px)] gap-8 lg:gap-12 items-start lg:min-h-[70vh]">
        {/* Portrait with selection-style frame */}
        <div className="relative">
          {/* Name label (top-left) */}
          <a href="#" className="absolute -top-5 left-0 text-sky-700 text-sm hover:underline">{HOME_NAME_LABEL}</a>

          {/* Image */}
          <img
            src={portrait}
            alt={HOME_PORTRAIT_ALT}
            className="w-full h-auto object-cover select-none"
            draggable={false}
          />

          {/* Blue outline box */}
          <div className="pointer-events-none absolute inset-0 border border-sky-400" aria-hidden="true" />

          {/* Corner squares */}
          <span className="pointer-events-none absolute -top-1.5 -left-1.5 w-3 h-3 bg-sky-300 rounded-sm border border-white" aria-hidden="true" />
          <span className="pointer-events-none absolute -top-1.5 -right-1.5 w-3 h-3 bg-sky-300 rounded-sm border border-white" aria-hidden="true" />
          <span className="pointer-events-none absolute -bottom-1.5 -left-1.5 w-3 h-3 bg-sky-300 rounded-sm border border-white" aria-hidden="true" />
          <span className="pointer-events-none absolute -bottom-1.5 -right-1.5 w-3 h-3 bg-sky-300 rounded-sm border border-white" aria-hidden="true" />

          {/* Green closing tag (top-right) */}
          <span className="pointer-events-none absolute -top-3 -right-3 inline-flex items-center justify-center rounded-md bg-emerald-500 text-white p-1 shadow" aria-hidden="true">
            <CodeIcon />
          </span>
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
        
        <Timeline />
      </div>
    </section>
  )
}
