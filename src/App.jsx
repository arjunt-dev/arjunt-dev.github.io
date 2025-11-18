import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import { ThemeProvider } from "./context/ThemeContext";
import { useSectionObserver } from "./utils/useSectionObserver";
import { theme as themes } from "./theme/theme";
import useTheme from "./hooks/useTheme";

const AppContent = () => {
  const visible = useSectionObserver();
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const { darkMode } = useTheme();
  const t = darkMode ? themes.dark : themes.light;

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
    setActiveSection(id);
  };

  return (
    <div className={`min-h-screen ${t.bg} ${t.text} transition-colors duration-500`}>
      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        scrollToSection={scrollToSection}
      />

      <Home isVisible={visible} scrollToSection={scrollToSection} />
      <About isVisible={visible} />
      <Experience isVisible={visible} />
      <Projects isVisible={visible} />
      <Skills isVisible={visible} />
      <Education isVisible={visible} />
      <Contact isVisible={visible} />

      <Footer />
    </div>
  );
};

const App = () => (
  <ThemeProvider>
    <AppContent />
  </ThemeProvider>
);

export default App;
