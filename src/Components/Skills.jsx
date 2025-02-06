import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiExpress, SiPostman, SiFigma } from "react-icons/si";

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-10">My Skills</h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 px-6">
          {/* HTML5 */}
          <div className="flex flex-col items-center p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md hover:scale-105 transition">
            <FaHtml5 className="text-orange-600 text-6xl" />
            <p className="mt-2 font-semibold">HTML5</p>
          </div>

          {/* CSS3 */}
          <div className="flex flex-col items-center p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md hover:scale-105 transition">
            <FaCss3Alt className="text-blue-600 text-6xl" />
            <p className="mt-2 font-semibold">CSS3</p>
          </div>

          {/* JavaScript */}
          <div className="flex flex-col items-center p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md hover:scale-105 transition">
            <FaJs className="text-yellow-500 text-6xl" />
            <p className="mt-2 font-semibold">JavaScript</p>
          </div>

          {/* React */}
          <div className="flex flex-col items-center p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md hover:scale-105 transition">
            <FaReact className="text-blue-400 text-6xl" />
            <p className="mt-2 font-semibold">React</p>
          </div>

          {/* Tailwind CSS */}
          <div className="flex flex-col items-center p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md hover:scale-105 transition">
            <SiTailwindcss className="text-teal-500 text-6xl" />
            <p className="mt-2 font-semibold">Tailwind CSS</p>
          </div>

          {/* Node.js */}
          <div className="flex flex-col items-center p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md hover:scale-105 transition">
            <FaNodeJs className="text-green-600 text-6xl" />
            <p className="mt-2 font-semibold">Node.js</p>
          </div>

          {/* Express.js */}
          <div className="flex flex-col items-center p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md hover:scale-105 transition">
            <SiExpress className="text-gray-500 text-6xl" />
            <p className="mt-2 font-semibold">Express.js</p>
          </div>

          {/* MongoDB */}
          <div className="flex flex-col items-center p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md hover:scale-105 transition">
            <SiMongodb className="text-green-500 text-6xl" />
            <p className="mt-2 font-semibold">MongoDB</p>
          </div>

          {/* RESTful APIs */}
          <div className="flex flex-col items-center p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md hover:scale-105 transition">
            <SiPostman className="text-orange-500 text-6xl" />
            <p className="mt-2 font-semibold">RESTful APIs</p>
          </div>

          {/* Git/GitHub */}
          <div className="flex flex-col items-center p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md hover:scale-105 transition">
            <FaGithub className="text-gray-900 dark:text-white text-6xl" />
            <p className="mt-2 font-semibold">Git/GitHub</p>
          </div>

          {/* UI/UX Design */}
          <div className="flex flex-col items-center p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md hover:scale-105 transition">
            <SiFigma className="text-purple-500 text-6xl" />
            <p className="mt-2 font-semibold">UI/UX Design</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
