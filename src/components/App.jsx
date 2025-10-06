import { useState, useEffect } from "react";
import Navbar from "./Header/Navbar/Navbar.jsx";
import Hero from "./Header/Hero/Hero.jsx";
import AboutMe from "./Content/AboutMe.jsx";
import Projects from "./Content/Projects/Projects.jsx";
import Skills from "./Content//Skills/Skills.jsx";
import Contact from "./Footer/Contact/Contact.jsx";
import Footer from "./Footer/Footer.jsx";

export default function App() {
  const [expanded, setExpanded] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  // Load theme preference from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setDarkMode(savedTheme === "dark");
    }
  }, []);

  // Save theme preference when it changes
  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <div className={darkMode ? "theme-dark" : "theme-light"}>
      {/* Navbar */}
      <Navbar 
        darkMode={darkMode}
        toggleTheme={toggleTheme}
        expanded={expanded}
        setExpanded={setExpanded}
      />
      <Hero />
      <AboutMe />
      <Projects />
      <Skills />
      <Contact darkMode={darkMode}/>
      <Footer />
    </div>
  );
}