"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
const CommunitySection = ({
  image,
  title,
  text,
  buttonName,
}: {
  image: StaticImageData;
  title: string;
  text: string;
  buttonName?: string;
}) => {
  const { blurDataURL, blurHeight, blurWidth, ...other } = image;
  return (
    <div className="relative h-[500px] w-full">
      <Image alt="" className="object-cover h-full w-full" {...other}></Image>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  flex flex-col  items-center gap-6 w-full">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-center ">
          {title}
        </h1>
        <p className="text-center max-w-lg text-lg text-gray-700">{text}</p>
        <Link href={"/apply"}>
          <Button className="px-12 font-normal">
            {buttonName || "Get Started"}
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default CommunitySection;
