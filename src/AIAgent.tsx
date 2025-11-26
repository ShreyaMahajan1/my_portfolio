import React, { useState, useRef, useEffect } from "react";
import {
  MessageCircle,
  X,
  Send,
  Bot,
User,
  Sparkles,
  Zap,
  Code,
  Briefcase,
  Mail,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
  id: string;
  type: "user" | "ai";
  content: string;
  timestamp: Date;
}

interface AIAgentProps {
  onContactClick: () => void;
  onSectionChange: (section: string) => void;
}

const AIAgent: React.FC<AIAgentProps> = ({
  onContactClick,
  onSectionChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      type: "ai",
      content:
        "Hi! I'm Shreya's AI assistant. I can help you learn about her experience, skills, projects, or connect you directly. What would you like to know?",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [pendingNavigation, setPendingNavigation] = useState<string | null>(
    null
  );
const knownSkills = [
  "react","typescript","javascript","next","next.js","tailwind","css",
  "node","node.js","express","mongodb","redis","react native","mobile",
  "web","frontend","backend","fullstack","api","docker","figma"
];

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const agentRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (
        agentRef.current &&
        !agentRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isOpen]);

  const quickActions = [
    {
      label: "View Projects",
      action: () => onSectionChange("projects"),
      icon: Code,
    },
    {
      label: "Experience",
      action: () => onSectionChange("experience"),
      icon: Briefcase,
    },
    { label: "Contact Info", action: () => onContactClick(), icon: Mail },
    { label: "Skills", action: () => onSectionChange("skills"), icon: Zap },
  ];

  const generateAIResponse = (
    userMessage: string
  ): { text: string; suggestNavigation?: string } => {
    const message = userMessage.toLowerCase();

    if (
      message.match(
        /^(yes|yeah|sure|ok|okay|yep|yup|please|go ahead|absolutely|definitely)$/i
      )
    ) {
      return { text: "NAVIGATE_PENDING" };
    }

if (
  (message.includes("can she") || message.includes("can shreya")) &&
  (message.includes("build") ||
    message.includes("make") ||
    message.includes("create") ||
    message.includes("develop")) &&
  (message.includes("project") ||
    message.includes("website") ||
    message.includes("app") ||
    message.includes("application") ||
    message.includes("platform"))
) {

  const foundSkill = knownSkills.find((skill) => message.includes(skill));

  if (foundSkill) {
    return {
      text:
        `Yes, absolutely! Shreya can build a complete ${foundSkill.toUpperCase()} project.\n\n` +
        `She has strong experience in ${foundSkill} and has already delivered production-ready applications using it.\n\n` +
        `Would you like to see some of her existing projects?`,
      suggestNavigation: "projects",
    };
  } else {
    return {
      text:
        "Shreya currently doesn't work in that particular technology, but she is open to learning new tools if required. 😊\n\n" +
        "Would you like to know the technologies she is experienced in?",
      suggestNavigation: "skills",
    };
  }
}

    if (
      message.includes("project") ||
      message.includes("work") ||
      message.includes("portfolio")
    ) {
      return {
        text: "Shreya has built some impressive projects!\n\n• DFinance - DeFi platform on Internet Computer with lending/borrowing features\n• BlockseBlock - Global hackathon platform for 100k+ developers\n• Heebee Coffee - Complete ecosystem: 5 web apps + mobile app\n• Stringly - Dating app with 1000+ active users\n• Xpedition Club - Gamified learning platform\n• Learn BlockseBlock - E-learning platform with courses\n\nWould you like me to show you the projects section?",
        suggestNavigation: "projects",
      };
    }

    if (message.includes("dfinance")) {
      return {
        text: "DFinance is a decentralized lending and borrowing platform built on Internet Computer Protocol (ICP). It features AMM-based DEX, token issuance, liquidity farming, and a unique buy & burn mechanism. Shreya worked on the frontend using React and TypeScript.\n\nWant to see more projects?",
        suggestNavigation: "projects",
      };
    }

    if (message.includes("blockseblock")) {
      return {
        text: "BlockseBlock is a global hackathon platform connecting 100k+ developers across 600+ universities. Shreya built the comprehensive ecosystem including event management, judging system, project submissions, and community features using React, TypeScript, Node.js, and MongoDB.\n\nShould I show you all her projects?",
        suggestNavigation: "projects",
      };
    }

    if (message.includes("heebee") || message.includes("coffee")) {
      return {
        text: "Heebee Coffee is a complete coffee shop management system! Shreya built 5 web applications (User App, Admin Dashboard, POS System, Inventory Management, Kitchen Panel) plus a React Native mobile app. The tech stack includes React, TypeScript, React Native, and Redux.\n\nInterested in seeing all her projects?",
        suggestNavigation: "projects",
      };
    }

    if (message.includes("stringly")) {
      return {
        text: "Stringly is a modern dating mobile application with 1000+ active users. Shreya built it using React Native and TypeScript, with a high-performance Rust backend. It features real-time chat, matching algorithms, and smooth user experience.\n\nWant to explore more projects?",
        suggestNavigation: "projects",
      };
    }

    if (message.includes("xpedition")) {
      return {
        text: "Xpedition Club is a gamified platform for creators and students featuring quests, challenges, rewards system, and community engagement with real-time leaderboards and achievement tracking. Built with React, TypeScript, Node.js, MongoDB, and Express.js.\n\nShould I show you the projects section?",
        suggestNavigation: "projects",
      };
    }

    if (message.includes("frontend")) {
      return {
        text: "Shreya's frontend expertise includes:\n\n• React.js (3+ years) - Used in all major projects\n• Next.js (2+ years) - SEO-friendly apps\n• TypeScript (2+ years) - Type-safe development\n• Tailwind CSS (3+ years) - Modern styling\n• JavaScript ES6+ (4+ years)\n• HTML5 & CSS3 (4+ years)\n• Redux - State management\n• Responsive design & accessibility\n\nShould I take you to the skills section?",
        suggestNavigation: "skills",
      };
    }

    if (
      message.includes("backend") ||
      message.includes("api") ||
      message.includes("server")
    ) {
      return {
        text: "Shreya's backend skills:\n\n• Node.js (3+ years) - Scalable REST APIs\n• Express.js (3+ years) - Server framework\n• MongoDB (2+ years) - Database management\n• Redis (1+ year) - Caching & sessions\n• JWT Authentication - Secure auth systems\n• RESTful API design\n• Socket.io - Real-time features\n\nWant to see all her skills?",
        suggestNavigation: "skills",
      };
    }

    if (
      message.includes("skill") ||
      message.includes("technology") ||
      message.includes("tech stack")
    ) {
      return {
        text: "Shreya's comprehensive tech stack:\n\nFrontend: React, Next.js, TypeScript, Tailwind CSS\nBackend: Node.js, Express.js, MongoDB, Redis\nMobile: React Native\nTools: Git, Docker, Postman, Figma\n\nShe has 1.5+ years of production experience and has worked with 20+ technologies. Would you like to see her detailed skills section?",
        suggestNavigation: "skills",
      };
    }

    if (
      message.includes("current") &&
      (message.includes("job") ||
        message.includes("work") ||
        message.includes("role"))
    ) {
      return {
        text: "Shreya is currently a Full Stack Developer at QuadB Technologies (May 2024 - Present) in Ludhiana, India.\n\nKey achievements:\n• Built DFinance DeFi platform (1,000+ users)\n• Led 50+ screen React Native app development\n• Implemented Aadhaar KYC with 95% success rate\n• Created AI automation agents (20% efficiency boost)\n\nWould you like to see her complete experience timeline?",
        suggestNavigation: "experience",
      };
    }

    if (message.includes("quadb")) {
      return {
        text: "At QuadB Technologies (May 2024 - Present), Shreya:\n\n• Develops scalable web, mobile, and Web3 applications\n• Built DFinance DeFi platform for 1,000+ users\n• Led development of 50+ screen React Native App\n• Implemented Aadhaar KYC with 95% success rate\n• Created AI automation agents improving efficiency by 20%\n\nWant to see her full work history?",
        suggestNavigation: "experience",
      };
    }

    if (
      message.includes("experience") ||
      message.includes("job") ||
      message.includes("career") ||
      message.includes("work history")
    ) {
      return {
        text: "Shreya has 1.5+ years of professional experience:\n\n1. QuadB Technologies (Full Stack Developer, May 2024 - Present)\n   - DeFi platforms, React Native apps, KYC systems\n\n2. O7 Services (Full Stack Intern, Dec 2023 - May 2024)\n   - MERN stack applications, JWT auth\n\n3. Error to Array (Web Developer Intern, Sep 2022 - Feb 2023)\n   - Responsive web development\n\nShould I show you her detailed experience timeline?",
        suggestNavigation: "experience",
      };
    }

    if (
      (message.includes("when") ||
        message.includes("which year") ||
        message.includes("what year")) &&
      (message.includes("btech") ||
        message.includes("b.tech") ||
        message.includes("degree") ||
        message.includes("graduation") ||
        message.includes("graduate") ||
        message.includes("engineering") ||
        message.includes("college") ||
        message.includes("university"))
    ) {
      return {
        text:
          "Shreya completed her B.Tech in Computer Science Engineering from Guru Nanak Dev University in **2024** (she studied there from 2020–2024).\n\nWould you like to see more about her education or projects?",
        suggestNavigation: "about",
      };
    }

    if (
      (message.includes("when") ||
        message.includes("which year") ||
        message.includes("what year")) &&
      (message.includes("12th") ||
        message.includes("+2") ||
        message.includes("plus two") ||
        message.includes("higher secondary") ||
        message.includes("senior secondary"))
    ) {
      return {
        text:
          "Shreya completed her Higher Secondary (+2, Non-Medical) in **2020** from Police DAV Public School, Jalandhar.\n\nWant to know more about her education or early journey?",
        suggestNavigation: "about",
      };
    }

    if (
      (message.includes("when") ||
        message.includes("which year") ||
        message.includes("what year")) &&
      (message.includes("10th") ||
        message.includes("tenth") ||
        message.includes("matric") ||
        message.includes("matriculation") ||
        message.includes("icse") ||
        message.includes("st. joseph"))
    ) {
      return {
        text:
          "Shreya completed her 10th (ICSE Board) in **2018** at St. Joseph Convent School, Jalandhar.\n\nWant to see how she progressed from school to engineering?",
        suggestNavigation: "about",
      };
    }

    if (
      (message.includes("when") ||
        message.includes("which year") ||
        message.includes("what year")) &&
      (message.includes("pass") ||
        message.includes("complete") ||
        message.includes("finish")) &&
      (message.includes("education") ||
        message.includes("school") ||
        message.includes("study"))
    ) {
      return {
        text:
          "Here's a quick timeline of when Shreya passed her major education milestones:\n\n" +
          "• 10th (ICSE) – **2018**\n" +
          "• 12th / +2 (Non-Medical) – **2020**\n" +
          "• B.Tech in Computer Science Engineering – **2024**\n\n" +
          "Would you like to explore her education section or projects next?",
        suggestNavigation: "about",
      };
    }

    if (
      message.includes("contact") ||
      message.includes("email") ||
      message.includes("phone") ||
      message.includes("reach")
    ) {
      return {
        text: "Here's how you can reach Shreya:\n\n📧 Email: shreyamahajan56789@gmail.com\n📱 Phone: +91 8727828878\n💼 LinkedIn: linkedin.com/in/shreya-mahajann\n📍 Location: India\n\nWould you like me to open the contact section so you can send her a message?",
        suggestNavigation: "contact",
      };
    }

    if (
      message.includes("hire") ||
      message.includes("available") ||
      message.includes("freelance") ||
      message.includes("opportunity")
    ) {
      return {
        text: "Yes! Shreya is open to new opportunities and collaborations. She's currently working at QuadB Technologies but is available for discussions about exciting projects.\n\nShe specializes in:\n• Full-stack web development\n• React Native mobile apps\n• DeFi/Web3 projects\n• Production-ready solutions\n\nWould you like her contact information?",
        suggestNavigation: "contact",
      };
    }

    if (
      message.includes("education") ||
      message.includes("degree") ||
      message.includes("study") ||
      message.includes("university")
    ) {
      return {
        text: "Shreya's educational background:\n\n🎓 Bachelor of Technology in Computer Science Engineering\nGuru Nanak Dev University, Amritsar (2020-2024)\n\n📚 Higher Secondary (+2) - Science (Non-Medical)\nPolice DAV Public School, Jalandhar (2019-2020)\n\n📖 Matriculation (10th) - ICSE Board\nST. Joseph Convent School, Jalandhar (2017-2018)\n\nWant to know more about her background?",
        suggestNavigation: "about",
      };
    }

    if (
      message.includes("mobile") ||
      message.includes("react native") ||
      message.includes("app development")
    ) {
      return {
        text: "Shreya has extensive React Native experience:\n\n• Led development of 50+ screen production app\n• Built Stringly dating app (1000+ users)\n• Heebee Coffee mobile app\n• Expertise in: Navigation, Camera APIs, Charts, Hardware integrations, Push notifications, State management\n\nShould I show you her mobile projects?",
        suggestNavigation: "projects",
      };
    }

    if (
      message.includes("web3") ||
      message.includes("blockchain") ||
      message.includes("defi") ||
      message.includes("crypto")
    ) {
      return {
        text: "Yes! Shreya has Web3 experience:\n\n• DFinance - DeFi platform on Internet Computer Protocol\n• BlockseBlock - Blockchain hackathon platform (100k+ developers)\n• Smart contract integration\n• Wallet connectivity\n• Token management\n\nWould you like to see these projects?",
        suggestNavigation: "projects",
      };
    }

    if (
      message.match(
        /^(hello|hi|hey|greetings|good morning|good afternoon|good evening)$/i
      )
    ) {
      return {
        text: "Hello! 👋 I'm here to help you learn about Shreya Mahajan. She's a Full Stack Developer with expertise in React, Node.js, React Native, and more.\n\nWhat would you like to know about?\n• Her projects\n• Technical skills\n• Work experience\n• Contact information",
      };
    }

    if (
      message.includes("about") ||
      message.includes("who is") ||
      message.includes("tell me about")
    ) {
      return {
        text: "Shreya Mahajan is a Full Stack Developer with 1.5+ years of experience building production-ready web and mobile applications.\n\n🎯 Specializes in: React, TypeScript, Node.js, React Native, MongoDB\n💼 Current: Full Stack Developer at QuadB Technologies\n🚀 Built: 10+ projects including DeFi platforms, mobile apps\n🌟 Key skills: Clean architecture, secure APIs, performance optimization\n\nWould you like to learn more about her background?",
        suggestNavigation: "about",
      };
    }

    if (message.includes("achievement") || message.includes("accomplishment")) {
      return {
        text: "Shreya's key achievements:\n\n✅ Built DFinance DeFi platform (1,000+ users)\n✅ Led React Native app with 50+ screens to production\n✅ Implemented KYC system with 95% success rate\n✅ Created AI automation improving efficiency by 20%\n✅ Developed Stringly app (1,000+ active users)\n✅ Built 5 web apps + mobile app for Heebee Coffee\n\nImpressive, right? Want to see her projects?",
        suggestNavigation: "projects",
      };
    }

    if (
      message.includes("database") ||
      message.includes("mongodb") ||
      message.includes("redis")
    ) {
      return {
        text: "Shreya's database expertise:\n\n• MongoDB (2+ years) - User data, logs, dashboards\n• Redis (1+ year) - Session caching, performance\n• Aggregation queries\n• Database optimization\n• Schema design\n\nWant to explore all her technical skills?",
        suggestNavigation: "skills",
      };
    }

    if (
      message.includes("tools") ||
      message.includes("git") ||
      message.includes("docker")
    ) {
      return {
        text: "Shreya uses modern development tools:\n\n• Git & GitHub - Version control, PR reviews\n• Docker - Container deployment\n• Postman - API testing\n• Figma - UI/UX design\n• ESLint/Prettier - Code quality\n• Webpack/Vite - Build tools\n• Vercel/Netlify - Deployment\n\nShould I show you her complete skill set?",
        suggestNavigation: "skills",
      };
    }

    if (
      message.includes("location") ||
      message.includes("where") ||
      message.includes("based")
    ) {
      return {
        text: "Shreya is based in India and is currently working at QuadB Technologies in Ludhiana.\n\nShe's open to:\n• Remote opportunities\n• Relocation for the right role\n• Freelance projects\n• Collaboration\n\nWant her contact details?",
        suggestNavigation: "contact",
      };
    }

    if (
      message.includes("linkedin") ||
      message.includes("github") ||
      message.includes("social")
    ) {
      return {
        text: "Connect with Shreya:\n\n💼 LinkedIn: linkedin.com/in/shreya-mahajann\n💻 GitHub: github.com/ShreyaMahajan1\n📧 Email: shreyamahajan56789@gmail.com\n\nShould I open the contact section?",
        suggestNavigation: "contact",
      };
    }

    if (
      message.includes("resume") ||
      message.includes("cv") ||
      message.includes("download")
    ) {
      return {
        text: "You can download Shreya's resume from the navigation bar at the top! There's a 'Download CV' button.\n\nHer resume includes:\n• Complete work experience\n• Technical skills\n• Project portfolio\n• Education background\n• Contact information\n\nWould you like to see her experience section first?",
        suggestNavigation: "experience",
      };
    }

    if (message.includes("years") || message.includes("how long")) {
      return {
        text: "Shreya has 1.5+ years of professional development experience:\n\n• QuadB Technologies (8+ months)\n• O7 Services (6 months internship)\n• Error to Array (6 months internship)\n• Plus numerous personal projects\n\nShe's been coding for 4+ years total if we include her learning journey!\n\nWant to see her experience timeline?",
        suggestNavigation: "experience",
      };
    }

    if (
      message.includes("specialize") ||
      message.includes("expert") ||
      message.includes("best at")
    ) {
      return {
        text: "Shreya specializes in:\n\n🎯 Frontend: React, TypeScript, Tailwind CSS\n⚙️ Backend: Node.js, Express.js, MongoDB\n📱 Mobile: React Native apps\n🔐 Security: JWT auth, KYC systems\n🌐 Web3: DeFi platforms, blockchain\n\nShe's particularly strong at building production-ready full-stack applications from scratch.\n\nWant to explore her skills in detail?",
        suggestNavigation: "skills",
      };
    }

    if (
      message.includes("team") ||
      message.includes("lead") ||
      message.includes("manage")
    ) {
      return {
        text: "Yes! Shreya has team leadership experience:\n\n• Led React Native app development with a team of 4\n• Collaborated with cross-functional teams\n• Code reviews and mentoring\n• Project planning and execution\n\nShe's comfortable working independently or leading teams.\n\nWant to see her work experience?",
        suggestNavigation: "experience",
      };
    }

    return {
      text: "I'm here to help you learn about Shreya Mahajan! I can tell you about:\n\n💻 Projects - DFinance, BlockseBlock, Heebee Coffee, Stringly\n🛠️ Skills - React, Node.js, TypeScript, React Native\n💼 Experience - QuadB Technologies, O7 Services\n📧 Contact - How to reach her\n\nWhat interests you most?",
    };
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      content: inputValue,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    const currentInput = inputValue;
    setInputValue("");
    setIsTyping(true);

    setTimeout(() => {
      const response = generateAIResponse(currentInput);

      if (response.text === "NAVIGATE_PENDING" && pendingNavigation) {
        const section = pendingNavigation;
        setPendingNavigation(null);
        onSectionChange(section);
        setIsOpen(false);
        window.scrollTo({ top: 0, behavior: "smooth" });

        const confirmMessage: Message = {
          id: (Date.now() + 1).toString(),
          type: "ai",
          content: `Perfect! Taking you to the ${section} section now. 🚀`,
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, confirmMessage]);
        setIsTyping(false);
        return;
      }

      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        type: "ai",
        content: response.text,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, aiResponse]);

      if (response.suggestNavigation) {
        setPendingNavigation(response.suggestNavigation);
      }

      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleQuickAction = (action: () => void, label: string) => {
    action();
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });

    const confirmMessage: Message = {
      id: Date.now().toString(),
      type: "ai",
      content: `Taking you to ${label}! 🚀 Feel free to ask me anything else about Shreya's background.`,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, confirmMessage]);
  };

  return (
    <div ref={agentRef}>
      {}
      <button
        onClick={() => setIsOpen(true)}
        className="relative md:fixed md:bottom-6 md:right-6 md:z-50 w-12 h-12 md:w-14 md:h-14 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
      >
        <MessageCircle
          size={20}
          className="md:w-6 md:h-6 text-white group-hover:scale-110 transition-transform"
        />
        <div className="absolute -top-1 -right-1 md:-top-2 md:-right-2 w-3 h-3 md:w-4 md:h-4 bg-emerald-400 rounded-full animate-pulse"></div>
      </button>

      {}
      {isOpen && (
        <div className="fixed bottom-24 right-2 left-2 md:bottom-24 md:right-6 md:left-auto z-50 md:w-96 max-w-[calc(100vw-1rem)] md:max-w-[calc(100vw-2rem)] h-[450px] md:h-[500px] bg-slate-900/95 backdrop-blur-xl border border-slate-700 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-fade-in">
          {}
          <div className="flex items-center justify-between p-3 md:p-4 border-b border-slate-700 bg-gradient-to-r from-teal-600/10 to-cyan-600/10">
            <div className="flex items-center gap-2 md:gap-3">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center">
                <Bot size={16} className="md:w-5 md:h-5 text-white" />
              </div>
              <div>
                <h3 className="text-sm md:text-base font-semibold text-white">
                  AI Assistant
                </h3>
                <p className="text-xs text-teal-400">Ask me about Shreya</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 md:p-2 hover:bg-slate-800 rounded-lg transition-colors"
            >
              <X size={16} className="md:w-[18px] md:h-[18px] text-gray-400" />
            </button>
          </div>

          {}
          <div className="p-2 md:p-3 border-b border-slate-700/50">
            <div className="grid grid-cols-2 gap-1.5 md:gap-2">
              {quickActions.map((action, index) => {
                const Icon = action.icon;
                return (
                  <button
                    key={index}
                    onClick={() =>
                      handleQuickAction(action.action, action.label)
                    }
                    className="flex items-center gap-1.5 md:gap-2 p-1.5 md:p-2 bg-slate-800/50 hover:bg-slate-700/50 rounded-lg transition-colors text-xs md:text-sm text-gray-300 hover:text-white"
                  >
                    <Icon size={12} className="md:w-[14px] md:h-[14px]" />
                    <span className="truncate">{action.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {}
          <div className="flex-1 overflow-y-auto p-3 md:p-4 space-y-3 md:space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-2 md:gap-3 animate-fade-in ${
                  message.type === "user" ? "flex-row-reverse" : ""
                }`}
              >
                <div
                  className={`w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    message.type === "ai"
                      ? "bg-gradient-to-r from-teal-500 to-cyan-500"
                      : "bg-slate-700"
                  }`}
                >
                  {message.type === "ai" ? (
                    <Sparkles size={14} className="md:w-4 md:h-4 text-white" />
                  ) : (
                    <User size={14} className="md:w-4 md:h-4 text-white" />
                  )}
                </div>
                <div
                  className={`max-w-[80%] p-2.5 md:p-3 rounded-2xl ${
                    message.type === "ai"
                      ? "bg-slate-800 text-gray-200"
                      : "bg-gradient-to-r from-teal-600 to-cyan-600 text-white"
                  }`}
                >
                  <p className="text-xs md:text-sm leading-relaxed whitespace-pre-line">
                    {message.content}
                  </p>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex gap-2 md:gap-3 animate-fade-in">
                <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 flex items-center justify-center">
                  <Sparkles size={14} className="md:w-4 md:h-4 text-white" />
                </div>
                <div className="bg-slate-800 p-2.5 md:p-3 rounded-2xl">
                  <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-teal-400 rounded-full animate-bounce"></div>
                    <div
                      className="w-1.5 h-1.5 md:w-2 md:h-2 bg-teal-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0.1s" }}
                    ></div>
                    <div
                      className="w-1.5 h-1.5 md:w-2 md:h-2 bg-teal-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0.2s" }}
                    ></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {}
          <div className="p-2.5 md:p-4 border-t border-slate-700">
            <div className="flex gap-1.5 md:gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                placeholder="Ask about Shreya..."
                className="flex-1 px-2.5 py-2 md:px-3 md:py-2 bg-slate-800 border border-slate-600 rounded-lg focus:border-teal-500 focus:outline-none text-white placeholder-gray-400 text-xs md:text-sm"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputValue.trim()}
                className="p-2 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg hover:from-teal-600 hover:to-cyan-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
              >
                <Send size={14} className="md:w-4 md:h-4 text-white" />
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in {
          animation: fade-in 0.2s ease-out;
        }
      `}</style>
    </div>
  );
};

export default AIAgent;