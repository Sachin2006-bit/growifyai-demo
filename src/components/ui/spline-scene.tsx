"use client";

import { Suspense, lazy, useEffect, useRef, useState } from 'react';

// SplineScene Component
const Spline = lazy(() => import('@splinetool/react-spline'));

interface SplineSceneProps {
  scene: string;
  className?: string;
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  return (
    <Suspense 
      fallback={
        <div className="w-full h-full flex items-center justify-center">
          <span className="loader"></span>
        </div>
      }
    >
      <Spline
        scene={scene}
        className={className}
      />
    </Suspense>
  );
}

// Spotlight Component
interface SpotlightProps {
  className?: string;
  fill?: string;
}

export function Spotlight({ className, fill }: SpotlightProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        setMousePosition({ x: event.clientX - rect.left, y: event.clientY - rect.top });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const { x, y } = mousePosition;
  return (
    <div
      className={`pointer-events-none absolute z-[1] h-full w-full rounded-full ${className}`}
      ref={ref}
      style={{
        background: `radial-gradient(600px circle at ${x}px ${y}px, ${
          fill || "currentColor"
        }, transparent 80%)`,
      }}
    />
  );
}
