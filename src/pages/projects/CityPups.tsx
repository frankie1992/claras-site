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
import ProjectHero from '../../components/ProjectHero';
import ProjectItem from '../../components/ProjectItem';

export default function CityPupsProject() {
  return (
    <div className="flex flex-col min-h-[60vh]">
      <ProjectHero
        title="CityPups:"
        subtitle="Design Sprint"
        image={heroPreview}
        imageAlt="CityPups hero image"
        background1={backgroundHalfCircle}
        background2={backgroundDots}
      />

      {/* Logistics */}
      <ProjectItem title="Logistics">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center md:auto-rows-auto">
          {/* Row 1 */}
          <div>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">
              Timeline
            </h3>
            <ul className="list-disc list-inside inline-block text-left text-slate-700">
              <li>
                October 17 - October 21 (5 day design sprint)
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">My Role</h3>
            <ul className="list-disc list-inside inline-block text-left text-slate-700">
              <li>UI/UX Designer</li>
            </ul>
          </div>
        </div>
      </ProjectItem>

      <hr className="border-slate-400" />
      {/* Problem */}
      <ProjectItem title="Problem">
        <p className="font-bold text-center">
          CityPups is a new startup that want to help people living in cities find the perfect dog to adopt. Their research shows that people living in cities struggle to find the right dog to adopt due to their unique needs such as living spaces, etc.
        </p>
      </ProjectItem>

      <hr className="border-slate-400" />
      {/* Constraints */}
      <ProjectItem title="Constraints">
        <ul className="list-disc list-inside inline-block text-left">
          <li>The solution should be designed as a website/designed for those with larger screens (desktop & laptop).</li>
          <li>CityPups aggregates adoption dogs from local organizations and shelters. Once a user decides to adopt, they get sent to a third-party contact to start the process. </li>
          <li>Focus on finding users the right dog to adopt. </li>
        </ul>
      </ProjectItem>

      <hr className="border-slate-400" />
      {/* Solution */}
      <ProjectItem title="Solution">
        <p className="font-bold text-center">
          A dynamic website that tailors dog recommendations based off of user feedback is key.
        </p>
      </ProjectItem>

      <hr className="border-slate-400" />
      {/* Day 1: Understand / Map */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8 py-8 md:py-12 space-y-6">
          <h2 className="text-center text-xl md:text-2xl font-semibold text-slate-900">Day 1: Understand / Map</h2>
          <p className="text-center">
            On day 1 of this design sprint, we were first given several user interviews regarding their pain points and desires for a solution to help them find the right dog. While not required for the design sprint- I took the initiative to make an affinity map summarizing the themes I took away from the user interviews and usability test to help me better understand the target audience.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-6">

            <div className="flex justify-center"><img src={stickies} alt="Notes & stickies" className="w-full max-w-4xl rounded-xl ring-1 ring-slate-200/60" /></div>
            <p className="text-center">
              We were then give a persona for the project that summarizes all of the users pain points and goals.
            </p>
            <div className="flex justify-center"><img src={persona} alt="Persona" className="w-full max-w-4xl rounded-xl ring-1 ring-slate-200/60" /></div>
            <p className="text-center">
              From there, I made an end-to-end map of a possible solution to this problem
            </p>
            <div className="flex justify-center"><img src={endToEndMap} alt="End‑to‑end map" className="w-full max-w-4xl rounded-xl ring-1 ring-slate-200/60" /></div>
          </div>
        </div>
      </section>

      <hr className="border-slate-400" />

      {/* Day 2: Sketch */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8 py-8 md:py-12 space-y-6">
          <h2 className="text-center text-xl md:text-2xl font-semibold text-slate-900">Day 2: Sketch</h2>
          <p className="text-center">
            On day 2 of the design sprint, I started off conducting a lightning demo on existing websites in order to get ideas and inspiration. The 3 websites I chose were "Adopt a Pet", "PetFinder", and "BeDallas90".           </p>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
            <div className="flex justify-center"><img src={comp} alt="Competitor inspiration" className="w-full max-w-4xl rounded-xl ring-1 ring-slate-200/60" /></div>
            <div className="flex justify-center"><img src={sketch} alt="Concept sketches" className="w-full max-w-4xl rounded-xl ring-1 ring-slate-200/60" /></div>
            <div className="flex justify-center"><img src={solutionSketch} alt="Solution sketch" className="w-full max-w-4xl rounded-xl ring-1 ring-slate-200/60" /></div>
          </div>
        </div>
      </section>

      <hr className="border-slate-400" />

      {/* Day 3: Storyboarding */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8 py-8 md:py-12">
          <h2 className="text-center text-xl md:text-2xl font-semibold text-slate-900">Day 3: Storyboarding</h2>
          <div className="flex justify-center"><img src={storyboard} alt="Storyboard" className="w-full max-w-4xl rounded-xl ring-1 ring-slate-200/60" /></div>
        </div>
      </section>

      <hr className="border-slate-400" />

      {/* Day 4: Prototyping */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8 py-8 md:py-12 space-y-4">
          <h2 className="text-center text-xl md:text-2xl font-semibold text-slate-900">Day 4: Prototyping</h2>
          <div className="mx-auto h-64 w-full max-w-3xl rounded-xl bg-slate-200" aria-label="Prototype placeholder" />
          <p className="text-slate-700 text-center">Built an interactive prototype focusing on the end‑to‑end dog discovery and adoption flow.</p>
        </div>
      </section>

      <hr className="border-slate-400" />

      {/* Day 5: Validate */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8 py-8 md:py-12 space-y-4">
          <h2 className="text-center text-xl md:text-2xl font-semibold text-slate-900">Day 5: Validate</h2>
          <div className="mx-auto h-64 w-full max-w-3xl rounded-xl bg-slate-200" aria-label="Validation placeholder" />
          <p className="text-slate-700 text-center">Conducted rapid usability checks and captured feedback to prioritize final adjustments.</p>
        </div>
      </section>

      <hr className="border-slate-400" />

      {/* Final Screens */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8 py-8 md:py-12">
          <h2 className="text-center text-xl md:text-2xl font-semibold text-slate-900 mb-6">Final Screen</h2>
          <div className="flex justify-center"><img src={finalScreen} alt="Final CityPups screen" className="w-full max-w-4xl rounded-xl ring-1 ring-slate-200/60" /></div>
        </div>
      </section>

      <hr className="border-slate-400" />

      {/* Conclusion */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8 py-8 md:py-12 space-y-4">
          <h2 className="text-center text-xl md:text-2xl font-semibold text-slate-900">Conclusion</h2>
          <p className="text-slate-700 text-center">This sprint clarified the core value for CityPups and established a practical, testable flow for discovery and adoption. Next steps include building the production prototype and validating with a broader participant set.</p>
        </div>
      </section>

      <hr className="border-slate-400" />

      {/* Footer spacer + back */}
      <div className="bg-white h-6" />
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 pb-8">
        <Link to="/" className="text-blue-600 hover:underline">← Back to Home</Link>
      </div>
    </div>
  )
}
