"use client";

import { useEffect, useRef } from "react";
import { useInView, animate } from "framer-motion";

interface CounterProps {
  from?: number;
  to: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}

export default function Counter({
  from = 0,
  to,
  duration = 2.2,
  suffix = "",
  prefix = "",
  className = "",
}: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  useEffect(() => {
    if (!isInView) return;

    const formatter = new Intl.NumberFormat("id-ID");
    const node = ref.current;
    if (!node) return;

    const controls = animate(from, to, {
      duration,
      ease: [0.16, 1, 0.3, 1], // Smooth deceleration curve
      onUpdate: (latest) => {
        node.textContent = `${prefix}${formatter.format(Math.floor(latest))}${suffix}`;
      },
    });

    return () => controls.stop();
  }, [isInView, from, to, duration, prefix, suffix]);

  const initial = new Intl.NumberFormat("id-ID").format(from);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {initial}
      {suffix}
    </span>
  );
}
