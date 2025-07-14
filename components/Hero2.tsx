"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { Typewriter } from "react-simple-typewriter";
import { Box, Typography, Button } from "@mui/material";

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
      >
        <Box
          sx={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            gap: 3,
            alignItems: "center",
            justifyContent: "center",
            px: 4,
            textAlign: "center",
            color: "#E0E7FF", // Soft lavender text
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "2rem", md: "3.75rem" },
              fontWeight: "bold",
              background: "linear-gradient(to right, #9F7AEA, #63B3ED)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            I&#39;m a&nbsp;
            <Box
              component="span"
              sx={{
                background: "linear-gradient(to right, #63B3ED, #B794F4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
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
            </Box>
          </Typography>

          <Typography
            variant="body1"
            sx={{
              maxWidth: "md",
              fontSize: { xs: "1rem", md: "1.5rem" },
              color: "#CBD5E0", // Soft muted gray-blue
              "& span": {
                color: "#90CDF4", // Light tech blue
                fontWeight: "medium",
              },
            }}
          >
            Turning ideas into full-stack web & mobile apps using{" "}
            <span>React</span>, <span>Node.js</span>, and <span>FastAPI</span>.
          </Typography>

          <Button
            onClick={handleScroll}
            variant="contained"
            sx={{
              background: "linear-gradient(to right, #667eea, #764ba2)",
              "&:hover": {
                background: "linear-gradient(to right, #5a67d8, #6b46c1)",
              },
              px: 6,
              py: 1.5,
              borderRadius: "9999px",
              fontWeight: "medium",
              boxShadow: "0 0 20px rgba(118, 75, 162, 0.6)",
              textTransform: "none",
              fontSize: "1rem",
              color: "#fff",
            }}
            startIcon="🚀"
          >
            Explore My Work
          </Button>
        </Box>
      </motion.div>
    </AuroraBackground>
  );
};

export default Hero2;
