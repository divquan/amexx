"use client";
import React from "react";
import { Button } from "../ui/button";
import image1 from "@/public/images/1.png";
import image2 from "@/public/images/2.png";
import image3 from "@/public/images/3.png";
import image4 from "@/public/images/4.png";
import image5 from "@/public/images/5.png";
import image6 from "@/public/images/6.png";
import image7 from "@/public/images/7.png";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "iconsax-react";

const Hersection = () => {
  return (
    <div className="flex flex-col max-w-5xl text-center pt-8 md:pt-14 gap-12 md:gap-24 px-2 md:px-0 items-center">
      <div className="flex flex-col gap-6 items-center">
        <h1 className="text-3xl md:text-5xl font-bold">
          from getting{" "}
          <span className="text-primary">
            {" "}
            admissions{" "}
            <ArrowRight className="text-primary inline-block " size={32} />{" "}
          </span>
          visa processes, we guide you on travel on{" "}
          <span className="text-secondary"> abroad</span>
        </h1>
        <p className="max-w-3xl text-gray-500">
          AmericanExpress Travel Consult <b>(AMEXT)</b> gears you up to unleash
          your capabilities, whether it&#39;s embarking on educational journeys,
          enrolling in schools abroad, or securing employment opportunities.
        </p>
        <Link href={"/apply"}>
          <Button className="w-fit py-4 px-7">Apply now</Button>
        </Link>
      </div>
      <div className="flex flex-row items-center gap-4 max-w-4xl">
        {images.map((item, index) => {
          return (
            <div
              key={"image-group" + index}
              className={` flex-col gap-4 ${
                index == 0 || index == images.length - 1
                  ? "hidden md:flex gap-4"
                  : "flex"
              }`}
            >
              {item.map((image, imageKey) => {
                return (
                  <Image
                    key={imageKey}
                    src={image}
                    height={image.height}
                    width={image.width}
                    alt={"image-" + imageKey}
                    className="bg-gray-300 rounded-[24px]"
                  />
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Hersection;

const images = [
  [image1],
  [image2, image3],
  [image4],
  [image5, image6],
  [image7],
];
