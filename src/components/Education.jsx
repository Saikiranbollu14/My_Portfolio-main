import { FaGraduationCap } from "react-icons/fa";
import { MdSchool } from "react-icons/md";
import { GiAchievement } from "react-icons/gi";

const Education = () => {
  return (
    <section id="education" className="py-12 sm:py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 sm:mb-12 text-center">
          <FaGraduationCap className="inline-block text-yellow-500 mr-2" /> Education
        </h2>
        <ul className="space-y-6 sm:space-y-8">
        
          <li className="bg-white shadow-lg rounded-lg p-4 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <FaGraduationCap className="text-yellow-500 text-3xl sm:text-4xl" />
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                Bachelor of Technology in ECE
              </h3>
              <p className="text-gray-600">
                <span className="font-bold">Gurunanak Institute of Technology</span>
              </p>
              <p className="text-sm text-gray-500 mt-1">2020 - 2023 | CGPA: 6.67</p>
            </div>
          </li>

          <li className="bg-white shadow-lg rounded-lg p-4 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <MdSchool className="text-yellow-500 text-3xl sm:text-4xl" />
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800">Diploma, ECE</h3>
              <p className="text-gray-600">
                <span className="font-bold">Warangal Institute Of Technology And Science</span>
              </p>
              <p className="text-sm text-gray-500 mt-1">2017 - 2020 | Percentage: 77.55/100</p>
            </div>
          </li>

          
          <li className="bg-white shadow-lg rounded-lg p-4 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <GiAchievement className="text-yellow-500 text-3xl sm:text-4xl" />
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                Secondary School Certificate (SSC)
              </h3>
              <p className="text-gray-600">
                <span className="font-bold">Millenium Public School</span>
              </p>
              <p className="text-sm text-gray-500 mt-1">2017 | GPA: 8.7</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Education;
