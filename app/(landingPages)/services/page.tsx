import { partnerImages, stats } from "@/Constants/appData";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="min-h-screen flex flex-col gap-6">
      <div>
        <div>
          <h1 className="text-2xl md:text-3xl font-semibold">
            Land your dream job and relocate to Canada or US with us
          </h1>
          <span className="text-muted-foreground">
            Join our clients at the world&apos;s top companies
          </span>
        </div>
        <div className="flex gap-4 overflow-x-hidden h-[90px]">
          {partnerImages.map((item, index) => {
            return (
              <Image
                {...item}
                alt="dfs"
                key={index}
                className="w-1/2 md:w-1/4 object-contain"
              />
            );
          })}
        </div>
      </div>
      <div></div>

      <div className="flex flex-col gap-8">
        <div>
          <h1 className="text-2xl md:text-3xl font-semibold">
            Unlock your potential with American Express Consultant
          </h1>
          <p className="text-muted-foreground max-w-3xl">
            American Express Consultant does not provide legal advice to
            clients. Students will sign a separate retainer with the licensed
            immigration provider.
          </p>
        </div>
        <div className="flex  gap-6 mt-5">
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
        <div className="grid grid-cols-2 md:grid-cols-3">
          {testimonies.map((item, index) => {
            return (
              <Link href="#" key={index}>
                <li className=" min-w-5 h-full border border-[rgba(0, 0, 0, 0.5)] rounded-2xl p-4 flex gap-8 flex-col justify-between bg-[#FBFBFB] animate ">
                  <p className=" text-gray-600 icon-slide-in transition-transform duration-500 ease-in-out">
                    {item.paragraph}
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
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default page;

const testimonies = [
  {
    name: "Sally Acquah",
    paragraph:
      "I was able to secure full scholarships to two schools I applied to and partial scholarships with others. They literally helped me overcome the financial barriers in my education.",
    position: "Education",
    img: "/#",
  },
  {
    name: "Sally Acquah",
    paragraph:
      "Applying for a masters degree was very stressful for me because i was also working a full time job. But they made the application less tedious and made suitable schedules for me.",
    position: "Education",
    img: "/#",
  },
  {
    name: "Sally Acquah",
    paragraph:
      "Amazing people oriented consultancy. They helped me with applying to schools and choosing courses that best aligned with my dreams and aspirations ",
    position: "Education",
    img: "/#",
  },
];
