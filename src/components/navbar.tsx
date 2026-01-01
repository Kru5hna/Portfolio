"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Work", href: "#projects" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLogoHovered, setIsLogoHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-gray/50 backdrop-blur-md border-b border-white/5 py-8"
          : "bg-transparent py-8"
      )}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link
          href="/"
          className="group flex items-center gap-2"
          onMouseEnter={() => setIsLogoHovered(true)}
          onMouseLeave={() => setIsLogoHovered(false)}
        >
          <span className="relative inline-block">
            {/* Retro Wave Style Logo */}
            <span
              className={`
                text-2xl font-black tracking-tight
                bg-gradient-to-b from-pink-500 via-purple-500 to-indigo-600
                bg-clip-text text-transparent
                transition-all duration-500
                ${isLogoHovered ? 'scale-110' : 'scale-100'}
              `}
              style={{
                fontFamily: "'Orbitron', 'Courier New', monospace",
                letterSpacing: '-0.02em',
                filter: isLogoHovered
                  ? 'drop-shadow(0 0 25px rgba(236, 72, 153, 0.8)) drop-shadow(0 4px 8px rgba(0,0,0,0.5))'
                  : 'drop-shadow(0 0 15px rgba(236, 72, 153, 0.5)) drop-shadow(0 2px 4px rgba(0,0,0,0.3))'
              }}
            >
              クリシュナ
            </span>

            {/* Underline glow effect */}
            <span className={`
              absolute inset-x-0 -bottom-1 h-0.5
              bg-gradient-to-r from-transparent via-pink-500 to-transparent
              transition-all duration-300
              ${isLogoHovered ? 'opacity-100 blur-sm' : 'opacity-60'}
            `} />

            {/* Hover tooltip showing meaning */}
            <AnimatePresence>
              {isLogoHovered && (
                <motion.span
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 5 }}
                  transition={{ duration: 0.2 }}
                  className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap px-2 py-1 text-xs font-medium text-white/80 bg-black/80 rounded backdrop-blur-sm border border-white/10"
                >
                  says "Krushna" (in Japanese)
                </motion.span>
              )}
            </AnimatePresence>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-md font-medium text-white/60 hover:text-white transition-colors hover:underline underline-offset-4"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            className="p-2 text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black border-b border-white/10 overflow-hidden"
          >
            <nav className="flex flex-col items-center py-6 gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-white hover:text-emerald-400 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
