import React from "react";
import { GraduationCap } from "lucide-react";
import { usePortfolioData } from "../utils/usePortfolioData";
import useTheme from "../hooks/useTheme";
import { theme as themes } from "../theme/theme";

const Education = ({ isVisible }) => {
  const data = usePortfolioData();
  const { darkMode } = useTheme();
  const t = darkMode ? themes.dark : themes.light;

  return (
    <section id="education" className="py-20 px-4">
      <div
        className={`max-w-6xl mx-auto transition-all duration-1000 ${
          isVisible.education ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h2
          className={`text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r ${t.gradient} bg-clip-text text-transparent`}
        >
          Education
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {data.education.map((edu, idx) => (
            <div
              key={idx}
              className={`${t.cardBg} border ${t.cardBorder} rounded-2xl p-8 ${t.cardHover} shadow-xl ${t.shadow} backdrop-blur-sm`}
            >
              <GraduationCap className={`${t.accent} mb-4`} size={40} />

              <h3 className={`text-2xl font-bold mb-2 ${t.text}`}>{edu.degree}</h3>
              <p className={`text-lg ${t.textSecondary}`}>{edu.institution}</p>
              <p className={`text-sm ${t.textMuted}`}>{edu.period}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
