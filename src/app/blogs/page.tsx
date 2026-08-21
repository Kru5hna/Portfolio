"use client";

import { useState } from "react";
import TopNav from "@/components/top-nav";
import RainingStars from "@/components/raining-stars";
import BottomCapsule from "@/components/bottom-capsule";
import BlurredStagger from "@/components/blurred-stagger";
import { blogPosts, blogCategories, BlogPost } from "@/lib/blogs";

export default function BlogsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredPosts =
    selectedCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category.includes(selectedCategory));

  return (
    <>
      <RainingStars />
      <TopNav />

      <main className="content-area max-w-3xl mx-auto px-6 pb-24">
        {/* Header Section */}
        <section className="py-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-serif text-white mb-3">
            <BlurredStagger text="thoughts & architecture." delay={0.1} />
          </h1>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-md mx-auto mb-8 leading-relaxed">
            Deep dives into system design, backend engineering, rate limiting, caching strategies, and SaaS multi-tenancy.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
            {blogCategories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`text-xs px-3.5 py-1.5 rounded-full border transition-all duration-200 ${
                    isActive
                      ? "bg-white/15 text-white border-white/30 font-medium shadow-sm"
                      : "bg-zinc-900/60 text-zinc-400 border-white/10 hover:text-zinc-200 hover:border-white/20"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </section>

        {/* Blog Posts List */}
        <div className="space-y-6">
          {filteredPosts.map((post: BlogPost) => (
            <a
              key={post.id}
              href={post.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block glass-card p-6 border border-white/10 rounded-2xl group transition-all duration-300 hover:border-white/25 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/50 relative overflow-hidden"
            >
              {/* Subtle accent glow on hover */}
              <div className="absolute -right-16 -top-16 w-32 h-32 bg-white/5 rounded-full blur-2xl group-hover:bg-white/10 transition-all duration-500 pointer-events-none" />

              {/* Card Meta Top Header */}
              <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400 mb-3">
                <div className="flex items-center gap-2">
                  <span className="bg-white/5 border border-white/10 px-2 py-0.5 rounded text-zinc-300">
                    {post.date}
                  </span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                  {post.featured && (
                    <span className="ml-1 bg-amber-500/10 text-amber-300 border border-amber-500/20 px-2 py-0.5 rounded text-[10px] font-semibold">
                      Featured
                    </span>
                  )}
                </div>

                {/* LinkedIn Badge + External Link Icon */}
                <div className="flex items-center gap-1.5 text-zinc-400 group-hover:text-blue-400 transition-colors">
                  <span className="text-[11px] font-medium hidden sm:inline">LinkedIn Post</span>
                  <svg
                    className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </div>
              </div>

              {/* Title & Subtitle */}
              <h2 className="text-lg sm:text-xl font-semibold text-white group-hover:text-blue-300 transition-colors mb-1.5 leading-snug">
                {post.title}
              </h2>
              {post.subtitle && (
                <p className="text-xs font-mono text-zinc-400 mb-3">
                  {post.subtitle}
                </p>
              )}

              {/* Summary */}
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-4">
                {post.summary}
              </p>

              {/* Key Takeaways */}
              {post.keyTakeaways && post.keyTakeaways.length > 0 && (
                <div className="bg-zinc-950/60 border border-white/5 rounded-xl p-3.5 mb-4">
                  <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider block mb-2 font-semibold">
                    Key Insights & Takeaways
                  </span>
                  <ul className="space-y-1.5">
                    {post.keyTakeaways.map((takeaway, idx) => (
                      <li
                        key={idx}
                        className="text-xs text-zinc-300 flex items-start gap-2 leading-snug"
                      >
                        <span className="text-blue-400 font-bold select-none">•</span>
                        <span>{takeaway}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Bottom Tags */}
              <div className="flex flex-wrap items-center gap-1.5 pt-1 border-t border-white/5">
                {post.category.map((cat) => (
                  <span
                    key={cat}
                    className="text-[10px] font-mono text-zinc-400 bg-white/5 border border-white/5 px-2 py-0.5 rounded-full"
                  >
                    #{cat}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </main>

      <BottomCapsule activeTab="blogs" />
    </>
  );
}
