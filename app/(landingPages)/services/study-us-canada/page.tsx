import Link from "next/link";
import React from "react";
import TestimonyCard from "../_components/testimonyCard";
import OfferCard from "../_components/offerCard";
import usa from "@/public/images/US.png";
import canada from "@/public/images/Canada.png";
import Image from "next/image";
import { Award, AirplaneSquare, Bookmark, Briefcase } from "iconsax-react";
import { Button } from "@/components/ui/button";

const page = () => {
  return (
    <div className="min-h-screen flex flex-col gap-6">
      <div className=" mb-14">
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-semibold mb-2">
            Study in the USA or Canada{" "}
          </h1>
          <span className="text-muted-foreground">
            We help you make your dream of moving to North America a reality.{" "}
          </span>
        </div>
        <div className="grid grid-cols-2 w-fit">
          <Image
            src={canada.src}
            height={canada.height}
            width={canada.width}
            alt="canada-flag"
          />
          <Image
            src={usa.src}
            height={usa.height}
            width={usa.width}
            alt="usa-country"
          />
        </div>
      </div>

      <div className="flex flex-col gap-5 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {steps.map((item, index) => {
            return (
              <Link href="#" key={index}>
                <StepCard item={item} />
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
          <p className="text-muted-foreground max-w-lg">
            American Express Consultant does not provide legal advice to
            clients. Students will sign a separate retainer with the licensed
            immigration provider.
          </p>
        </div>
        <div className=" flex flex-col justify-center items-center">
          <Link href={"/apply"}>
            <Button className="text-5xl px-20 py-14 rounded-full ">
              Apply
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;

const steps = [
  {
    title: "School Application",
    desc: "Tailored school curation for optimal acceptance, coupled with crafted documents.",
    icon: Award,
  },
  {
    title: "Airport Pickup",
    desc: "Dedicated airport pick-up service to facilitate a smoother transition to the new country.",
    icon: AirplaneSquare,
  },
  {
    title: "Visa Application",
    desc: "Expert assistance to navigate the student visa processes through referrals to our network of licensed immigration service providers and consultants.",
    icon: Bookmark,
  },
  {
    title: "Career Guidance",
    desc: "Specialized guidance to navigate your career journey with success and fulfilment.",
    icon: Briefcase,
  },
];

const offers = [
  {
    title: "Readt ",
    tagLine: "School Application fees included.",
    price: "$452/month",
    description:
      "Our assistance with applying to 2 schools / programs previously chosen by the client. Recommended for students or professionals who have already identified a school and a program they want to pursue. It includes",
    perks: [
      "2 School CVs",
      "6 sets of sample Recommendation Letters",
      "Scholarship assistance is included on this package for clients who book on a 2 instalment payment plan / pay upfront.",
    ],
    actionBtnUrl: "#",
  },
];

const StepCard = ({
  item,
}: {
  item: {
    title: string;
    desc: string;
    icon: any;
  };
}) => {
  const IconComponent = item.icon;
  return (
    <li className=" min-w-5 h-full border border-[rgba(0, 0, 0, 0.5)] rounded-2xl p-4 flex gap-8 flex-col justify-between bg-[#FBFBFB] animate ">
      <div className=" flex gap-2 flex-col">
        <IconComponent className="icon-slide-in transition-transform duration-500 ease-in-out" />
        <h3 className="text-base font-bold icon-slide-in delay-75 transition-transform duration-500 ease-in-out">
          {item.title}
        </h3>
      </div>
      <div>
        <p className="text-sm text-gray-600 delay-100 icon-slide-in transition-transform duration-500 ease-in-out max-w-[300px]">
          {item.desc}
        </p>
      </div>
    </li>
  );
};
