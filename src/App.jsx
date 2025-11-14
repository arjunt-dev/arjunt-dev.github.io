import React, { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  ExternalLink,
  Menu,
  X,
  Code,
  Briefcase,
  GraduationCap,
  Rocket,
  Award,
  ChevronRight,
  Sun,
  Moon,
} from "lucide-react";
import { Download } from "lucide-react";

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isVisible, setIsVisible] = useState({});
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting,
          }));
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
    setActiveSection(id);
  };

  const theme = {
    dark: {
      bg: "bg-gradient-to-br from-zinc-900 via-neutral-900 to-stone-900",
      cardBg: "bg-zinc-800/40",
      cardBorder: "border-zinc-700/40",
      cardHover: "hover:border-zinc-600 hover:shadow-zinc-800/50",
      text: "text-zinc-50",
      textSecondary: "text-zinc-300",
      textMuted: "text-zinc-500",
      navBg: "bg-zinc-900/95",
      navBorder: "border-zinc-800/50",
      accent: "text-zinc-400",
      accentBg: "bg-zinc-700/20",
      accentBorder: "border-zinc-600/30",
      buttonPrimary: "bg-zinc-700 hover:bg-zinc-600",
      buttonSecondary: "bg-zinc-800/60 hover:bg-zinc-700/60",
      skillBg: "bg-zinc-800/40 hover:bg-zinc-700/60 hover:text-zinc-200",
      gradient: "from-zinc-400 via-neutral-400 to-stone-400",
      sectionBg: "bg-zinc-900/40",
      shadow: "shadow-zinc-900/50",
    },
    light: {
      bg: "bg-gradient-to-br from-stone-100 via-neutral-100 to-zinc-100",
      cardBg: "bg-white/70",
      cardBorder: "border-stone-200",
      cardHover: "hover:border-stone-400 hover:shadow-stone-300/50",
      text: "text-zinc-800",
      textSecondary: "text-zinc-700",
      textMuted: "text-zinc-500",
      navBg: "bg-white/95",
      navBorder: "border-stone-200/50",
      accent: "text-zinc-600",
      accentBg: "bg-stone-100/80",
      accentBorder: "border-stone-300",
      buttonPrimary: "bg-zinc-700 hover:bg-zinc-800",
      buttonSecondary: "bg-stone-200/80 hover:bg-stone-300/80",
      skillBg: "bg-stone-100/80 hover:bg-stone-200 hover:text-zinc-800",
      gradient: "from-zinc-700 via-neutral-700 to-stone-700",
      sectionBg: "bg-stone-50/60",
      shadow: "shadow-stone-200/50",
    },
  };

  const t = darkMode ? theme.dark : theme.light;

  return (
    <div
      className={`min-h-screen ${t.bg} ${t.text} transition-colors duration-500`}
    >
      <nav
        className={`fixed top-0 w-full ${t.navBg} backdrop-blur-lg z-50 border-b ${t.navBorder} transition-colors duration-500`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div
              className={`text-2xl font-bold bg-gradient-to-r ${t.gradient} bg-clip-text text-transparent`}
            >
              AT
            </div>

            <div className="hidden md:flex items-center space-x-6">
              {[
                "home",
                "about",
                "experience",
                "projects",
                "skills",
                "contact",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-all duration-300 ${
                    activeSection === item ? t.accent : t.textMuted
                  } hover:${t.accent} font-medium`}
                >
                  {item}
                </button>
              ))}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-lg ${t.buttonSecondary} transition-all duration-300`}
                aria-label="Toggle theme"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>

            <div className="md:hidden flex items-center gap-2">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-lg ${t.buttonSecondary} transition-all duration-300`}
                aria-label="Toggle theme"
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
            {[
              "home",
              "about",
              "experience",
              "projects",
              "skills",
              "contact",
            ].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`block w-full text-left px-4 py-3 capitalize ${t.buttonSecondary} transition-colors`}
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>
      <section
        id="home"
        className="min-h-screen flex items-center justify-center px-4 pt-16"
      >
        <div
          className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
            isVisible.home
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="m-6">
            <span
              className={`inline-block px-4 py-2 ${t.accentBg} border ${t.accentBorder} rounded-full ${t.accent} text-sm mb-4 backdrop-blur-sm font-medium`}
            >
              Full Stack Developer & Security Analyst
            </span>
          </div>
          <h1
            className={`text-5xl md:text-7xl font-bold pb-2 mb-6 bg-gradient-to-r ${t.gradient} bg-clip-text text-transparent`}
          >
            Arjun T
          </h1>

          <p
            className={`text-xl md:text-2xl ${t.textSecondary} mb-8 leading-relaxed font-light`}
          >
            Building secure, scalable web applications with Django, React &
            Modern ML Integration
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a
              href="https://github.com/arjunt-dev"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 px-6 py-3 ${
                t.buttonPrimary
              } rounded-lg transition-all duration-300 hover:scale-105 ${
                darkMode ? "text-zinc-100" : "text-white"
              } font-medium`}
            >
              <Github size={20} />
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/arjun-t-762726220"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 px-6 py-3 ${
                t.buttonPrimary
              } ${
                darkMode ? "text-zinc-100" : "text-white"
              } rounded-lg transition-all duration-300 hover:scale-105 shadow-lg ${
                t.shadow
              } font-medium`}
            >
              <Linkedin size={20} />
              LinkedIn
            </a>
            <a
              href="mailto:mailtoarjunt@zohomail.in"
              className={`flex items-center gap-2 px-6 py-3 ${
                t.buttonPrimary
              } ${
                darkMode ? "text-zinc-100" : "text-white"
              } rounded-lg transition-all duration-300 hover:scale-105 shadow-lg ${
                t.shadow
              } font-medium`}
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
              className={`${t.cardBg} backdrop-blur-sm border ${t.cardBorder} rounded-2xl p-8 ${t.cardHover} transition-all duration-300 shadow-xl ${t.shadow}`}
            >
              <Award className={`${t.accent} mb-4`} size={40} />
              <h3 className={`text-2xl font-bold mb-4 ${t.text}`}>
                Professional Summary
              </h3>
              <p className={`${t.textSecondary} leading-relaxed font-light`}>
                Full Stack Developer & Security Analyst with 2+ years of
                experience building secure, scalable web applications using
                Django, React, REST APIs, and Docker. Strong background in
                integrating ML models, optimizing databases, and developing
                mission-critical systems for enterprise environments.
              </p>
            </div>
            <div
              className={`${t.cardBg} backdrop-blur-sm border ${t.cardBorder} rounded-2xl p-8 ${t.cardHover} transition-all duration-300 shadow-xl ${t.shadow}`}
            >
              <Rocket className={`${t.accent} mb-4`} size={40} />
              <h3 className={`text-2xl font-bold mb-4 ${t.text}`}>
                Current Focus
              </h3>
              <p
                className={`${t.textSecondary} leading-relaxed mb-4 font-light`}
              >
                Currently leading a tech team at Cybios Technologies while
                pursuing Master of Computer Applications at Amrita Vishwa
                Vidyapeetham. Passionate about modern architectures, automation,
                and continuous learning.
              </p>
              <div
                className={`flex items-center gap-2 ${t.accent} font-medium`}
              >
                <Phone size={18} />
                <span>+91 9961041854</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className={`py-20 px-4 ${t.sectionBg}`}>
        <div
          className={`max-w-6xl mx-auto transition-all duration-1000 ${
            isVisible.experience
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h2
            className={`text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r ${t.gradient} bg-clip-text text-transparent`}
          >
            Experience
          </h2>
          <div className="space-y-8">
            {[
              {
                title: "Tech Team Lead",
                company: "Cybios Technologies",
                period: "June 2025 - Present",
                location: "Ernakulam, Kerala",
                points: [
                  "Leading a team of interns and developers in building scalable, secure web-based applications across multiple projects",
                  "Mentoring junior developers, conducting code reviews, and ensuring adherence to best practices in Django, React, and REST API development",
                ],
              },
              {
                title: "Security Analyst (Developer)",
                company: "Cybios Technologies",
                period: "November 2023 - June 2025",
                location: "Ernakulam, Kerala",
                points: [
                  "Developed a scalable Django + MySQL web application for automated pattern-based question paper generation with proctored examination",
                  "Engineered a Command and Control server dashboard using Django Rest Framework + React, significantly enhancing system performance and security",
                  "Collaborated with backend and frontend teams to optimize API performance and improve system reliability",
                ],
              },
              {
                title: "Programmer Intern",
                company: "Cybios Technologies",
                period: "August 2023 - November 2023",
                location: "Ernakulam, Kerala",
                points: [
                  "Built a Django application to control SDR hardware operations, improving automation and system accuracy",
                ],
              },
            ].map((job, idx) => (
              <div
                key={idx}
                className={`${t.cardBg} backdrop-blur-sm border ${t.cardBorder} rounded-2xl p-8 ${t.cardHover} transition-all duration-300 hover:scale-[1.01] shadow-xl ${t.shadow}`}
              >
                <div className="flex items-start gap-4 mb-4">
                  <Briefcase
                    className={`${t.accent} flex-shrink-0 mt-1`}
                    size={24}
                  />
                  <div className="flex-1">
                    <h3 className={`text-2xl font-bold ${t.accent}`}>
                      {job.title}
                    </h3>
                    <p className={`text-lg ${t.textSecondary} font-medium`}>
                      {job.company}
                    </p>
                    <p className={`text-sm ${t.textMuted}`}>
                      {job.period} | {job.location}
                    </p>
                  </div>
                </div>
                <ul className="space-y-2 ml-10">
                  {job.points.map((point, i) => (
                    <li
                      key={i}
                      className={`${t.textSecondary} flex items-start gap-2 font-light`}
                    >
                      <ChevronRight
                        className={`${t.accent} flex-shrink-0 mt-1`}
                        size={16}
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Privacy-Focused ML-Driven Chrome Extension Backend",
                tech: "FastAPI, Scikit-Learn, SQLite",
                period: "November 2025 - Present",
                points: [
                  "Built secure FastAPI backend with Argon2 hashing, JWT authentication, and OTP verification",
                  "Integrated high-accuracy ensemble model for real-time phishing detection trained on 100K+ URLs",
                ],
              },
              {
                title: "Automatic Question Paper Generator",
                tech: "Django, NLTK, PyPDF2, Bootstrap",
                period: "February 2024 - April 2024",
                points: [
                  "Built end-to-end system for automatic question generation from PDFs using NLP",
                  "Implemented proctored online exams with automated scoring and email notifications",
                ],
              },
              {
                title: "Animal Intrusion Detection System",
                tech: "Django, PyTorch (YOLO), SQLite, Twilio",
                period: "July 2022 - May 2023",
                points: [
                  "ML-powered wild animal intrusion alert system with YOLO detection",
                  "Twilio SMS alerts with GPS-based notifications for forest officials",
                ],
              },
            ].map((project, idx) => (
              <div
                key={idx}
                className={`${t.cardBg} backdrop-blur-sm border ${t.cardBorder} rounded-2xl p-6 ${t.cardHover} transition-all duration-300 hover:scale-105 shadow-xl ${t.shadow}`}
              >
                <Code className={`${t.accent} mb-4`} size={32} />
                <h3 className={`text-xl font-bold mb-2 ${t.text}`}>
                  {project.title}
                </h3>
                <p className={`text-sm ${t.accent} mb-2 font-medium`}>
                  {project.tech}
                </p>
                <p className={`text-xs ${t.textMuted} mb-4`}>
                  {project.period}
                </p>
                <ul className="space-y-2">
                  {project.points.map((point, i) => (
                    <li
                      key={i}
                      className={`text-sm ${t.textSecondary} flex items-start gap-2 font-light`}
                    >
                      <ChevronRight
                        className={`${t.accent} flex-shrink-0 mt-0.5`}
                        size={14}
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Languages",
                skills: [
                  "Python",
                  "JavaScript",
                  "TypeScript",
                  "C",
                  "C++",
                  "Java",
                ],
              },
              {
                title: "Frameworks",
                skills: [
                  "Django",
                  "DRF",
                  "FastAPI",
                  "React",
                  "Angular",
                  "jQuery",
                  "Bootstrap",
                ],
              },
              {
                title: "ML/AI",
                skills: [
                  "TensorFlow",
                  "PyTorch",
                  "Scikit-Learn",
                  "NLTK",
                  "NLP",
                ],
              },
              {
                title: "Databases",
                skills: ["MySQL", "PostgreSQL", "MSSQL", "SQLite"],
              },
              {
                title: "Tools",
                skills: [
                  "Git",
                  "GitHub",
                  "Docker",
                  "Redis",
                  "Celery",
                  "VS Code",
                ],
              },
              {
                title: "Other",
                skills: [
                  "REST APIs",
                  "WebSockets",
                  "Microservices",
                  "ML Integration",
                ],
              },
            ].map((category, idx) => (
              <div
                key={idx}
                className={`${t.cardBg} backdrop-blur-sm border ${t.cardBorder} rounded-2xl p-6 ${t.cardHover} transition-all duration-300 shadow-xl ${t.shadow}`}
              >
                <h3 className={`text-xl font-bold mb-4 ${t.accent}`}>
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span
                      key={i}
                      className={`px-3 py-1 ${t.skillBg} rounded-full text-sm ${t.textSecondary} transition-all duration-300 cursor-default font-light`}
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

      <section id="education" className="py-20 px-4">
        <div
          className={`max-w-6xl mx-auto transition-all duration-1000 ${
            isVisible.education
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h2
            className={`text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r ${t.gradient} bg-clip-text text-transparent`}
          >
            Education
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div
              className={`${t.cardBg} backdrop-blur-sm border ${t.cardBorder} rounded-2xl p-8 ${t.cardHover} transition-all duration-300 shadow-xl ${t.shadow}`}
            >
              <GraduationCap className={`${t.accent} mb-4`} size={40} />
              <h3 className={`text-2xl font-bold mb-2 ${t.text}`}>
                Master of Computer Applications
              </h3>
              <p className={`text-lg ${t.textSecondary} font-medium`}>
                Amrita Vishwa Vidyapeetham
              </p>
              <p className={`text-sm ${t.textMuted} font-light`}>
                Amrita AHEAD Online | October 2024 - Present
              </p>
            </div>
            <div
              className={`${t.cardBg} backdrop-blur-sm border ${t.cardBorder} rounded-2xl p-8 ${t.cardHover} transition-all duration-300 shadow-xl ${t.shadow}`}
            >
              <GraduationCap className={`${t.accent} mb-4`} size={40} />
              <h3 className={`text-2xl font-bold mb-2 ${t.text}`}>
                B.Tech in Computer Science
              </h3>
              <p className={`text-lg ${t.textSecondary} font-medium`}>
                Jawaharlal College of Engineering and Technology
              </p>
              <p className={`text-sm ${t.textMuted} font-light`}>
                Palakkad, Kerala | June 2019 - June 2023 | GPA: 7.34
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className={`py-20 px-4 ${t.sectionBg}`}>
        <div
          className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
            isVisible.contact
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h2
            className={`text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r ${t.gradient} bg-clip-text text-transparent`}
          >
            Let's Connect
          </h2>
          <p className={`text-xl ${t.textSecondary} mb-12 font-light`}>
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="mailto:mailtoarjunt@zohomail.in"
              className={`flex items-center gap-3 px-8 py-4 ${
                t.buttonSecondary
              } ${
                darkMode ? "text-zinc-100" : "text-zinc-800"
              } rounded-lg transition-all duration-300 hover:scale-105 shadow-xl ${
                t.shadow
              } font-medium`}
            >
              <Mail size={24} />
              <span className="text-lg font-semibold">Email Me</span>
            </a>
            <a
              href="https://linkedin.com/in/arjun-t-762726220"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-3 px-8 py-4 ${
                t.buttonSecondary
              } rounded-lg transition-all duration-300 hover:scale-105 shadow-xl ${
                t.shadow
              } ${darkMode ? "text-zinc-100" : "text-zinc-800"} font-medium`}
            >
              <Linkedin size={24} />
              <span className="text-lg font-semibold">LinkedIn</span>
            </a>
            <a
              href="https://github.com/arjunt-dev"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-3 px-8 py-4 ${
                t.buttonSecondary
              } rounded-lg transition-all duration-300 hover:scale-105 shadow-xl ${
                t.shadow
              } ${darkMode ? "text-zinc-100" : "text-zinc-800"} font-medium`}
            >
              <Github size={24} />
              <span className="text-lg font-semibold">GitHub</span>
            </a>
          </div>
        </div>
      </section>
      <footer className={`py-8 px-4 border-t ${t.navBorder}`}>
        <div className={`max-w-6xl mx-auto text-center ${t.textMuted}`}>
          <p className="font-light">© 2025 Arjun T</p>
          <p className="mt-2 text-sm font-light">
            Full Stack Developer | Security Analyst | ML Enthusiast
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
