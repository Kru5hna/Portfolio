"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const permalinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer
      className="text-center py-12"
      style={{
        backdropFilter: "blur(50px)",
        WebkitBackdropFilter: "blur(50px)",
        background: "rgba(0,0,0,0.8)",
        marginTop: "7rem",
        fontSize: "0.9rem",
      }}
    >
      <a
        href="#home"
        className="block text-white font-bold text-2xl mb-8 hover:text-white"
      >
        Krushna
      </a>

      <ul className="flex flex-wrap justify-center gap-8 mb-6 mx-auto list-none">
        {permalinks.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="text-custom-light font-medium hover:text-white"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      <div className="flex justify-center gap-4 mb-12 text-2xl">
        <Link
          href="https://github.com/Kru5hna"
          target="_blank"
          className="p-3 rounded-lg flex border border-transparent text-custom-light hover:text-white"
        >
          <FaGithub />
        </Link>
        <Link
          href="https://www.linkedin.com/in/krushna-raut-347a3b27b/"
          target="_blank"
          className="p-3 rounded-lg flex border border-transparent text-custom-light hover:text-white"
        >
          <FaLinkedin />
        </Link>
        <Link
          href="https://leetcode.com/u/Krushna_2135/"
          target="_blank"
          className="p-3 rounded-lg flex border border-transparent text-custom-light hover:text-white"
        >
          <SiLeetcode />
        </Link>
      </div>

      <div className="text-custom-light mb-12">
        <small>
          &copy; {new Date().getFullYear()} Krushna Raut. All rights reserved
        </small>
      </div>
    </footer>
  );
}
