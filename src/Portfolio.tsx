import React, { useState, useEffect, useRef } from "react";
import caption from "../src/img/caption.jpg";
import block from "../src/img/blockseblock.png";
import dfinance from "../src/img/dfinance.png";
import learn from "../src/img/learnblockseblock.png";
import stringly from "../src/img/stringly.jpg";
import xpedtion from "../src/img/xpedition.png";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Download,
  Send,
  Code,
  Briefcase,
  User,
  Home,
  GraduationCap,
  BookOpen,
  Rocket,
  Star,
  Zap,
  Coffee,
  TrendingUp,
  Smartphone,
  Globe,
  Terminal,
  Layers,
  X,
} from "lucide-react";
import shreya from "../src/img/shreya.jpg";
interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
}

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<Particle[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  // Add this state at the top of your component
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Define categories
  const categories = [
    { id: "all", name: "All Skills", icon: "🎯" },
    { id: "frontend", name: "Frontend", icon: "🎨" },
    { id: "backend", name: "Backend", icon: "⚙️" },
    { id: "database", name: "Database", icon: "🗄️" },
    { id: "tools", name: "Tools & Others", icon: "🔧" },
  ];

  // Updated skills array with categories
  const skills = [
    // Frontend
    {
      name: "React.js",
      icon: "⚛️",
      category: "frontend",
      level: 90,
      yearsOfExperience: "3+ years",
      description:
        "Building dynamic and responsive user interfaces with React hooks, context API, and modern React patterns.",
    },
    {
      name: "Next.js",
      icon: "▲",
      category: "frontend",
      level: 85,
      yearsOfExperience: "2+ years",
      description:
        "Developing server-side rendered applications with routing, API routes, and optimized performance.",
    },
    {
      name: "TypeScript",
      icon: "📘",
      category: "frontend",
      level: 88,
      yearsOfExperience: "2+ years",
      description:
        "Writing type-safe code with strong typing, interfaces, and advanced TypeScript features.",
    },
    {
      name: "Tailwind CSS",
      icon: "🎨",
      category: "frontend",
      level: 92,
      yearsOfExperience: "3+ years",
      description:
        "Creating beautiful, responsive designs with utility-first CSS framework and custom configurations.",
    },
    {
      name: "JavaScript (ES6+)",
      icon: "🟨",
      category: "frontend",
      level: 95,
      yearsOfExperience: "4+ years",
      description:
        "Mastering modern JavaScript including async/await, promises, destructuring, and functional programming.",
    },

    {
      name: "React Native",
      description:
        "Developed cross-platform mobile applications with optimized performance and native integrations.",
      yearsOfExperience: 1,
      category: "frontend",
      level: 70,
      icon: "📱",
    },

    {
      name: "HTML5 & CSS3",
      icon: "🌐",
      category: "frontend",
      level: 95,
      yearsOfExperience: "4+ years",
      description:
        "Semantic HTML markup and advanced CSS techniques including animations, grid, and flexbox.",
    },

    // Frontend
    {
      name: "Bootstrap",
      icon: "🅱️",
      category: "frontend",
      level: 80,
      yearsOfExperience: "2+ years",
      description:
        "Creating responsive, mobile-first web designs using Bootstrap's grid system, components, and utility classes.",
    },
    {
      name: "Redux",
      icon: "🔄",
      category: "frontend",
      level: 75,
      yearsOfExperience: "1+ year",
      description:
        "State management for React applications using Redux Toolkit, actions, reducers, and middleware for complex data flows.",
    },
    {
      name: "Sass/SCSS",
      icon: "💅",
      category: "frontend",
      level: 82,
      yearsOfExperience: "2+ years",
      description:
        "Writing maintainable CSS with variables, mixins, nesting, and advanced Sass features for scalable styling.",
    },

    // Backend

    {
      name: "JWT Authentication",
      icon: "🔐",
      category: "backend",
      level: 85,
      yearsOfExperience: "2+ years",
      description:
        "Implementing secure authentication and authorization using JSON Web Tokens and OAuth strategies.",
    },
    {
      name: "Socket.io",
      icon: "🔌",
      category: "backend",
      level: 72,
      yearsOfExperience: "1+ year",
      description:
        "Building real-time, bidirectional communication for chat applications, notifications, and live updates.",
    },

    // Tools & Others

    {
      name: "CI/CD",
      icon: "🔄",
      category: "tools",
      level: 68,
      yearsOfExperience: "1+ year",
      description:
        "Automating deployment pipelines with GitHub Actions, Jenkins, and continuous integration workflows.",
    },
    {
      name: "Vercel/Netlify",
      icon: "▲",
      category: "tools",
      level: 85,
      yearsOfExperience: "2+ years",
      description:
        "Deploying and hosting web applications with automatic deployments, serverless functions, and edge optimization.",
    },
    {
      name: "npm/Yarn",
      icon: "📦",
      category: "tools",
      level: 90,
      yearsOfExperience: "3+ years",
      description:
        "Package management, dependency handling, scripts automation, and managing project configurations.",
    },
    {
      name: "ESLint/Prettier",
      icon: "✨",
      category: "tools",
      level: 88,
      yearsOfExperience: "2+ years",
      description:
        "Code quality and formatting tools for consistent, error-free code across team projects.",
    },
    {
      name: "Responsive Design",
      icon: "📱",
      category: "frontend",
      level: 95,
      yearsOfExperience: "3+ years",
      description:
        "Creating fluid layouts that work seamlessly across all devices using media queries and flexible grids.",
    },
    // Backend
    {
      name: "Node.js",
      icon: "🟢",
      category: "backend",
      level: 85,
      yearsOfExperience: "3+ years",
      description:
        "Building scalable server-side applications with Express.js, RESTful APIs, and microservices architecture.",
    },
    {
      name: "Express.js",
      icon: "🚂",
      category: "backend",
      level: 85,
      yearsOfExperience: "3+ years",
      description:
        "Creating robust backend APIs with middleware, routing, authentication, and error handling.",
    },
    {
      name: "RESTful APIs",
      icon: "🔌",
      category: "backend",
      level: 90,
      yearsOfExperience: "2+ years",
      description:
        "Designing and implementing RESTful web services with proper HTTP methods and status codes.",
    },

    // Database
    {
      name: "MongoDB",
      icon: "🍃",
      category: "database",
      level: 82,
      yearsOfExperience: "2+ years",
      description:
        "Working with NoSQL databases, aggregation pipelines, and Mongoose ODM for data modeling.",
    },

    {
      name: "Redis",
      icon: "🔴",
      category: "database",
      level: 70,
      yearsOfExperience: "1+ year",
      description:
        "Implementing caching strategies and session management with in-memory data store.",
    },

    // Tools & Others
    {
      name: "Git & GitHub",
      icon: "🔀",
      category: "tools",
      level: 90,
      yearsOfExperience: "4+ years",
      description:
        "Version control, branching strategies, pull requests, and collaborative development workflows.",
    },
    {
      name: "Docker",
      icon: "🐳",
      category: "tools",
      level: 75,
      yearsOfExperience: "1+ year",
      description:
        "Containerizing applications and managing multi-container environments with Docker Compose.",
    },
    {
      name: "Vercel",
      icon: "☁️",
      category: "tools",
      level: 70,
      yearsOfExperience: "1 year",
      description: "Deploying applications using vercel or github ",
    },
    {
      name: "Postman",
      icon: "📮",
      category: "tools",
      level: 88,
      yearsOfExperience: "3+ years",
      description:
        "API testing, documentation, and automated testing with collections and environments.",
    },
    {
      name: "VS Code",
      icon: "💻",
      category: "tools",
      level: 95,
      yearsOfExperience: "4+ years",
      description:
        "Efficient development with extensions, shortcuts, and customized workflows.",
    },
    {
      name: "Figma",
      icon: "🎯",
      category: "tools",
      level: 75,
      yearsOfExperience: "2+ years",
      description:
        "UI/UX design, prototyping, and collaboration with design systems and components.",
    },
    {
      name: "Webpack/Vite",
      icon: "⚡",
      category: "tools",
      level: 70,
      yearsOfExperience: "1+ year",
      description:
        "Module bundling, build optimization, and development server configuration.",
    },
  ];

  // Filter skills based on selected category
  const filteredSkills =
    selectedCategory === "all"
      ? skills
      : skills.filter((skill) => skill.category === selectedCategory);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);

    const particleArray = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 20 + 10,
    }));
    setParticles(particleArray);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      console.error("Please fill in all fields");
      return;
    }

    try {
      const serviceId = "service_o7k50n6";
      const templateId = "template_ogb5oc3";
      const publicKey = "mmhqb3NN9Xl8cXM3b";

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: "Shreya mahajan",
      };

      const response = await fetch(
        "https://api.emailjs.com/api/v1.0/email/send",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            service_id: serviceId,
            template_id: templateId,
            user_id: publicKey,
            template_params: templateParams,
          }),
        }
      );

      // Log the response for debugging
      const responseText = await response.text();
      console.log("EmailJS Response:", response.status, responseText);

      if (response.ok) {
        setSubmitted(true);
        setTimeout(() => {
          setFormData({ name: "", email: "", message: "" });
          setSubmitted(false);
        }, 3000);
      } else {
        throw new Error(`EmailJS Error: ${response.status} - ${responseText}`);
      }
    } catch (error) {
      console.error("Email send error:", error);

      // Show error to user (optional)
      alert("Failed to send email. Opening your email client instead.");

      // Fallback to mailto
      const mailtoLink = `mailto:shreyamahajan56789@gmail.com?subject=Message from ${encodeURIComponent(
        formData.name
      )}&body=${encodeURIComponent(
        formData.message
      )}%0D%0A%0D%0AFrom: ${encodeURIComponent(
        formData.name
      )}%0D%0AEmail: ${encodeURIComponent(formData.email)}`;

      window.location.href = mailtoLink;
    }
  };

  const downloadCV = () => {
    // Method 1: If you put the PDF in your public folder
    const link = document.createElement("a");
    link.href = "/Resume.Shreya.docx.pdf"; // Place your PDF in public folder
    link.download = "Shreya_Mahajan_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "about", label: "About", icon: User },
    { id: "skills", label: "Skills", icon: Zap },
    { id: "experience", label: "Experience", icon: Briefcase },
    { id: "projects", label: "Projects", icon: Code },
    { id: "contact", label: "Contact", icon: Mail },
  ];

  const experiences = [
    {
      title: "Full Stack Developer",
      company: "QuadB Technologies",
      period: "05/2024 - Current",
      Location: "Ludhiana,India",
      description:
        "Developing scalable web, mobile, and Web3 applications with secure API integrations. Built DFinance (ICP) DeFi platform for 1,000+ users, led development of 50+ screen React Native App with a team of 4, implemented Aadhaar KYC with 95% success rate, and created AI automation agents using Ollama/LLMs improving workflow efficiency by 20%.",
      icon: Code,
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Full Stack Developer Intern",
      company: "O7 Services IT Company",
      period: "12/2023 - 05/2024",
      Location: "Jalandhar,India",
      description:
        "Built MERN-based applications including Cypher Task Innovate (task manager with admin/user modules), secure To-Do App with JWT authentication, and responsive landing pages. Collaborated with senior developers on API integration, debugging, and deployment.",
      icon: Briefcase,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Web Developer Intern",
      company: "Error to Array",
      period: "09/2022 - 02/2023",
      Location: "Amritsar,India",
      description:
        "Built responsive web pages using HTML, CSS, and JavaScript. Developed portfolio website and temperature converter tool (C, F, K). Supported feature additions, UI enhancements, and improved layouts for better user experience.",
      icon: Rocket,
      color: "from-green-500 to-emerald-500",
    },
  ];

  const [activeDot, setActiveDot] = useState<number>(-1);
  const experienceRefs = useRef<(HTMLDivElement | null)[]>([]);
  const hasCompletedCycle = useRef(false); // Track if animation completed
  const autoScrollEnabled = useRef(true); // Control auto-scroll behavior

  // Scroll to top on page load/refresh
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Animate dot movement between experiences (ONE TIME ONLY)
  useEffect(() => {
    if (activeSection !== "experience") return;
    if (hasCompletedCycle.current) return; // Exit if already completed

    // Initial delay before starting the animation
    const initialDelay = setTimeout(() => {
      setActiveDot(0); // Start with first experience
    }, 1000);

    const interval = setInterval(() => {
      setActiveDot((prev) => {
        const nextIndex = prev + 1;

        // Stop AFTER showing all experiences (including the last one)
        if (nextIndex > experiences.length - 1) {
          clearInterval(interval);
          hasCompletedCycle.current = true; // Mark as completed
          autoScrollEnabled.current = false; // Disable auto-scroll
          return experiences.length - 1; // Stay on last experience
        }

        return nextIndex;
      });
    }, 3000);

    return () => {
      clearTimeout(initialDelay);
      clearInterval(interval);
    };
  }, [activeSection, experiences.length]);

  // Auto-scroll to active card (only during initial animation)
  const isFirstRender = useRef(true);
  useEffect(() => {
    if (activeSection !== "experience") return;
    if (activeDot === -1) return;
    if (!autoScrollEnabled.current) return; // Disable after one cycle
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    const activeCard = experienceRefs.current[activeDot];
    if (activeCard) {
      activeCard.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [activeDot, activeSection]);

  const timelineStyles = `
  @keyframes pulseGlow {
    0%, 100% { box-shadow: 0 0 20px 5px rgba(168, 85, 247, 0.5); }
    50% { box-shadow: 0 0 40px 10px rgba(236, 72, 153, 0.8); }
  }
`;

  // Handler for manual card interaction (hover)
  const handleCardHover = (index: number) => {
    if (hasCompletedCycle.current) {
      setActiveDot(index);
    }
  };

  // Handler for manual card leave
  const handleCardLeave = () => {
    if (hasCompletedCycle.current) {
      setActiveDot(-1); // Reset to no active dot when not hovering
    }
  };

  const projects = [
    {
      title: "Heebee Coffee",
      role: "Frontend Developer",
      description:
        "5 web applications + React Native app - User App, Admin Dashboard, POS System, Inventory Management, Kitchen Panel",
      tech: ["React", "TypeScript", "React Native", "Redux"],
      icon: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=300&fit=crop",
      gradient: "from-cyan-500 to-teal-500",
      live: true,
      url: "https://heebee.in/",
    },
    {
      title: "BlockseBlock",
      role: "Full Stack Developer",
      description:
        "Global hackathon platform connecting 100k+ developers across 600+ universities. Built comprehensive ecosystem with event management, judging system, project submissions, and community features for Web3/blockchain hackathons.",
      tech: ["React", "TypeScript", "Node.js", "MongoDB", "Web3"],
      icon: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop",
      gradient: "from-teal-500 to-emerald-500",
      live: true,
      url: "https://blockseblock.com/",
    },
    {
      title: "DFinance",
      role: "Frontend Developer",
      description:
        "Decentralized lending and borrowing platform built on Internet Computer Protocol (ICP), featuring AMM-based DEX, token issuance, and liquidity farming with a unique buy & burn mechanism.",
      tech: ["React", "TypeScript", "Internet Computer", "Rust", "Web3"],
      icon: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=300&fit=crop",
      gradient: "from-emerald-500 to-cyan-600",
      live: true,
      url: "https://u554c-gyaaa-aaaam-qdq4a-cai.icp0.io/",
    },
    {
      title: "Learn BlockseBlock",
      role: "Full Stack Developer",
      description:
        "E-learning platform with hands-on Web3/blockchain courses, video lectures, quizzes, progress tracking, and certification system. Integrated payment gateway, course marketplace, and student dashboard for career development.",
      tech: ["React", "TypeScript", "Node.js", "MongoDB", "Video Streaming"],
      icon: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=400&h=300&fit=crop",
      gradient: "from-cyan-600 to-teal-600",
      live: true,
      url: "https://learn.blockseblock.com/",
    },
    {
      title: "Stringly – Dating App",
      role: "Full Stack Developer",
      description:
        "A modern dating mobile application where couples connect, match, and chat in real-time. Built using React Native with a high-performance Rust backend — trusted by 1000+ active users.",
      tech: ["React Native", "TypeScript", "Rust", "Backend API"],
      icon: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=400&h=300&fit=crop",
      gradient: "from-teal-600 to-emerald-600",
      live: true,
      url: "https://play.google.com/store/apps/details?id=com.stringly",
    },
    {
      title: "Xpedition Club",
      role: "Full Stack Developer",
      description:
        "A gamified platform for creators and students featuring quests, challenges, rewards system, and community engagement with real-time leaderboards and achievement tracking.",
      tech: [
        "React",
        "TypeScript",
        "Node.js",
        "MongoDB",
        "Express.js",
        "REST API",
      ],
      icon: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop",
      gradient: "from-emerald-600 to-cyan-600",
      live: true,
      url: "https://xpedition.club/",
    },
  ];

  const handleNavClick = (section: string) => {
    setActiveSection(section);
    setSidebarOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden relative">
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute rounded-full bg-white opacity-20 animate-float"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animationDuration: `${particle.duration}s`,
              animationDelay: `${particle.id * 0.2}s`,
            }}
          />
        ))}
      </div>

      {/* Animated Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-96 h-96 bg-gradient-to-r from-teal-600 to-cyan-600 rounded-full opacity-10 blur-3xl animate-pulse-slow"
          style={{
            left: `${mousePosition.x / 15}px`,
            top: `${mousePosition.y / 15}px`,
            transition: "all 0.5s ease-out",
          }}
        />
        <div className="absolute w-96 h-96 bg-gradient-to-r from-slate-700 to-slate-600 rounded-full opacity-10 blur-3xl animate-pulse-slow animation-delay-2000 top-1/4 right-1/4" />
        <div className="absolute w-96 h-96 bg-gradient-to-r from-emerald-700 to-teal-700 rounded-full opacity-10 blur-3xl animate-pulse-slow animation-delay-4000 bottom-1/4 left-1/3" />
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden lg:flex fixed left-0 top-0 bottom-0 w-20 bg-black/50 backdrop-blur-2xl border-r border-white/10 z-50 flex-col items-center py-8 shadow-2xl">
        <nav className="flex flex-col gap-8 flex-1 justify-center">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`group relative p-4 rounded-xl transition-all duration-300 ${
                  activeSection === item.id
                    ? "bg-gradient-to-r from-teal-600 to-cyan-600 shadow-md shadow-teal-500/30  scale-110"
                    : "hover:bg-white/10 hover:scale-110"
                }`}
                title={item.label}
              >
                <Icon
                  size={24}
                  className={activeSection === item.id ? "animate-bounce" : ""}
                />
                <span className="absolute left-full ml-4 px-3 py-2 bg-black/90 backdrop-blur-xl rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  {item.label}
                </span>
              </button>
            );
          })}
        </nav>
      </div>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        >
          <div
            className="fixed left-0 top-0 bottom-0 w-64 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 backdrop-blur-2xl border-r border-slate-700/50 shadow-md"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-6 border-b border-slate-700/50">
              <h2 className="text-xl font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
                Menu
              </h2>
              <button
                onClick={() => setSidebarOpen(false)}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <nav className="flex flex-col p-4 gap-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`flex items-center gap-4 p-4 rounded-xl transition-all duration-300 ${
                      activeSection === item.id
                        ? "bg-gradient-to-r from-teal-600 to-cyan-600 shadow-lg"
                        : "hover:bg-white/10"
                    }`}
                  >
                    <Icon size={24} />
                    <span className="text-lg font-medium">{item.label}</span>
                  </button>
                );
              })}
            </nav>

            <div className="absolute bottom-8 left-4 right-4">
              <button
                onClick={downloadCV}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-teal-600 to-cyan-600 rounded-xl hover:shadow-2xl hover:shadow-teal-500/50 transition-all duration-300 font-semibold"
              >
                <Download size={20} />
                <span>Download CV</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Top Navigation */}
      <nav className="fixed top-0 left-0 lg:left-20 right-0 bg-gradient-to-r from-black/60 via-slate-900/40 to-black/60 backdrop-blur-3xl border-b-2 border-slate-700/50 z-40 shadow-2xl shadow-slate-700/50">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-teal-600/10 to-transparent animate-shimmer"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex justify-between items-center h-20 md:h-24">
            {/* Logo Section */}
            <div className="flex items-center gap-3 md:gap-4 group cursor-pointer">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-cyan-600 rounded-full blur-xl opacity-60 group-hover:opacity-100 transition-all duration-300 animate-pulse"></div>
                <div className="relative w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-teal-600 via-cyan-600 to-slate-700 rounded-full flex items-center justify-center shadow-sm shadow-teal-500/30 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl md:text-2xl font-bold text-white">
                    SM
                  </span>
                </div>
              </div>
              <div className="flex flex-col">
                <h1 className="text-xl md:text-2xl lg:text-2xl font-bold bg-gradient-to-r from-teal-400 via-cyan-400 to-slate-300 bg-clip-text text-transparent">
                  Shreya Mahajan
                </h1>
                <p className="text-xs text-cyan-300/80 font-medium tracking-wider hidden sm:block text-nowrap">
                  Software Developer
                </p>
              </div>
            </div>

            {/* Center Navigation Links - Hidden on mobile and tablet */}
            <div className="hidden xl:flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-slate-700/50 backdrop-blur-xl">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveSection(item.id);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                    activeSection === item.id
                      ? "bg-gradient-to-r from-teal-600 to-cyan-600 text-white shadow-md shadow-teal-500/30 scale-105"
                      : "text-gray-300 hover:text-white hover:bg-white/10"
                  }`}
                >
                  <item.icon size={16} />
                  <span className="text-sm font-medium">{item.label}</span>
                </button>
              ))}
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-3 md:gap-4">
              {/* Status Indicator - Hidden on small screens */}
              <div className="hidden xl:flex items-center gap-2 px-4 py-2 ml-2 bg-green-500/10 border border-green-500/30 rounded-full">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-xs text-green-300 font-medium">
                  Available
                </span>
              </div>

              {/* Download CV Button */}
              <button
                onClick={downloadCV}
                className="relative group flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 bg-gradient-to-r from-teal-600 via-cyan-600 to-teal-600 rounded-full hover:shadow-2xl hover:shadow-teal-500/50 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-teal-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Download
                  size={18}
                  className="relative z-10 group-hover:animate-bounce"
                />
                <span className="relative z-10 font-semibold text-sm hidden sm:inline">
                  CV
                </span>
                <span className="relative z-10 font-semibold text-sm hidden md:inline">
                  Download
                </span>
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden p-2 md:p-3 bg-teal-600/20 border border-teal-500/30 rounded-full hover:bg-teal-600/30 transition-all duration-300"
              >
                <Code size={20} className="text-teal-300" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Bottom Navigation */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-black/50 backdrop-blur-2xl border-t border-slate-700/50 z-40 shadow-2xl safe-area-pb">
        <div className="flex justify-around items-center py-2 px-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveSection(item.id);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className={`flex flex-col items-center gap-1 p-2 rounded-xl transition-all duration-300 ${
                  activeSection === item.id
                    ? "text-teal-400 scale-110"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                <Icon size={20} />
                <span className="text-xs">{item.label}</span>
              </button>
            );
          })}
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-24 md:pt-28 pb-20 lg:pb-8 px-4 sm:px-6 lg:px-8 lg:ml-20 relative z-10">
        <div className="max-w-7xl mx-auto">
          {activeSection === "home" && (
            <div className="min-h-[calc(100vh-8rem)] flex items-center justify-center animate-fade-in py-8 md:py-12">
              <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 max-w-7xl mx-auto items-center">
                {/* Left Side - Text Content */}
                <div className="space-y-4 md:space-y-6 text-left order-2 lg:order-1">
                  <h2 className="text-xl md:text-2xl lg:text-3xl text-cyan-400/90 font-medium animate-fade-in-delay">
                    Hi there, I'm
                  </h2>

                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold bg-gradient-to-r from-teal-400 via-cyan-400 to-slate-300 bg-clip-text text-transparent animate-gradient leading-[1.15]">
                    Shreya Mahajan
                  </h1>

                  <div className="space-y-4 md:space-y-6 animate-fade-in-delay-2">
                    <div className="flex flex-wrap gap-2 md:gap-3">
                      <span className="px-3 md:px-4 py-1.5 md:py-2 bg-teal-600/15 border border-teal-500/30 rounded-lg text-xs md:text-sm font-medium backdrop-blur-xl">
                        Software Developer
                      </span>
                      <span className="px-3 md:px-4 py-1.5 md:py-2 bg-slate-700/15 border border-slate-600/30 rounded-lg text-xs md:text-sm font-medium backdrop-blur-xl">
                        Full Stack Developer
                      </span>
                      <span className="px-3 md:px-4 py-1.5 md:py-2 bg-emerald-600/15 border border-emerald-500/30 rounded-lg text-xs md:text-sm font-medium backdrop-blur-xl">
                        Team Lead
                      </span>
                    </div>

                    <p className="text-base md:text-xl lg:text-2xl text-gray-300/90 leading-relaxed font-light">
                      Building scalable web applications with
                      <span className="text-teal-400 font-normal"> React</span>,
                      <span className="text-cyan-400 font-normal">
                        {" "}
                        Node.js
                      </span>{" "}
                      &
                      <span className="text-slate-300 font-normal">
                        {" "}
                        MongoDB
                      </span>
                    </p>

                    <div className="flex flex-wrap gap-3 md:gap-4 pt-2 md:pt-4">
                      <div className="flex items-center gap-2 text-gray-400">
                        <div className="w-7 h-7 rounded-lg bg-teal-500/10 flex items-center justify-center">
                          <Code size={16} className="text-teal-400" />
                        </div>
                        <span className="text-xs md:text-sm font-medium">
                          10+ Projects
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-400">
                        <div className="w-7 h-7 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                          <Zap size={16} className="text-cyan-400" />
                        </div>
                        <span className="text-xs md:text-sm font-medium">
                          Software Developer
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-400">
                        <div className="w-7 h-7 rounded-lg bg-slate-500/10 flex items-center justify-center">
                          <Star size={16} className="text-slate-400" />
                        </div>
                        <span className="text-xs md:text-sm font-medium">
                          1.5+ Years
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-wrap gap-3 md:gap-4 pt-4 md:pt-6 animate-fade-in-delay-3">
                    <button
                      onClick={() => {
                        setActiveSection("contact");
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      className="group px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-teal-600 to-cyan-600 rounded-lg text-base md:text-lg font-semibold hover:shadow-xl hover:shadow-teal-500/30 transition-all duration-300 hover:-translate-y-0.5 relative overflow-hidden"
                    >
                      <span className="relative z-10 flex items-center gap-2 md:gap-3">
                        Let's Connect
                        <Send
                          size={18}
                          className="group-hover:translate-x-1 transition-transform duration-300"
                        />
                      </span>
                    </button>

                    <button
                      onClick={() => {
                        setActiveSection("projects");
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      className="px-6 md:px-8 py-3 md:py-4 bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 rounded-lg text-base md:text-lg font-semibold hover:bg-slate-800/60 hover:border-slate-600/70 transition-all duration-300 hover:-translate-y-0.5"
                    >
                      View Projects
                    </button>
                  </div>

                  {/* Social Links */}
                  <div className="flex gap-3 md:gap-4 pt-3 md:pt-4 animate-fade-in-delay-4">
                    <a
                      href="https://github.com/ShreyaMahajan1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group w-11 h-11 md:w-12 md:h-12 bg-slate-800/40 border border-slate-700/50 rounded-lg flex items-center justify-center hover:bg-slate-700/50 hover:border-slate-600/70 transition-all duration-300 hover:-translate-y-1 shadow-lg"
                    >
                      <Github size={20} />
                    </a>

                    <a
                      href="https://www.linkedin.com/in/shreya-mahajann/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group w-11 h-11 md:w-12 md:h-12 bg-slate-800/40 border border-slate-700/50 rounded-lg flex items-center justify-center hover:bg-cyan-600/20 hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-1 shadow-lg"
                    >
                      <Linkedin size={20} />
                    </a>
                    <a
                      href="tel:+918727828878"
                      className="group w-11 h-11 md:w-12 md:h-12 bg-slate-800/40 border border-slate-700/50 rounded-lg flex items-center justify-center hover:bg-emerald-600/20 hover:border-emerald-500/50 transition-all duration-300 hover:-translate-y-1 shadow-lg"
                    >
                      <Phone size={20} />
                    </a>
                  </div>
                </div>

                {/* Right Side - Profile Image with Stats */}
                <div className="relative order-1 lg:order-2 animate-fade-in-delay">
                  <div className="relative">
                    {/* Main Profile Image */}
                    <div className="relative z-10">
                      <div className="absolute -inset-3 bg-gradient-to-r from-teal-600/15 via-cyan-600/15 to-slate-700/15 rounded-2xl blur-2xl"></div>
                      <div className="relative w-full max-w-sm md:max-w-md mx-auto aspect-square">
                        <div className="w-full h-full rounded-2xl overflow-hidden border border-slate-700/50 shadow-2xl backdrop-blur-xl bg-gradient-to-br from-slate-900/50 to-slate-800/50">
                          <div className="w-full h-full bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center relative overflow-hidden">
                            <img
                              src={shreya}
                              className="w-full h-full object-cover"
                              alt="Shreya Mahajan"
                            />
                            {/* Decorative Elements */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-teal-500/20 to-transparent rounded-full blur-2xl"></div>
                            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-cyan-500/20 to-transparent rounded-full blur-2xl"></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Floating Stats Cards - Hidden on mobile */}
                    <div className="absolute -top-4 md:-top-8 -left-4 md:-left-8 bg-slate-900/80 backdrop-blur-md border border-slate-700/50 rounded-xl p-3 md:p-4 shadow-lg animate-float hidden md:block z-20">
                      <div className="flex items-center gap-2 md:gap-3">
                        <div className="w-10 h-10 md:w-11 md:h-11 bg-emerald-500/15 rounded-lg flex items-center justify-center">
                          <TrendingUp size={18} className="text-emerald-400" />
                        </div>
                        <div>
                          <p className="text-xl md:text-2xl font-bold text-white">
                            5+
                          </p>
                          <p className="text-xs text-gray-400">Live Projects</p>
                        </div>
                      </div>
                    </div>

                    <div
                      className="absolute -bottom-4 md:-bottom-8 -left-4 md:-left-8 bg-slate-900/80 backdrop-blur-md border border-slate-700/50 rounded-xl p-3 md:p-4 shadow-lg animate-float hidden md:block z-20"
                      style={{ animationDelay: "1s" }}
                    >
                      <div className="flex items-center gap-2 md:gap-3">
                        <div className="w-10 h-10 md:w-11 md:h-11 bg-teal-500/15 rounded-lg flex items-center justify-center">
                          <Code size={18} className="text-teal-400" />
                        </div>
                        <div>
                          <p className="text-xl md:text-2xl font-bold text-white">
                            1.5+
                          </p>
                          <p className="text-xs text-gray-400">
                            Years Experience
                          </p>
                        </div>
                      </div>
                    </div>

                    <div
                      className="absolute top-1/2 -right-6 md:-right-12 bg-slate-900/80 backdrop-blur-md border border-slate-700/50 rounded-xl p-3 md:p-4 shadow-lg animate-float hidden lg:block z-20"
                      style={{ animationDelay: "0.5s" }}
                    >
                      <div className="flex items-center gap-2 md:gap-3">
                        <div className="w-10 h-10 md:w-11 md:h-11 bg-cyan-500/15 rounded-lg flex items-center justify-center">
                          <Rocket size={18} className="text-cyan-400" />
                        </div>
                        <div>
                          <p className="text-xl md:text-2xl font-bold text-white">
                            10+
                          </p>
                          <p className="text-xs text-gray-400">
                            Technology Stack
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {/* About Section */}
          {activeSection === "about" && (
            <div className="animate-fade-in space-y-10 md:space-y-14 pb-20 mt-10">
              {/* Simpler Header */}
              <div className="space-y-3 mb-10">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                  About Me
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-teal-500 to-cyan-500"></div>
                <p className="text-base md:text-lg text-gray-400 max-w-2xl font-normal">
                  Building products that people love to use
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8 md:gap-10">
                {/* Profile Card - More Natural */}
                <div className="bg-slate-900/80 backdrop-blur-sm rounded-lg p-8 md:p-10 border border-slate-800 hover:border-slate-700 transition-colors duration-300">
                  <div className="flex items-start gap-5 mb-8">
                    <div className="relative flex-shrink-0">
                      <div className="w-24 h-24 md:w-32 md:h-32 rounded-lg overflow-hidden border border-slate-700 bg-slate-800">
                        <div className="w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                          <User
                            size={48}
                            className="text-slate-600 md:w-16 md:h-16"
                          />
                        </div>
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-emerald-500 rounded-md border-2 border-slate-900"></div>
                    </div>
                    <div className="flex-1 pt-2">
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                        Shreya Mahajan
                      </h3>
                      <p className="text-base text-cyan-400 mb-3">
                        Software Developer
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 text-xs font-medium bg-slate-800 text-slate-300 rounded border border-slate-700">
                          Full Stack
                        </span>
                        <span className="px-3 py-1 text-xs font-medium bg-slate-800 text-slate-300 rounded border border-slate-700">
                          MERN Stack
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-5 text-gray-300 text-sm md:text-base leading-relaxed">
                    <p>
                      I'm a Full Stack Developer with 1.5+ years of experience
                      building web and mobile applications. I focus on creating
                      products that are both functional and enjoyable to use.
                    </p>

                    <div className="bg-slate-800/50 rounded-lg p-4 border-l-2 border-teal-500">
                      <p className="text-sm">
                        <span className="text-cyan-400 font-medium">
                          Currently at QuadB Technology
                        </span>{" "}
                        as a Software Developer Engineer, working on scalable
                        web applications, mobile apps, and Web3 integrations.
                      </p>
                    </div>

                    <p>
                      My main tech stack includes React.js, TypeScript, Node.js,
                      and React Native. I enjoy working on the full product
                      lifecycle—from initial design to deployment and
                      maintenance.
                    </p>

                    <div className="pt-3">
                      <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wide">
                        Recent Work Highlights
                      </h4>
                      <div className="space-y-2.5 text-sm">
                        <div className="flex gap-2">
                          <span className="text-teal-400 mt-0.5">→</span>
                          <span>
                            Built Speech to text voice input note agent with 92%
                            accuracy, reducing manual input by 70%
                          </span>
                        </div>
                        <div className="flex gap-2">
                          <span className="text-teal-400 mt-0.5">→</span>
                          <span>
                            Led 4-person dev team, improved sprint efficiency by
                            40%
                          </span>
                        </div>
                        <div className="flex gap-2">
                          <span className="text-teal-400 mt-0.5">→</span>
                          <span>
                            Integrated Google OAuth and Twitter API with secure
                            authentication
                          </span>
                        </div>
                        <div className="flex gap-2">
                          <span className="text-teal-400 mt-0.5">→</span>
                          <span>
                            Optimized React performance, achieved 30% speed
                            improvement
                          </span>
                        </div>
                        <div className="flex gap-2">
                          <span className="text-teal-400 mt-0.5">→</span>
                          <span>
                            Created 20+ reusable UI components with Tailwind CSS
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Education Card - Cleaner Layout */}
                <div className="bg-slate-900/80 backdrop-blur-sm rounded-lg p-8 md:p-10 border border-slate-800">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center border border-slate-700">
                      <GraduationCap size={24} className="text-teal-400" />
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white">
                        Education
                      </h3>
                      <p className="text-sm text-gray-400">
                        Academic Background
                      </p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    {/* B.Tech */}
                    <div className="relative pl-6 border-l-2 border-slate-800 hover:border-teal-600 transition-colors duration-300">
                      <div className="absolute -left-[5px] top-2 w-2 h-2 bg-teal-500 rounded-full"></div>
                      <div className="pb-2">
                        <div className="flex items-start justify-between gap-4 mb-2">
                          <div>
                            <h4 className="text-lg font-semibold text-white">
                              Bachelor of Technology
                            </h4>
                            <p className="text-sm text-gray-400">
                              Computer Science Engineering
                            </p>
                          </div>
                          <span className="text-xs text-gray-500 whitespace-nowrap">
                            2020 - 2024
                          </span>
                        </div>
                        <p className="text-sm text-gray-400 mb-2">
                          Guru Nanak Dev University, Amritsar
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span className="px-2 py-1 text-xs bg-slate-800 text-slate-400 rounded border border-slate-700">
                            Graduated
                          </span>
                          <span className="px-2 py-1 text-xs bg-slate-800 text-slate-400 rounded border border-slate-700">
                            CSE
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* +2 */}
                    <div className="relative pl-6 border-l-2 border-slate-800 hover:border-cyan-600 transition-colors duration-300">
                      <div className="absolute -left-[5px] top-2 w-2 h-2 bg-cyan-500 rounded-full"></div>
                      <div className="pb-2">
                        <div className="flex items-start justify-between gap-4 mb-2">
                          <div>
                            <h4 className="text-lg font-semibold text-white">
                              Higher Secondary (+2)
                            </h4>
                            <p className="text-sm text-gray-400">
                              Science - Non-Medical
                            </p>
                          </div>
                          <span className="text-xs text-gray-500 whitespace-nowrap">
                            2019 - 2020
                          </span>
                        </div>
                        <p className="text-sm text-gray-400 mb-2">
                          Police DAV Public School, Jalandhar
                        </p>
                        <span className="px-2 py-1 text-xs bg-slate-800 text-slate-400 rounded border border-slate-700 inline-block">
                          Completed
                        </span>
                      </div>
                    </div>

                    {/* Class 10 */}
                    <div className="relative pl-6 border-l-2 border-slate-800 hover:border-emerald-600 transition-colors duration-300">
                      <div className="absolute -left-[5px] top-2 w-2 h-2 bg-emerald-500 rounded-full"></div>
                      <div>
                        <div className="flex items-start justify-between gap-4 mb-2">
                          <div>
                            <h4 className="text-lg font-semibold text-white">
                              Matriculation (10th)
                            </h4>
                            <p className="text-sm text-gray-400">ICSE Board</p>
                          </div>
                          <span className="text-xs text-gray-500 whitespace-nowrap">
                            2017 - 2018
                          </span>
                        </div>
                        <p className="text-sm text-gray-400 mb-2">
                          ST. Joseph Convent School, Jalandhar
                        </p>
                        <span className="px-2 py-1 text-xs bg-slate-800 text-slate-400 rounded border border-slate-700 inline-block">
                          ICSE
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* What I Do - Grid Cards */}
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center border border-slate-700">
                    <Rocket size={20} className="text-cyan-400" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    What I Do
                  </h3>
                </div>

                <div className="grid sm:grid-cols-3 gap-4">
                  <div className="bg-slate-900/80 rounded-lg p-6 border border-slate-800 hover:border-teal-600 transition-colors duration-300 group">
                    <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center mb-4 border border-slate-700 group-hover:bg-teal-600/10 group-hover:border-teal-600 transition-all duration-300">
                      <Terminal size={24} className="text-teal-400" />
                    </div>
                    <h4 className="text-lg font-semibold text-white mb-2">
                      Web Development
                    </h4>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      Building responsive web applications with React, Next.js,
                      and modern tools
                    </p>
                  </div>

                  <div className="bg-slate-900/80 rounded-lg p-6 border border-slate-800 hover:border-cyan-600 transition-colors duration-300 group">
                    <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center mb-4 border border-slate-700 group-hover:bg-cyan-600/10 group-hover:border-cyan-600 transition-all duration-300">
                      <Smartphone size={24} className="text-cyan-400" />
                    </div>
                    <h4 className="text-lg font-semibold text-white mb-2">
                      Mobile Apps
                    </h4>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      Creating cross-platform mobile applications using React
                      Native
                    </p>
                  </div>

                  <div className="bg-slate-900/80 rounded-lg p-6 border border-slate-800 hover:border-emerald-600 transition-colors duration-300 group">
                    <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center mb-4 border border-slate-700 group-hover:bg-emerald-600/10 group-hover:border-emerald-600 transition-all duration-300">
                      <Layers size={24} className="text-emerald-400" />
                    </div>
                    <h4 className="text-lg font-semibold text-white mb-2">
                      UI/UX Design
                    </h4>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      Designing intuitive interfaces with attention to user
                      experience
                    </p>
                  </div>
                </div>
              </div>

              {/* Journey & Approach - Side by Side */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-slate-900/80 rounded-lg p-8 border border-slate-800 hover:border-teal-600 transition-colors duration-300">
                  <div className="flex items-center gap-3 mb-5">
                    <Star size={20} className="text-teal-400" />
                    <h3 className="text-xl font-bold text-white">My Journey</h3>
                  </div>
                  <div className="space-y-4 text-sm text-gray-400 leading-relaxed">
                    <p>
                      I started coding in college, initially drawn to the
                      creative side of building user interfaces. What began as
                      curiosity quickly became a passion.
                    </p>
                    <p>
                      Each project taught me something new about turning ideas
                      into working products. That continuous learning process is
                      what keeps me motivated.
                    </p>
                  </div>
                </div>

                <div className="bg-slate-900/80 rounded-lg p-8 border border-slate-800 hover:border-cyan-600 transition-colors duration-300">
                  <div className="flex items-center gap-3 mb-5">
                    <Code size={20} className="text-cyan-400" />
                    <h3 className="text-xl font-bold text-white">
                      My Approach
                    </h3>
                  </div>
                  <div className="space-y-4 text-sm text-gray-400 leading-relaxed">
                    <p>
                      I believe good software comes from understanding both the
                      technical requirements and the people who'll use it. Code
                      quality and user experience go hand in hand.
                    </p>
                    <p>
                      Whether fixing bugs, architecting systems, or
                      collaborating with teams, I focus on building things that
                      work well and last.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
          {/* Skills Section */}

          {activeSection === "skills" && (
            <div className="animate-fade-in space-y-10 pb-20 mt-10 min-h-[70vh]">
              {/* Simple Header */}
              <div className="space-y-3 mb-10">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                  Skills & Technologies
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-teal-500 to-cyan-500"></div>
                <p className="text-gray-400 text-base max-w-2xl">
                  Technologies I work with on a regular basis
                </p>
              </div>

              {/* Category Filter - Simplified */}
              <div className="flex flex-wrap gap-2 mb-8">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded text-sm font-medium transition-colors duration-200 ${
                      selectedCategory === category.id
                        ? "bg-teal-600 text-white"
                        : "bg-slate-800 text-gray-400 hover:bg-slate-700 hover:text-white border border-slate-700"
                    }`}
                  >
                    {category.icon} {category.name}
                    {selectedCategory === category.id && (
                      <span className="ml-2 text-xs opacity-75">
                        ({filteredSkills.length})
                      </span>
                    )}
                  </button>
                ))}
              </div>

              {/* Skills Grid - Cleaner Layout with Typing Effect */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {filteredSkills.map((skill, index) => (
                  <div
                    key={skill.name}
                    className="group bg-slate-900/80 rounded-lg p-5 border border-slate-800 hover:border-teal-600 transition-all duration-300 opacity-0 animate-fade-in-up"
                    style={{
                      animationDelay: `${index * 100}ms`,
                      animationFillMode: "forwards",
                    }}
                  >
                    <div className="space-y-4">
                      {/* Header */}
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-center gap-3 flex-1 min-w-0">
                          <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded bg-slate-800 border border-slate-700 group-hover:bg-teal-600/10 group-hover:border-teal-600 transition-all duration-300">
                            <span className="text-xl">{skill.icon}</span>
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="text-base font-semibold text-white truncate">
                              {skill.name}
                            </h3>
                            <p className="text-xs text-gray-500">
                              {skill.yearsOfExperience}
                            </p>
                          </div>
                        </div>
                        <div className="text-right flex-shrink-0">
                          <span className="text-lg font-bold text-teal-400">
                            {skill.level}%
                          </span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-sm text-gray-400 leading-relaxed line-clamp-2">
                        {skill.description}
                      </p>

                      {/* Progress bar - Animated */}
                      <div className="relative h-1.5 bg-slate-800 rounded-full overflow-hidden">
                        <div
                          className="absolute inset-y-0 left-0 bg-teal-600 rounded-full"
                          style={
                            {
                              width: "0%",
                              animation: `fillBar 1s ease-out ${
                                index * 100 + 300
                              }ms forwards`,
                              "--target-width": `${skill.level}%`,
                            } as React.CSSProperties
                          }
                        />
                      </div>

                      {/* Skill Level Label */}
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-gray-500">
                          {skill.level >= 90
                            ? "Expert"
                            : skill.level >= 75
                            ? "Advanced"
                            : skill.level >= 60
                            ? "Proficient"
                            : "Intermediate"}
                        </span>
                        <span className="text-gray-600">{skill.category}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Stats Summary */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 pt-8 border-t border-slate-800">
                <div className="text-center">
                  <div className="text-3xl font-bold text-teal-400 mb-1">
                    {skills.length}
                  </div>
                  <div className="text-sm text-gray-400">Total Skills</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-1">
                    {skills.filter((s) => s.category === "frontend").length}
                  </div>
                  <div className="text-sm text-gray-400">Frontend</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-400 mb-1">
                    {skills.filter((s) => s.category === "backend").length}
                  </div>
                  <div className="text-sm text-gray-400">Backend</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-slate-400 mb-1">
                    {skills.filter((s) => s.level >= 85).length}
                  </div>
                  <div className="text-sm text-gray-400">Expert Level</div>
                </div>
              </div>
            </div>
          )}
          {/* Experience Section */}
          {activeSection === "experience" && (
            <div className="animate-fade-in space-y-10 pb-20 mt-10 max-w-7xl mx-auto">
              {/* Header */}
              <div className="space-y-3 mb-12">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                  Experience
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-teal-500 to-cyan-500"></div>
                <p className="text-gray-400 text-base max-w-2xl">
                  My professional journey and key milestones
                </p>
              </div>

              {/* Timeline Container */}
              <div className="relative">
                {/* Vertical Timeline Line */}
                <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-teal-500 via-cyan-500 to-emerald-500 transform -translate-x-1/2"></div>

                <div className="space-y-12 md:space-y-16">
                  {experiences.map((exp, index) => {
                    const Icon = exp.icon;
                    const isEven = index % 2 === 0;
                    const isActive = activeDot === index;

                    return (
                      <div
                        key={index}
                        ref={(el) => {
                          experienceRefs.current[index] = el;
                        }}
                        className="relative opacity-0 animate-fade-in-up"
                        style={{
                          animationDelay: `${index * 150}ms`,
                          animationFillMode: "forwards",
                        }}
                        onMouseEnter={() => handleCardHover(index)}
                        onMouseLeave={handleCardLeave}
                      >
                        {/* Timeline Dot - Animated on scroll */}
                        <div
                          className={`hidden md:flex absolute left-1/2 top-8 w-6 h-6 rounded-full transform -translate-x-1/2 z-10 border-4 border-slate-950 items-center justify-center transition-all duration-700 ease-in-out ${
                            isActive
                              ? "bg-gradient-to-r from-cyan-500 to-teal-500 scale-150"
                              : "bg-slate-700 scale-100"
                          }`}
                          style={
                            isActive
                              ? {
                                  boxShadow: "0 0 20px rgba(6,182,212,0.6)",
                                }
                              : {}
                          }
                        >
                          {isActive && (
                            <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
                          )}
                        </div>

                        {/* Experience Card */}
                        <div
                          className={`md:w-[calc(50%-3rem)] ${
                            isEven ? "md:ml-0 md:mr-auto" : "md:ml-auto md:mr-0"
                          }`}
                        >
                          <div
                            className={`group relative bg-slate-900/80 backdrop-blur-xl rounded-xl md:rounded-2xl p-6 md:p-8 border transition-all duration-500 hover:-translate-y-2 overflow-hidden ${
                              isActive
                                ? "border-teal-600 shadow-[0_0_30px_rgba(20,184,166,0.4)]"
                                : "border-slate-800 hover:border-teal-600 hover:shadow-[0_0_30px_rgba(20,184,166,0.4)]"
                            }`}
                          >
                            {/* Gradient Overlay on Hover */}
                            <div
                              className={`absolute inset-0 bg-gradient-to-br ${exp.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                            ></div>

                            {/* Content */}
                            <div className="relative z-10">
                              {/* Header Section */}
                              <div className="flex items-start gap-4 mb-6">
                                {/* Icon */}
                                <div
                                  className={`flex-shrink-0 w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br ${exp.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-500`}
                                >
                                  <Icon size={28} className="text-white" />
                                </div>

                                {/* Title & Company */}
                                <div className="flex-1 min-w-0">
                                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                                    {exp.title}
                                  </h3>
                                  <div className="flex items-center gap-2">
                                    <div
                                      className={`w-2 h-2 rounded-full bg-gradient-to-r ${exp.color}`}
                                    ></div>
                                    <p className="text-sm md:text-base text-teal-400 font-semibold">
                                      {exp.company}
                                    </p>
                                  </div>
                                </div>
                              </div>

                              {/* Tags Section */}
                              <div className="flex flex-wrap gap-2 mb-4">
                                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-cyan-500/20 border border-cyan-500/40 rounded-md text-sm font-medium text-cyan-300">
                                  <MapPin size={14} />
                                  {exp.Location}
                                </span>
                                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-teal-500/20 border border-teal-500/40 rounded-md text-sm font-medium text-teal-300">
                                  <Briefcase size={14} />
                                  {exp.period}
                                </span>
                              </div>

                              {/* Description */}
                              <p className="text-sm md:text-base text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                                {exp.description}
                              </p>

                              {/* Decorative Bottom Border */}
                              <div
                                className={`absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r ${exp.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-xl`}
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
          {/* Projects Section */}
          {activeSection === "projects" && (
            <div className="animate-fade-in space-y-10 pb-20 mt-10 max-w-7xl mx-auto">
              {/* Header */}
              <div className="space-y-3 mb-10">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                  Projects
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-teal-500 to-cyan-500"></div>
                <p className="text-gray-400 text-base max-w-2xl">
                  Things I've built and shipped
                </p>
              </div>

              {/* Projects Grid */}
              <div className="grid sm:grid-cols-2 gap-6">
                {projects.map((project, index) => (
                  <div
                    key={index}
                    onClick={() =>
                      project.url && window.open(project.url, "_blank")
                    }
                    className="group bg-slate-900 rounded-xl border border-slate-800 hover:border-slate-700 transition-all duration-300 cursor-pointer overflow-hidden opacity-0 animate-fade-in-up"
                    style={{
                      animationDelay: `${index * 100}ms`,
                      animationFillMode: "forwards",
                    }}
                  >
                    {/* Project Image */}
                    <div
                      className={`relative w-full h-48 bg-gradient-to-br ${project.gradient} overflow-hidden`}
                    >
                      <img
                        src={project.icon}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {project.live && (
                        <div className="absolute top-4 right-4 bg-slate-900/90 backdrop-blur-sm text-teal-400 px-3 py-1.5 rounded-md text-xs font-medium flex items-center gap-2 border border-slate-700">
                          <span className="w-1.5 h-1.5 bg-teal-400 rounded-full"></span>
                          Live
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-6 space-y-4">
                      {/* Title & Role */}
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1 group-hover:text-teal-400 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-sm text-gray-500">{project.role}</p>
                      </div>

                      {/* Description */}
                      <p className="text-sm text-gray-400 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2 pt-2">
                        {project.tech.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-slate-800/50 text-gray-400 rounded-md text-xs border border-slate-700/50"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Contact Section */}
          {activeSection === "contact" && (
            <div className="animate-fade-in space-y-10 pb-20 mt-10 max-w-7xl mx-auto">
              {/* Header */}
              <div className="space-y-3 mb-12">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                  Get In Touch
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-teal-500 to-cyan-500"></div>
                <p className="text-gray-400 text-base max-w-2xl">
                  Let's connect and discuss your next project
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                {/* Contact Info Cards */}
                <div
                  className="space-y-4 opacity-0 animate-fade-in-up"
                  style={{
                    animationDelay: "100ms",
                    animationFillMode: "forwards",
                  }}
                >
                  {/* Email */}
                  <div className="bg-slate-900 rounded-xl p-6 border border-slate-800 hover:border-teal-600 transition-all duration-300 group">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-lg group-hover:scale-110 transition-transform duration-300">
                        <Mail size={24} className="text-white" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-gray-500 text-sm mb-1">Email</p>
                        <a
                          href="mailto:shreyamahajan56789@gmail.com"
                          className="text-base md:text-lg font-semibold text-white hover:text-cyan-400 transition-colors duration-300 break-all"
                        >
                          shreyamahajan56789@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="bg-slate-900 rounded-xl p-6 border border-slate-800 hover:border-teal-600 transition-all duration-300 group">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-lg group-hover:scale-110 transition-transform duration-300">
                        <Phone size={24} className="text-white" />
                      </div>
                      <div>
                        <p className="text-gray-500 text-sm mb-1">Phone</p>
                        <a
                          href="tel:+918727828878"
                          className="text-base md:text-lg font-semibold text-white hover:text-teal-400 transition-colors duration-300"
                        >
                          +91 8727828878
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* LinkedIn */}
                  <div className="bg-slate-900 rounded-xl p-6 border border-slate-800 hover:border-teal-600 transition-all duration-300 group">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-lg group-hover:scale-110 transition-transform duration-300">
                        <Linkedin size={24} className="text-white" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-gray-500 text-sm mb-1">LinkedIn</p>
                        <a
                          href="https://www.linkedin.com/in/shreya-mahajann/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-base md:text-lg font-semibold text-white hover:text-emerald-400 transition-colors duration-300 break-all"
                        >
                          ER.Shreya Mahajan
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="bg-slate-900 rounded-xl p-6 border border-slate-800 hover:border-teal-600 transition-all duration-300 group">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-gradient-to-r from-cyan-600 to-teal-600 rounded-lg group-hover:scale-110 transition-transform duration-300">
                        <MapPin size={24} className="text-white" />
                      </div>
                      <div>
                        <p className="text-gray-500 text-sm mb-1">Location</p>
                        <p className="text-base md:text-lg font-semibold text-white">
                          India
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Form */}
                <div
                  className="bg-slate-900 rounded-xl p-6 md:p-8 border border-slate-800 space-y-6 opacity-0 animate-fade-in-up"
                  style={{
                    animationDelay: "200ms",
                    animationFillMode: "forwards",
                  }}
                >
                  <div className="mb-6">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                      Send a Message
                    </h3>
                    <p className="text-sm text-gray-400">
                      I'll get back to you as soon as possible
                    </p>
                  </div>

                  {submitted && (
                    <div className="bg-teal-500/10 border border-teal-500 rounded-lg p-4 text-center">
                      <p className="text-teal-400 font-semibold">
                        ✓ Message sent successfully!
                      </p>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-400">
                        Name
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg focus:border-teal-500 focus:outline-none transition-all duration-300 text-white placeholder-gray-500"
                        placeholder="Your name"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-400">
                        Email
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg focus:border-teal-500 focus:outline-none transition-all duration-300 text-white placeholder-gray-500"
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-400">
                        Message
                      </label>
                      <textarea
                        rows={5}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg focus:border-teal-500 focus:outline-none transition-all duration-300 resize-none text-white placeholder-gray-500"
                        placeholder="Your message here..."
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-lg hover:from-cyan-600 hover:to-teal-600 transition-all duration-300 font-semibold text-white group"
                    >
                      <Send
                        size={18}
                        className="group-hover:translate-x-1 transition-transform duration-300"
                      />
                      <span>Send Message</span>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="mb-16 md:mb-0 relative z-10 bg-slate-900/50 backdrop-blur-xl border-t border-slate-800 py-6 md:py-8 mt-12 md:mt-20 lg:ml-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm md:text-base text-gray-400 text-center md:text-left">
              © 2025 Shreya Mahajan. All rights reserved.
            </p>
            <div className="flex gap-4 md:gap-6">
              <a
                href="https://github.com/ShreyaMahajan1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 hover:scale-110 transform"
              >
                <Github size={24} />
              </a>

              <a
                href="https://www.linkedin.com/in/shreya-mahajann/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-teal-400 transition-colors duration-300 hover:scale-110 transform"
              >
                <Linkedin size={24} />
              </a>

              <a
                href="tel:+918727828878"
                className="text-gray-400 hover:text-emerald-400 transition-colors duration-300 hover:scale-110 transform"
              >
                <Phone size={24} />
              </a>
            </div>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
        .animate-fade-in-delay {
          animation: fade-in 0.8s ease-out 0.3s backwards;
        }
        .animate-fade-in-delay-2 {
          animation: fade-in 0.8s ease-out 0.6s backwards;
        }
        .animate-fade-in-delay-3 {
          animation: fade-in 0.8s ease-out 0.9s backwards;
        }
        .animate-fade-in-delay-4 {
          animation: fade-in 0.8s ease-out 1.2s backwards;
        }
        
        @keyframes slide-in-left {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-slide-in-left {
          animation: slide-in-left 0.8s ease-out;
        }
        
        @keyframes slide-in-right {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-slide-in-right {
          animation: slide-in-right 0.8s ease-out;
        }
        
        @keyframes slide-in-up {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-in-up {
          animation: slide-in-up 0.8s ease-out;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.3; transform: scale(1.05); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(168, 85, 247, 0.4); }
          50% { box-shadow: 0 0 40px rgba(168, 85, 247, 0.8); }
        }
        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
        
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 3s ease-in-out infinite;
        }
        
        @keyframes skillFill {
          from { width: 0%; }
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }

        /* Safe area for mobile devices */
        .safe-area-pb {
          padding-bottom: env(safe-area-inset-bottom);
        }

        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 10px;
        }

        ::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.3);
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #a855f7, #ec4899);
          border-radius: 5px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #9333ea, #db2777);
        }
          @keyframes fade-in {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  @keyframes fade-in-up {
    from { 
      opacity: 0; 
      transform: translateY(20px); 
    }
    to { 
      opacity: 1; 
      transform: translateY(0); 
    }
  }
    @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fadeIn 0.6s ease-out;
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out;
        }
  @keyframes fillBar {
    from { 
      width: 0%; 
    }
    to { 
      width: var(--target-width); 
    }
  }
  
  .animate-fade-in {
    animation: fade-in 0.8s ease-out;
  }
  
  .animate-fade-in-up {
    animation: fade-in-up 0.6s ease-out;
  }
  
  .animate-fade-in-delay {
    animation: fade-in 0.8s ease-out 0.3s backwards;
  }
  
  .animate-fade-in-delay-2 {
    animation: fade-in 0.8s ease-out 0.6s backwards;
  }
  
  .animate-fade-in-delay-3 {
    animation: fade-in 0.8s ease-out 0.9s backwards;
  }
  
  .animate-fade-in-delay-4 {
    animation: fade-in 0.8s ease-out 1.2s backwards;
  }
  
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
  }
  
  .animate-float {
    animation: float 3s ease-in-out infinite;
  }
  
  @keyframes pulse-slow {
    0%, 100% { opacity: 0.1; transform: scale(1); }
    50% { opacity: 0.15; transform: scale(1.05); }
  }
  
  .animate-pulse-slow {
    animation: pulse-slow 4s ease-in-out infinite;
  }
  
  @keyframes gradient {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  
  .animate-gradient {
    background-size: 200% 200%;
    animation: gradient 3s ease infinite;
  }
  
  @keyframes shimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }
  
  .animate-shimmer {
    animation: shimmer 3s ease-in-out infinite;
  }
  
  .animation-delay-2000 {
    animation-delay: 2s;
  }
  
  .animation-delay-4000 {
    animation-delay: 4s;
  }

  .safe-area-pb {
    padding-bottom: env(safe-area-inset-bottom);
  }
  
  .line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
      `}</style>
    </div>
  );
};

export default Portfolio;
