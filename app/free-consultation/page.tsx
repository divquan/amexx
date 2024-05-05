import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import consult1 from "@/public/images/consult1.png";
import consult2 from "@/public/images/consult2.png";
import { BiCaretLeft } from "react-icons/bi";
import { FaCaretLeft } from "react-icons/fa6";
import { PiCaretLeft } from "react-icons/pi";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Teacher } from "iconsax-react";
import Link from "next/link";

const page = () => {
  return (
    <div className=" h-screen flex w-screen gap-4 p-4 items-center flex-col md:flex-row">
      <div className=" flex-1 rounded-md w-full h-full border border-gray-300 p-10 pr-4 flex flex-col justify-between">
        <div className="flex flex-col gap-3">
          <div>
            <Button className="aspect-square rounded-md"></Button>
          </div>
          <div>
            <h1 className="text-3xl">
              Get Started With <span className="text-secondary">American </span>
              Express Travel Consult
            </h1>
            <p className="text-muted-foreground">
              Answers a few questions and let’s get your started right away
            </p>
          </div>
        </div>
        <div className="relative hidden md:block">
          <Image
            src={consult1.src}
            height={consult1.height}
            width={consult1.width}
            alt="consult image "
            className="w-[65%]"
          />
          <Image
            src={consult2.src}
            height={consult2.height}
            width={consult2.width}
            alt=""
            className="absolute right-7 top-3 w-[35%]"
          />
        </div>
      </div>
      <div className=" flex-1 rounded-md w-full h-full flex flex-col gap-3">
        <div>
          <div className="flex justify-between">
            <div className="p-2 h-max w-max grid place-content-center bg-muted rounded-full aspect-square cursor-pointer">
              <FaChevronLeft size={16} />
            </div>
            <Image
              alt="logo "
              src={"/images/logo.png"}
              width={100}
              height={100}
            />
          </div>
          <p className="text-muted-foreground max-w-md mt-3 text-sm">
            Schedule your free discovery call to unlock your educational and
            career potential
          </p>
        </div>

        <div className="overflow-y-scroll mt-4 gap-3">
          <Link href={"/free-consultation/book"}>
            <div className="rounded-md border border-gray-200 p-5 flex flex-col text-sm gap-3 hover:shadow-md cursor-pointer my-2">
              <div className="flex justify-between">
                <div className="flex items-center gap-3 ">
                  <Button className="p-0 aspect-square">
                    <Teacher variant="Bold" />
                  </Button>
                  <h2>Free School Consultation Call</h2>
                </div>
                <FaChevronRight size={16} />
              </div>
              <p>
                Applying to university can be confusing. Let us help you
                demystify your options and chances with a free discovery call!
                We will help you determine exactly what program, and
                institutions you should consider in your graduate school
                applications based on your qualifications.
              </p>
            </div>
          </Link>
          <Link href="/free-consultation/book">
            <div className="rounded-md border border-gray-200 p-5 flex flex-col text-sm gap-3 hover:shadow-md cursor-pointer my-2">
              <div className="flex justify-between">
                <div className="flex items-center gap-3 ">
                  <Button variant={"secondary"} className="p-0 aspect-square">
                    <Teacher variant="Bold" />
                  </Button>
                  <h2>Free Career Consultation Call</h2>
                </div>
                <FaChevronRight size={16} />
              </div>
              <p>
                In 30 minutes, our Careers Director will provide some valuable
                insights on how to level up your professional journey. Elena has
                helped top executives land 70+ jobs across the consulting,
                fintech, health, and marketing industries. She is our resident
                resume wiz and career consulting director.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
