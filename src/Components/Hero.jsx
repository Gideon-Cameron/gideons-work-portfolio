import profilePic from "../assets/Profile.webp"; // Placeholder image

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col xl:flex-row items-center justify-center text-center xl:text-left px-4 sm:px-6 md:px-20 pt-20 xl:pt-0 bg-gray-100 dark:bg-gray-800"
    >
      {/* Image Section */}
      <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 xl:w-72 xl:h-72 2xl:w-80 2xl:h-80 rounded-full overflow-hidden border-4 border-gray-300 dark:border-gray-600 shadow-lg mb-6 xl:mb-0 xl:mr-8 transition-transform duration-300 ease-in-out hover:scale-105">
        <img
          src={profilePic}
          alt="Profile picture"
          className="w-full h-full object-cover"
        />
      </div>

      {/* About Me Text */}
      <div className="max-w-2xl px-4 md:px-0">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
          Hello, I'm Gideon Cameron
        </h1>
        <p className="text-base sm:text-lg lg:text-xl mt-4 text-gray-700 dark:text-gray-300 leading-relaxed">
          I am a Frontend Developer, specializing in creating engaging,
          responsive, and user-friendly websites. While I have a solid
          background in full stack development, my true focus lies in crafting
          seamless user interfaces that enhance the way people interact with
          technology.
          <br />
          <br />
          Over the years, I’ve worked as a freelance developer on various
          frontend projects, where I honed my skills. More recently, I
          contributed to a language learning module, taking on both frontend and
          full stack responsibilities, integrating technologies like Node.js,
          MongoDB, and Express.js to deliver dynamic, full-featured applications.
          <br />
          <br />
          I enjoy the challenge of turning complex problems into simple, elegant
          solutions. Collaboration, learning, and attention to detail are at the
          core of my development process.
        </p>
      </div>
    </section>
  );
};

export default Hero;
