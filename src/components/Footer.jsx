import { usePortfolioData } from "../utils/usePortfolioData";
import useTheme from "../hooks/useTheme";
import { theme as themes } from "../theme/theme";

const Footer = () => {
  const data = usePortfolioData();
  const { darkMode } = useTheme();
  const t = darkMode ? themes.dark : themes.light;

  return (
    <footer className={`py-8 px-4 border-t ${t.navBorder}`}>
      <div className={`max-w-6xl mx-auto text-center ${t.textMuted}`}>
        <p className="font-light">{data.footer?.copyright}</p>
        <p className="mt-2 text-sm font-light">{data.footer?.subtitle}</p>
      </div>
    </footer>
  );
};

export default Footer;
