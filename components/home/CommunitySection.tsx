"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";
import { Button } from "../ui/button";
const CommunitySection = ({
  image,
  title,
  text,
}: {
  image: StaticImageData;
  title: string;
  text: string;
}) => {
  return (
    <div className="relative h-[500px]">
      <Image alt="" className="object-cover h-full" {...image}></Image>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  flex flex-col  items-center gap-6 w-full">
        <h1 className="text-2xl md:text-4xl font-bold text-center">{title}</h1>
        <p className="text-center max-w-md">{text}</p>
        <Button>Get Started</Button>
      </div>
    </div>
  );
};

export default CommunitySection;
