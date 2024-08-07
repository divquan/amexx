import { partnerImages, stats } from "@/Constants/appData";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";
import PartnerInstitutions from "../_components/partnerInstitutions";
import TestimonyCard from "../_components/testimonyCard";
import OfferCard from "../_components/offerCard";

const page = () => {
  return (
    <div className="min-h-screen flex flex-col gap-6">
      <div className="mb-5 md:mb-14">
        <div className="mb-3 md:mb-8">
          <h1 className="text-2xl md:text-3xl font-semibold mb-2">
            Land your dream job and relocate to Canada or US with us
          </h1>
          <span className="text-muted-foreground">
            Join our clients at the world&apos;s top companies
          </span>
        </div>
        <PartnerInstitutions />
      </div>

      <div className="flex flex-col gap-5 mb-16">
        <div className="mb-4">
          <h1 className="text-2xl md:text-3xl font-semibold mb-2">
            Unlock your potential with American Express Consultant
          </h1>
          <p className="text-muted-foreground max-w-3xl">
            American Express Consult does not provide legal advice to clients.
            Students will sign a separate retainer with the licensed immigration
            provider.
          </p>
        </div>
        <div className="flex gap-3 md:gap-6  mb-4 flex-wrap">
          {careerStats.map((item, index) => {
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
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
import pp1 from "@/public/images/pp1.jpeg";
const testimonies = [
  {
    name: "Sally Acquah",
    paragraph:
      "I secured my dream job in the US with the help of American Express Consult. I was guided in creating a LinkedIn profile which gave me increased visibility and increased my chances of landing a job.",
    position: "Career",
    img: pp1,
  },
  {
    name: "Sally Acquah",
    paragraph:
      "As a fresh graduate with no work experience, I had no idea where to start from and all the jobs i saw required a minimum of two experience. This made me stranded until I heard of American Express consult. They helped me to put together a convincing resume with my activities in school. ",
    position: "Career",
    img: pp1,
  },
  {
    name: "Sally Acquah",
    paragraph:
      "What I like about their service is their understanding and the value they place on what you want. They gave consideration the the kind of job i wanted and the salary I expected.",
    position: "Career",
    img: pp1,
  },
];

const offers = [
  {
    title: "Beginner ",
    // tagLine: "School Application fees included.",

    description:
      "We have designed this package for people who want to explore their career options with their diverse backgrounds and skill sets. We help you in applying for thirty different jobs in your preferred industry and give you an intensive coaching for interviews. Included in this package are",
    perks: [
      " Resume and Cover letter writing",
      " LinkedIn Optimization",
      "Assistance in job application and monitoring.",
    ],
    actionBtnUrl: "#",
  },
  {
    title: "Professional",
    // tagLine: "School Application fees included.",

    description:
      "Professionals with working experience are not left out. We will help you work in the same or similar field abroad. You will get assistance  assistances in organising your CV to improve your chances of getting a call for interview. We also give you the opportunity to negotiate your salary and working conditions. It includes",
    perks: [
      " Resume and Cover letter writing",
      " LinkedIn Optimization",
      "Assistance in job application and monitoring and other services.",
    ],
    actionBtnUrl: "#",
  },
  {
    title: "Career Guidance",
    // tagLine: "School Application fees included.",

    description:
      "Do you need help in choosing a career path? American Express Consult has got you in mind as well.      Our Career Guidance experts with help you identify your strengths and weaknesses and help you navigate the path that is best for you and your future.   We will go through a step by step training approach with you and monitor your growth. At the end of your training session, we will help you find a perfect job and take you a step closer to a successful future.",
    perks: [],
    actionBtnUrl: "#",
  },
];

const careerStats = [
  { title: "98%", caption: "Jobs secured" },
  { title: "$152M+", caption: "Salaries" },
  { title: "100+", caption: "clients served since inception" },
];
