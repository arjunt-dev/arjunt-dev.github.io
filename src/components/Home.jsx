import React from "react";
import { Github, Linkedin, Mail, ChevronRight } from "lucide-react";
import { usePortfolioData } from "../utils/usePortfolioData";
import useTheme from "../hooks/useTheme";
import { theme as themes } from "../theme/theme";

const Home = ({ isVisible, scrollToSection }) => {
  const data = usePortfolioData();
  const { darkMode } = useTheme();
  const t = darkMode ? themes.dark : themes.light;

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div
        className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
          isVisible.home ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="m-6">
          <span
            className={`inline-block px-4 py-2 ${t.accentBg} border ${t.accentBorder} rounded-full ${t.accent} text-sm mb-4 backdrop-blur-sm font-medium`}
          >
            {data.profile.role}
          </span>
        </div>

        <h1
          className={`text-5xl md:text-7xl font-bold pb-2 mb-6 bg-gradient-to-r ${t.gradient} bg-clip-text text-transparent`}
        >
          {data.profile.name}
        </h1>

        <p className={`text-xl md:text-2xl ${t.textSecondary} mb-8 leading-relaxed font-light`}>
          {data.profile.tagline}
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <a
            href={data.profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 px-6 py-3 ${t.buttonPrimary} rounded-lg transition-all duration-300 hover:scale-105 ${
              darkMode ? "text-zinc-100" : "text-white"
            } font-medium`}
          >
            <Github size={20} />
            GitHub
          </a>

          <a
            href={data.profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 px-6 py-3 ${t.buttonPrimary} rounded-lg transition-all duration-300 hover:scale-105 ${
              darkMode ? "text-zinc-100" : "text-white"
            } shadow-lg ${t.shadow} font-medium`}
          >
            <Linkedin size={20} />
            LinkedIn
          </a>

          <a
            href={`mailto:${data.profile.email}`}
            className={`flex items-center gap-2 px-6 py-3 ${t.buttonPrimary} rounded-lg transition-all duration-300 hover:scale-105 ${
              darkMode ? "text-zinc-100" : "text-white"
            } shadow-lg ${t.shadow} font-medium`}
          >
            <Mail size={20} />
            Email
          </a>
        </div>

        <button
          onClick={() => scrollToSection("projects")}
          className={`animate-bounce inline-flex items-center gap-2 ${t.accent} font-medium`}
        >
          View My Work <ChevronRight size={20} />
        </button>
      </div>
    </section>
  );
};

export default Home;
