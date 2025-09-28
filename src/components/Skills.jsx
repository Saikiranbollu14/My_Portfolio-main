import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGit,
  FaGithub,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiSqlite,
  SiBootstrap,
  SiPostman,
  SiSwagger,
  SiRedux,
  SiTypescript,
  SiDotnet,
  SiPostgresql,
} from "react-icons/si";
import { SiMui } from "react-icons/si";
import { VscCode, VscSymbolMethod } from "react-icons/vsc"; // fallback for C#

const Skills = () => {
  const categories = [
    {
      title: "Programming Languages",
      skills: [
        {
          name: "HTML",
          icon: <FaHtml5 className="text-orange-600 text-3xl" />,
        },
        { name: "CSS", icon: <FaCss3Alt className="text-blue-600 text-3xl" /> },
        {
          name: "JavaScript",
          icon: <FaJs className="text-yellow-500 text-3xl" />,
        },
        {
          name: "TypeScript",
          icon: <SiTypescript className="text-blue-500 text-3xl" />,
        },
        {
          name: "C#",
          icon: <VscSymbolMethod className="text-green-600 text-3xl" />,
        }, // safe icon
      ],
    },
    {
      title: "Frameworks & Technologies",
      skills: [
        {
          name: ".NET",
          icon: <SiDotnet className="text-purple-600 text-3xl" />,
        },
        { name: "React", icon: <FaReact className="text-blue-500 text-3xl" /> },
        {
          name: "Redux",
          icon: <SiRedux className="text-purple-500 text-3xl" />,
        },
        {
          name: "Bootstrap",
          icon: <SiBootstrap className="text-purple-600 text-3xl" />,
        },
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss className="text-teal-500 text-3xl" />,
        },
        {
          name: "Material-UI",
          icon: <SiMui className="text-blue-400 text-3xl" />,
        },
      ],
    },
    {
      title: "Databases",
      skills: [
        {
          name: "PostgreSQL",
          icon: <SiPostgresql className="text-blue-700 text-3xl" />,
        },
        {
          name: "SQLite",
          icon: <SiSqlite className="text-blue-600 text-3xl" />,
        },
      ],
    },
    {
      title: "Developer Tools",
      skills: [
        {
          name: "VS Code",
          icon: <VscCode className="text-blue-500 text-3xl" />,
        },
        {
          name: "Postman",
          icon: <SiPostman className="text-orange-500 text-3xl" />,
        },
        {
          name: "Swagger",
          icon: <SiSwagger className="text-green-600 text-3xl" />,
        },
        { name: "Git", icon: <FaGit className="text-orange-500 text-3xl" /> },
        {
          name: "GitHub",
          icon: <FaGithub className="text-gray-800 text-3xl" />,
        },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="relative py-12 bg-gray-900 border-gray-600 shadow-lg"
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-yellow-400"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8 text-center">
          My Skills
        </h2>
        <div className="space-y-8">
          {categories.map((category) => (
            <div key={category.title}>
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-4">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="group relative p-4 bg-white rounded-lg shadow hover:shadow-md transition transform hover:scale-105"
                  >
                    <div className="flex flex-col items-center">
                      {skill.icon}
                      <h3 className="mt-2 text-sm sm:text-base font-medium text-gray-800 group-hover:text-yellow-500">
                        {skill.name}
                      </h3>
                    </div>

                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-28 bg-gray-900 text-white text-xs text-center rounded p-1 opacity-0 group-hover:opacity-100 transition">
                      {skill.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-1 bg-yellow-400"></div>
    </section>
  );
};

export default Skills;
