import portrait from '../assets/clara-portrait.png'

export default function About() {
  return (
    <section className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-12 md:py-16">
      <h1 className="text-center text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-10 md:mb-14">
        about me
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
        {/* Portrait PNG with transparent flower cutout + soft glow */}
        <div className="relative w-full max-w-lg mx-auto lg:mx-0">
          <div className="absolute -inset-6 rounded-[48px] bg-gradient-to-br from-fuchsia-300/40 via-sky-300/30 to-emerald-200/40 blur-2xl -z-10" />
          <img
            src={portrait}
            alt="Clara portrait"
            className="w-full h-auto object-cover select-none pointer-events-none drop-shadow-xl"
            draggable={false}
          />
        </div>

        {/* Copy */}
        <div className="max-w-2xl mx-auto lg:mx-0 text-center space-y-6 text-slate-700">
          <p>Hello, I’m Clara. Currently a UI/UX designer at Applied Concepts!</p>
          <p>
            My journey into UX was not conventional by any means, I originally
            studied and worked as an acute care physical therapist for roughly 2 years
            before I decided to make a career change. My love for physical therapy
            stemmed from enjoying meeting new people and helping others, but I quickly
            found out that healthcare was not the means that I wanted to accomplish
            that. I craved creativity; and decided to revisit graphic design and art in
            my downtime. It was then that I discovered UX and made an impulsive decision to sign up for a bootcamp,
            I haven’t looked back since :)
          </p>
          <p>
            In my current role, I help design software applications for traffic
            products and police radar/lidar units in conjunction with planning the UI
            interfaces. So I wear a few hats!
          </p>
          <p>
            In my free time I enjoy studying Japanese, running, and drawing anything
            that peaks my interest.
          </p>
          <p>I would love to connect and learn more about you!</p>

          <div className="pt-2 flex justify-center" aria-hidden="true">
            <svg
              className="size-6 text-emerald-600"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7 20s5-5 5-9a5 5 0 0 0-10 0c0 4 5 9 5 9Z" />
              <path d="M14 7s3 3 3 6a3 3 0 0 1-6 0c0-3 3-6 3-6Z" />
            </svg>
          </div>
        </div>
      </div>
    </section >
  )
}
