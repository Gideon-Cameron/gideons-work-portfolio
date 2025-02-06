import { useState } from "react";
import { Link as ScrollLink } from "react-scroll"; // React Scroll for one-page navigation
import { Link as RouterLink, useLocation } from "react-router-dom"; // React Router for multi-page navigation

const Navbar = ({ toggleTheme, theme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Check if on the More Projects page
  const isMoreProjectsPage = location.pathname === "/more-projects";

  return (
    <nav className="bg-gray-900 text-white dark:bg-gray-800 fixed w-full top-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo - Always Links to Home */}
        <RouterLink to="/" className="text-2xl font-bold">
          My Portfolio
        </RouterLink>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        {/* Navbar Links */}
        <ul
          className={`md:flex gap-6 absolute md:static top-14 left-0 w-full bg-gray-900 dark:bg-gray-800 md:bg-transparent transition-all duration-300 ${
            isOpen ? "block" : "hidden"
          } md:flex`}
        >
          {/* If on More Projects Page, Use React Router Links */}
          {isMoreProjectsPage ? (
            <>
              <li>
                <RouterLink
                  to="/"
                  className="block p-3 cursor-pointer hover:text-blue-400"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </RouterLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <ScrollLink
                  to="hero"
                  smooth={true}
                  duration={500}
                  offset={-60}
                  aria-label="Go to Hero"
                  className="block p-3 cursor-pointer hover:text-blue-400"
                  onClick={() => setIsOpen(false)}
                >
                  About
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="skills"
                  smooth={true}
                  duration={500}
                  offset={-60}
                  aria-label="Go to Skills"
                  className="block p-3 cursor-pointer hover:text-blue-400"
                  onClick={() => setIsOpen(false)}
                >
                  Skills
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="projects"
                  smooth={true}
                  duration={500}
                  offset={-60}
                  aria-label="Go to Projects"
                  className="block p-3 cursor-pointer hover:text-blue-400"
                  onClick={() => setIsOpen(false)}
                >
                  Projects
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="contact"
                  smooth={true}
                  duration={500}
                  offset={-60}
                  aria-label="Go to Contact"
                  className="block p-3 cursor-pointer hover:text-blue-400"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="footer"
                  smooth={true}
                  duration={500}
                  offset={-60}
                  aria-label="Go to Footer"
                  className="block p-3 cursor-pointer hover:text-blue-400"
                  onClick={() => setIsOpen(false)}
                >
                  Footer
                </ScrollLink>
              </li>
            </>
          )}
        </ul>

        {/* Light/Dark Mode Toggle */}
        <button
          onClick={toggleTheme}
          className="ml-4 p-2 rounded-full border border-white dark:border-gray-300"
        >
          {theme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
