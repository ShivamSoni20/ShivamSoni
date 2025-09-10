import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Shivam Soni",
  initials: "SS",
  url: "https://shivamsoni.dev",
  location: "India",
  locationLink: "https://www.google.com/maps/place/india",
  description:
    "Full Stack Developer passionate about software development, web technologies, and problem-solving. I specialize in Core & Advanced Java, JSP, JDBC, MVC Architecture, and have experience building responsive, user-friendly interfaces. I'm very active on Twitter and love connecting with other tech enthusiasts.",
  summary:
    "I'm a developer who loves turning ideas into high-quality, scalable applications. My expertise spans Core Java, Advanced Java, JSP, JDBC, MVC, and integrating databases with efficient backend logic. On the frontend, I work with HTML, CSS, JavaScript, and Bootstrap to create responsive, high-performance web experiences. Git, version control, MySQL, file handling, multithreading, collections framework, and exception handling are part of my daily toolkit. Always curious, I explore new technologies to continuously enhance my projects and problem-solving abilities.",
  avatarUrl: "/shivam.jpeg",
  skills: [
    "Core Java",
    "Advanced Java",
    "JSP",
    "JDBC",
    "MVC Architecture",
    "HTML",
    "CSS",
    "JavaScript",
    "Bootstrap",
    "MySQL",
    "Git",
    "Version Control",
    "File Handling",
    "Multithreading",
    "Exception Handling",
    "Collections Framework",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "hello@example.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://dub.sh/dillion-github",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://dub.sh/dillion-linkedin",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://dub.sh/dillion-twitter",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://dub.sh/dillion-youtube",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Web Application Developer",
      href: "#",
      badges: [],
      location: "India",
      title: "Web Application Developer",
      logoUrl: "/developer.png",
      start: "2023",
      end: "Present",
      description:
        "I have hands-on experience designing and developing responsive web applications, from front-end interfaces to robust back-end systems. My work includes creating dynamic websites, e-commerce platforms, and interactive features using Core & Advanced Java, JSP, JDBC, and MVC architecture. I've integrated MySQL databases for efficient data handling, implemented secure authentication systems, and optimized applications for performance and scalability. Every project I build reflects my focus on clean code, smooth user experience, and continuous improvement.",
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
      dates: "2025",
      active: true,
      description:
        "AI-powered NFT analytics platform for real-time insights, trends, and risk analysis. Features marketplace analytics, holder tracking, washtrade detection, and wallet analytics powered by bitsCrunch APIs.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "bitsCrunch APIs",
        "UnleashNFTs API",
        "Privy Auth",
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
      title: "Responsive E-commerce Website",
      href: "https://github.com/ShivamSoni20/E-Commerce-Site",
      dates: "2024",
      active: true,
      description:
        "Full-featured e-commerce platform with secure login/registration, product catalog, shopping cart, admin panel, and password hashing for enhanced security.",
      technologies: [
        "Java Servlets",
        "JSP",
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
  ],
} as const;
