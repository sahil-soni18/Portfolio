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

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col  mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full scroll-smooth">
        <FloatingNav navItems={navItems} />

        <Hero />
        <Experience3 />
        <Hero2 />
        <RecentProjects />
        <RecentProjects2 />
        <Clients />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
