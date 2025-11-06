import { useState, useEffect } from "react";
import Navbar from "./Header/Navbar/Navbar.jsx";
import Hero from "./Header/Hero/Hero.jsx";
import AboutMe from "./Content/AboutMe/AboutMe.jsx";
import Projects from "./Content/Projects/Projects.jsx";
import Skills from "./Content//Skills/Skills.jsx";
import Contact from "./Footer/Contact/Contact.jsx";
import Footer from "./Footer/Footer.jsx";
import {Personal_Info, About_Me, Contact_Info, Contact_Links, Personal_Projects, Credited_Projects, My_Skills} from "./info.js";

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
        info={Personal_Info}
      />
      <Hero info={Personal_Info} skillInfo={My_Skills}/>
      <AboutMe info={About_Me}/>
      <Projects sectionTitle="Projects" info={Personal_Projects}/>
      <Projects sectionTitle="QA Credits" info={Credited_Projects}/>
      <Contact 
        darkMode={darkMode}
        info={Contact_Info}
        links={Contact_Links}
        />
      <Footer info={Personal_Info}/>
    </div>
  );
}