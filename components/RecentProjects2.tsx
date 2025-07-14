"use client";
import Image from "next/image";
import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Link,
  Stack,
  Chip,
  Theme,
} from "@mui/material";
import { projects } from "../data";
import { FaLocationArrow } from "react-icons/fa6";
import { motion } from "framer-motion";

const RecentProjects2 = () => {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: {
          xs: "1fr",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        },
        gap: 3,
        p: 2,
        mt: 4,
      }}
    >
      {projects.map((item) => (
        <motion.div
          key={item.id}
          whileHover={{ y: -5 }}
          transition={{ duration: 0.2 }}
        >
          <Card
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              bgcolor: "background.paper",
              border: "1px solid",
              borderColor: "divider",
              borderRadius: 2,
              p: 2,
              "&:hover": {
                boxShadow: (theme: Theme) =>
                  `0 0 20px ${theme.palette.primary.light}`,
              },
            }}
          >
            <CardContent>
              <Typography variant="h5" component="h3" gutterBottom>
                {item.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" mb={2}>
                {item.des}
              </Typography>

              <Box
                sx={{
                  width: "100%",
                  height: 120,
                  position: "relative",
                  mb: 2,
                  borderRadius: 1,
                  overflow: "hidden",
                }}
              >
                <Image
                  src={item.img}
                  fill
                  style={{ objectFit: "contain" }}
                  alt={item.title}
                />
              </Box>

              {item.title === "NPrep Official Website" && (
                <Typography variant="caption" color="text.disabled">
                  Disclaimer: Logo and brand used for attribution only. All
                  rights belong to NPrep Edtech.
                </Typography>
              )}

              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                mt={3}
              >
                <Link
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  underline="none"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    color: "primary.main",
                    fontSize: "0.75rem",
                    fontWeight: 500,
                  }}
                >
                  Check Live Site <FaLocationArrow style={{ marginLeft: 4 }} />
                </Link>

                <Stack direction="row" spacing={-1}>
                  {item.iconLists.map((icon, index) => (
                    <Box
                      key={index}
                      sx={{
                        border: "1px solid",
                        borderColor: "divider",
                        borderRadius: "50%",
                        bgcolor: "background.default",
                        width: 32,
                        height: 32,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        transform: `translateX(-${index * 8}px)`,
                        zIndex: item.iconLists.length - index,
                      }}
                    >
                      <Image src={icon} alt="icon" width={20} height={20} />
                    </Box>
                  ))}
                </Stack>
              </Stack>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </Box>
  );
};

export default RecentProjects2;
