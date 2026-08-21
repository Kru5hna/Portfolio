"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Github, Linkedin, ArrowUpRight, Award, GraduationCap, Briefcase } from "lucide-react";
import { SiLeetcode } from "react-icons/si";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [scrollY, setScrollY] = useState(0);

  // Scroll parallax effect
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Canvas micro-interaction (Connecting nodes)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;
    }> = [];

    const colors = ["#c5a880", "#ffffff", "#8e8e93"];

    // Initialize particles
    for (let i = 0; i < 45; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 2 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    const mouse = { x: -1000, y: -1000 };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("resize", handleResize);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw particle nodes
      particles.forEach((p, idx) => {
        p.x += p.vx;
        p.y += p.vy;

        // Bounce borders
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Attract to mouse
        if (mouse.x > 0 && mouse.y > 0) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            p.x += dx * 0.005;
            p.y += dy * 0.005;
          }
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowBlur = 10;
        ctx.shadowColor = p.color;
        ctx.fill();
        ctx.shadowBlur = 0; // reset

        // Draw connections
        for (let j = idx + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.08 * (1 - dist / 100)})`;
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative flex items-center justify-center w-full min-h-screen overflow-hidden bg-black py-20 px-4 md:px-8 border-b border-[rgba(255,255,255,0.07)]"
    >
      {/* Interactive mouse canvas background */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none" />

      {/* Grid Lines Overlay */}
      <div className="absolute inset-0 grid grid-cols-4 pointer-events-none z-0">
        <div className="border-r border-white/[0.03] h-full" />
        <div className="border-r border-white/[0.03] h-full" />
        <div className="border-r border-white/[0.03] h-full" />
        <div className="h-full" />
      </div>

      <div className="relative z-10 w-[90%] max-w-[1700px] mx-auto flex flex-col justify-between h-[80vh]">
        {/* Cover Top Info */}
        <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-1"
          >
            <span className="font-serif-editorial text-[0.65rem] tracking-[0.25em] text-white/50">
              COLLECTION / EDITION 2026
            </span>
            <span className="font-serif-editorial text-[0.65rem] tracking-[0.25em] text-[#c5a880]">
              MEMBER OF THE CS COMMUNITY
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif-editorial text-[0.65rem] tracking-[0.25em] text-right sm:text-right text-white/50"
          >
            LOCATED: INDIA / REMOTE
          </motion.div>
        </div>

        {/* Center Title & Slogan */}
        <div className="my-auto flex flex-col items-center text-center">
          {/* Main Huge Cover Headline */}
          <div className="relative overflow-hidden mb-6 py-2">
            <motion.h1
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              style={{ y: scrollY * 0.15 }}
              className="font-serif-editorial text-[14vw] sm:text-[11vw] leading-[0.9] font-bold text-white tracking-tighter uppercase"
            >
              Krushna Raut
            </motion.h1>
          </div>

          {/* Subheading Slogan */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-[700px] text-white/60 text-xs sm:text-sm md:text-md tracking-wider leading-relaxed font-light mb-8"
          >
            Full Stack Developer specializing in zero-knowledge encrypted architectures,
            machine learning pipelines, and highly interactive user interfaces.
            Crafting code from raw hardware requests to visual canvas states.
          </motion.p>

          {/* Interactive CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap gap-4 justify-center items-center"
          >
            <Link
              href="#projects"
              className="group relative inline-flex items-center justify-center gap-2 overflow-hidden border border-[#c5a880] bg-[#c5a880] px-8 py-3.5 text-xs font-bold uppercase tracking-widest text-black transition-all hover:bg-transparent hover:text-white"
            >
              <span>Explore Works</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

            <Link
              href="https://drive.google.com/file/d/1FK5eDxRuHI6VwU2WixXaUNDeLut7yD2b/view?usp=sharing"
              target="_blank"
              className="group relative inline-flex items-center justify-center gap-2 overflow-hidden border border-white/20 bg-white/5 px-8 py-3.5 text-xs font-bold uppercase tracking-widest text-white transition-all hover:border-[#c5a880] hover:text-[#c5a880]"
            >
              <span>View Resume</span>
            </Link>
          </motion.div>
        </div>

        {/* Cover Bottom: Badges & Links */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/5 pt-6 gap-6">
          {/* Key Facts badges */}
          <div className="flex flex-wrap gap-6 justify-center md:justify-start">
            <div className="flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-[#c5a880]" />
              <span className="font-serif-editorial text-[0.65rem] tracking-wider text-white/70">
                Avijo Intern
              </span>
            </div>
            <div className="flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-[#c5a880]" />
              <span className="font-serif-editorial text-[0.65rem] tracking-wider text-white/70">
                B.Tech CS
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-[#c5a880]" />
              <span className="font-serif-editorial text-[0.65rem] tracking-wider text-white/70">
                8+ Ships
              </span>
            </div>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-6">
            <Link
              href="https://github.com/Kru5hna"
              target="_blank"
              className="flex items-center gap-2 text-white/50 hover:text-white transition-colors text-xs font-semibold tracking-wider"
            >
              <Github className="w-4 h-4" />
              <span className="hidden sm:inline">GITHUB</span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/krushna-raut-347a3b27b/"
              target="_blank"
              className="flex items-center gap-2 text-white/50 hover:text-white transition-colors text-xs font-semibold tracking-wider"
            >
              <Linkedin className="w-4 h-4" />
              <span className="hidden sm:inline">LINKEDIN</span>
            </Link>
            <Link
              href="https://leetcode.com/u/Krushna_2135/"
              target="_blank"
              className="flex items-center gap-2 text-white/50 hover:text-white transition-colors text-xs font-semibold tracking-wider"
            >
              <SiLeetcode className="w-4 h-4" />
              <span className="hidden sm:inline">LEETCODE</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
