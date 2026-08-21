"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function TopNav() {
  const pathname = usePathname();

  const links = [
    { name: "home", href: "/" },
    { name: "about", href: "/about" },
    { name: "resume", href: "/resume" },
    { name: "contact", href: "/contact" },
  ];

  return (
    <header className="top-nav">
      <nav>
        <Link
          href="/"
          className={`nav-link ${pathname === "/" ? "active" : ""}`}
        >
          home
        </Link>

        <Link
          href="/about"
          className={`nav-link ${pathname === "/about" ? "active" : ""}`}
        >
          about
        </Link>

        <Link href="/" className="nav-logo" title="Krushna Raut">
          <Image
            src="/pfp.png"
            alt="Krushna Logo"
            width={28}
            height={28}
            className="w-full h-full object-cover"
            priority
          />
        </Link>

        <Link
          href="/resume"
          className={`nav-link ${pathname === "/resume" ? "active" : ""}`}
        >
          resume
        </Link>

        <Link
          href="/contact"
          className={`nav-link ${pathname === "/contact" ? "active" : ""}`}
        >
          contact
        </Link>
      </nav>
    </header>
  );
}
