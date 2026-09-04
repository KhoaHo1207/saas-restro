"use client";

import { motion } from "motion/react";
import { ReactNode } from "react";
interface Props {
  children: ReactNode;
  delay?: number;
  y?: number;
  x?: number;
  scale?: number;
  className?: string;
  [key: string]: unknown;
}
export default function Animated({
  children,
  delay = 0,
  y = 50,
  x = 0,
  scale = 1,
  className,
  ...props
}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: y,
        x: x,
        scale: scale,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        delay: delay,
        type: "spring",
        stiffness: 320,
        damping: 70,
        mass: 1,
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
