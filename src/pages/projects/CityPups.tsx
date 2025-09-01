import { Link } from 'react-router-dom'
import backgroundHalfCircle from '../../assets/home-page/background-half-circle.svg'
import backgroundDots from '../../assets/home-page/background-purple-dots.svg'
import heroPreview from '../../assets/projects/cityPups/citypups-preview.png'
import comp from '../../assets/projects/cityPups/competitors.png'
import endToEndMap from '../../assets/projects/cityPups/end-to-end-map.png'
import persona from '../../assets/projects/cityPups/Persona-1.png'
import stickies from '../../assets/projects/cityPups/Stickies.png'
import sketch from '../../assets/projects/cityPups/sketch.png'
import solutionSketch from '../../assets/projects/cityPups/Solution-Sketch.png'
import storyboard from '../../assets/projects/cityPups/StoryBoarding.png'
import finalScreen from '../../assets/projects/cityPups/final-screen.png'

export default function CityPupsProject() {
  return (
    <div className="flex flex-col min-h-[60vh]">
      {/* Hero */}
      <section className="relative bg-blob-gradient overflow-hidden">
        <img src={backgroundHalfCircle} alt="" aria-hidden className="hidden md:block absolute left-[-28px] top-8 w-44 lg:w-64 pointer-events-none select-none opacity-90" />
        <img src={backgroundDots} alt="" aria-hidden className="hidden md:block absolute right-6 top-10 w-40 pointer-events-none select-none opacity-90" />
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-12 md:py-16">
          <div className="text-center mb-8 md:mb-10">
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900">CityPups: Design Sprint</h1>
          </div>
          <div className="flex justify-center">
            <img src={heroPreview} alt="CityPups preview" className="w-full max-w-3xl h-auto" />
          </div>
        </div>
      </section>

      {/* Logistics */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-8 md:py-10">
          <p className="text-sm text-slate-500 mb-3">Logistics</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2 text-center md:text-left">Sprint</h3>
              <ul className="list-disc list-inside text-slate-700 text-center md:text-left">
                <li>5‑day Google Ventures design sprint</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2 text-center md:text-left">My Role</h3>
              <ul className="list-disc list-inside text-slate-700 text-center md:text-left">
                <li>UI/UX Designer</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <hr className="border-slate-200" />

      {/* Background / Goal */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8 py-8 md:py-12 space-y-4">
          <p className="text-sm text-slate-500">Background</p>
          <p className="text-slate-700">
            CityPups is a design sprint focused on helping busy city residents find, learn about, and adopt dogs efficiently. We aimed to
            quickly define the experience, learn from competitive patterns, and validate a prototype with users at the end of the week.
          </p>
        </div>
      </section>

      <hr className="border-slate-200" />

      {/* Day 1: Understand / Map */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8 py-8 md:py-12 space-y-6">
          <h2 className="text-center text-xl md:text-2xl font-semibold text-slate-900">Day 1: Understand / Map</h2>
          <div className="flex justify-center"><img src={endToEndMap} alt="End‑to‑end map" className="w-full max-w-4xl rounded-xl ring-1 ring-slate-200/60" /></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex justify-center"><img src={persona} alt="Persona" className="w-full max-w-md rounded-xl ring-1 ring-slate-200/60" /></div>
            <div className="flex justify-center"><img src={stickies} alt="Notes & stickies" className="w-full max-w-md rounded-xl ring-1 ring-slate-200/60" /></div>
          </div>
        </div>
      </section>

      <hr className="border-slate-200" />

      {/* Day 2: Sketch */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8 py-8 md:py-12 space-y-6">
          <h2 className="text-center text-xl md:text-2xl font-semibold text-slate-900">Day 2: Sketch</h2>
          <div className="flex justify-center"><img src={comp} alt="Competitor inspiration" className="w-full max-w-4xl rounded-xl ring-1 ring-slate-200/60" /></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex justify-center"><img src={sketch} alt="Concept sketches" className="w-full max-w-md rounded-xl ring-1 ring-slate-200/60" /></div>
            <div className="flex justify-center"><img src={solutionSketch} alt="Solution sketch" className="w-full max-w-md rounded-xl ring-1 ring-slate-200/60" /></div>
          </div>
        </div>
      </section>

      <hr className="border-slate-200" />

      {/* Day 3: Storyboarding */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8 py-8 md:py-12">
          <h2 className="text-center text-xl md:text-2xl font-semibold text-slate-900">Day 3: Storyboarding</h2>
          <div className="flex justify-center"><img src={storyboard} alt="Storyboard" className="w-full max-w-4xl rounded-xl ring-1 ring-slate-200/60" /></div>
        </div>
      </section>

      <hr className="border-slate-200" />

      {/* Day 4: Prototyping */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8 py-8 md:py-12 space-y-4">
          <h2 className="text-center text-xl md:text-2xl font-semibold text-slate-900">Day 4: Prototyping</h2>
          <div className="mx-auto h-64 w-full max-w-3xl rounded-xl bg-slate-200" aria-label="Prototype placeholder" />
          <p className="text-slate-700 text-center">Built an interactive prototype focusing on the end‑to‑end dog discovery and adoption flow.</p>
        </div>
      </section>

      <hr className="border-slate-200" />

      {/* Day 5: Validate */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8 py-8 md:py-12 space-y-4">
          <h2 className="text-center text-xl md:text-2xl font-semibold text-slate-900">Day 5: Validate</h2>
          <div className="mx-auto h-64 w-full max-w-3xl rounded-xl bg-slate-200" aria-label="Validation placeholder" />
          <p className="text-slate-700 text-center">Conducted rapid usability checks and captured feedback to prioritize final adjustments.</p>
        </div>
      </section>

      <hr className="border-slate-200" />

      {/* Final Screens */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8 py-8 md:py-12">
          <h2 className="text-center text-xl md:text-2xl font-semibold text-slate-900 mb-6">Final Screen</h2>
          <div className="flex justify-center"><img src={finalScreen} alt="Final CityPups screen" className="w-full max-w-4xl rounded-xl ring-1 ring-slate-200/60" /></div>
        </div>
      </section>

      <hr className="border-slate-200" />

      {/* Conclusion */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8 py-8 md:py-12 space-y-4">
          <h2 className="text-center text-xl md:text-2xl font-semibold text-slate-900">Conclusion</h2>
          <p className="text-slate-700 text-center">This sprint clarified the core value for CityPups and established a practical, testable flow for discovery and adoption. Next steps include building the production prototype and validating with a broader participant set.</p>
        </div>
      </section>

      <hr className="border-slate-200" />

      {/* Footer spacer + back */}
      <div className="bg-white h-6" />
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 pb-8">
        <Link to="/" className="text-blue-600 hover:underline">← Back to Home</Link>
      </div>
    </div>
  )
}
