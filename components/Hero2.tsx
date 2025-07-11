"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { Typewriter } from "react-simple-typewriter";

const Hero2 = () => {
  const handleScroll = () => {
    const section = document.getElementById("experience");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-6 items-center justify-center px-4 text-center"
      >
        <h1 className="text-3xl md:text-6xl font-bold dark:text-white">
          I’m a&nbsp;
          <span className="text-[#0ea5e9]">
            <Typewriter
              words={[
                "Full Stack Developer.",
                "Problem Solver.",
                "Tech Explorer.",
                "API Crafter.",
                "React Enthusiast.",
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </h1>
        <p className="max-w-xl text-base md:text-2xl text-neutral-600 dark:text-neutral-300">
          Turning ideas into full-stack web & mobile apps using{" "}
          <span className="text-[#0ea5e9] font-semibold">React</span>,{" "}
          <span className="text-[#0ea5e9] font-semibold">Node.js</span>, and{" "}
          <span className="text-[#0ea5e9] font-semibold">FastAPI</span>.
        </p>
        <button
          onClick={handleScroll}
          className="bg-[#0ea5e9] hover:bg-[#0284c7] transition-colors text-white px-6 py-2 rounded-full font-medium shadow-lg"
        >
          🚀 Explore My Work
        </button>
      </motion.div>
    </AuroraBackground>
  );
};

export default Hero2;
