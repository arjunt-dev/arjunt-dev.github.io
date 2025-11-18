import React from "react";
import { Mail, Linkedin, Github } from "lucide-react";
import { usePortfolioData } from "../utils/usePortfolioData";
import useTheme from "../hooks/useTheme";
import { theme as themes } from "../theme/theme";

const Contact = ({ isVisible }) => {
  const data = usePortfolioData();
  const { darkMode } = useTheme();
  const t = darkMode ? themes.dark : themes.light;

  return (
    <section id="contact" className={`py-20 px-4 ${t.sectionBg}`}>
      <div
        className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
          isVisible.contact ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h2
          className={`text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r ${t.gradient} bg-clip-text text-transparent`}
        >
          Let's Connect
        </h2>

        <p className={`text-xl ${t.textSecondary} mb-12 font-light`}>
          I'm always open to discussing new projects, creative ideas, or opportunities.
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          <a
            href={`mailto:${data.profile.email}`}
            className={`flex items-center gap-3 px-8 py-4 ${t.buttonSecondary} ${
              darkMode ? "text-zinc-100" : "text-zinc-800"
            } rounded-lg shadow-xl ${t.shadow} transition-all duration-300 hover:scale-105`}
          >
            <Mail size={24} /> Email Me
          </a>

          <a
            href={data.profile.linkedin}
            target="_blank"
            className={`flex items-center gap-3 px-8 py-4 ${t.buttonSecondary} ${
              darkMode ? "text-zinc-100" : "text-zinc-800"
            } rounded-lg shadow-xl ${t.shadow} transition-all duration-300 hover:scale-105`}
          >
            <Linkedin size={24} /> LinkedIn
          </a>

          <a
            href={data.profile.github}
            target="_blank"
            className={`flex items-center gap-3 px-8 py-4 ${t.buttonSecondary} ${
              darkMode ? "text-zinc-100" : "text-zinc-800"
            } rounded-lg shadow-xl ${t.shadow} transition-all duration-300 hover:scale-105`}
          >
            <Github size={24} /> GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
