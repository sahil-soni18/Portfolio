"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";

const RecentProjects = () => {
  return (
    <section id="Projects">
      <div className="py-20">
        <h1 className="heading text-purple">
          A small selection of{" "}
          <span className="text-[#0ea5e9]">Recent Projects</span>
        </h1>
      </div>
    </section>
  );
};

export default RecentProjects;
