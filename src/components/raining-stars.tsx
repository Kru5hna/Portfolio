"use client";

import { useEffect, useRef } from "react";

export default function RainingStars() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Particle definition
    interface Star {
      x: number;
      y: number;
      size: number;
      speedY: number;
      speedX: number;
      opacity: number;
      fadeSpeed: number;
      maxOpacity: number;
    }

    const stars: Star[] = [];
    const starCount = Math.floor((width * height) / 12000); // Scale count with screen area

    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 1.5 + 0.5,
        speedY: Math.random() * 0.4 + 0.1, // Slight subtle falling speed
        speedX: (Math.random() - 0.5) * 0.1,
        opacity: Math.random(),
        fadeSpeed: (Math.random() * 0.015 + 0.005) * (Math.random() > 0.5 ? 1 : -1),
        maxOpacity: Math.random() * 0.7 + 0.3,
      });
    }

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      stars.forEach((star) => {
        // Update opacity for twinkling effect
        star.opacity += star.fadeSpeed;
        if (star.opacity >= star.maxOpacity || star.opacity <= 0.05) {
          star.fadeSpeed = -star.fadeSpeed;
        }

        // Slowly rain down
        star.y += star.speedY;
        star.x += star.speedX;

        // Reset if off-screen
        if (star.y > height) {
          star.y = 0;
          star.x = Math.random() * width;
        }
        if (star.x > width) star.x = 0;
        if (star.x < 0) star.x = width;

        // Draw star dot with slight glow
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${Math.max(0, Math.min(1, star.opacity))})`;
        ctx.shadowBlur = star.size > 1 ? 4 : 0;
        ctx.shadowColor = "rgba(255, 255, 255, 0.8)";
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="raining-stars-container">
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
}
