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

       
          <div className="bg-white text-gray-800 shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform">
            <img
              src={NXTTrend}
              alt="Nxt Trendz ( ECommerce Clone - Amazon, Flipkart)"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-lg md:text-xl font-bold mb-2">
              Nxt Trendz ( ECommerce Clone - Amazon, Flipkart)
              </h3>
              <p className="text-sm md:text-base text-gray-600 mb-4">
              Implemented Nxt Trendz application which is a clone for ECommerce applications like Amazon, Flipkart where 
              users can login and can see list of products with search, filters, sort by, etc.
              </p>
              <a
                href="https://sainxttrendzapp.ccbp.tech/login"
                className="block text-yellow-500 font-medium hover:underline"
              >
                View Project
              </a>
            </div>
          </div>

      
          <div className="bg-white text-gray-800 shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform">
            <img
              src={Jobbyapp}
              alt="Jobby App "
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-lg md:text-xl font-bold mb-2">
              Jobby App 
              </h3>
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

