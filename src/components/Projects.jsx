import tuition from "../assets/tuition.png";
import Jobbyapp from "../assets/JobbyApp.png";
import NXTTrend from "../assets/NXTWavetrend.png";

function Projects() {
  return (
    <section id="projects" className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-yellow-400">
          Latest Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project 1: ENIGMA_AI */}
          <div className="bg-white text-gray-800 shadow-lg rounded-lg overflow-hidden p-6 transform hover:scale-105 transition-transform">
            <h3 className="text-lg md:text-xl font-bold mb-2">
              ENIGMA_AI – Smart Automation Framework
            </h3>
            <p className="text-sm md:text-base text-gray-600 mb-2">
              Prolifics | April 2025 – Present
            </p>
            <p className="text-sm md:text-base text-gray-700 mb-2">
              A smart automation framework that leverages AI to convert
              requirement documents into test cases, map them to web elements,
              and auto-generate test scripts for execution.
            </p>
            <ul className="list-disc pl-5 text-gray-700 space-y-1 text-sm md:text-base">
              <li>Involved in the end-to-end life cycle of the project.</li>
              <li>Helped teammates understand stakeholder requirements.</li>
              <li>
                Applied Locator Strategies in crawling and scraping processes.
              </li>
              <li>
                Developed clean, reusable solutions to reduce redundant logic
                changes.
              </li>
              <li>
                Collaborated with cross-functional teams to integrate Selenium
                framework structure for test script generation.
              </li>
              <li>Deployed services and solutions on IIS.</li>
            </ul>
          </div>

          {/* Project 2: Gruhapandit Tuition Platform */}
          <div className="bg-white text-gray-800 shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform">
            <img
              src={tuition}
              alt="Gruhapandit Tuition Platform"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-lg md:text-xl font-bold mb-2">
                Gruhapandit Tuition Platform
              </h3>
              <p className="text-sm md:text-base text-gray-600 mb-4">
                A tuition platform connecting students and tutors with
                responsive UI and real-time matching.
              </p>
              <a
                href="https://gruhapandittuitions.com/"
                className="block text-yellow-500 font-medium hover:underline"
              >
                View Project
              </a>
            </div>
          </div>

          {/* Project 3: Nxt Trendz */}
          <div className="bg-white text-gray-800 shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform">
            <img
              src={NXTTrend}
              alt="Nxt Trendz ( ECommerce Clone - Amazon, Flipkart)"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-lg md:text-xl font-bold mb-2">
                Nxt Trendz (E-Commerce Clone – Amazon, Flipkart)
              </h3>
              <p className="text-sm md:text-base text-gray-600 mb-4">
                Implemented Nxt Trendz application, a clone of Amazon/Flipkart
                where users can log in, browse products, and use features like
                search, filters, and sorting.
              </p>
              <a
                href="https://sainxttrendzapp.ccbp.tech/login"
                className="block text-yellow-500 font-medium hover:underline"
              >
                View Project
              </a>
            </div>
          </div>

          {/* Project 4: Jobby App */}
          <div className="bg-white text-gray-800 shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform">
            <img
              src={Jobbyapp}
              alt="Jobby App"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-lg md:text-xl font-bold mb-2">Jobby App</h3>
              <p className="text-sm md:text-base text-gray-600 mb-4">
                Constructed an all-in-one job searching platform, Jobby App.
              </p>
              <a
                href="https://bollukiran.ccbp.tech/login"
                className="block text-yellow-500 font-medium hover:underline"
              >
                View Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
