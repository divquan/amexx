"use client";
import React from "react";
import heroImage from "@/public/images/unlockpotentials.png";
import Image from "next/image";
import Link from "next/link";
import icon1 from "@/public/icons/sms-edit.svg";
import { MailCheck, Notebook, NotebookPen } from "lucide-react";
import google from "@/public/images/google.png";
import ColombiaUniversity from "@/public/images/ColombiaUniversity.png";
import drexel from "@/public/images/drexel.png";
import netflix from "@/public/images/netflix.png";

const Section2 = () => {
  return (
    <div className="max-w-5xl flex flex-col items-center gap-16">
      <div className="flex flex-row items-center">
        <div className=" flex-1">
          <Image
            alt="unlock your potentials"
            src={heroImage}
            height={heroImage.height}
            width={heroImage.width}
          />
        </div>
        <div className=" flex flex-col gap-3 flex-1 justify-around">
          <h2 className="text-2xl md:text-4xl text-secondary font-bold ">
            don't break the BANK!
          </h2>
          <h2 className="text-2xl md:text-4xl text-primary font-extrabold">
            learn about our process
          </h2>
          <p className="text-sm text-gray-700">
            Amext Consult - Guiding your life-enriching journeys abroad. With
            years of experience, we match you to immersive study, work, and
            cultural experiences overseas. Let our experts handle all the
            intensive planning so you can focus fully on broadening your abroad
            dreams.
          </p>
          <div className="flex  gap-2 justify-between mt-5">
            {stats.map((item, index) => {
              return (
                <div className="flex flex-col" key={index}>
                  <span className="text-3xl font-bold text-secondary">
                    {item.title}
                  </span>
                  <span className="text-gray-700 text-xs">{item.caption}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <ul className="flex  gap-12 items-stretch h-70">
        {sectionFooterItems.map((item, index) => {
          return (
            <Link href="#">
              <li className=" w-72 h-full border border-[rgba(0, 0, 0, 0.5)] rounded-2xl p-4 flex gap-8 flex-col justify-between bg-[#FBFBFB] animate ">
                <div>
                  <MailCheck className="mb-3  mr-2 delay-100 icon-slide-in transition-transform duration-500 ease-in-out animate-spring" />
                  <h3 className="delay-75 font-extrabold text-black icon-slide-in transition-transform duration-500 ease-in-out">
                    {item.title}
                  </h3>
                </div>
                <p className="text-sm text-gray-600 icon-slide-in transition-transform duration-500 ease-in-out">
                  {item.text}
                </p>
              </li>
            </Link>
          );
        })}
      </ul>
      <div className="flex flex-col  items-start w-full mt-10">
        <h2 className="text-2xl font-bold text-left">
          Our Clients Get Into The World's <br /> Most Competitive Schools &
          Companies
        </h2>
        <div className="flex gap-5 justify-between">
          {partnerImages.map((item, index) => {
            return (
              <Image
                src={item.src}
                width={item.height}
                height={item.height}
                alt="dfs"
                key={index}
                blurDataURL={item.blurDataURL}
                className="w-full object-contain"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Section2;

const stats = [
  { title: "93%", caption: "Our success rate" },
  { title: "100+", caption: "Clients served since 2018" },
  { title: "$12M+", caption: "scholarships and income secured" },
];

const sectionFooterItems = [
  {
    title: "Our services",
    text: "We have a variety of services curated to serve your specific needs.",
    icon: icon1,
  },
  {
    title: "Flexible Payment Plans",
    text: "Choose from a wide range of  options a suitable payment plan to ensure flexibility and comfort.",
    icon: icon1,
  },
  {
    title: "Get started  right away ",
    text: "We are dedicated to giving you thr needed expertise to make your application stand out.",
    icon: icon1,
  },
];

const partnerImages = [google, ColombiaUniversity, netflix, drexel];
