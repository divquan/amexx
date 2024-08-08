import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

import Image from "next/image";
import { partnerImages } from "@/Constants/appData";

const SuccessStory = () => {
  return (
    <div className="flex flex-col items-center gap-12 max-w-5xl px-3">
      <div className="flex flex-col  items-start w-full mt-10">
        <h2 className="text-2xl font-bold text-left">
          Our Clients Get Into The World&#39;s <br /> Most Competitive Schools &
          Companies
        </h2>
        <div className="flex flex-wrap gap-3 mt-3">
          {partnerImages.map((item, index) => {
            return (
              <div
                className="w-[30%] md:w-1/4 h-14 md:h-24 overflow-hidden flex items-center justify-center"
                key={index}
              >
                <Image
                  src={item.src}
                  width={item.height}
                  height={item.height}
                  alt="dfs"
                  blurDataURL={item.blurDataURL}
                  className="object-cover  "
                />
              </div>
            );
          })}
        </div>
      </div>
      <ul className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 h-70 gap-2">
        {succesStories.map((item, index) => {
          return (
            <li
              key={index}
              className=" min-w-5 h-full border border-[rgba(0, 0, 0, 0.5)] rounded-2xl p-4 flex gap-8 flex-col justify-between bg-[#FBFBFB] animate "
            >
              <p className=" text-gray-600 icon-slide-in transition-transform duration-500 ease-in-out">
                {item.text}
              </p>
              <div>
                <h3 className="delay-75 font-extrabold text-black  icon-slide-in transition-transform duration-500 ease-in-out">
                  {item.name}
                </h3>
                <p className="text-sm text-gray-600 delay-75 font-extrabold  icon-slide-in transition-transform duration-500 ease-in-out">
                  {item.position}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
      {/* <div className="flex flex-col gap-8 items-center">
        <h3 className="font-bold text-lg">
          Explore Amazing Stories From Our Client
        </h3>
        <Button variant={"secondary"} className="w-fit">
          Read Success Stories
        </Button>
      </div> */}
    </div>
  );
};

export default SuccessStory;
const succesStories = [
  {
    text: "Secured a study and work permit to advance studies while working abroad, gained opportunity to boost career oppotions",
    name: "Basma Yelsuma",
    position: "Education and career",
  },
  {
    text: "Enrolled into the University with the help of our consultants during application process and after.",
    name: "David Gyasi",
    position: "Education",
  },
  {
    text: "Studied for a Masters degree which landed him the opportunity to network globally with diverse people. ",
    name: "Paa Kofi Kenneth",
    position: "Education and career ",
  },
  {
    text: "Gained admission to dream university to pursue a desired degree in the shortest possible time through the dedication of our consultants. With well informed guidance, had numerous opportunities after school.",
    name: "Millicent Asuming",
    position: "Education and career.",
  },
  {
    text: "Gained scholarship to pursue a degree with the an expertly curated application.",
    name: "Titi Shukrah",
    position: "Education",
  },

  {
    text: "Currently studying in a University abroad on a fully funded scholarship.",
    name: "Esther",
    position: "Education",
  },
];
