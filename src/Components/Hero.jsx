import profilePic from "../assets/Profile.webp"; // Placeholder image

const Hero = () => {
  return (
    <section id="hero" className="h-screen flex flex-col md:flex-row items-center justify-center text-center md:text-left px-6 md:px-20 bg-gray-100 dark:bg-gray-800">
      {/* Image Section */}
      <div className="w-60 h-60 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-gray-300 dark:border-gray-600 shadow-lg">
        <img src={profilePic} alt="Profile picture" className="w-full h-full object-cover" />
      </div>

      {/* About Me Text */}
      <div className="md:ml-12 mt-6 md:mt-0 max-w-2xl">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Hello, I'm Gideon Cameron</h1>
        <p className="text-lg mt-4 text-gray-700 dark:text-gray-300">
        I am a Frontend Developer, I specialize in creating engaging, responsive, and user friendly web sites. While I have a solid background in full stack development, my true focus lies in crafting seamless user interfaces that enhance the way people interact with technology.
        Over the years, I’ve worked as a freelance developer on various frontend projects, where I honed my skills. More recently, I contributed to a language learning module, taking on both frontend and full stack responsibilities, integrating technologies like Node.js, MongoDB, and Express.js to deliver a dynamic, full-featured application.
        I’m enjoy the challenge of turning complex problems into simple, elegant solutions. Collaboration, learning, and a strong attention to detail are at the core of my development process.
        </p>
      </div>
    </section>
  );
};

export default Hero;
