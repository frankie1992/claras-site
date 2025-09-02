import { useState } from 'react';
import { Link } from 'react-router-dom'
import backgroundHalfCircle from '../../assets/home-page/background-full-circle.png'
import backgroundArrows from '../../assets/projects/cityPups/background-1.svg'
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
import Day1 from '../../assets/projects/cityPups/Day1.png'
import Day2 from '../../assets/projects/cityPups/Day2.png'
import Day3 from '../../assets/projects/cityPups/Day3.png'
import Day4 from '../../assets/projects/cityPups/Day4.png'
import Day5 from '../../assets/projects/cityPups/Day5.png'
import Conclusion from '../../assets/projects/cityPups/Conclusion.png'
import { pdfjs, Document, Page } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import cityPuppdf from '../../assets/projects/cityPups/CityPups.pdf'

import type { PDFDocumentProxy } from 'pdfjs-dist';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

const options = {
  cMapUrl: '/cmaps/',
  standardFontDataUrl: '/standard_fonts/',
  wasmUrl: '/wasm/',
};

const resizeObserverOptions = {};


type PDFFile = string | File | null;

export default function CityPupsProject() {
    const [numPages, setNumPages] = useState<number>();
    function onDocumentLoadSuccess({ numPages: nextNumPages }: PDFDocumentProxy): void {
    setNumPages(nextNumPages);
  }

  return (
    <div className="flex flex-col min-h-[60vh]">
      <ProjectHero
        title="CityPups:"
        subtitle="Design Sprint"
        image={heroPreview}
        imageAlt="CityPups hero image"
        background1={backgroundHalfCircle}
        background2={backgroundArrows}
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
          <div className="flex justify-center"><img src={Day1} alt="Final CityPups screen" className="w-full max-w-4xl" /></div>
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
          <div className="flex justify-center"><img src={Day2} alt="Final CityPups screen" className="w-full max-w-4xl" /></div>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
            <p className="text-center">
              On day 2 of the design sprint, I started off conducting a lightning demo on existing websites in order to get ideas and inspiration. The 3 websites I chose were "Adopt a Pet", "PetFinder", and "BeDallas90".
            </p>
            <div className="flex justify-center"><img src={comp} alt="Competitor inspiration" className="w-full max-w-4xl rounded-xl ring-1 ring-slate-200/60" /></div>
            <p className="text-center">
              Following the lightning demo, I used the inspiration and ideas gathered from that activity and channeled it into a "Crazy 8's" activity where I sketched out 8 possible solutions in 8 minutes. I decided to focus on the landing page of the site.
            </p>
            <div className="flex justify-center"><img src={sketch} alt="Concept sketches" className="w-full max-w-4xl rounded-xl ring-1 ring-slate-200/60" /></div>
            <div className="flex justify-center"><img src={solutionSketch} alt="Solution sketch" className="w-full max-w-4xl rounded-xl ring-1 ring-slate-200/60" /></div>
            <p className="text-center">
              I decided to combine 2 of my crazy 8 sketches into a solution sketch that utilizes a mixture of both minimalism and variety. My solution begins with it asking for the users' zip code in order to begin the filtering process, and then proceeds to the full survey (which is skippable). Lastly, the user is met with matches based off of their survey results and have the opportunity to change any of their filters as needed.
            </p>
          </div>
        </div>
      </section>

      <hr className="border-slate-400" />

      {/* Day 3: Storyboarding */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8 py-8 md:py-12">
          <div className="flex justify-center"><img src={Day3} alt="Final CityPups screen" className="w-full max-w-4xl" /></div>
          <p className="text-center">
            Based off of the solution sketches from day 2, I made an 8 panel storyboard. This storyboard focuses on the red route (main flow) of a user going through the process of searching for a dog, comparing dogs, and starting the application process. Some of the design changes throughout the storyboard as I was experimenting with different UI styles.
          </p>
          <div className="flex justify-center"><img src={storyboard} alt="Storyboard" className="w-full max-w-4xl rounded-xl ring-1 ring-slate-200/60" /></div>
        </div>
      </section>

      <hr className="border-slate-400" />

      {/* Day 4: Prototyping */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8 py-8 md:py-12 space-y-4">
          <div className="flex justify-center"><img src={Day4} alt="Final CityPups screen" className="w-full max-w-4xl" /></div>
          <div className="flex justify-center">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/qec8sGKSvJs?si=v2WDKMQnE09HYOxI" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          </div>
          <p className="text-center">
            The next step of the design sprint was to create a minimum viable product prototype to test end users with. I used Figma for this portion of the sprint and took approximately about 4 hours to complete. The goal of my prototype was to address users' primary pain points and themes discovered during the research portion of the sprint. The red route of my prototype involves filling out a brief survey, comparing 2 pups, and selecting one to fill out an adoption application for.
          </p>
        </div>
      </section>

      <hr className="border-slate-400" />

      {/* Day 5: Validate */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8 py-8 md:py-12 space-y-4">
          <div className="flex justify-center"><img src={Day5} alt="Final CityPups screen" className="w-full max-w-4xl" /></div>
          <p className="text-center">
            For the final day of the design sprint, we were tasked with interviewing 5 users to test the functionality of our prototype as well as share their thoughts and any feedback they have on their experience. Below I have attached the script I used for my participants
          </p>
          <div className='border'>
                  <Document file={cityPuppdf} onLoadSuccess={onDocumentLoadSuccess} options={options}>
            {Array.from(new Array(numPages), (_el, index) => (
              <Page
                key={`page_${index + 1}`}
                pageNumber={index + 1}
              />
            ))}
          </Document>
          </div>
          <div className="mx-auto  w-full" />
          <p className="text-slate-700 text-center">
            My usability tests consisted of one in person interview, and 4 remote interviews.Each interview took approximately ~15 minutes to complete. All users were able to successfully complete the tasks assigned to them to do- but had some feedback on the overall appearance of the website and its functionality.
          </p>
        </div>
      </section>

      <hr className="border-slate-400" />

      {/* Final Screens */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8 py-8 md:py-12">
          <div className="flex justify-center"><img src={finalScreen} alt="Final CityPups screen" className="w-full max-w-4xl rounded-xl ring-1 ring-slate-200/60" /></div>
          <p className="text-slate-700 text-center">
            Overall, users were mainly satisfied with the website appearance, but some made note of inconsistent spacing between certain elements, and questioned whether the individual survey screen was necessary. This was due to the fact that the filters were already present on the results page. Users also wished to see more specific answer possibilities on the survey such as inputting ranges between values. Users did however, value the simplicity of the website and did not struggle with completing the tasks that were given to them.
          </p>
        </div>
      </section>

      <hr className="border-slate-400" />

      {/* Conclusion */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8 py-8 md:py-12 space-y-4">
        <div className="flex justify-center"><img src={Conclusion} alt="Final CityPups screen" className="w-full max-w-4xl" /></div>
          <p className="text-slate-700 text-center">
            This was my first ever design sprint! 🥳 I tried my best to stay true to the deadlines during this activity in order for it to feel as true to an actual sprint, and it was a great challenge to make me think faster about design choices, iterate quickly, and prototype efficiently. If I had more time to work on this design sprint- I would have iterated earlier on in the process (more than likely around the storyboard activity) in order to come up with a more polished product to present during usability testing.
          </p>
        </div>
      </section>


      {/* Footer spacer + back */}
      <div className="bg-white h-6 text-center">
        <Link to="/" className="text-blue-600 hover:underline">← Back to Home</Link>
      </div>
    </div>
  )
}
