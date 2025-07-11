// import { HoverEffect } from "@/components/ui/card-hover-effect";

// const Experience3=()=> {
//   return (
//     <div className="max-w-5xl mx-auto px-8">
//       <HoverEffect items={projects} />
//     </div>
//   );
// }
// export const projects = [
//   {
//     title: "Stripe",
//     description:
//       "A technology company that builds economic infrastructure for the internet.",
//     link: "https://stripe.com",
//   },
//   {
//     title: "Netflix",
//     description:
//       "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
//     link: "https://netflix.com",
//   },
//   {
//     title: "Google",
//     description:
//       "A multinational technology company that specializes in Internet-related services and products.",
//     link: "https://google.com",
//   },
//   {
//     title: "Meta",
//     description:
//       "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
//     link: "https://meta.com",
//   },
//   {
//     title: "Amazon",
//     description:
//       "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
//     link: "https://amazon.com",
//   },
//   {
//     title: "Microsoft",
//     description:
//       "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
//     link: "https://microsoft.com",
//   },
// ];
// export default Experience3;
import React from "react";
import { HoverEffect } from "@/components/ui/card-hover-effect";

const Experience3 = () => {
  return (
    <div className="max-w-5xl mx-auto px-8 py-20" id="experience">
      <h1 className="heading">
        <span className="text-[#0ea5e9]">My Work Experience</span>
      </h1>
      <HoverEffect items={workExperience} />
    </div>
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
        <samp className="text-cyan-400">Live Product</samp>
      </>
    ),
    link: "https://nprep.in", // Assuming public site
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
        <samp className="text-cyan-400">Company</samp>
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
        <samp className="text-cyan-400">LinkedIn</samp>
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
        <samp className="text-cyan-400">GitHub</samp>
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
        <samp className="text-cyan-400">GitHub</samp>
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
        <samp className="text-cyan-400">Certificate</samp>
      </>
    ),
    link: "https://unstop.com/certificate-preview/c2ee61f3-cbc8-4c1a-a6f1-fa2c79692f55?utm_campaign=site-emails",
  },
];

export default Experience3;
