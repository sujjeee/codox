"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";

type TextAnimationProps = {
  words: string[];
  interval?: number;
  className?: string;
};
export default function TextAnimation({
  words,
  interval = 3000,
  className
}: TextAnimationProps) {
  const [index, setIndex] = React.useState(0);

  // biome-ignore lint: "TODO: Fix this later"
  React.useEffect(() => {
    const animationInterval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, interval);

    // Clean up interval on unmount
    return () => clearInterval(animationInterval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.h1
        key={words[index]}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
        className={cn("scroll-m-20 font-extrabold tracking-tight", className)}
      >
        {words[index]}
      </motion.h1>
    </AnimatePresence>
  );
}
