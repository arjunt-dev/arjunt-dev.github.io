import React from "react";
import { usePortfolioData } from "../utils/usePortfolioData";
import useTheme from "../hooks/useTheme";
import { theme as themes } from "../theme/theme";

const Skills = ({ isVisible }) => {
  const data = usePortfolioData();
  const { darkMode } = useTheme();
  const t = darkMode ? themes.dark : themes.light;

  return (
    <section id="skills" className={`py-20 px-4 ${t.sectionBg}`}>
      <div
        className={`max-w-6xl mx-auto transition-all duration-1000 ${
          isVisible.skills
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <h2
          className={`text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r ${t.gradient} bg-clip-text text-transparent`}
        >
          Technical Skills
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
          {data.skills.map((category, idx) => (
            <div
              key={idx}
              className={`${t.cardBg} border ${t.cardBorder} rounded-2xl p-6 ${t.cardHover} shadow-xl ${t.shadow}
      w-full max-w-[420px] min-h-[200px]`}
            >
              <h3 className={`text-xl font-bold mb-4 ${t.accent}`}>
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {category.items.map((skill, i) => (
                  <span
                    key={i}
                    className={`px-3 py-1 ${t.skillBg} rounded-full text-sm ${t.textSecondary} font-light`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
