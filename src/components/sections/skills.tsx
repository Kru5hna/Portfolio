"use client";

import { motion } from "framer-motion";
import { useState } from "react";

// Custom SVG Icons with inline paths for high performance and no external asset loading
const TechIcons = {
  TypeScript: (className: string) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0H1.125zm15.176 11.238c.84 0 1.547.234 2.12.702.576.463.924 1.144 1.045 2.043h-2.128c-.1-.486-.3-.85-.597-1.09-.297-.245-.71-.366-1.24-.366-.547 0-.964.135-1.25.405-.286.27-.43.666-.43 1.19 0 .426.115.753.344.982.23.228.647.452 1.253.673l1.102.404c1.196.438 2.052.923 2.569 1.455.518.533.777 1.272.777 2.22 0 1.054-.396 1.874-1.19 2.457-.792.584-1.895.876-3.308.876-1.288 0-2.31-.282-3.067-.847-.758-.564-1.168-1.393-1.23-2.485h2.152c.07.576.326 1.01.765 1.3.44.29.988.435 1.644.435.597 0 1.066-.145 1.407-.435.342-.29.513-.675.513-1.155 0-.463-.153-.815-.46-1.05-.308-.236-.88-.496-1.72-.78l-1.003-.346c-1.073-.374-1.826-.856-2.257-1.44-.43-.585-.646-1.334-.646-2.247 0-1.004.382-1.79 1.147-2.355.766-.565 1.8-.847 3.106-.847zm-10.457.067h7.245v2.01H10.59v9.066H8.267v-9.066H5.844v-2.01z"/>
    </svg>
  ),
  JavaScript: (className: string) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 0h24v24H0V0zm22.034 18.268c-.175-1.117-.829-2.007-2.204-2.518-.567-.245-1.419-.443-2.226-.618-1.014-.22-1.402-.42-1.595-.758-.192-.35-.162-.977.193-1.342.34-.34.918-.467 1.502-.467.818 0 1.343.321 1.65.875.127.234.195.642.195 1.02h2.249c0-1.298-.67-2.435-1.928-3.018-.758-.35-1.75-.467-2.73-.467-1.637 0-2.828.455-3.529 1.254-.699.803-.818 1.947-.467 2.827.426.963 1.488 1.488 2.828 1.779 1.254.27 2.22.42 2.729.744.466.292.655.67.655 1.152 0 .612-.496 1.05-1.385 1.05-.963 0-1.503-.437-1.735-1.123-.117-.35-.117-.758-.117-1.254h-2.274c0 1.298.175 2.376.992 3.12.875.787 2.245.962 3.557.962 1.604 0 2.857-.365 3.585-1.151.728-.803.889-1.97.496-2.932zM12.042 11.2h-2.249v6.529c0 .73-.131 1.094-.656 1.094-.481 0-.685-.35-.685-1.094V11.2H6.203v6.792c0 1.094.27 2.057.992 2.713.729.656 1.838.787 2.976.787 1.152 0 2.129-.131 2.858-.787.729-.656.992-1.62.992-2.713V11.2z"/>
    </svg>
  ),
  React: (className: string) => (
    <svg className={className} viewBox="-11.5 -10.23174 23 20.46348" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <circle cx="0" cy="0" r="2.05" fill="currentColor"/>
      <g stroke="currentColor" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2"/>
        <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
        <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
      </g>
    </svg>
  ),
  NextDotJs: (className: string) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.262 18.738l-6.284-8.081v6.942h-1.651v-10.2h1.564l6.022 7.781v-7.781h1.651v11.339h-1.302z" />
    </svg>
  ),
  NodeDotJs: (className: string) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.978 0L2.35 5.56v12.879l9.628 5.56 9.673-5.56V5.56L11.978 0zm.045 4.887l6.634 3.829V15.29l-6.634 3.83-6.59-3.83V8.716l6.59-3.829zm0 2.22l-4.708 2.716v5.433l4.708 2.718 4.754-2.718v-5.433L12.023 7.11z" />
    </svg>
  ),
  Rust: (className: string) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M19.068 13.033l.498 1.86-1.503.743-.497-1.859A7.971 7.971 0 0113 14.93v1.983h-2v-1.983a7.971 7.971 0 01-4.566-1.153l-.497 1.859-1.503-.743.498-1.86A7.962 7.962 0 013.93 9.493H1.947v-2h1.982A7.962 7.962 0 017 3.934L6.503 2.073l1.503-.742.497 1.859A7.971 7.971 0 0113 2.07v-1.98h2v1.98a7.971 7.971 0 014.566 1.153l.497-1.859 1.503.742-.498 1.86A7.962 7.962 0 0120.07 7.493h1.983v2h-1.982a7.962 7.962 0 01-1.003 3.54zM12 4a8 8 0 100 16 8 8 0 000-16z"/>
    </svg>
  ),
  Python: (className: string) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.966 0c-2.428.016-4.664 1.1-6.177 2.946-.62.756-.99 1.704-.99 2.766V7.47h6.14V8.34H3.84a3.84 3.84 0 00-3.84 3.84v1.896c0 2.12 1.72 3.84 3.84 3.84h1.764v-2.308c0-2.12 1.72-3.84 3.84-3.84h6.14v-.87h-6.14V7.47h7.247c2.12 0 3.84-1.72 3.84-3.84v-1.9C23.57 1.72 21.85 0 19.73 0h-7.764zm-5.748 2.032a1.018 1.018 0 110 2.036 1.018 1.018 0 010-2.036zm11.758 15.904a1.018 1.018 0 110 2.036 1.018 1.018 0 010-2.036z"/>
    </svg>
  ),
  Redis: (className: string) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 0L2.4 5.5v13L12 24l9.6-5.5v-13L12 0zm0 3.7l6.8 3.9v7.8L12 19.3l-6.8-3.9V7.6l6.8-3.9zm-4.8 5.6h9.6v2H7.2V9.3zm0 3.8h9.6v2H7.2v-2z" />
    </svg>
  ),
  Postgresql: (className: string) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.86 4.2 10.74 9.8 11.77v-7.1H7.3v-2.67h2.5V12c0-2.47 1.5-3.83 3.72-3.83 1.06 0 1.98.08 2.25.11v2.61h-1.55c-1.2 0-1.43.57-1.43 1.4v1.84h2.9l-.38 2.67h-2.52v7.1c5.6-1.03 9.8-5.91 9.8-11.77 0-6.63-5.37-12-12-12z"/>
    </svg>
  ),
  Mongodb: (className: string) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 0c-.574 0-1.127.236-1.52.646L1.646 9.48a2.15 2.15 0 000 3.04l8.834 8.834c.393.393.946.646 1.52.646s1.127-.253 1.52-.646l8.834-8.834a2.15 2.15 0 000-3.04l-8.834-8.834A2.15 2.15 0 0012 0zm.01 4.3l6.23 6.23-6.23 6.23-6.23-6.23 6.23-6.23z"/>
    </svg>
  ),
  Tailwindcss: (className: string) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 5.09c-3.13 0-5.26 1.57-6.38 4.71 1.4-1.95 3.08-2.6 5.04-1.96 1.13.37 1.93 1.19 2.82 2.11 1.45 1.5 3.13 3.23 6.9 3.23 3.13 0 5.26-1.57 6.38-4.71-1.4 1.95-3.08 2.6-5.04 1.96-1.13-.37-1.93-1.19-2.82-2.11-1.45-1.5-3.13-3.23-6.9-3.23zM5.62 11.38C2.49 11.38.36 12.95-.76 16.09c1.4-1.95 3.08-2.6 5.04-1.96 1.13.37 1.93 1.19 2.82 2.11 1.45 1.5 3.13 3.23 6.9 3.23 3.13 0 5.26-1.57 6.38-4.71-1.4 1.95-3.08 2.6-5.04 1.96-1.13-.37-1.93-1.19-2.82-2.11-1.45-1.5-3.13-3.23-6.9-3.23z"/>
    </svg>
  ),
  Docker: (className: string) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.983 11.078h2.119v-2.02h-2.119zm-2.637 0h2.119v-2.02H11.35zm-2.637 0h2.12v-2.02h-2.12zm-2.637 0h2.119v-2.02H6.075zm-2.637 0h2.119v-2.02h-2.119zm5.274-2.525h2.119V6.533h-2.119zm2.637 0h2.119V6.533h-2.119zm-5.274 0h2.12V6.533h-2.12zm5.274-2.525h2.119V3.978h-2.119zm-3.053 11.096c0 .195.035.39.068.583H24c-.237-1.503-.983-2.91-2.085-3.978-.813-.787-1.848-1.288-2.915-1.457v-.55c0-1.186-.967-2.152-2.152-2.152-.407 0-.78.118-1.1.322v-.915c0-1.187-.966-2.153-2.153-2.153s-2.153.966-2.153 2.153v5.61H2.4c-1.32 0-2.4 1.08-2.4 2.4s1.08 2.4 2.4 2.4c0 .322.034.627.068.915v.237c.07.61.272 1.187.576 1.73l.034.068c.78 1.356 2.186 2.22 3.797 2.22s3.017-.864 3.796-2.22c.1-.17.17-.373.238-.576v-.068c.034-.17.068-.34.068-.508z" />
    </svg>
  )
};

type TechItem = {
  name: string;
  category: "Frontend" | "Backend" | "DevOps / DB";
  description: string;
  icon: (className: string) => React.ReactNode;
  brandColor: string;
};

const stackItems: TechItem[] = [
  {
    name: "TypeScript",
    category: "Frontend",
    description: "Primary language for type-safe static checks across server/client bounds.",
    icon: TechIcons.TypeScript,
    brandColor: "text-[#3178c6]"
  },
  {
    name: "Next.js",
    category: "Frontend",
    description: "Production framework for server-rendered HTML payloads and optimized SEO setups.",
    icon: TechIcons.NextDotJs,
    brandColor: "text-white"
  },
  {
    name: "React",
    category: "Frontend",
    description: "Component layout rendering, custom states, and browser animation mounts.",
    icon: TechIcons.React,
    brandColor: "text-[#61dafb]"
  },
  {
    name: "JavaScript",
    category: "Frontend",
    description: "Vanilla interaction scripting and asynchronous promise cycle engines.",
    icon: TechIcons.JavaScript,
    brandColor: "text-[#f7df1e]"
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    description: "Utility CSS framework used for structured layout styling and media configurations.",
    icon: TechIcons.Tailwindcss,
    brandColor: "text-[#38b2ac]"
  },
  {
    name: "Node.js",
    category: "Backend",
    description: "Server runtime container handling network queries and library script cycles.",
    icon: TechIcons.NodeDotJs,
    brandColor: "text-[#339933]"
  },
  {
    name: "Rust",
    category: "Backend",
    description: "Performance and memory-safe language used for crypt-engines and zero-knowledge logic.",
    icon: TechIcons.Rust,
    brandColor: "text-[#dea584]"
  },
  {
    name: "Python",
    category: "Backend",
    description: "System scripts and computer vision integration pipelines for YOLO and OCR algorithms.",
    icon: TechIcons.Python,
    brandColor: "text-[#3776ab]"
  },
  {
    name: "Redis",
    category: "DevOps / DB",
    description: "In-memory database cache for atomic rate limiters and session locks.",
    icon: TechIcons.Redis,
    brandColor: "text-[#d82c20]"
  },
  {
    name: "PostgreSQL",
    category: "DevOps / DB",
    description: "Relational database used with Prisma ORM for structured document storage.",
    icon: TechIcons.Postgresql,
    brandColor: "text-[#336791]"
  },
  {
    name: "MongoDB",
    category: "DevOps / DB",
    description: "Document store database used for dynamic order schemas and aggregation pipelines.",
    icon: TechIcons.Mongodb,
    brandColor: "text-[#47a248]"
  },
  {
    name: "Docker",
    category: "DevOps / DB",
    description: "Containerization tool to build isolated package images for server deployments.",
    icon: TechIcons.Docker,
    brandColor: "text-[#2496ed]"
  },
  {
    name: "AWS",
    category: "DevOps / DB",
    description: "Cloud infrastructure, S3 storage buckets, and server deployments (AWS Certified).",
    icon: TechIcons.Docker,
    brandColor: "text-[#ff9900]"
  }
];

export default function Skills() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      id="skills"
      className="relative w-full bg-black py-28 px-4 md:px-8 border-b border-[rgba(255,255,255,0.07)]"
    >
      <div className="w-[90%] max-w-[1700px] mx-auto">
        
        {/* Title and Intro */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16 pb-6 border-b border-white/5">
          <div className="flex flex-col gap-2">
            <span className="font-serif-editorial text-[0.65rem] tracking-[0.25em] text-[#c5a880] uppercase">
              TECHNOLOGY PARTNERS
            </span>
            <h2 className="font-serif-editorial text-4xl md:text-5xl font-bold text-white uppercase tracking-tight">
              The Finest Stack
            </h2>
          </div>
          <p className="max-w-[400px] text-white/40 text-xs tracking-wider leading-relaxed font-light">
            A selective registry of frameworks, engines, and runtimes used to manufacture responsive interfaces and robust backend logic.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 border-t border-l border-white/5">
          {stackItems.map((tech, idx) => {
            const isHovered = hoveredIndex === idx;
            return (
              <div
                key={tech.name}
                className="tech-tile aspect-square flex flex-col justify-between p-6 border-r border-b border-white/5 relative"
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Upper side: Category */}
                <div className="flex justify-between items-center text-[0.55rem] font-bold uppercase tracking-wider text-white/30 font-mono">
                  <span>{tech.category}</span>
                  <span>{idx + 1 < 10 ? `0${idx + 1}` : idx + 1}</span>
                </div>

                {/* Middle side: Large Icon (grayscale on default, colored on hover) */}
                <div className="my-auto flex justify-center items-center h-16 relative">
                  {tech.icon(
                    `tech-icon w-12 h-12 ${
                      isHovered ? tech.brandColor + " drop-shadow-[0_0_12px_rgba(255,255,255,0.15)]" : "text-white/40"
                    }`
                  )}
                </div>

                {/* Lower side: Name & Tooltip animation */}
                <div className="flex flex-col">
                  <h3 className="font-serif-editorial text-sm font-bold tracking-wide text-white">
                    {tech.name}
                  </h3>
                  
                  {/* Sliding mini description */}
                  <div className="h-6 overflow-hidden mt-1 relative">
                    <motion.p
                      initial={{ y: 20, opacity: 0 }}
                      animate={isHovered ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-[#c5a880] text-[0.55rem] font-mono leading-none tracking-wide"
                    >
                      {tech.description.slice(0, 48)}...
                    </motion.p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <p className="font-serif-editorial text-center text-white/30 text-xs italic mt-12">
          *Additional credentials and tooling libraries are fully documented in the curriculum vitae.
        </p>
      </div>
    </section>
  );
}
