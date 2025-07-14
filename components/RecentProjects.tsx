"use client";

import { Box, Stack, Typography } from "@mui/material";

const RecentProjects = () => {
  return (
    <Stack id="Projects" spacing={4} sx={{ py: 10 }}>
      <Box>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            color: "#9333ea", // Tailwind's purple-600
            mb: 1,
          }}
        >
          Handpicked Highlights
        </Typography>

        <Typography
          variant="h2"
          sx={{
            fontWeight: 800,
            fontSize: { xs: "2rem", md: "3.5rem" },
            color: "#0ea5e9", // Tailwind's sky-500
            lineHeight: 1.2,
          }}
        >
          A Curated Collection of My Recent Work
        </Typography>
      </Box>

      {/* Project List Goes Here */}
    </Stack>
  );
};

export default RecentProjects;
