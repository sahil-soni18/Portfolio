"use client";
import React from "react";
import Image from "next/image";
import { Box, Typography, Link } from "@mui/material";
import { skills, testimonials } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteCards";

const Clients = () => {
  return (
    <Box
      component="section"
      id="testimonials"
      sx={{
        py: 10,
        px: 2,
        textAlign: "center",
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontSize: { xs: "2rem", md: "2.5rem" },
          fontWeight: "bold",
          mb: 4,
          color: "purple.main", // Add purple to your theme if needed
          "& span": {
            color: "primary.main",
          },
        }}
      >
        Voices of
        <span> Appreciation</span>
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: { xs: 4, lg: 0 },
        }}
      >
        <Box
          sx={{
            height: { xs: "50vh", md: "30rem" },
            borderRadius: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            overflow: "hidden",
            width: "100%",
            mb: 4,
          }}
        >
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </Box>

        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: "2rem", md: "2.5rem" },
            fontWeight: "bold",
            mb: 2,
            "& span": {
              color: "primary.main",
            },
          }}
        >
          My <span>Skills</span>
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: { xs: 2, md: 4 },
            mt: { xs: 4, lg: 0 },
            maxWidth: "800px",
            mx: "auto",
          }}
        >
          {skills.map((skill) => (
            <Link
              key={skill.id}
              href={skill.url}
              target="_blank"
              rel="noopener noreferrer"
              title={skill.name}
              sx={{
                display: "inline-flex",
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "scale(1.1)",
                },
              }}
            >
              <Image
                src={skill.img}
                alt={skill.name}
                width={40}
                height={40}
                style={{
                  width: "100%",
                  height: "auto",
                  maxWidth: 40,
                }}
              />
            </Link>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Clients;
