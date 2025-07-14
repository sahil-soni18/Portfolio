"use client";
import React from "react";
import { Box, Typography, Button } from "@mui/material";

// Keep these Aceternity components that have complex effects
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { ShootingStars } from "./ui/ShootingStar";
import { StarsBackground } from "./ui/StarBackground";
import GitHubGlobe from "./ui/GithubGlobe";

const Hero = () => {
  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        minHeight: { xs: "100%", md: "100vh" },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        mt: { xs: 6, md: 1 },
      }}
    >
      {/* Keep Spotlights as they are - complex animation */}
      <Spotlight
        className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
        fill="blue"
      />
      <Spotlight className="h-[80vh] w-[50vw] top-10 left-full" fill="purple" />
      <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />

      <Box
        sx={{
          position: "relative",
          zIndex: 10,
          maxWidth: "1100px", // equivalent to max-w-7xl
          width: "100%",
          // px: 4,
          py: 10,
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          alignItems: "center",
          // justifyContent: "space-between",
          // gap: 6,
        }}
      >
        {/* Left Content */}
        <Box
          sx={{
            width: { xs: "100%", md: "50%" },
            textAlign: { xs: "center", lg: "left" },
            display: "flex",
            flexDirection: "column",
            alignItems: { xs: "center", lg: "flex-start" },
            mr: { xs: 0, md: -50 },
          }}
        >
          <Typography
            variant="overline"
            sx={{
              letterSpacing: "0.3em",
              color: "cyan.300",
              mb: 2,
              fontSize: "0.75rem",
            }}
          >
            Step into my digital playground.
          </Typography>

          {/* Keep TextGenerateEffect for the animation */}
          <TextGenerateEffect
            words={`Hey there!\nI'm Sahil Soni...`}
            className="text-[32px] md:text-4xl lg:text-5xl text-center md:text-left text-transparent bg-clip-text bg-gradient-to-r from-[#1e1e61] via-[#6c1ea1] to-[#5ef1dc]"
          />

          <Typography
            variant="body1"
            sx={{
              mt: 2,
              letterSpacing: { md: "0.025em" },
              fontSize: { xs: "0.875rem", md: "1.125rem", lg: "1.25rem" },
              color: "grey.300",
            }}
          >
            I design logic. I sculpt pixels. I build the web one bold idea at a
            time.
          </Typography>
        </Box>

        {/* Globe (right side) */}
        <Box
          sx={{
            width: { xs: "100%", md: "100%", lg: "50%" },
            height: { xs: 400, md: 500, lg: 550 },
            mt: { xs: 4, md: 0 },
          }}
        >
          <GitHubGlobe />
        </Box>
      </Box>

      {/* Keep star effects as they are */}
      <Box sx={{ position: "absolute", inset: 0, zIndex: 50 }}>
        <ShootingStars />
        <StarsBackground />
      </Box>
    </Box>
  );
};

export default Hero;

/* Add this CSS to your global styles or a CSS module and import it if needed */
<style jsx global>{`
  .hero-title-gradient {
    font-size: 2.25rem;
    text-align: center;
    background: linear-gradient(to right, #1e1e61, #6c1ea1, #5ef1dc);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  @media (min-width: 768px) {
    .hero-title-gradient {
      font-size: 3rem;
      text-align: left;
    }
  }
  @media (min-width: 1200px) {
    .hero-title-gradient {
      font-size: 3.75rem;
    }
  }
`}</style>;
