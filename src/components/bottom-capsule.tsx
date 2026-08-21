"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface BottomCapsuleProps {
  activeTab?: string;
}

export default function BottomCapsule({ activeTab }: BottomCapsuleProps) {
  const pathname = usePathname();

  const capsuleItems = [
    { label: "dev", href: "/dev", id: "dev" },
    { label: "skills", href: "/skills", id: "skills" },
    { label: "blogs", href: "/blogs", id: "blogs" },
  ];

  return (
    <nav className="bottom-capsule animate-on-home">
      {capsuleItems.map((item) => {
        const isActive =
          activeTab === item.id ||
          pathname === item.href ||
          (item.id === "dev" && pathname === "/");

        return (
          <Link
            key={item.id}
            href={item.href}
            className={`capsule-link ${isActive ? "active" : ""}`}
          >
            <span className="relative z-10">{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
