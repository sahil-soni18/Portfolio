"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";
import { LampContainer } from "@/components/ui/lamp";
import Image from "next/image";
import { Box, Typography, Link, Container, Stack } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      id="contact"
      sx={{
        width: "100%",
        pt: 2,
        pb: 2,
        mb: { xs: 0, md: 2 },
      }}
    >
      {/* Keep LampContainer for its visual effect */}
      <LampContainer>
        <motion.div
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
        >
          <Box
            sx={{
              mt: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              px: 2,
            }}
          >
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "1.5rem", md: "2.5rem" },
                fontWeight: "bold",
                maxWidth: { lg: "45vw" },
                mb: 2,
                "& span": {
                  color: "lime.700",
                },
              }}
            >
              Ready to take <span>your</span> digital presence to the next
              level?
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: "text.secondary",
                mt: { xs: 2, md: 3 },
                mb: 3,
                fontSize: { xs: "0.875rem", md: "1rem" },
              }}
            >
              Reach out to me today and let&apos;s discuss how I can help you
              achieve your goals.
            </Typography>

            <Link href="mailto:sahils1810@gmail.com" underline="none">
              <MagicButton
                title="Let's get in touch"
                icon={<FaLocationArrow />}
                position="right"
              />
            </Link>
          </Box>
        </motion.div>
      </LampContainer>

      <Container
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          mt: { xs: 2, md: 2 },
          gap: 2,
        }}
      >
        <Typography
          variant="body2"
          sx={{
            color: "text.secondary",
            fontWeight: { xs: "light", md: "normal" },
          }}
        >
          Copyright © 2025 Sahil Soni.
        </Typography>

        <Stack direction="row" spacing={1}>
          {socialMedia.map((info) => (
            <Link
              key={info.id}
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                width: { xs: 32, md: 40 },
                height: { xs: 32, md: 40 },
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backdropFilter: "blur(24px) saturate(180%)",
                bgcolor: "rgba(0, 0, 0, 0.75)",
                borderRadius: 1,
                border: "1px solid",
                borderColor: "divider",
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "scale(1.1)",
                },
                mt: 1,
              }}
            >
              <Image
                src={info.img}
                alt={`icon-${info.id}`}
                width={20}
                height={20}
                style={{
                  width: "100%",
                  height: "auto",
                  maxWidth: 20,
                }}
              />
            </Link>
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
