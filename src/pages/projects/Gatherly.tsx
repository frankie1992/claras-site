import { Link } from 'react-router-dom'
import backgroundCross from '../../assets/projects/ubyou/background-cross.svg'
import heroPreview from '../../assets/projects/gatherly/gatherly-mobile-preview.png'
import competitors from '../../assets/projects/gatherly/Competitors-1.png'
import swot from '../../assets/projects/gatherly/SWOT-Analysis.png'
import affinity from '../../assets/projects/gatherly/affinity-map.png'
import userFlow1 from '../../assets/projects/gatherly/user-flow-1.png'
import userFlow2 from '../../assets/projects/gatherly/user-flow-2.png'
import userFlow3 from '../../assets/projects/gatherly/user-flow-3.png'
import userFlow4 from '../../assets/projects/gatherly/user-flow-4.png'
import iterations1 from '../../assets/projects/gatherly/interations-1.png'
import iterations2 from '../../assets/projects/gatherly/iterations-2.png'
import iterations3 from '../../assets/projects/gatherly/iterations-3.png'
import styleGuide from '../../assets/projects/gatherly/Style-Guide-1.png'
import finalScreens from '../../assets/projects/gatherly/Final-Screen-1.png'

export default function GatherlyProject() {
  return (
    <div className="flex flex-col min-h-[60vh]">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <img src={backgroundCross} alt="" aria-hidden className="hidden md:block absolute right-6 top-10 w-24 pointer-events-none select-none opacity-80" />
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-12 md:py-16">
          <div className="text-center mb-8 md:mb-10">
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900">Gatherly: <span className="font-semibold">An Event Application</span></h1>
          </div>
          <div className="flex justify-center">
            <img src={heroPreview} alt="Gatherly hero preview" className="w-full max-w-4xl h-auto" />
          </div>
        </div>
      </section>

      {/* Logistics */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-8 md:py-10">
          <p className="text-sm text-slate-500 mb-3">Logistics</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center md:auto-rows-auto">
            {/* Row 1 */}
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Timeline</h3>
              <ul className="list-disc list-inside inline-block text-left text-slate-700">
                <li>October - November 2024</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">My Role</h3>
              <ul className="list-disc list-inside inline-block text-left text-slate-700">
                <li>UI/UX Designer</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <hr className="border-slate-200" />
      {/* Background/Company Context */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-4 md:px-6 lg:px-8 py-8 md:py-10">
          <p className="text-sm text-slate-500 mb-3">Background/Company Context</p>
          <p className="text-slate-700 text-center">A startup company has launched an event application that helps people meet new friends. The goal of the product is to create a social user experience that will help users get out and do activities in-person.Friends keep us company through the difficulties of our lives and help us grow, but when people move to a new city or town, fear and social anxiety can keep them from making new friends. How can we help people who have social anxiety step out and make new friends?</p>
        </div>
      </section>

      <hr className="border-slate-200" />
      {/* Background/Company Context */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-4 md:px-6 lg:px-8 py-8 md:py-10">
          <p className="text-sm text-slate-500 mb-3">
            Problem
          </p>
          <p className="text-slate-700 text-center">
            The business team has identified a problem in that the number of people who say they are going to an event is significantly higher than the actual number of people who attend.           </p>
        </div>
      </section>

      <hr className="border-slate-200" />

      {/* Secondary Research */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8 py-8 md:py-12 space-y-6">
          <p className="text-sm text-slate-500">Secondary Research</p>
          <div className="flex justify-center"><img src={swot} alt="SWOT analysis" className="w-full max-w-5xl rounded-xl ring-1 ring-slate-200/60" /></div>
        </div>
      </section>

      <hr className="border-slate-200" />

      {/* Research Synthesis */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8 py-8 md:py-12 space-y-6">
          <p className="text-sm text-slate-500">Research Synthesis</p>
          <div className="flex justify-center"><img src={affinity} alt="Affinity mapping" className="w-full max-w-5xl rounded-xl ring-1 ring-slate-200/60" /></div>
        </div>
      </section>

      <hr className="border-slate-200" />

      {/* Competitive Analysis + The Gap */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8 py-8 md:py-12 space-y-4">
          <p className="text-sm text-slate-500">Competitive Analysis + The Gap</p>
          <div className="flex justify-center"><img src={competitors} alt="Competitor apps" className="w-full max-w-5xl rounded-xl ring-1 ring-slate-200/60" /></div>
        </div>
      </section>

      <hr className="border-slate-200" />

      {/* How Might We’s */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8 py-8 md:py-12 space-y-4">
          <p className="text-sm text-slate-500">How Might We’s</p>
          <ul className="list-disc pl-5 space-y-2 text-slate-700">
            <li>How might we make event discovery feel tailored and motivating?</li>
            <li>How might we streamline creating and managing events?</li>
            <li>How might we increase engagement with lightweight gamification?</li>
          </ul>
        </div>
      </section>

      <hr className="border-slate-200" />

      {/* Ideation */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8 py-8 md:py-12 space-y-6">
          <p className="text-sm text-slate-500">User Flows</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex justify-center"><img src={userFlow1} alt="User flow 1" className="w-full max-w-md rounded-xl ring-1 ring-slate-200/60" /></div>
            <div className="flex justify-center"><img src={userFlow2} alt="User flow 2" className="w-full max-w-md rounded-xl ring-1 ring-slate-200/60" /></div>
            <div className="flex justify-center"><img src={userFlow3} alt="User flow 3" className="w-full max-w-md rounded-xl ring-1 ring-slate-200/60" /></div>
            <div className="flex justify-center"><img src={userFlow4} alt="User flow 4" className="w-full max-w-md rounded-xl ring-1 ring-slate-200/60" /></div>
          </div>
        </div>
      </section>

      <hr className="border-slate-200" />

      {/* Iterations */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8 py-8 md:py-12 space-y-6">
          <p className="text-sm text-slate-500">Iterations</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex justify-center"><img src={iterations1} alt="Iterations 1" className="w-full max-w-sm rounded-xl ring-1 ring-slate-200/60" /></div>
            <div className="flex justify-center"><img src={iterations2} alt="Iterations 2" className="w-full max-w-sm rounded-xl ring-1 ring-slate-200/60" /></div>
            <div className="flex justify-center"><img src={iterations3} alt="Iterations 3" className="w-full max-w-sm rounded-xl ring-1 ring-slate-200/60" /></div>
          </div>
        </div>
      </section>

      <hr className="border-slate-200" />

      {/* Style Guide */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8 py-8 md:py-12">
          <p className="text-sm text-slate-500">Style Guide</p>
          <div className="flex justify-center">
            <img src={styleGuide} alt="Style guide" className="w-full max-w-5xl h-auto rounded-xl ring-1 ring-slate-200/60" />
          </div>
        </div>
      </section>

      <hr className="border-slate-200" />

      {/* Final Screens */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8 py-8 md:py-12">
          <p className="text-sm text-slate-500">The Final Screens</p>
          <div className="flex justify-center">
            <img src={finalScreens} alt="Gatherly final screens" className="w-full max-w-5xl h-auto rounded-xl ring-1 ring-slate-200/60" />
          </div>
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
