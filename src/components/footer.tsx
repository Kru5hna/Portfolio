"use client";

import Link from "next/link";
import { Github, Linkedin } from "lucide-react";
import { SiLeetcode } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="w-full bg-black border-t border-white/5 py-20 px-4 md:px-8">
      <div className="w-[90%] max-w-[1700px] mx-auto">
        
        {/* Main Footer Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-6 items-start pb-16 border-b border-white/5 mb-10">
          
          {/* Left Column: Slogan statement */}
          <div className="flex flex-col gap-4 text-center md:text-left">
            <span className="font-serif-editorial text-[0.8rem] italic tracking-wide text-white/50">
              Publishing developer portfolios
            </span>
            <p className="font-serif-editorial text-lg text-white font-bold max-w-[320px] mx-auto md:mx-0 leading-snug">
              BORN IN INDIA. BUILDING BRAND NEW WEB EXPERIENCES.
            </p>
          </div>

          {/* Middle Column: Emblem / Year stamp */}
          <div className="flex flex-col items-center justify-center gap-3 text-center my-auto">
            {/* Custom Monogram Emblem */}
            <div className="flex items-center justify-center gap-1.5 opacity-60">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L14.8 9.2L22 12L14.8 14.8L12 22L9.2 14.8L2 12L9.2 9.2L12 2Z" fill="#c5a880" />
              </svg>
              <span className="font-serif-editorial text-[0.7rem] font-bold tracking-[0.3em] text-white">
                K / R
              </span>
            </div>
            <span className="font-mono text-[0.6rem] tracking-[0.2em] text-white/30">
              2023 - 2026
            </span>
          </div>

          {/* Right Column: Dynamic Link Lists */}
          <div className="grid grid-cols-2 gap-8 text-center md:text-right">
            
            {/* List 1: Permalinks */}
            <div className="flex flex-col gap-3.5">
              <h4 className="font-serif-editorial text-[0.65rem] font-bold tracking-widest text-[#c5a880] uppercase">
                Sections
              </h4>
              <ul className="flex flex-col gap-2 text-[0.65rem] font-semibold tracking-wider text-white/50 font-mono">
                <li>
                  <Link href="#home" className="hover:text-white transition-colors">
                    HOME
                  </Link>
                </li>
                <li>
                  <Link href="#projects" className="hover:text-white transition-colors">
                    WORK
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="hover:text-white transition-colors">
                    ABOUT
                  </Link>
                </li>
                <li>
                  <Link href="#skills" className="hover:text-white transition-colors">
                    STACK
                  </Link>
                </li>
              </ul>
            </div>

            {/* List 2: Connections */}
            <div className="flex flex-col gap-3.5">
              <h4 className="font-serif-editorial text-[0.65rem] font-bold tracking-widest text-[#c5a880] uppercase">
                Connect
              </h4>
              <ul className="flex flex-col gap-2 text-[0.65rem] font-semibold tracking-wider text-white/50 font-mono">
                <li>
                  <Link
                    href="https://github.com/Kru5hna"
                    target="_blank"
                    className="hover:text-white transition-colors flex items-center gap-1.5 justify-center md:justify-end"
                  >
                    GITHUB <Github className="w-3 h-3" />
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.linkedin.com/in/krushna-raut-347a3b27b/"
                    target="_blank"
                    className="hover:text-white transition-colors flex items-center gap-1.5 justify-center md:justify-end"
                  >
                    LINKEDIN <Linkedin className="w-3 h-3" />
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://leetcode.com/u/Krushna_2135/"
                    target="_blank"
                    className="hover:text-white transition-colors flex items-center gap-1.5 justify-center md:justify-end"
                  >
                    LEETCODE <SiLeetcode className="w-3 h-3" />
                  </Link>
                </li>
                <li>
                  <a
                    href="mailto:krishraut2103@gmail.com"
                    className="hover:text-white transition-colors"
                  >
                    EMAIL (DIRECT)
                  </a>
                </li>
              </ul>
            </div>

          </div>

        </div>

        {/* Bottom copyright details */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-[0.6rem] font-bold tracking-widest text-white/30 font-mono">
          <span>&copy; {new Date().getFullYear()} KRUSHNA RAUT. ALL RIGHTS RESERVED.</span>
          <span>DESIGN INSPIRED BY THE EDITORIAL CATALOGS OF PARIS.</span>
        </div>

      </div>
    </footer>
  );
}
