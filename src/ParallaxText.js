// src/ParallaxText.js
import React, { useRef } from "react";
import {
  motion,
  useTransform,
  useMotionValue,
  useAnimationFrame,
} from "framer-motion";
import { wrap } from "@motionone/utils";

export default function ParallaxText({ children, baseVelocity = 100 }) {
  const baseX = useMotionValue(0);

  // Biarkan nilai looping penuh (0% sampai -100%)
  const x = useTransform(baseX, (v) => `${wrap(-100, 0, v)}%`);

  const directionFactor = useRef(1);

  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div
      className="parallax"
      style={{
        overflow: "hidden",
        whiteSpace: "nowrap",
        display: "flex",
      }}
    >
      <motion.div
        className="scroller"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "40px",
          x,
        }}
      >
        {/* blok sponsor diulang 2x agar seamless */}
        <div style={{ display: "flex", alignItems: "center", gap: "40px" }}>
  {children}
</div>
<div style={{ display: "flex", alignItems: "center", gap: "40px" }}>
  {children}
</div>

      </motion.div>
    </div>
  );
}
