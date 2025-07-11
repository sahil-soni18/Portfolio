"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/card";
import Link from "next/link";
import { projects } from "@/data";
import { FaLocationArrow } from "react-icons/fa6";

const RecentProjects2 = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4 mt-6">
      {projects.map((item) => (
        <CardContainer className="inter-var" key={item.id}>
          <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-4 border">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              {item.title}
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              {item.des}
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src={item.img}
                height={200}
                width={400}
                className="w-full h-32 object-contain rounded-xl group-hover/card:shadow-xl"
                alt={item.title}
              />
            </CardItem>
            {item.title === "NPrep Official Website" && (
              <p className="text-[10px] text-neutral-400 mt-2">
                Disclaimer: Logo and brand used for attribution only. All rights
                belong to NPrep Edtech.
              </p>
            )}
            <div className="flex items-center justify-between mt-6">
              <CardItem
                translateZ={20}
                as={Link}
                href={item.link}
                target="_blank"
                className="px-3 py-1 rounded-xl text-xs font-normal dark:text-[#0ea5e9]"
              >
                Check Live Site →
                <div className="flex items-center mt-2">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black w-8 h-8 lg:w-10 lg:h-10 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <Image
                        src={icon}
                        alt="icon"
                        width={24}
                        height={24}
                        className="p-1"
                      />
                    </div>
                  ))}
                </div>
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      ))}
    </div>
  );
};

export default RecentProjects2;
