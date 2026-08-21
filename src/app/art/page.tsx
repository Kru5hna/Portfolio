"use client";

import TopNav from "@/components/top-nav";
import RainingStars from "@/components/raining-stars";
import BottomCapsule from "@/components/bottom-capsule";
import BlurredStagger from "@/components/blurred-stagger";
import HighlightsCarousel from "@/components/highlights-carousel";

export default function ArtPage() {
  return (
    <>
      <RainingStars />
      <TopNav />
      <main className="content-area max-w-4xl mx-auto px-6">
        <section className="py-8 text-center">
          <h1 className="text-3xl font-serif text-white mb-2">
            <BlurredStagger text="creative & AI works." delay={0.1} />
          </h1>
          <p className="text-xs text-zinc-400 max-w-sm mx-auto mb-8">
            AI generative projects, web3 explorations, and creative visual experiments
          </p>
        </section>
        <HighlightsCarousel activeTab="art" />
      </main>
      <BottomCapsule activeTab="art" />
    </>
  );
}
