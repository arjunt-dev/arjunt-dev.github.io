import { Award, Rocket } from "lucide-react";
import { usePortfolioData } from "../utils/usePortfolioData";
import useTheme from "../hooks/useTheme";
import { theme as themes } from "../theme/theme";

const About = ({ isVisible }) => {
  const data = usePortfolioData();
  const { darkMode } = useTheme();
  const t = darkMode ? themes.dark : themes.light;

  return (
    <section id="about" className="py-20 px-4">
      <div
        className={`max-w-6xl mx-auto transition-all duration-1000 ${
          isVisible.about
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <h2
          className={`text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r ${t.gradient} bg-clip-text text-transparent`}
        >
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div
            className={`${t.cardBg} backdrop-blur-sm border ${t.cardBorder} rounded-2xl p-8 ${t.cardHover} shadow-xl ${t.shadow}`}
          >
            <Award className={`${t.accent} mb-4`} size={40} />
            <h3 className={`text-2xl font-bold mb-4 ${t.text}`}>
              Professional Summary
            </h3>
            <p className={`${t.textSecondary} leading-relaxed font-light`}>
              {data.about.summary}
            </p>
          </div>

          <div
            className={`${t.cardBg} backdrop-blur-sm border ${t.cardBorder} rounded-2xl p-8 ${t.cardHover} shadow-xl ${t.shadow}`}
          >
            <Rocket className={`${t.accent} mb-4`} size={40} />
            <h3 className={`text-2xl font-bold mb-4 ${t.text}`}>
              Current Focus
            </h3>
            <p className={`${t.textSecondary} leading-relaxed mb-4 font-light`}>
              {data.about.focus}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
