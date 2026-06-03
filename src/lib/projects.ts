export type Project = {
  id: number;
  title: string;
  featuredTitle?: string;
  category: string[];
  description: string;
  tech: string[];
  links: {
    github?: string;
    demo?: string;
    package?: string;
  };
  image: string;
  status?: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Rate-Shield",
    featuredTitle: "Rate-Shield - Node.js Rate Limiter",
    category: ["Backend", "Library"],
    description:
      "A lightweight, pluggable TypeScript rate limiting library for Node.js with Fixed Window, Sliding Window, Token Bucket, Leaky Bucket, Redis-backed atomic limiters, Express middleware, and circuit-breaker fallback support.",
    tech: ["TypeScript", "Node.js", "Redis", "Express"],
    links: {
      github: "https://github.com/Kru5hna/rate-shield",
      package: "https://www.npmjs.com/package/rate-shield",
    },
    image: "/rate-shield.svg",
    status: "NPM v1.0.0",
  },
  {
    id: 2,
    title: "SecureGate",
    featuredTitle: "SecureGate - Intelligent Vehicle Access Control",
    category: ["AI", "Computer Vision", "Full Stack"],
    description:
      "A campus security system that detects license plates with YOLOv8, reads them through a Kimi Vision, EasyOCR, and Tesseract fallback pipeline, then flags unregistered vehicles in a Flask and SQLite dashboard.",
    tech: ["Python", "Flask", "YOLOv8", "EasyOCR"],
    links: {
      github: "https://github.com/Kru5hna/SecureGate",
      demo: "https://huggingface.co/spaces/Krishna2722/SecureGate"
    },
    image: "/securegate.svg",
    status: "Sample preview",
  },
  {
    id: 3,
    title: "Welth",
    featuredTitle: "Welth - AI Finance Platform",
    category: ["Full Stack", "AI"],
    description:
      "AI-powered finance platform with receipt scanning and budget alerts. Helps users track expenses and get personalized financial advice.",
    tech: ["Next.js 15", "Supabase", "Gemini API"],
    links: {
      github: "https://github.com/Kru5hna/Welth-AI-Finance-Platform",
      demo: "https://welth-kru5hna.vercel.app/",
    },
    image: "/welth.png",
  },
  {
    id: 4,
    title: "ChatHub",
    category: ["Full Stack"],
    description:
      "Real-time messaging platform enabling seamless communication with instant updates, secure JWT auth, and separate chat rooms.",
    tech: ["Node.js", "Socket.io", "MongoDB"],
    links: {
      github: "https://github.com/Kru5hna/ChatHub",
      demo: "https://chat-hub-eosin-phi.vercel.app",
    },
    image: "/chathub.png",
  },
  {
    id: 5,
    title: "NotesBud",
    description:
      "A feature-rich note-taking application designed for productivity with real-time sync and CRUD operations.",
    category: ["Full Stack"],
    tech: ["Next.js", "Firebase", "Firestore"],
    links: {
      github: "https://github.com/Kru5hna/NotesBud",
      demo: "https://notesbuds.netlify.app/",
    },
    image: "/notesbud.png",
  },
  {
    id: 6,
    title: "Pokedex",
    category: ["Frontend"],
    description:
      "Interactive Pokedex exploring the first 151 Pokemon with detailed stats and abilities.",
    tech: ["React", "CSS"],
    links: {
      github: "https://github.com/Kru5hna/Pokedex",
      demo: "https://krushna-pokedex.netlify.app/",
    },
    image: "/pokedex.png",
  },
  {
    id: 7,
    title: "DailyBrew",
    category: ["Frontend"],
    description:
      "Your daily dose of coffee and news. Track caffeine intake and stay balanced.",
    tech: ["JavaScript", "API"],
    links: {
      github: "https://github.com/Kru5hna/DailyBrew",
      demo: "https://dailybrews.netlify.app/",
    },
    image: "/dailybrew.png",
  },
  {
    id: 8,
    title: "Solana Wallet Adapter",
    category: ["Web3"],
    description:
      "Wallet adapter integration for Solana blockchain apps, facilitating secure transactions.",
    tech: ["Web3", "Solana", "React"],
    links: {
      github:
        "https://github.com/Kru5hna/Web3-projects/tree/master/solana-Wallet-adapter",
    },
    image: "/solanaWalletAdapter.png",
  },
];

export const projectFilters = [
  "All",
  "AI",
  "Backend",
  "Computer Vision",
  "Frontend",
  "Full Stack",
  "Library",
  "Web3",
];
