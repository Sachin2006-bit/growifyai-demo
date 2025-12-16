"use client";

import React, { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion, type MotionValue } from "framer-motion";

export interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

interface TimelineProps {
  data: TimelineEntry[];
  className?: string;
  lineColorFrom?: string;
  lineColorVia?: string;
}

export const Timeline: React.FC<TimelineProps> = ({
  data,
  className,
  lineColorFrom = "from-cyan-500",
  lineColorVia = "via-sky-500",
}) => {
  const lineRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (lineRef.current) {
      const rect = lineRef.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [data.length]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform: MotionValue<number> = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform: MotionValue<number> = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  if (!data || data.length === 0) return null;

  return (
    <div ref={containerRef} className={className}>
      <div ref={lineRef} className="relative max-w-5xl mx-auto pb-20">
        {data.map((item, index) => (
          <div key={index} className="flex justify-start pt-10 md:pt-32 md:gap-10">
            {/* Sticky title + dot */}
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-32 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-[#020617] flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-slate-900 border border-cyan-400/60 p-2 shadow-[0_0_14px_rgba(56,189,248,0.8)]" />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-3xl font-semibold text-slate-300">
                {item.title}
              </h3>
            </div>

            {/* Card content */}
            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-xl mb-3 text-left font-semibold text-slate-300">
                {item.title}
              </h3>
              <div className="rounded-2xl border border-cyan-500/20 bg-slate-900/70 p-5 md:p-6 backdrop-blur-xl shadow-[0_0_32px_rgba(15,23,42,0.9)]">
                {item.content}
              </div>
            </div>
          </div>
        ))}

        {/* Animated vertical line */}
        <div
          style={{ height: `${height}px` }}
          className={`absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-slate-800 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]`}
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className={`absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t ${lineColorFrom} ${lineColorVia} to-transparent from-[0%] via-[10%] rounded-full`}
          />
        </div>
      </div>
    </div>
  );
};


