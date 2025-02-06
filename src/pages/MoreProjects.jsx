import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar";
import projectsInfo from "../data/projectsInfo";

const MoreProjects = ({ toggleTheme, theme }) => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen">
      {/* ✅ Dynamic SEO */}
      <Helmet>
        <title>More Projects | Gideon Work</title>
        <meta name="description" content="Explore more of my frontend development projects, built with React, Tailwind CSS, and JavaScript." />
        <meta name="keywords" content="frontend projects, react developer, web development, portfolio, tailwind css, javascript" />
        <meta property="og:title" content="More Projects | Gideon Work" />
        <meta property="og:description" content="Check out my latest frontend projects showcasing my skills in React, Tailwind CSS, and UI/UX design." />
        <meta property="og:url" content="https://yourportfolio.com/more-projects" />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content="More Projects | Gideon Work" />
        <meta name="twitter:description" content="Explore my best frontend development projects built with modern technologies." />
      </Helmet>

      {/* Pass theme and toggleTheme to Navbar */}
      <Navbar toggleTheme={toggleTheme} theme={theme} />
      
      <section className="py-20 container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-10">More Projects</h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4 sm:px-6">
          {projectsInfo.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-5 hover:scale-[1.03] transition-transform duration-300 ease-in-out"
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-48 object-cover rounded-lg"
                loading="lazy" 
              />
              <h3 className="text-xl font-semibold mt-4">{project.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 mt-2">{project.description}</p>
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block bg-blue-600 text-white px-5 py-2 rounded-md shadow-md hover:bg-blue-700 transition"
              >
                View Live
              </a>
            </div>
          ))}
        </div>

        {/* Back to Home Button */}
        <div className="mt-12">
          <a
            href="/"
            className="px-6 py-3 bg-gray-700 text-white font-semibold rounded-lg shadow-md hover:bg-gray-500 transition"
          >
            Back to Home
          </a>
        </div>
      </section>
    </div>
  );
};

export default MoreProjects;
