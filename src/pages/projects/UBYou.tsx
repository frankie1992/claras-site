import { Link } from 'react-router-dom';
import backgroundCross from '../../assets/projects/ubyou/background-cross.svg';
import heroMobiles from '../../assets/projects/ubyou/ubyou-mobile.png';
import oldMobiles from '../../assets/projects/ubyou/uboyu-mobile-old.png';
import newMobiles from '../../assets/projects/ubyou/uboyu-mobile-new.png';
import competitorAnalysis from '../../assets/projects/ubyou/competitor-analysis.png';
import researchTable from '../../assets/projects/ubyou/research-table.png';
import siteMapOld from '../../assets/projects/ubyou/site-map-old.png';
import siteMapNew1 from '../../assets/projects/ubyou/site-map-new-1.png';
import siteMapNew2 from '../../assets/projects/ubyou/site-map-new-2.png';
import wireframe1 from '../../assets/projects/ubyou/wireframe-1.png';
import wireframe2 from '../../assets/projects/ubyou/wireframe-2.png';
import wireframe3 from '../../assets/projects/ubyou/wireframe-3.png';
import designColors from '../../assets/projects/ubyou/design-colors.png';
import designFont from '../../assets/projects/ubyou/design-font.png';
import designComponents from '../../assets/projects/ubyou/design-components.png';
import UBYouFinal from '../../assets/projects/ubyou/UBYou-final.png';
import ProjectHero from '../../components/ProjectHero';
import ProjectItem from '../../components/ProjectItem';
import backgroundTriangle from '../../assets/projects/ubyou/background-triangle.png';
export default function UBYouProject() {
  return (
    <div className="flex flex-col min-h-[60vh]">
      <ProjectHero
        title="UBYou:"
        subtitle="Mental Wellness for College Students"
        image={heroMobiles}
        imageAlt="UBYou redesigned mobile screens"
        background1={backgroundCross}
        background2={backgroundTriangle}
      />

      <ProjectItem title="Logistics">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center md:auto-rows-auto">
          <div>
            <h2 className="text-3xl">
              Timeline
            </h2>
            <ul className="list-disc list-inside inline-block text-left">
              <li>
                January - February 2025
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-3xl">
              Team
            </h2>
            <ul className="list-disc list-inside inline-block text-left">
              <li>2 UX Design Leads</li>
              <li>3 UX Designers</li>
              <li>CEO</li>
            </ul>
          </div>
          <div>
            <h2 className="text-3xl">Project Type</h2>
            <ul className="list-disc list-inside inline-block text-left">
              <li>Internship</li>
            </ul>
          </div>
          <div>
            <h2 className="text-3xl">My Role</h2>
            <ul className="list-disc list-inside inline-block text-left ">
              <li>UI/UX Designer</li>
            </ul>
          </div>
        </div>
      </ProjectItem>

      <hr className="border-slate-400" />

      <ProjectItem title="Background / Company Context">
        <p className="text-center">
          UBYou is a mental health and wellness app for college students, offering self-care techniques, meditations, affirmations, and
          daily wellness check-ins. UBYou connects students to campus resources and provides tools to support their well-being and academic
          success. The app integrates mental health support with academic services to enhance the overall student experience.
        </p>
      </ProjectItem>

      <hr className="border-slate-400" />


      <ProjectItem title="Problem">
        <h2 className="text-center font-bold">
          The current home screen and Wellness Check-In feature of the UBYou wellness application are based on outdated designs,
          which may hinder user engagement and limit the overall user experience.
        </h2>
        <div className="mt-3 flex justify-center">
          <img src={oldMobiles} alt="Old UBYou mobile designs" className="w-full max-w-3xl h-auto" />
        </div>
      </ProjectItem>

      <hr className="border-slate-400" />

      <ProjectItem title="Solution">
        <h2 className="text-center font-bold">
          Redesign the home screen and enhance the functionality of the Wellness Check-In feature to create a more intuitive and engaging
          interface that encourages users to interact with the app more frequently.
        </h2>
        <div className="mt-3 flex justify-center">
          <img src={newMobiles} alt="New UBYou mobile designs" className="w-full max-w-3xl h-auto" />
        </div>
      </ProjectItem>

      <hr className="border-slate-400" />

      <ProjectItem title="Research and Discovery">
        <h2 className="text-center font-bold">
          Prior to redesigning the user interface, our team conducted competitor analysis and developed user stories to help guide our designs and identify pain points. Our group was also provided with previously conducted research to lay the foundation for our work.
        </h2>
        <span>
          Previous research provided from our client highlighted several important pain points of users:
          <ul className="list-disc pl-5 space-y-2 ">
            <li>
              Some users stated in reviews that the application felt disorganized and overwhelming
            </li>
            <li>
              Other users stated that the application was not aesthetically pleasing, and had outdated designs.
            </li>
            <li>
              Lastly, another important review stated that the application felt endless, and had too many options during important flows of the application.
            </li>
          </ul>
        </span>
        <span>
          Competitive analysis included applications such as Duolingo, Calm/Headspace, and You at College. Unique features we identified that could help us improve UBYou were:
          <ul className="list-disc pl-5 space-y-2 ">
            <li>
              Gamification: Features that help improve engagement from users such as streaks, personalized flows, and activity recommendations were elements that we wanted to bring in to our re-design.
            </li>
            <li>
              Personalization: Taking inspiration from Calm and Headspace, we wanted to provide recommended activities for the user to complete and feel that the application is unique to them.
            </li>
            <li>
              Simple flows: Important feedback from previous users were that some user flows were overwhelming. We wanted to take a minimalistic approach as a result of this drawing inspiration from Calm and Headspace.
            </li>
          </ul>
        </span>
        <div className="flex justify-center">
          <img src={competitorAnalysis} alt="Competitor analysis screenshots" className="w-full max-w-5xl h-auto rounded-xl shadow-sm" />
        </div>
        <span>
          As a result of our research and feedback, we were able to develop several user stories to help shape the application.
        </span>
        <div className="flex justify-center mt-4">
          <img src={researchTable} alt="User stories summary table" className="w-full max-w-5xl h-auto rounded-xl border border-slate-400" />
        </div>
      </ProjectItem>

      <hr className="border-slate-400" />


      <ProjectItem title="Define">
        <h2 className="text-center font-bold">
          Based off of our research and client goals, we developed a site map and 2 important red routes to lay the foundation for an
          application design.
        </h2>
        <div className="flex justify-center">
          <img src={siteMapOld} alt="UBYou site map" className="w-full max-w-5xl h-auto rounded-xl shadow-sm ring-1 ring-slate-200/60" />
        </div>
        <div className="grid grid-cols-1 gap-8 mt-4">
          <div className="flex justify-center">
            <img src={siteMapNew1} alt="Red route 1 user flow" className="w-full max-w-5xl h-auto rounded-xl shadow-sm ring-1 ring-slate-200/60" />
          </div>
          <div className="flex justify-center">
            <img src={siteMapNew2} alt="Red route 2 user flow" className="w-full max-w-5xl h-auto rounded-xl shadow-sm ring-1 ring-slate-200/60" />
          </div>
        </div>
      </ProjectItem>

      <hr className="border-slate-400" />


      <ProjectItem title="Design">
        <h2 className="text-center font-bold">
          Following solidifying the information architecture, we developed low-fidelity wireframes to help further redesign the application.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <img src={wireframe1} alt="Wireframe 1" className="w-full max-w-md h-auto rounded-xl ring-1 ring-slate-200/60" />
          <img src={wireframe2} alt="Wireframe 2" className="w-full max-w-md h-auto rounded-xl ring-1 ring-slate-200/60" />
          <img src={wireframe3} alt="Wireframe 3" className="w-full max-w-md h-auto rounded-xl ring-1 ring-slate-200/60" />
        </div>
      </ProjectItem>

      <hr className="border-slate-400" />


      <ProjectItem title="Design System">
        <h2 className="text-center font-bold">
          As a group, we collectively decided on a cohesive design system to implement on the wireframes in preparation for hi-fidelity designs.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <img src={designColors} alt="Color palette and neutrals" className="w-full max-w-lg h-auto rounded-xl ring-1 ring-slate-200/60" />
        </div>
        <div className="flex justify-center mt-6">
          <img src={designComponents} alt="UI components and tokens" className="w-full max-w-5xl h-auto rounded-xl ring-1 ring-slate-200/60" />
          <img src={designFont} alt="Typography scale and notes" className="w-full max-w-lg h-auto rounded-xl ring-1 ring-slate-200/60" />

        </div>
      </ProjectItem>

      <hr className="border-slate-400" />


      <ProjectItem title="Hi-Fidelity Designs">
        <h2 className="text-center font-bold">
          Following application of the design system, we iterated several versions of each page until the design was solidified.
        </h2>
        <div className="flex justify-center">
          <img src={UBYouFinal} alt="High-fidelity UBYou screens" className="w-full max-w-5xl h-auto rounded-xl ring-1 ring-slate-200/60" />
        </div>
      </ProjectItem>

      <hr className="border-slate-400" />


      <ProjectItem title="Challenges and Lessons Learned">
        <ul className="list-disc pl-5 space-y-2 ">
          <li>Due to time constraints, we were not able to conduct formal user testing.</li>
          <li>We attempted to take on too much of the app and had to cut flows to meet deadlines.</li>
          <li>We learned valuable lessons about project scope and realistic expectations.</li>
        </ul>
      </ProjectItem>

      <hr className="border-slate-400" />


      <ProjectItem title="Next Steps">
        <p className="">
          The next steps for UBYou include pushing these designs into production, and conducting formal user testing to iterate. They will also A/B test our versions to see which improves engagement before rolling out.
        </p>
        <h3 className="text-center font-bold">
          Thank you so much to UBYou for allowing us to help redesign your application.
        </h3>
      </ProjectItem>

      <div className=" bg-white h-6 text-center ">
        <Link to="/" className="text-blue-600 hover:underline">← Back to Home</Link>
      </div>

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
  );
}