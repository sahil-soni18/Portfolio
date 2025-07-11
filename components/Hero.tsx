"use client";

import GitHubGlobe from "./ui/GithubGlobe";
import React from "react";
import { FaLocationArrow } from "react-icons/fa6";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { WavyBackground } from "@/components/ui/wavy-background";
import MagicButton from "./MagicButton";
import { ShootingStars } from "./ui/ShootingStar";
import { StarsBackground } from "./ui/StarBackground";

const Hero = () => {
  return (
    <div className="relative overflow-hidden min-h-screen flex items-center justify-center">
      {/* Spotlights */}
      <Spotlight
        className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
        fill="blue"
      />
      <Spotlight className="h-[80vh] w-[50vw] top-10 left-full" fill="purple" />
      <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      {/* Background Grid
      <div className="absolute inset-0 z-0 dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div> */}
      {/* Main Content */}
      <div className="relative z-10 max-w-7xl w-full px-4 py-20 flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Intro Text (left side) */}
        <div className="w-full lg:w-1/2 text-center lg:text-left flex flex-col items-center lg:items-start">
          <p className="uppercase tracking-widest text-xs text-cyan-300 mb-2">
            Step into my digital playground.
          </p>
          <TextGenerateEffect
            words={`Hey there!\nI'm Sahil Soni...`}
            className="text-[36px] md:text-5xl lg:text-6xl text-center lg:text-left text-transparent bg-clip-text bg-gradient-to-r from-[#1e1e61] via-[#6c1ea1] to-[#5ef1dc]"
          />

          <p className="mt-4 md:tracking-wide text-sm md:text-lg lg:text-xl text-neutral-300">
            I design logic. I sculpt pixels. I build the web one bold idea at a
            time.
          </p>

          <a href="#projects" className="mt-6">
            <MagicButton
              title="Go To My Work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>

        {/* Globe (right side) */}
        <div className="w-full lg:w-1/2 h-[400px] md:h-[500px] lg:h-[550px]">
          <GitHubGlobe />
        </div>
      </div>
      <div className="absolute inset-0 z-50">
        <ShootingStars />
        <StarsBackground />
      </div>
    </div>
  );
};

export default Hero;
