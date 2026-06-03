"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { SiLeetcode } from "react-icons/si";

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollOpacity = Math.max(0, (100 - scrollY / 4) / 100);

  return (
    <header
      id="home"
      className="relative flex items-center justify-center w-screen overflow-hidden"
      style={{ height: "100vh" }}
    >
      <div className="relative z-10 flex flex-col items-center text-center w-full">
        <motion.h5
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-custom-light text-lg font-light"
        >
          Hi, I&apos;m
        </motion.h5>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-white mb-2 font-montserrat"
        >
          Krushna
        </motion.h1>

        <motion.h5
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-custom-light text-base md:text-lg font-light mb-1"
        >
          Full Stack Developer · AI Enthusiast · Web3 Explorer
        </motion.h5>

        <motion.h5
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-custom-light text-sm md:text-base font-light"
        >
          Prev Intern @ Avijo
        </motion.h5>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex gap-4 mt-10"
        >
          <Link
            href="https://www.linkedin.com/in/krushna-raut-347a3b27b/"
            target="_blank"
            className="btn-gradient px-6 py-3"
          >
            Connect
          </Link>
          <Link
            href="https://drive.google.com/file/d/13OP6ARp7iTF_8qu6TU9Qi9hJPrNxh-3G/view?usp=sharing"
            target="_blank"
            className="btn-outline px-6 py-3"
          >
            Download Resume
          </Link>
        </motion.div>

        {/* Socials (left side) */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="absolute left-6 md:left-12 bottom-12 flex flex-col items-center gap-3"
        >
          <Link
            href="https://github.com/Kru5hna"
            target="_blank"
            className="text-custom-light hover:text-white transition-colors text-xl"
          >
            <FaGithub />
          </Link>
          <Link
            href="https://www.linkedin.com/in/krushna-raut-347a3b27b/"
            target="_blank"
            className="text-custom-light hover:text-white transition-colors text-xl"
          >
            <FaLinkedin />
          </Link>
          <Link
            href="https://leetcode.com/u/Krushna_2135/"
            target="_blank"
            className="text-custom-light hover:text-white transition-colors text-xl"
          >
            <SiLeetcode />
          </Link>
          {/* Line below socials */}
          <div className="w-px h-8 bg-custom-pink" />
        </motion.div>

        {/* Scroll Down */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="pt-28 text-lg"
          style={{ opacity: scrollOpacity, color: "rgba(255,255,255,0.4)" }}
        >
          <h5>Scroll Down</h5>
          <IoIosArrowDown className="text-3xl mx-auto animate-bounce" />
        </motion.div>
      </div>
    </header>
  );
}
