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
    "Hardhat",
    "Ethers.js",
    "USDC/Stablecoins",
    "Solana",
    "Monad",
    "LangChain",
    "AI/ML Integration",
    "Docker",
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
      title: "AgentTrust",
      href: "https://github.com/ShivamSoni20/AgentTrust",
      dates: "Feb 2025",
      active: true,
      description:
        "Decentralized reputation and credit scoring protocol for AI agents on Base Sepolia. Enables AI agents to establish economic identity with 1 USDC stake, build real-time reputation scores (0-1000), and unlock 5x credit multipliers through successful transactions.",
      technologies: [
        "Solidity",
        "Hardhat",
        "USDC",
        "Base Sepolia",
        "Next.js",
        "TypeScript",
        "Ethers.js",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/ShivamSoni20/AgentTrust",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "NexusGift",
      href: "https://github.com/ShivamSoni20/NexusGift",
      dates: "Jan 2025",
      active: true,
      description:
        "Privacy-first gift card protocol on Solana. Send confidential on-chain gifts instantly converted into spendable virtual Visa/Mastercard cards—all without KYC, registration, or leaving a trace on the public ledger. Features ShadowWire confidential transfers and Starpay integration.",
      technologies: [
        "Solana",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Starpay API",
        "Web3",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/ShivamSoni20/NexusGift",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "AuditForge",
      href: "https://github.com/ShivamSoni20/AuditForge",
      dates: "Jan 2025",
      active: true,
      description:
        "AI-powered smart contract auditing platform with GPT-4o integration. Performs multi-layer scanning (AI + Static + DePIN-specific), generates auto-remediation fixes, and delivers complete audits in under 60 seconds. Supports Solidity and Rust with Etherscan integration across 8+ EVM chains.",
      technologies: [
        "Next.js",
        "TypeScript",
        "OpenAI GPT-4o",
        "Solidity",
        "Rust",
        "Docker",
        "NodeOps",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/ShivamSoni20/AuditForge",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Aelix — AI Agent on Monad",
      href: "https://aelix-ai.vercel.app/",
      dates: "Jan 2025",
      active: true,
      description:
        "Autonomous AI agent for the Monad blockchain. Features wallet management, token operations, real-time gas estimates, and live token pricing via CoinGecko. Built with LangChain for context-aware conversations and autonomous task execution.",
      technologies: [
        "TypeScript",
        "LangChain",
        "Monad",
        "Next.js",
        "Ethers.js",
        "CoinGecko API",
      ],
      links: [
        {
          type: "Website",
          href: "https://aelix-ai.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/ShivamSoni20/Aelix",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "TrustWork",
      href: "https://github.com/ShivamSoni20/TrustWork",
      dates: "Jan 2025",
      active: true,
      description:
        "Decentralized freelance marketplace built on the Stacks blockchain using Clarity smart contracts. Features USDC escrow-based payments, dispute resolution, and trustless job posting and completion workflows.",
      technologies: [
        "Clarity",
        "Stacks",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "USDC",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/ShivamSoni20/TrustWork",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "FlowExplain AI",
      href: "https://github.com/ShivamSoni20/FlowExplain-AI",
      dates: "Jan 2025",
      active: true,
      description:
        "AI-powered automation workflow analyzer. Understands triggers, logic, and complexity of n8n, Make, and Zapier workflows in seconds. Generates clear documentation for onboarding and auditing.",
      technologies: [
        "React",
        "TypeScript",
        "n8n",
        "AI/ML",
        "Tailwind CSS",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/ShivamSoni20/FlowExplain-AI",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
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
        "Full-featured e-commerce web application with user authentication, shopping cart, product management, and a responsive admin dashboard. Built with Java Servlets and JSP on the backend with MySQL for data persistence.",
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
  ],
  hackathons: [
    {
      title: "USDC Hackathon on Moltbook (AgentTrust)",
      dates: "Feb 2025",
      location: "Remote",
      description:
        "Built AgentTrust — a decentralized credit bureau for autonomous AI commerce on Base Sepolia. AI agents stake 1 USDC to establish identity, build reputation through transactions, and unlock credit multipliers. Features on-chain dispute resolution and Moltbook social integration.",
      image: "",
      links: [
        {
          title: "GitHub",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ShivamSoni20/AgentTrust",
        },
      ],
    },
    {
      title: "Solana Privacy Hackathon (NexusGift)",
      dates: "Jan 2025",
      location: "Remote",
      description:
        "Built NexusGift — a stateless privacy protocol on Solana for sending anonymous crypto-powered gift cards. Gifts are instantly converted into spendable virtual Visa/Mastercard cards without KYC or registration, using ShadowWire confidential transfers.",
      image: "",
      links: [
        {
          title: "GitHub",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ShivamSoni20/NexusGift",
        },
      ],
    },
    {
      title: "NodeOps DePIN Hackathon (AuditForge)",
      dates: "Jan 2025",
      location: "Remote",
      description:
        "Built AuditForge — an AI-powered smart contract auditing tool with GPT-4o integration. Delivers multi-layer security scanning with auto-remediation in under 60 seconds. Supports Solidity & Rust across 8+ EVM chains with professional PDF report generation.",
      image: "",
      links: [
        {
          title: "GitHub",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ShivamSoni20/AuditForge",
        },
      ],
    },
    {
      title: "BuidlGuidl Batch 23 (Ethereum Development)",
      dates: "Jan 2025",
      location: "Remote",
      description:
        "Participated in BuidlGuidl Batch 23 — an intensive Ethereum development program focused on building with Scaffold-ETH 2. Completed Speedrun Ethereum challenges and contributed to the batch cohort website.",
      image: "",
      links: [
        {
          title: "Batch Site",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://batch23.buidlguidl.com/",
        },
        {
          title: "GitHub",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ShivamSoni20/batch23.buidlguidl.com",
        },
      ],
    },
    {
      title: "Monad AI Agent Hackathon (Aelix)",
      dates: "Jan 2025",
      location: "Remote",
      description:
        "Built Aelix — an autonomous AI agent for the Monad blockchain powered by LangChain. Features wallet management, token creation & transfers, real-time gas estimation, and token price tracking via CoinGecko.",
      image: "",
      links: [
        {
          title: "Live Demo",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://aelix-ai.vercel.app/",
        },
        {
          title: "GitHub",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ShivamSoni20/Aelix",
        },
      ],
    },
    {
      title: "bitsCrunch x AI Builders Hack 2025 (CrunchGPT)",
      dates: "2025",
      location: "Remote",
      description:
        "Developed CrunchGPT — an AI-powered NFT analytics platform for real-time insights, trends, and risk analysis. Built for web3 traders and collectors, leveraging advanced AI and live blockchain data to empower smarter, safer trading decisions.",
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
        "Built CodeGenie — an AI-powered code generation platform that helps developers write better code faster. Features intelligent code suggestions, automated documentation, and real-time code analysis using advanced AI models.",
      image: "",
      links: [
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
      title: "Hacktoberfest 2025 — HealthAI-Assistant",
      description: "6 merged pull requests to HealthAI-Assistant, an AI-powered health assistant application. Contributions include major UI/UX redesigns, new features like voice input and inline message editing, and critical bug fixes.",
      contributions: [
        "✨ Inline Message Editing & Cancel Streaming — Enhanced chat with inline editing and streaming cancellation (PR #49, merged)",
        "✨ Animated Theme Toggler — Circular reveal transition animation for theme switching (PR #47, merged)",
        "🎤 Voice Input Feature — Speech-to-text with pulse animation and real-time transcription (PR #45, merged)",
        "🎨 Symptom Analyzer UI/UX Redesign — Complete redesign with voice input and full responsiveness (PR #43, merged)",
        "🔒 Image Validation for Medicine Analyzer — AI-powered validation to prevent non-medical image uploads (PR #35, merged)",
        "✨ Healthcare Chat Redesign — Complete glassmorphism UI overhaul with streaming support (PR #14, merged)",
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
      ],
    },
  ],
} as const;
