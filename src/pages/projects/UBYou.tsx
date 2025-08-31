import { Link } from 'react-router-dom'
import backgroundCross from '../../assets/projects/ubyou/background-cross.svg'
import backgroundHalfCircle from '../../assets/home-page/background-half-circle.svg'
import heroMobiles from '../../assets/projects/ubyou/ubyou-mobile.png'
import oldMobiles from '../../assets/projects/ubyou/uboyu-mobile-old.png'
import newMobiles from '../../assets/projects/ubyou/uboyu-mobile-new.png'
import competitorAnalysis from '../../assets/projects/ubyou/competitor-analysis.png'
import researchTable from '../../assets/projects/ubyou/research-table.png'
import siteMapOld from '../../assets/projects/ubyou/site-map-old.png'
import siteMapNew1 from '../../assets/projects/ubyou/site-map-new-1.png'
import siteMapNew2 from '../../assets/projects/ubyou/site-map-new-2.png'
import wireframe1 from '../../assets/projects/ubyou/wireframe-1.png'
import wireframe2 from '../../assets/projects/ubyou/wireframe-2.png'
import wireframe3 from '../../assets/projects/ubyou/wireframe-3.png'
import designColors from '../../assets/projects/ubyou/design-colors.png'
import designFont from '../../assets/projects/ubyou/design-font.png'
import designComponents from '../../assets/projects/ubyou/design-components.png'
import UBYouFinal from '../../assets/projects/ubyou/UBYou-final.png'

export default function UBYouProject() {
  return (
    <div className="flex flex-col min-h-[60vh]">
      {/* Hero with site gradient */}
      <section className="relative bg-blob-gradient overflow-hidden">
        {/* Decorative shapes */}
        <img
          src={backgroundHalfCircle}
          alt=""
          aria-hidden
          className="hidden md:block pointer-events-none select-none absolute left-[-28px] top-8 w-44 lg:w-64 opacity-90"
        />
        <img
          src={backgroundCross}
          alt=""
          aria-hidden
          className="hidden md:block pointer-events-none select-none absolute right-6 top-10 w-24 opacity-80"
        />
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-12 md:py-16">
          <div className="text-center mb-8 md:mb-10">
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900">
              UBYou:
              <br className="sm:hidden" />
              <span className="ml-2">Mental Wellness for College Students</span>
            </h1>
          </div>
          <div className="flex justify-center">
            <img src={heroMobiles} alt="UBYou redesigned mobile screens" className="w-full max-w-4xl h-auto" />
          </div>
        </div>
      </section>

      {/* Logistics */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-8 md:py-10">
          <p className="text-sm text-slate-500 mb-3">Logistics</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Timeline</h3>
              <ul className="list-disc list-inside text-slate-700">
                <li>January – February 2025</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Team</h3>
              <ul className="list-disc list-inside text-slate-700">
                <li>2 UX Design Leads</li>
                <li>3 UX Designers</li>
                <li>+ CEO</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">My Role</h3>
              <ul className="list-disc list-inside text-slate-700">
                <li>UI/UX Designer</li>
              </ul>
              <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-2">Project Type</h3>
              <ul className="list-disc list-inside text-slate-700">
                <li>Internship</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <hr className="border-slate-200" />

      {/* Background / Company Context */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-4 md:px-6 lg:px-8 py-8 md:py-10">
          <p className="text-sm text-slate-500 mb-3">Background/Company Context</p>
          <p className="text-slate-700 text-center">
            UBYou is a mental health and wellness app for college students, offering self-care techniques, meditations, affirmations, and
            daily wellness check-ins. UBYou connects students to campus resources and provides tools to support their well-being and academic
            success. The app integrates mental health support with academic services to enhance the overall student experience.
          </p>
        </div>
      </section>

      <hr className="border-slate-200" />



      {/* Problem */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8 py-8 md:py-12">
          <p className="text-sm text-slate-500 mb-2">Problem</p>
          <h2 className="text-center text-xl md:text-2xl font-semibold text-slate-900">
            The current home screen and Wellness Check‑In feature of the UBYou wellness application are based on outdated designs,
            which may hinder user engagement and limit the overall user experience.
          </h2>

          <div className="mt-3 flex justify-center">
            <img src={oldMobiles} alt="Old UBYou mobile designs" className="w-full max-w-3xl h-auto" />
          </div>
        </div>
      </section>
      <hr className="border-slate-200" />
      {/* Solution */}
      <section className="bg-white relative">
        

        <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8 py-8 md:py-12">
          <p className="text-sm text-slate-500 mb-2">Solution</p>
          <h2 className="text-center text-xl md:text-2xl font-semibold text-slate-900">
            Redesign the home screen and enhance the functionality of the Wellness Check‑In feature to create a more intuitive and engaging
            interface that encourages users to interact with the app more frequently.
          </h2>

          <div className="mt-3 flex justify-center">
            <img src={newMobiles} alt="New UBYou mobile designs" className="w-full max-w-3xl h-auto" />
          </div>
        </div>
      </section>

      <hr className="border-slate-200" />

      {/* Research and Discovery */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8 py-8 md:py-12 space-y-6">
          <p className="text-sm text-slate-500">Research and Discovery</p>
          <h2 className="text-center text-xl md:text-2xl font-semibold text-slate-900">
            Prior to redesigning the user interface, our team conducted competitor analysis and developed user stories to help guide our
            designs and identify pain points. Our group was also provided with previously conducted research to lay the foundation for our work.
          </h2>

          <div className="text-slate-700 space-y-3">
            <p className="text-center text-sm text-slate-500">Previous research provided from our client highlighted several important pain points of users:</p>
            <ul className="max-w-3xl mx-auto list-disc pl-5 space-y-2">
              <li>Some users stated in reviews that the application felt <span className="font-semibold">disorganized and overwhelming</span>.</li>
              <li>Other users stated that the application was <span className="font-semibold">not aesthetically pleasing</span>, and had <span className="font-semibold">outdated designs</span>.</li>
              <li>Lastly, another important review stated that the application felt <span className="font-semibold">endless</span>, and had <span className="font-semibold">too many options</span> during important flows.</li>
            </ul>
          </div>

          <div className="text-slate-700 space-y-3">
            <p className="text-center text-sm text-slate-500">Competitive analysis included applications such as Duolingo, Calm/Headspace, and You at College. Unique features we identified that could help us improve UBYou were:</p>
            <ul className="max-w-4xl mx-auto list-disc pl-5 space-y-2">
              <li><span className="font-semibold">Gamification</span>: features like streaks, personalized flows, and activity recommendations to increase engagement.</li>
              <li><span className="font-semibold">Personalization</span>: recommended activities tailored to the user, drawing inspiration from Calm and Headspace.</li>
              <li><span className="font-semibold">Simple flows</span>: some flows were overwhelming; we aimed for minimal, clear steps.</li>
            </ul>
          </div>

          {/* Competitor screenshots */}
          <div className="flex justify-center">
            <img src={competitorAnalysis} alt="Competitor analysis screenshots" className="w-full max-w-5xl h-auto rounded-xl shadow-sm" />
          </div>

          <p className="text-center text-sm text-slate-500">
            As a result of our research and feedback, we were able to develop several user stories to help shape the application.
          </p>

          {/* User stories table */}
          <div className="flex justify-center">
            <img src={researchTable} alt="User stories summary table" className="w-full max-w-5xl h-auto rounded-xl border border-slate-200" />
          </div>
        </div>
      </section>

      <hr className="border-slate-200" />

      {/* Define */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8 py-8 md:py-12 space-y-6">
          <p className="text-sm text-slate-500">Define</p>
          <h2 className="text-center text-xl md:text-2xl font-semibold text-slate-900">
            Based off of our research and client goals, we developed a site map and 2 important red routes to lay the foundation for an
            application design.
          </h2>

          <div className="flex justify-center">
            <img src={siteMapOld} alt="UBYou site map" className="w-full max-w-5xl h-auto rounded-xl shadow-sm ring-1 ring-slate-200/60" />
          </div>

          <div className="grid grid-cols-1 gap-8">
            <div className="flex justify-center">
              <img src={siteMapNew1} alt="Red route 1 user flow" className="w-full max-w-5xl h-auto rounded-xl shadow-sm ring-1 ring-slate-200/60" />
            </div>
            <div className="flex justify-center">
              <img src={siteMapNew2} alt="Red route 2 user flow" className="w-full max-w-5xl h-auto rounded-xl shadow-sm ring-1 ring-slate-200/60" />
            </div>
          </div>
        </div>
      </section>

      <hr className="border-slate-200" />

      {/* Design */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8 py-8 md:py-12">
          <p className="text-sm text-slate-500">Design</p>
          <h2 className="text-center text-xl md:text-2xl font-semibold text-slate-900 mb-6">
            Following solidifying the information architecture, we developed low‑fidelity wireframes to help further redesign the application.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex justify-center">
              <img src={wireframe1} alt="Wireframe 1" className="w-full max-w-md h-auto rounded-xl ring-1 ring-slate-200/60" />
            </div>
            <div className="flex justify-center">
              <img src={wireframe2} alt="Wireframe 2" className="w-full max-w-md h-auto rounded-xl ring-1 ring-slate-200/60" />
            </div>
            <div className="flex justify-center">
              <img src={wireframe3} alt="Wireframe 3" className="w-full max-w-md h-auto rounded-xl ring-1 ring-slate-200/60" />
            </div>
          </div>
        </div>
      </section>

      <hr className="border-slate-200" />

      {/* Design System */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8 py-8 md:py-12 space-y-6">
          <p className="text-sm text-slate-500">Design System</p>
          <h2 className="text-center text-xl md:text-2xl font-semibold text-slate-900">
            As a group, we collectively decided on a cohesive design system to implement on the wireframes in preparation for hi‑fidelity designs.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex justify-center">
              <img src={designColors} alt="Color palette and neutrals" className="w-full max-w-lg h-auto rounded-xl ring-1 ring-slate-200/60" />
            </div>
            <div className="flex justify-center">
              <img src={designFont} alt="Typography scale and notes" className="w-full max-w-lg h-auto rounded-xl ring-1 ring-slate-200/60" />
            </div>
          </div>

          <div className="flex justify-center">
            <img src={designComponents} alt="UI components and tokens" className="w-full max-w-5xl h-auto rounded-xl ring-1 ring-slate-200/60" />
          </div>
        </div>
      </section>

      <hr className="border-slate-200" />

      {/* Hi‑Fidelity Designs */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8 py-8 md:py-12">
          <p className="text-sm text-slate-500">Hi‑Fidelity Designs</p>
          <h2 className="text-center text-xl md:text-2xl font-semibold text-slate-900 mb-6">
            Following application of the design system, we iterated several versions of each page until the design was solidified.
          </h2>
          <div className="flex justify-center">
            <img src={UBYouFinal} alt="High‑fidelity UBYou screens" className="w-full max-w-5xl h-auto rounded-xl ring-1 ring-slate-200/60" />
          </div>
        </div>
      </section>

      <hr className="border-slate-200" />

      {/* Challenges and Lessons Learned */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8 py-8 md:py-12 space-y-4">
          <p className="text-sm text-slate-500">Challenges and Lessons Learned</p>
          <p className="text-slate-700">There were several challenges that we faced collectively as a group throughout this project.</p>
          <ul className="list-disc pl-5 space-y-2 text-slate-700">
            <li>Due to time constraints, we were not able to conduct formal user testing. Instead, we based our iterations and designs on the client’s feedback while adhering to best practices.</li>
            <li>We also attempted to take on a larger portion of the application but quickly realized that we would not be able to finish within the given timeframe. As a result, we had to cut out two other user flows that were quite complex.</li>
            <li>These were valuable lessons to learn in a real‑world project, given the nature of having deadlines to meet and delivering work that fits within specific project requirements.</li>
            <li>Going forward, I’ve learned that it’s extremely important to set realistic expectations for both the team and the client in order to produce quality work and fulfill project requirements.</li>
          </ul>
        </div>
      </section>

      <hr className="border-slate-200" />

      {/* Next Steps */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8 py-8 md:py-12 space-y-4">
          <p className="text-sm text-slate-500">Next Steps</p>
          <p className="text-slate-700">
            The next steps for UBYou include pushing these designs into production on the software side, and conducting formal user testing to iterate on our designs for further improvements. They will conduct A/B testing of our different versions to see which one yields improved user engagement before rolling out into final production.
          </p>
          <h3 className="text-center text-xl font-semibold text-slate-900">Thank you so much to UBYou for allowing us to help redesign your application.</h3>
        </div>
      </section>

      <hr className="border-slate-200" />

      {/* Spacer to footer */}
      <div className="bg-white h-6" />

      {/* Optional back link */}
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 pb-8">
        <Link to="/" className="text-blue-600 hover:underline">← Back to Home</Link>
      </div>

      {/* Back to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
        className="fixed bottom-6 right-6 z-40 inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-white shadow-md hover:bg-slate-800"
      >
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="m18 15-6-6-6 6" />
        </svg>
      </button>
    </div>
  )
}
