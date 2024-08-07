import { partnerImages, stats } from "@/Constants/appData";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";
import PartnerInstitutions from "./_components/partnerInstitutions";
import OfferCard from "./_components/offerCard";
import TestimonyCard from "./_components/testimonyCard";

const page = () => {
  return (
    <div className="min-h-screen flex flex-col gap-3 md:gap-6">
      <div className="mb-4 md:mb-14">
        <div className="mb-2 md:mb-8">
          <h1 className="text-2xl md:text-3xl font-semibold mb-2">
            Land your dream job and relocate to Canada or US with us
          </h1>
          <span className="text-muted-foreground">
            Join our clients at the world&apos;s top companies
          </span>
        </div>
        <PartnerInstitutions />
      </div>

      <div className="flex flex-col gap-5 mb-8 md:mb-16">
        <div className="mb-4">
          <h1 className="text-2xl md:text-3xl font-semibold mb-2">
            Unlock your potential with American Express Consultant
          </h1>
          <p className="text-muted-foreground max-w-3xl">
            American Express Consultant does not provide legal advice to
            clients. Students will sign a separate retainer with the licensed
            immigration provider.
          </p>
        </div>
        <div className="flex gap-3 md:gap-6  mb-4 flex-wrap">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 ">
          {testimonies.map((item, index) => {
            return (
              <Link href="#" key={index}>
                <TestimonyCard item={item} />
              </Link>
            );
          })}
        </div>
      </div>
      <div className="mb-14">
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-semibold mb-2">
            Our Offers
          </h1>
          <p className="text-muted-foreground max-w-3xl">
            We have a 10%-20% discount for clients who make pay upfront without
            instalment plans.{" "}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
          {offers.map((item, index) => {
            return <OfferCard item={item} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default page;
import pp2 from "@/public/images/pp2.jpeg";

const testimonies = [
  {
    name: "Sally Acquah",
    paragraph:
      "I was able to secure full scholarships to two schools I applied to and partial scholarships with others. They literally helped me overcome the financial barriers in my education.",
    position: "Education",
    img: pp2,
  },
  {
    name: "Sally Acquah",
    paragraph:
      "Applying for a masters degree was very stressful for me because i was also working a full time job. But they made the application less tedious and made suitable schedules for me.",
    position: "Education",
    img: pp2,
  },
  {
    name: "Sally Acquah",
    paragraph:
      "Amazing people oriented consultancy. They helped me with applying to schools and choosing courses that best aligned with my dreams and aspirations ",
    position: "Education",
    img: pp2,
  },
];

const offers = [
  {
    title: "Decisive ",
    tagLine: "School Application fees included.",
    // price: "$2000",
    description:
      "This plan includes our assistance in applying to two schools and programmes have has been already decided on by the client.  Suitable for students and workers who have already chosen their preferred schools and fields",
    perks: [
      " Statement of Purpose and CVs",
      " Recommendation Letters and Application/ Personal Statement",
      "Scholarship assistance is included on this package for clients who book on a 2 instalment payment plan / pay upfront.",
    ],
    actionBtnUrl: "#",
  },
  {
    title: "School-Leaver",
    tagLine: "School Application fees included.",
    // price: "$3000",
    description:
      "This is the recommended plan for university and high school leavers. We help you in applying to three schools and programmes. Priority will be given to first class or second class upper university graduates and high school leavers with grades above C5.",
    perks: [
      " Statement of Purpose and CVs",
      " Recommendation Letters and Application/ Personal Statement",
      "Scholarship assistance is included on this package for clients who book on a 2 instalment payment plan / pay upfront.",
    ],
    actionBtnUrl: "#",
  },
  {
    title: "Goal-Getter",
    tagLine: "School Application fees included.",
    // price: "$Comprehensive",
    description:
      "This is the   plan for anyone who wants to benefit from our variety services. It includes career guidance and training as well as application to six schools and programmes. We prioritise your goals and help you in achieving them.",
    perks: [
      " Statement of Purpose and CVs",
      " Recommendation Letters and Application/ Personal Statement",
      "Scholarship assistance is included on this package for clients who book on a 2 instalment payment plan / pay upfront.",
    ],
    actionBtnUrl: "#",
  },
];
