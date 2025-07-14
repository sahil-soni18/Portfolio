"use client";

import Hero2 from "../components/Hero2";
import Footer from "../components/Footer";
import Clients from "../components/Clients";
import RecentProjects from "../components/RecentProjects";
import RecentProjects2 from "../components/RecentProjects2";
import { FloatingNav } from "../components/ui/FloatingNavbar";
import Experience3 from "../components/Experience3";
import Hero from "../components/Hero";
import { navItems } from "../data/index";

// MUI imports
import { Box, CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

// Create a dark theme
const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#000", // Adjust to match your black-100 color
    },
  },
  typography: {
    fontFamily: '"Inter", sans-serif', // Use your preferred font
  },
});

const Home = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline /> {/* This helps with consistent baseline styles */}
      <Box
        component="main"
        sx={{
          position: "relative",
          backgroundColor: "background.default",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          mx: "auto",
          px: { xs: 2, sm: 5 }, // 5px on mobile, 10px on small screens and up
          overflow: "hidden",
          minHeight: "100vh",
        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: "1200px", // Adjust to match your max-w-7xl (typically 1280px)
            scrollBehavior: "smooth",
          }}
        >
          <FloatingNav navItems={navItems} />
          <Hero />
          <Experience3 />
          <Hero2 />
          <RecentProjects />
          <RecentProjects2 />
          <Clients />
          <Footer />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Home;
