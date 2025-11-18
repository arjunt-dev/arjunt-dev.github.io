import React from "react";
import { Code, ChevronRight, Github } from "lucide-react";
import { usePortfolioData } from "../utils/usePortfolioData";
import useTheme from "../hooks/useTheme";
import { theme as themes } from "../theme/theme";

const Projects = ({ isVisible }) => {
  const data = usePortfolioData();
  const { darkMode } = useTheme();
  const t = darkMode ? themes.dark : themes.light;

  return (
    <section id="projects" className="py-20 px-4">
      <div
        className={`max-w-6xl mx-auto transition-all duration-1000 ${
          isVisible.projects
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <h2
          className={`text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r ${t.gradient} bg-clip-text text-transparent`}
        >
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
          {data.projects.map((project, idx) => (
            <div
              key={idx}
              className={`${t.cardBg} border ${t.cardBorder} rounded-2xl p-6 ${t.cardHover} shadow-xl ${t.shadow}
      relative w-full max-w-[420px] min-h-[450px]`}
            >
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  className="absolute top-4 right-4 opacity-80 hover:opacity-100 hover:scale-110 transition"
                >
                  <Github size={22} className={t.accent} />
                </a>
              )}

              <Code className={`${t.accent} mb-4`} size={32} />

              <h3 className={`text-xl font-bold mb-2 ${t.text}`}>
                {project.title}
              </h3>
              <p className={`text-sm ${t.accent} font-medium`}>
                {project.tech}
              </p>
              <p className={`text-xs ${t.textMuted} mb-4`}>{project.period}</p>

              <ul className="space-y-2">
                {project.points.map((point, i) => (
                  <li
                    key={i}
                    className={`flex gap-2 ${t.textSecondary} text-sm`}
                  >
                    <ChevronRight size={14} className={t.accent} />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
