import React from "react";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { Box, Typography, Link } from "@mui/material";

const Experience3 = () => {
  return (
    <Box
      id="experience"
      sx={{
        maxWidth: "1040px", 
        mx: "auto",
        px: 4,
        py: 10,
      }}
    >
      <Typography
        variant="h2"
        component="h1"
        sx={{
          fontSize: "2.25rem",
          fontWeight: "bold",
          mb: 4,
          textAlign: "center",
          "& span": {
            color: "primary.main", // using theme's primary color
          },
        }}
      >
        My <span>Work Experience</span>
      </Typography>
      <HoverEffect items={workExperience} />
    </Box>
  );
};

export const workExperience = [
  {
    id: 1,
    title: "Full Stack Developer – NPrep Edtech",
    description: (
      <>
        Engineered scalable web apps using NestJS, React.js & TypeScript,
        serving 20,000+ monthly users.
        <br />
        Improved UI responsiveness with MUI and contributed to CI/CD pipelines.
        <br />
        <Link
          href="https://nprep.in"
          color="primary.light"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ display: "inline-block", mt: 1 }}
        >
          Live Product
        </Link>
      </>
    ),
    link: "https://nprep.in",
  },
  {
    id: 2,
    title: "Software Engineer Intern – Ciena India",
    description: (
      <>
        Built high-performance APIs with FastAPI; enhanced dashboard response by
        25%.
        <br />
        Boosted test coverage from 60% to 95% and fixed 10+ real-time production
        issues.
        <br />
        <Link
          href="https://www.ciena.com"
          color="primary.light"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ display: "inline-block", mt: 1 }}
        >
          Company
        </Link>
      </>
    ),
    link: "https://www.ciena.com",
  },
  {
    id: 3,
    title: "Full Stack Developer Intern – Good Tech Mind",
    description: (
      <>
        Developed full-stack app using MERN stack; integrated third-party APIs
        and Docker.
        <br />
        Enabled secure login for 500+ daily users with JWT auth.
        <br />
        <Link
          href="https://www.linkedin.com/company/goodtechmind/mycompany/"
          color="primary.light"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ display: "inline-block", mt: 1 }}
        >
          LinkedIn
        </Link>
      </>
    ),
    link: "https://www.linkedin.com/company/goodtechmind/mycompany/",
  },
  {
    id: 4,
    title: "Capstone Project – FarmBridge App",
    description: (
      <>
        Built farmer-to-consumer marketplace using React Native, Node.js &
        PostgreSQL.
        <br />
        Implemented auth, cart, order management & REST APIs.
        <br />
        <Link
          href="https://github.com/sahil-soni18/Farm-Bridge-App"
          color="primary.light"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ display: "inline-block", mt: 1 }}
        >
          GitHub
        </Link>
      </>
    ),
    link: "https://github.com/sahil-soni18/Farm-Bridge-App",
  },
  {
    id: 5,
    title: "Backend Developer – E-Commerce System",
    description: (
      <>
        Designed product & payment backend using FastAPI and PostgreSQL.
        <br />
        Optimized DB with indexes; reduced query latency by 40%.
        <br />
        <Link
          href="https://github.com/sahil-soni18/StepWiseMart"
          color="primary.light"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ display: "inline-block", mt: 1 }}
        >
          GitHub
        </Link>
      </>
    ),
    link: "https://github.com/sahil-soni18/StepWiseMart",
  },
  {
    id: 6,
    title: "Hackathon Experience – MUJHackX 2.0",
    description: (
      <>
        Reached Round 2 in MUJHackX 2.0 among 500+ teams with real-world project
        solution.
        <br />
        <Link
          href="https://unstop.com/certificate-preview/c2ee61f3-cbc8-4c1a-a6f1-fa2c79692f55?utm_campaign=site-emails"
          color="primary.light"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ display: "inline-block", mt: 1 }}
        >
          Certificate
        </Link>
      </>
    ),
    link: "https://unstop.com/certificate-preview/c2ee61f3-cbc8-4c1a-a6f1-fa2c79692f55?utm_campaign=site-emails",
  },
];

export default Experience3;
