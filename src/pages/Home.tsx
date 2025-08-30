import portraitFallback from '../assets/clara-pencil-portrait.png'

export default function Home() {
  // Replace with: import portrait from '../assets/clara-pencil-portrait.png'
  const portrait = portraitFallback

  const timeline = [
    {
      date: 'May 2017',
      title: 'UNT Denton',
      subtitle: 'BA. Biology with Double Minor in Chemistry and Social Sciences',
    },
    {
      date: 'December 2021',
      title: 'UT Southwestern School of Health Professions',
      subtitle: 'Doctorate in Physical Therapy',
    },
    {
      date: 'January 2025 – April 2025',
      title: 'Applied Concepts',
      subtitle: 'UI/UX Design Intern',
    },
    {
      date: 'February 2025',
      title: 'Springboard',
      subtitle: 'UI/UX Design Career Track',
    },
    {
      date: 'April 2025 – present',
      title: 'Applied Concepts',
      subtitle: 'UI/UX Design Engineer',
    },
  ]

  return (
    <section className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-10 md:py-14">
      <div className="grid grid-cols-1 lg:grid-cols-[minmax(260px,420px)_1fr_minmax(260px,360px)] gap-8 lg:gap-12 items-start lg:min-h-[70vh]">
        {/* Portrait with selection-style frame */}
        <div className="relative">
          {/* Name label (top-left) */}
          <a href="#" className="absolute -top-5 left-0 text-sky-700 text-sm hover:underline">Clara Oliva</a>

          {/* Image */}
          <img
            src={portrait}
            alt="Pencil portrait"
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
            <svg className="size-3.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="10 13 7 12 10 11" />
              <polyline points="14 11 17 12 14 13" />
              <line x1="12" y1="15" x2="12" y2="9" />
            </svg>
          </span>
        </div>

        {/* Intro */}
        <div className="self-center flex flex-col items-start justify-center text-center lg:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900">
            hello, i’m clara.
          </h1>
          <p className="mt-4 text-slate-700 text-base md:text-lg max-w-prose mx-auto lg:mx-0">
            i’m a physical therapist turned product designer.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <ol className="space-y-6">
            {timeline.map((item, idx) => (
              <li key={idx} className="relative pl-6">
                {/* connector */}
                <span className="absolute left-0 top-2 bottom-0 w-px bg-slate-200" aria-hidden="true" />
                {/* dot */}
                <span className="absolute -left-[5px] top-2 inline-flex h-2.5 w-2.5 rounded-full bg-slate-300 ring-2 ring-white" aria-hidden="true" />
                <p className="text-xs text-slate-500 mb-1">{item.date}</p>
                <p className="font-medium text-slate-900">{item.title}</p>
                <p className="text-sm text-slate-600">{item.subtitle}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
