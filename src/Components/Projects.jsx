const Projects = () => {
  // Placeholder project data
  const projectData = [
    {
      id: 1,
      title: "Space Tourism",
      image: "./src/assets/space-tourism.webp",
      description: "Using HTML, CSS, JavaScript, and React to create this visually stunning space tourism website.",
      liveLink: "https://gideon-cameron.github.io/Space-Touris/",
    },
    {
      id: 2,
      title: "Calculator App",
      image: "./src/assets/Calculator.webp",
      description: "Using HTML, CSS, and JavaScript to create a functioning calculator with changeable themes.",
      liveLink: "https://gideon-cameron.github.io/Calculator-app/",
    },
    {
      id: 3,
      title: "React Weather App",
      image: "./src/assets/React-Weather-App.webp",
      description: "React weather app that provides real-time weather updates based on your location and lets you search for weather conditions in any city worldwide.",
      liveLink: "https://gideon-cameron.github.io/React-Weather-App/",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-10">My Projects</h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-6">
          {projectData.map((project) => (
            <div key={project.id} className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 hover:scale-105 transition">
              <img 
                src={project.image} 
                alt={`Screenshot of ${project.title} - A frontend project using modern web technologies`} 
                className="w-full h-48 object-cover rounded-lg" 
              />
              <h3 className="text-xl font-semibold mt-4">{project.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 mt-2">{project.description}</p>
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-700 transition"
              >
                View Live
              </a>
            </div>
          ))}
        </div>

        {/* See More Projects Button */}
        <div className="mt-12">
        <a href="/more-projects" className="px-6 py-3 bg-gray-900 text-white font-semibold rounded-lg shadow-md hover:bg-gray-700 transition">
          See More Projects
        </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
