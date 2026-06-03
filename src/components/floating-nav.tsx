"use client";

import { useState, useEffect } from "react";
import { BiHomeAlt, BiUser, BiBook, BiMessageRoundedDetail } from "react-icons/bi";
import { TbAppWindow } from "react-icons/tb";

const navItems = [
  { icon: BiHomeAlt, href: "#home", id: "home" },
  { icon: BiUser, href: "#about", id: "about" },
  { icon: BiBook, href: "#skills", id: "skills" },
  { icon: TbAppWindow, href: "#projects", id: "projects" },
  { icon: BiMessageRoundedDetail, href: "#contact", id: "contact" },
];

export default function FloatingNav() {
  const [activeNav, setActiveNav] = useState("#home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY < 400) setActiveNav("#home");
      else if (scrollY < 1200) setActiveNav("#about");
      else if (scrollY < 2200) setActiveNav("#skills");
      else if (scrollY < 3600) setActiveNav("#projects");
      else setActiveNav("#contact");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex gap-3 px-7 py-3 rounded-full"
      style={{
        background: "rgba(0,0,0,0.3)",
        backdropFilter: "blur(15px)",
        WebkitBackdropFilter: "blur(15px)",
      }}
    >
      {navItems.map(({ icon: Icon, href, id }) => (
        <a
          key={id}
          href={href}
          onClick={() => setActiveNav(href)}
          className={`p-3 rounded-full flex items-center justify-center text-lg transition-all duration-300 ${
            activeNav === href
              ? "bg-white/10 text-white"
              : "text-white/60 hover:bg-white/5 hover:text-white/80"
          }`}
        >
          <Icon />
        </a>
      ))}
    </nav>
  );
}
