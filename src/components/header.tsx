"use client";

import { useState } from "react";
import Link from "next/link";
import { Github, Linkedin, Mail, FolderHeart } from "lucide-react";
import { projects } from "@/lib/projects";

export default function Header() {
  const [isMascotHovered, setIsMascotHovered] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#050505] border-b border-[rgba(255,255,255,0.07)]">
      <div className="mx-auto flex h-16 w-[90%] max-w-[1700px] items-center justify-between px-4">
        {/* Left Side: Navigation Links (Serif, uppercase) */}
        <nav className="hidden md:flex items-center gap-8 font-serif-editorial text-[0.75rem] tracking-[0.2em] font-medium text-white/70">
          <Link href="#projects" className="hover:text-white transition-colors">
            WORK
          </Link>
          <Link href="#about" className="hover:text-white transition-colors">
            ABOUT
          </Link>
          <Link href="#skills" className="hover:text-white transition-colors">
            STACK
          </Link>
          <Link href="#experience" className="hover:text-white transition-colors">
            JOURNAL
          </Link>
        </nav>

        {/* Mobile menu indicator (fallback) */}
        <div className="flex md:hidden font-serif-editorial text-[0.7rem] tracking-wider text-white/50">
          BUILDER PORTFOLIO
        </div>

        {/* Center: Mascot + Brand Name */}
        <div className="flex items-center justify-center gap-3">
          <Link 
            href="#home" 
            className="flex items-center gap-2 group"
            onMouseEnter={() => setIsMascotHovered(true)}
            onMouseLeave={() => setIsMascotHovered(false)}
          >
            {/* Spinning Custom Builder/Wizard Mascot SVG */}
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`transition-transform duration-700 ${
                isMascotHovered ? "rotate-[360deg]" : ""
              }`}
            >
              {/* Retro Wizard/Star Sparkle Mascot shape */}
              <path
                d="M12 2L14.8 9.2L22 12L14.8 14.8L12 22L9.2 14.8L2 12L9.2 9.2L12 2Z"
                fill="#c5a880"
                stroke="#c5a880"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="12" cy="12" r="2.5" fill="#050505" />
              <circle cx="12" cy="12" r="1" fill="#c5a880" />
            </svg>

            {/* Typography */}
            <span className="font-serif-editorial text-[0.95rem] tracking-[0.25em] font-bold text-white group-hover:text-[#c5a880] transition-colors">
              KRUSHNA / BUILDER
            </span>
          </Link>
        </div>

        {/* Right Side: Utilities (Language switch, social links, project counts/bag) */}
        <div className="flex items-center gap-6">
          {/* Lang switch */}
          <span className="font-serif-editorial text-[0.7rem] tracking-widest text-white/50 border-r border-white/10 pr-4">
            IND / EN
          </span>

          {/* Social Icons */}
          <div className="hidden sm:flex items-center gap-4 text-white/60">
            <Link
              href="https://github.com/Kru5hna"
              target="_blank"
              title="GitHub"
              className="hover:text-white transition-colors"
            >
              <Github className="w-4 h-4" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/krushna-raut-347a3b27b/"
              target="_blank"
              title="LinkedIn"
              className="hover:text-white transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </Link>
            <Link
              href="mailto:krishraut2103@gmail.com"
              title="Email"
              className="hover:text-white transition-colors"
            >
              <Mail className="w-4 h-4" />
            </Link>
          </div>

          {/* Creative "Projects Bag" displaying number of items */}
          <Link
            href="#projects"
            className="relative flex items-center justify-center p-2 text-white/70 hover:text-white transition-colors"
            title="View Works Bag"
          >
            <FolderHeart className="w-[1.2rem] h-[1.2rem] stroke-[1.5]" />
            <span className="absolute -top-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-[#c5a880] text-[0.55rem] font-bold text-black">
              {projects.length}
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}
