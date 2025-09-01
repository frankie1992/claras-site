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
import solution1 from '../../assets/projects/gatherly/solution-1.png'
import solution2 from '../../assets/projects/gatherly/solution-2.png'
import solution3 from '../../assets/projects/gatherly/solution-3.png'
import iterations1 from '../../assets/projects/gatherly/interations-1.png'
import iterations2 from '../../assets/projects/gatherly/iterations-2.png'
import iterations3 from '../../assets/projects/gatherly/iterations-3.png'
import styleGuide from '../../assets/projects/gatherly/Style-Guide-1.png'
import finalScreens from '../../assets/projects/gatherly/Final-Screen-1.png'
import ProjectHero from '../../components/ProjectHero';
import ProjectItem from '../../components/ProjectItem';

export default function GatherlyProject() {
  return (
    <div className="flex flex-col min-h-[60vh]">
      {/* Hero */}

      <ProjectHero
        title="Gatherly:"
        subtitle="An Event Application"
        image={heroPreview}
        imageAlt="Gatherly mobile screens"
        background1={backgroundCross}
      />

      {/* Logistics */}
      <ProjectItem title="Logistics">
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
      </ProjectItem>

      <hr className="border-slate-400" />
      {/* Background/Company Context */}
      <ProjectItem title="Background/Company Context">
        <p className="text-center">
          A startup company has launched an event application that helps people meet new friends. The goal of the product is to create a social user experience that will help users get out and do activities in-person.Friends keep us company through the difficulties of our lives and help us grow, but when people move to a new city or town, fear and social anxiety can keep them from making new friends. How can we help people who have social anxiety step out and make new friends?
        </p>
      </ProjectItem>

      <hr className="border-slate-400" />
      {/* Problem */}
      <ProjectItem title="Problem">
        <p className="text-center font-bold">
          The business team has identified a problem in that the number of people who say they are going to an event is significantly higher than the actual number of people who attend.
        </p>
      </ProjectItem>

      <hr className="border-slate-400" />
      {/* Solution */}
      <ProjectItem title="Solution">
        <p className="font-bold">
          A platform that combines event discovery with meaningful social connections and an in-app badge system to incentivize attendance.
        </p>
        <div className="flex justify-center"><img src={solution1} alt="SWOT analysis" className="w-full max-w-5xl rounded-xl ring-1 ring-slate-200/60" /></div>
        <div className="flex justify-center"><img src={solution2} alt="SWOT analysis" className="w-full max-w-5xl rounded-xl ring-1 ring-slate-200/60" /></div>
        <div className="flex justify-center"><img src={solution3} alt="SWOT analysis" className="w-full max-w-5xl rounded-xl ring-1 ring-slate-200/60" /></div>
      </ProjectItem>

      <hr className="border-slate-400" />
      {/* Secondary Research */}
      <ProjectItem title="Secondary Research">
        <p className="text-center">
          Supportive social experiences on a platform such as personalized group and event recommendations based on user interest have been correlated with improved user engagement and attendance at events on social platforms
        </p>
        <p className="text-center">
          Other social media metrics such as “likes” and friend counts can make users feel depressed when using social media to connect with others
        </p>
      </ProjectItem>

      <hr className="border-slate-400" />
      {/* Research Synthesis */}
      <ProjectItem title="Research Synthesis">
        <p className="text-center">
          As a result of my secondary analysis and competitive usability tests, I came up with an affinity map that revealed 5 core features that make an event application successful. ​          </p>
        <div className="flex justify-center"><img src={affinity} alt="Affinity mapping" className="w-full max-w-5xl rounded-xl ring-1 ring-slate-200/60" /></div>
      </ProjectItem>

      <hr className="border-slate-400" />
      {/* Competitive Analysis + The Gap */}
      <ProjectItem title="Competitive Analysis + The Gap">
        <p className="text-center font-bold">
          Each competitor lacked at least one crucial theme that my affinity map defined.
        </p>
        <div className="flex justify-center"><img src={competitors} alt="Competitor apps" className="w-full max-w-5xl rounded-xl ring-1 ring-slate-200/60" /></div>
        <p className="text-center">
          I conducted a SWOT analysis of each competitor in order to identify their weaknesses. The primary theme that each competitor seemed to lack was in app incentives/gamification to increase user engagement and improve user conversion rates for event attendance. This insight laid the foundation for a new solution to improve user turnout for events.
        </p>
        <div className="flex justify-center"><img src={swot} alt="SWOT analysis" className="w-full max-w-5xl rounded-xl ring-1 ring-slate-200/60" /></div>
      </ProjectItem>

      <hr className="border-slate-400" />
      {/* How Might We’s */}
      <ProjectItem title="How Might We’s">
        <p>
          After analyzing the competition and synthesizing my research, I came up with 4 'How Might We' questions and provided answers to further explore a possible solution to this issue.
        </p>
        <ul className="list-disc pl-5 space-y-2">
          How might we foster a sense of community and connection to encourage users to attend events?
          <li>Focus on leveraging features like event group chats or “connections” to create a sense of belonging and commitment before the event.</li>
          How might we improve user safety and trust to reduce hesitation in attending events?
          <li>
            Consider low-cost methods like a verification process or “event buddies” to help users feel safer, thus increasing their likelihood of showing up.
          </li>

          How might we motivate users to commit to attending events through simple, cost-effective gamification?

          <li>
            Implement low-cost rewards, such as badges or points, for RSVP or attendance, encouraging users to follow through with their commitments.
          </li>
          How might we reduce users’ social anxiety around attending events by providing supportive features?

          <li>
            Offer supportive tools, like pre-event group chats or connections with other attendees, to help ease social anxiety and increase comfort levels around attending events.
          </li>

        </ul>
      </ProjectItem>

      <hr className="border-slate-400" />
      {/* Ideation */}
      <ProjectItem title="Ideation">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex justify-center"><img src={userFlow1} alt="User flow 1" className="w-full max-w-md rounded-xl ring-1 ring-slate-200/60" /></div>
          <div className="flex justify-center"><img src={userFlow2} alt="User flow 2" className="w-full max-w-md rounded-xl ring-1 ring-slate-200/60" /></div>
          <div className="flex justify-center"><img src={userFlow3} alt="User flow 3" className="w-full max-w-md rounded-xl ring-1 ring-slate-200/60" /></div>
          <div className="flex justify-center"><img src={userFlow4} alt="User flow 4" className="w-full max-w-md rounded-xl ring-1 ring-slate-200/60" /></div>
        </div>
      </ProjectItem>

      <hr className="border-slate-400" />

      {/* Iterations */}
      <ProjectItem title="Iterations">
        <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
          <div className="flex justify-center"><img src={iterations1} alt="Iterations 1" className="w-full max-w-6xl rounded-xl ring-1 ring-slate-200/60" /></div>
          <div className="flex justify-center"><img src={iterations2} alt="Iterations 2" className="w-full max-w-6xl rounded-xl ring-1 ring-slate-200/60" /></div>
          <div className="flex justify-center"><img src={iterations3} alt="Iterations 3" className="w-full max-w-6xl rounded-xl ring-1 ring-slate-200/60" /></div>
        </div>
      </ProjectItem>

      <hr className="border-slate-400" />

      {/* Final Screens */}
      <ProjectItem title="The Final Screens">
        <div className="flex justify-center">
          <img src={finalScreens} alt="Gatherly final screens" className="w-full max-w-5xl h-auto rounded-xl ring-1 ring-slate-200/60" />
        </div>
      </ProjectItem>

      <hr className="border-slate-400" />
      {/* Style Guide */}
      <ProjectItem title="Style Guide">
        <div className="flex justify-center">
          <img src={styleGuide} alt="Style guide" className="w-full max-w-5xl h-auto rounded-xl ring-1 ring-slate-200/60" />
        </div>
      </ProjectItem>

      <hr className="border-slate-400" />
      {/* Conclusions + Takeaways */}
      <ProjectItem title="Conclusions + Takeaways">
        <p>
          For this being my 3rd design project (design sprint included), I feel very proud about this application. My bootcamp gave us free reign on how to tackle this project, and did not really hold our hands this time around  in order to prepare us for real company projects. Despite me feeling accomplished though, there is always some room for improvement. Here is what I would do differently next time:
        </p>
        <ol type="1">
          <li>
            1. I would spend more time on competitive analysis: Although I feel that I did an adequate job on my competitive analysis, if I had more time I would have mapped out each competitor flow that I wanted to replicate in my design in order to see if there is any overlap that I could carry over into my design.
          </li>
          <li>
            2. I would have conducted user interviews: This may sound scary that I didn't conduct and user interviews during the research phase of my project- but I felt that there was enough secondary research already out there to start a project. Looking back now though- I think I would have saved myself some headache on the gamification features if I had talked to users prior to designing a solution.
          </li>
          <li>
            3. I would have spent more time on my user flows: I feel that my user flows are good enough for a minimal viable product, but this goes back to my previous point that I think if I had conducted user interviews prior to designing a solution I probably would have gotten more unique ideas to design for my product. I'm still very much happy with my end product though.
          </li>
        </ol>
      </ProjectItem>

      {/* Footer spacer + back */}
      <div className="bg-white h-6 text-center">
        <Link to="/" className="text-blue-600 hover:underline">← Back to Home</Link>
      </div>
    </div>
  )
}
