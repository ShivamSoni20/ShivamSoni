import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Shivam Soni",
  initials: "SS",
  url: "https://shivamsoni.dev",
  location: "India",
  locationLink: "https://www.google.com/maps/place/india",
  description:
    "Aspiring Software Developer with a strong foundation in Java, web technologies, and modern frameworks. Passionate about software development and web technologies, and skilled in problem-solving and team collaboration.",
  summary:
    "I'm a passionate developer with expertise in full-stack development, specializing in Java, JavaScript, and modern web frameworks. I have hands-on experience building scalable web applications, e-commerce platforms, and AI-powered tools. My technical skills include Core & Advanced Java, Spring Boot, React, Next.js, TypeScript, and database management with MySQL and MongoDB. I'm proficient in building RESTful APIs, implementing secure authentication, and creating responsive user interfaces. Always eager to learn and explore new technologies to solve real-world problems.",
  avatarUrl: "/shivam.jpeg",
  skills: [
    "Java",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Spring Boot",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "Bootstrap",
    "MySQL",
    "MongoDB",
    "Git",
    "RESTful APIs",
    "Servlets",
    "JSP",
    "JDBC",
    "MVC Architecture",
    "Blockchain",
    "Web3",
    "Solidity",
    "Smart Contracts",
    "Prisma ORM",
    "Redux",
    "JWT",
    "OAuth",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "ss28022802@gmail.com",
    tel: "+91 7987054345",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/ShivamSoni20",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/shivamsoni28",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/shivam_soni18",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:ss28022802@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Freelance",
      href: "#",
      badges: [],
      location: "Remote",
      title: "Full Stack Developer",
      logoUrl: "/developer.png",
      start: "July 2024",
      end: "Present",
      description:
        "Developing and maintaining web applications using modern technologies. Built responsive e-commerce platforms with secure authentication, shopping cart functionality, and admin dashboards. Created AI-powered NFT analytics tools using Next.js, TypeScript, and blockchain APIs. Implemented RESTful APIs, database integrations, and optimized application performance for scalability and user experience.",
    },
  ],
  education: [
    {
      school: "Adina Institute of Science and Technology",
      href: "#",
      degree: "Bachelor of Technology (Computer Science & Engineering)",
      logoUrl: "/adina.png",
      start: "2021",
      end: "2025",
    },
    {
      school: "Pearl Public Higher Secondary School",
      href: "#",
      degree: "Higher Secondary Education (Science Stream) - 86%",
      logoUrl: "/pearl.png",
      start: "2019",
      end: "2021",
    },
    {
      school: "Pearl Public Higher Secondary School",
      href: "#",
      degree: "Secondary Education - 83.3%",
      logoUrl: "/pearl.png",
      start: "2018",
      end: "2019",
    },
  ],
  projects: [
    {
      title: "CrunchGPT",
      href: "https://crunch-gpt.vercel.app/",
      dates: "Jan 2025",
      active: true,
      description:
        "AI-powered NFT analytics platform providing real-time insights, trends, and risk analysis. Features marketplace analytics, holder tracking, washtrade detection, and wallet analytics powered by bitsCrunch APIs and blockchain data.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "bitsCrunch APIs",
        "UnleashNFTs API",
        "Privy Auth",
        "Web3",
      ],
      links: [
        {
          type: "Website",
          href: "https://crunch-gpt.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/ShivamSoni20/CrunchGPT",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "CodeGenie",
      href: "https://github.com/ShivamSoni20/CodeGenie",
      dates: "Feb 2025",
      active: true,
      description:
        "AI-powered code generation platform that helps developers write better code faster. Features intelligent code suggestions, automated documentation, and real-time code analysis.",
      technologies: [
        "Next.js",
        "TypeScript",
        "OpenAI API",
        "Tailwind CSS",
        "Prisma",
        "PostgreSQL",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/ShivamSoni20/CodeGenie",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Responsive E-commerce Website",
      href: "https://github.com/ShivamSoni20/E-Commerce-Site",
      dates: "Aug 2024 - Sept 2024",
      active: true,
      description:
        "Built an AI-powered platform to generate smart contracts using AI. Allows users to create, deploy, and manage smart contracts with natural language. Integrated wallet connectivity, contract validation, and secure deployment to blockchain networks.",
      technologies: [
        "Java",
        "JSP",
        "Servlets",
        "HTML",
        "CSS",
        "JavaScript",
        "Bootstrap",
        "MySQL",
        "JDBC",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/ShivamSoni20/E-Commerce-Site",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Responsive Restaurant Website",
      href: "https://github.com/ShivamSoni20/Restaurant.github.io",
      dates: "2024",
      active: true,
      description:
        "Modern restaurant website with mobile-first design, light/dark mode toggle, and contact form with validation. Built with clean, semantic HTML and responsive CSS.",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Responsive Design",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/ShivamSoni20/Restaurant.github.io",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "bitsCrunch x AI Builders Hack 2025 (CrunchGPT)",
      dates: "2025",
      location: "Remote",
      description:
        "Developed CrunchGPT - An AI-powered NFT analytics platform for real-time insights, trends, and risk analysis. Built for web3 traders and collectors, leveraging advanced AI and live blockchain data to empower smarter, safer trading decisions.",
      image: "",
      links: [
        {
          title: "Live Demo",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://crunch-gpt.vercel.app/",
        },
        {
          title: "GitHub",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ShivamSoni20/CrunchGPT",
        },
      ],
    },
    {
      title: "Somnia DeFi Mini Hackathon (CodeGenie)",
      dates: "Feb 2025",
      location: "Remote",
      description:
        "Built CodeGenie - An AI-powered code generation platform that helps developers write better code faster. Features intelligent code suggestions, automated documentation, and real-time code analysis using advanced AI models.",
      image: "",
      links: [
        {
          title: "Live Demo",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://github.com/ShivamSoni20/CodeGenie",
        },
        {
          title: "GitHub",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ShivamSoni20/CodeGenie",
        },
      ],
    },
  ],
  openSourceContributions: [
    {
      title: "Hacktoberfest 2025",
      description: "Active participant in Hacktoberfest, contributing to open source projects and collaborating with the developer community.",
      contributions: [
        "Contributed to HealthAI-Assistant - An AI-powered health assistant application",
        "✨ Inline Message Editing & Cancel Streaming - Enhanced chat functionality with inline editing and streaming cancellation (PR #49)",
        "✨ Animated Theme Toggler - Implemented elegant theme toggler with circular reveal transition animation (PR #47)",
        "🎤 Voice Input Feature - Integrated voice input with pulse animation and real-time speech-to-text transcription (PR #45)",
        "🎨 Symptom Analyzer UI/UX Redesign - Complete redesign with voice input and full responsiveness (PR #43)",
        "🔒 Image Validation for Medicine Analyzer - Added robust validation to prevent non-medical image uploads (PR #35)",
        "✨ Healthcare Chat Redesign - Comprehensive redesign with streaming support and responsive design (PR #14)"
      ],
      year: 2025,
      links: [
        {
          type: "Project",
          href: "https://github.com/NikhilRaikwar/HealthAI-Assistant",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "PR #49",
          href: "https://github.com/NikhilRaikwar/HealthAI-Assistant/pull/49",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "PR #47",
          href: "https://github.com/NikhilRaikwar/HealthAI-Assistant/pull/47",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "PR #45",
          href: "https://github.com/NikhilRaikwar/HealthAI-Assistant/pull/45",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "PR #43",
          href: "https://github.com/NikhilRaikwar/HealthAI-Assistant/pull/43",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "PR #35",
          href: "https://github.com/NikhilRaikwar/HealthAI-Assistant/pull/35",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "PR #14",
          href: "https://github.com/NikhilRaikwar/HealthAI-Assistant/pull/14",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "GitHub Profile",
          href: "https://github.com/ShivamSoni20",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
  ],
} as const;
