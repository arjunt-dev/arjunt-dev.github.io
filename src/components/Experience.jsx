import React from "react";
import { Briefcase, ChevronRight } from "lucide-react";
import { usePortfolioData } from "../utils/usePortfolioData";
import useTheme from "../hooks/useTheme";
import { theme as themes } from "../theme/theme";

const Experience = ({ isVisible }) => {
  const data = usePortfolioData();
  const { darkMode } = useTheme();
  const t = darkMode ? themes.dark : themes.light;

  return (
    <section id="experience" className={`py-20 px-4 ${t.sectionBg}`}>
      <div
        className={`max-w-6xl mx-auto transition-all duration-1000 ${
          isVisible.experience ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h2
          className={`text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r ${t.gradient} bg-clip-text text-transparent`}
        >
          Experience
        </h2>

        <div className="space-y-8">
          {data.experience.map((job, idx) => (
            <div
              key={idx}
              className={`${t.cardBg} backdrop-blur-sm border ${t.cardBorder} rounded-2xl p-8 ${t.cardHover} shadow-xl ${t.shadow} transition-all duration-300 hover:scale-[1.01]`}
            >
              <div className="flex items-start gap-4 mb-4">
                <Briefcase className={`${t.accent} mt-1`} size={24} />

                <div>
                  <h3 className={`text-2xl font-bold ${t.accent}`}>{job.title}</h3>
                  <p className={`text-lg ${t.textSecondary}`}>{job.company}</p>
                  <p className={`text-sm ${t.textMuted}`}>
                    {job.period} | {job.location}
                  </p>
                </div>
              </div>

              <ul className="space-y-2 ml-10">
                {job.points.map((point, i) => (
                  <li key={i} className={`flex items-start gap-2 ${t.textSecondary} font-light`}>
                    <ChevronRight className={`${t.accent} mt-1`} size={16} />
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

export default Experience;
