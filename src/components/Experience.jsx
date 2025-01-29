import { FaBriefcase } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { GiAchievement } from "react-icons/gi";

const Experience = () => {
  return (
    <section id="experience" className="py-12 sm:py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 sm:mb-12 text-center">
          <FaBriefcase className="inline-block text-yellow-500 mr-2" />{" "}
          Experience
        </h2>
        <ul className="space-y-6 sm:space-y-8">
          
          <li className="bg-white shadow-lg rounded-lg p-4 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <MdWork className="text-yellow-500 text-3xl sm:text-4xl" />
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                Frontend Developer
              </h3>
              <p className="text-gray-600">
                <span className="font-bold">RFCHH Software PVT LTD</span>
              </p>
              <p className="text-sm text-gray-500 mt-1">
                September 2024 - Present
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Worked on developing scalable web applications using React.js
              </p>
            </div>
          </li>

          <li className="bg-white shadow-lg rounded-lg p-4 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <FaBriefcase className="text-yellow-500 text-3xl sm:text-4xl" />
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                Frontend Developer[Intern]
              </h3>
              <p className="text-gray-600">
                <span className="font-bold">VK Reddy Digital Solutions</span>
              </p>
              <p className="text-sm text-gray-500 mt-1">
                February 2024 - July 2024
              </p>
              <p className="text-sm text-gray-500 mt-1">
                As a React.js Frontend Developer at VK Reddy Digital Solutions,
                I played a pivotal role in the development and enhancement of
                Vibezone, a social platform similar to Omegle designed for
                spontaneous and anonymous video chatting worldwide.{" "}
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Experience;
