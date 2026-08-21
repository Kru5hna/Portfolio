"use client";

import { useState } from "react";
import Image from "next/image";
import TopNav from "@/components/top-nav";
import RainingStars from "@/components/raining-stars";
import BlurredStagger from "@/components/blurred-stagger";
import NpxCommand from "@/components/npx-command";
import HighlightsCarousel from "@/components/highlights-carousel";
import BottomCapsule from "@/components/bottom-capsule";

export default function Home() {
  const [activeTab, setActiveTab] = useState<string>("dev");

  return (
    <>
      {/* Background Falling Stars Canvas */}
      <RainingStars />

      {/* Top Header Navigation */}
      <TopNav />

      {/* Main Content Area */}
      <main className="content-area">
        {/* Hero Section */}
        <section className="hero-section">
          {/* Curved Name SVG Typography */}
          <div className="hero-name-curve">
            <svg
              width="280"
              height="150"
              viewBox="0 0 280 150"
              className="curve-svg"
            >
              <path
                id="curve"
                d="M 40,140 A 100,100 0 0,1 240,140"
                fill="transparent"
              />
              <text
                fill="var(--text-primary)"
                className="instrument-serif"
                fontSize="44"
                textAnchor="middle"
                letterSpacing="-0.07em"
              >
                <textPath href="#curve" startOffset="50%">
                  Krushna Raut
                </textPath>
              </text>
            </svg>
          </div>

          {/* Interactive Dual-Layer Avatar */}
          <div className="hero-avatar">
            <div className="avatar-wrapper interactive-avatar">
              <Image
                src="/pfp.png"
                alt="Krushna Raut Avatar"
                width={124}
                height={124}
                priority
                className="avatar-img"
              />
              <Image
                src="/pfp.png"
                alt="Krushna Raut Hover"
                width={124}
                height={124}
                className="avatar-blush brightness-125 saturate-150"
              />
            </div>
          </div>

          {/* Subtitle with Blur Stagger Effect */}
          <div className="hero-subtitle">
            <BlurredStagger text="full stack @ portfolio" delay={0.2} />
          </div>

          {/* Command Pill (% npx krushna) */}
          <NpxCommand command="npx krushna" />

          {/* Hero Description Bio */}
          <div className="hero-description">
            <p>
              i make software that looks clean & works blazingly fast. experience in full stack web development, zero-knowledge encryption, node limiters, AI vision models, and web3. i love crafting things from scratch &lt;3
            </p>
          </div>
        </section>

        {/* Highlights Section */}
        <section className="highlights-section">
          <div className="section-title-wrapper">
            <h2 className="section-title">
              <BlurredStagger text="highlights!" delay={0.4} />
            </h2>
            <svg
              className="sparkle-icon"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2C12 2 12 10.5 21.5 12C12 13.5 12 22 12 22C12 22 12 13.5 2.5 12C12 10.5 12 2 12 2Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <p className="section-subtitle">
            some things i made because i could
          </p>

          {/* Highlights Projects Display */}
          <HighlightsCarousel activeTab={activeTab} />
        </section>
      </main>

      {/* Bottom Floating Navigation Capsule */}
      <BottomCapsule activeTab="dev" />
    </>
  );
}
