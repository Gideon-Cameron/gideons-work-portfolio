import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import MoreProjects from "./pages/MoreProjects";
import Contact from "./Components/Contact";
import Footer from "./components/Footer";
import { HelmetProvider } from "react-helmet-async";

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <HelmetProvider>
    <Routes>
      {/* Home Page */}
      <Route
        path="/"
        element={
          <div className="bg-white text-gray-900 dark:bg-gray-900 dark:text-white min-h-screen">
            <Navbar toggleTheme={toggleTheme} theme={theme} />
            <Hero />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
          </div>
        }
      />

      {/* More Projects Page */}
      <Route
        path="/more-projects"
        element={<MoreProjects toggleTheme={toggleTheme} theme={theme} />}
      />
    </Routes>
    </HelmetProvider>
  );
}

export default App;
