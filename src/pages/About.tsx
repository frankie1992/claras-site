import portrait from '../assets/home-page/clara-pencil-portrait.png'
import {
  ABOUT_PAGE_TITLE,
  ABOUT_INTRO_LINE,
  ABOUT_BIO_PARAGRAPH,
  ABOUT_ROLE_PARAGRAPH,
  ABOUT_HOBBIES_PARAGRAPH,
  ABOUT_INVITE_PARAGRAPH,
} from '../utils/Constants'
import { LeafIcon } from '../utils/icons'

export default function About() {
  return (
    <section className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-12 md:py-16">
      <h1 className="text-center text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-10 md:mb-14">
        {ABOUT_PAGE_TITLE}
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
        <div className="relative w-full max-w-lg mx-auto lg:mx-0">
          <div className="absolute -inset-6 rounded-[48px] bg-gradient-to-br from-fuchsia-300/40 via-sky-300/30 to-emerald-200/40 blur-2xl -z-10" />
          <img
            src={portrait}
            alt="Clara portrait"
            className="w-full h-auto object-cover select-none pointer-events-none drop-shadow-xl"
            draggable={false}
          />
        </div>

        <div className="max-w-2xl mx-auto lg:mx-0 text-center space-y-6 text-slate-700">
          <p>{ABOUT_INTRO_LINE}</p>
          <p>
            {ABOUT_BIO_PARAGRAPH}
          </p>
          <p>
            {ABOUT_ROLE_PARAGRAPH}
          </p>
          <p>
            {ABOUT_HOBBIES_PARAGRAPH}
          </p>
          <p>{ABOUT_INVITE_PARAGRAPH}</p>

          <div className="pt-2 flex justify-center" aria-hidden="true">
            <LeafIcon className="size-6 text-emerald-600" />
          </div>
        </div>
      </div>
    </section >
  )
}
