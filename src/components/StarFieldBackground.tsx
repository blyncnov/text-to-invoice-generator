"use client";

import { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  size: number;
  speed: number;
}

const StarFieldBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    // Check if the canvas is null
    if (!canvas) return;

    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const stars: Star[] = [];
    const numStars = 50; // Number of stars
    const maxStarSize = 2; // Maximum star size

    const resizeCanvas = () => {
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };

    resizeCanvas(); // Initial canvas sizing

    // Star constructor
    function createStar(): Star {
      return {
        x: Math.random() * canvasWidth,
        y: Math.random() * canvasHeight,
        size: Math.random() * maxStarSize,
        speed: Math.random() * 2 + 0.5,
      };
    }

    // Create initial stars
    for (let i = 0; i < numStars; i++) {
      stars.push(createStar());
    }

    // Animate the stars
    const animateStars = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star, index) => {
        star.y += star.speed;

        // Reset star position when it goes off-screen
        if (star.y > canvas.height) {
          stars[index] = createStar();
          stars[index].y = -10;
        }

        // Draw the star
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = "#EDEDB3";
        ctx.fill();
      });

      requestAnimationFrame(animateStars);
    };

    animateStars();

    // Handle window resize
    window.addEventListener("resize", resizeCanvas);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  );
};

export default StarFieldBackground;
