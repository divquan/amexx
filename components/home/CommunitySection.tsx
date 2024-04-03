"use client";
import React from "react";
import image from "@/public/images/Community.png";
import Image from "next/image";
import { Button } from "../ui/button";
const CommunitySection = () => {
  return (
    <div className="relative h-[300px]">
      <Image
        alt=""
        className="object-cover h-full"
        src={image}
        height={image.height}
        width={image.width}
      ></Image>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  flex flex-col  items-center gap-6 w-full">
        <h1 className="text-2xl md:text-4xl font-bold">Expert team</h1>
        <p className="text-center">
          Our consultants have a track record of crafting applications <br />
          that no admission committee or recruiter can ignore
        </p>
        <Button>Get Started</Button>
      </div>
    </div>
  );
};

export default CommunitySection;
