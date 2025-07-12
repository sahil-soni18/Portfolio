"use client";

import React from "react";
import Image from "next/image";

import { skills, testimonials } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteCards";

const Clients = () => {
  return (
    <section id="testimonials" className="py-20">
      <h1 className="heading text-purple">
        Appreciation from
        <span className="text-[#0ea5e9]"> My Colleagues and Mentors</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div
          // remove bg-white dark:bg-black dark:bg-grid-white/[0.05], h-[40rem] to 30rem , md:h-[30rem] are for the responsive design
          className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden"
        >
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
        <h1 className="heading">
          My <span className="text-[#0ea5e9]">Skills</span>
        </h1>
        &nbsp;
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
          {skills.map((skill) => (
            <a
              key={skill.id}
              href={skill.url}
              target="_blank"
              rel="noopener noreferrer"
              title={skill.name}
              className="transition-transform hover:scale-110"
            >
              <Image
                src={skill.img}
                alt={skill.name}
                width={40}
                height={40}
                className="md:w-10 w-6"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
