import { Menu, X, Sun, Moon } from "lucide-react";
import useTheme from "../hooks/useTheme";
import { theme as themes } from "../theme/theme";

const sections = [
  "home",
  "about",
  "experience",
  "projects",
  "skills",
  "contact",
];

const Navbar = ({
  activeSection,
  setActiveSection,
  isMenuOpen,
  setIsMenuOpen,
  scrollToSection,
}) => {
  const { darkMode, setDarkMode } = useTheme();
  const t = darkMode ? themes.dark : themes.light;

  return (
    <nav
      className={`fixed top-0 w-full ${t.navBg} backdrop-blur-lg z-50 border-b ${t.navBorder}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <h1
            className={`text-2xl font-bold bg-gradient-to-r ${t.gradient} bg-clip-text text-transparent`}
          >
            AT
          </h1>

          <div className="hidden md:flex items-center gap-6">
            {sections.map((sec) => (
              <button
                key={sec}
                onClick={() => {
                  scrollToSection(sec);
                  setActiveSection(sec);
                }}
                className={`capitalize ${
                  activeSection === sec ? t.accent : t.textMuted
                } hover:${t.accent}`}
              >
                {sec}
              </button>
            ))}

            <button
              className={`p-2 rounded-lg ${t.buttonSecondary}`}
              onClick={() => setDarkMode(!darkMode)}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <button
              className={`p-2 rounded-lg ${t.buttonSecondary}`}
              onClick={() => setDarkMode(!darkMode)}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className={`md:hidden ${t.navBg} border-t ${t.navBorder}`}>
          {sections.map((sec) => (
            <button
              key={sec}
              onClick={() => {
                scrollToSection(sec);
                setIsMenuOpen(false);
                setActiveSection(sec);
              }}
              className={`w-full text-left px-4 py-3 capitalize ${t.buttonSecondary}`}
            >
              {sec}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
