import Section2 from "@/components/home/Section2";
import Image from "next/image";
import React from "react";
import heroImage from "@/public/images/unlockpotential2.png";
import dashboard from "@/public/images/howServiceIsOffered.png";
import calendar from "@/public/images/howServiceIsOffered2.png";
import { time } from "console";
import { ChevronRight } from "lucide-react";
import image from "@/public/images/Community.png";
import CommunitySection from "@/components/home/CommunitySection";

const page = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center   gap-10 md:gap-14 px-3 pt-24">
        <div className="max-w-5xl flex flex-col items-center gap-16 p-3 ">
          <div className="flex flex-col md:flex-row items-center ">
            <div className="flex-1 ">
              <Image
                alt="unlock your potentials"
                src={heroImage}
                height={heroImage.height}
                width={heroImage.width}
                className=""
              />
            </div>
            <div className=" flex flex-col gap-3 flex-1 max-w-md">
              <h2 className="text-lg md:text-xl  font-semibold">
                We offer meticulous career coaching and assistance in university
                admissions - We help you realize your career and academic
                dreams.{" "}
              </h2>
              <p className="text-sm text-gray-700">
                Our mission is to create a swift and easy access to a
                standardized education that transcends beyond geographical
                boarders and connect people to career opportunities everywhere.
              </p>
              <div className="flex  gap-2 justify-between mt-5"></div>
            </div>
          </div>
        </div>
        <div className="max-w-5xl flex flex-col items-center w-full gap-6 p-3 ">
          <h2 className="w-full text-xl md:text-3xl font-bold text-left">
            How our service is offered{" "}
          </h2>
          <div className="flex flex-col md:flex-row gap-4 px-4">
            <div className="flex flex-col border border-gray-200 rounded-2xl p-4">
              <h3 className="text-lg font-bold">Dashboard</h3>
              <Image alt="image" {...dashboard} />
              <div>
                <h4 className="font-semibold">
                  Manage All Your Appointment with ease
                </h4>
                <p className="text-sm">
                  Effortlessly manage all your appointments with our streamlined
                  system, designed for career and education consulting. With
                  just a few clicks, schedule, reschedule, and cancel
                  appointments, ensuring you stay organized and on track with
                  your goals.
                </p>
              </div>
            </div>
            <div className="flex flex-col border border-gray-200 rounded-2xl p-4">
              <h3 className="text-lg font-bold">Appointment</h3>
              <Image alt="image" {...calendar} />
              <div>
                <h4 className="font-semibold">
                  Set Date and Time for your appointment{" "}
                </h4>
                <p className="text-sm">
                  Choose the perfect date and time for your appointment
                  hassle-free, ensuring it fits seamlessly into your schedule.
                  Our intuitive system allows you to select the most convenient
                  options with ease, so you can focus on what matters most{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-5xl flex flex-col  gap-16 w-full">
          <div className="flex flex-col ">
            <h2 className=" text-xl md:text-3xl font-bold text-left">
              Serving you with the best. <br />
              Meet our team
            </h2>
            <span className="text-muted-foreground text-sm max-w-lg">
              AMEXT Consulting prioritises efficiency and excellence. Our
              incredible team of professionals have you at heart, ensuring that
              you get the best.
            </span>
          </div>
          <div className="grid grid-cols-3 gap-2 md:gap-4 md:grid-cols-5 lg:grid-cols-6 items-center justify-center content-center">
            {/* <div className="flex flex-wrap justify-center gap-4 items-center"> */}
            {team.map((item, index) => {
              return (
                <div key={index} className="flex flex-col items-center  gap-1">
                  <Image
                    height={153}
                    width={153}
                    src={item.img}
                    // alt={"image of " + item.title}
                    alt={" "}
                    className="bg-gray-200 rounded-full h-24 w-24"
                  />
                  <span className="text-center">{item.name}</span>
                  <span className="text-sm text-gray-400 text-center">
                    {item.title}
                  </span>
                </div>
              );
            })}
          </div>{" "}
        </div>
        <div className="max-w-5xl flex flex-col   w-full">
          <h3 className=" text-xl md:text-3xl font-bold text-left">
            Find out more
          </h3>
          <div className=" flex flex-col gap-5 md:gap-10 mb-4">
            {faqs.map((item, index) => {
              return (
                <div key={"faqs-" + index} className="flex flex-col gap">
                  <h4 className="font-semibold text-lg md:text-xl mb-4">
                    {item}
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {faqsContent[item].contents.map((item, index) => {
                      return (
                        <div
                          key={index + "faq-contentx"}
                          className=" flex justify-between bg-gray-50 border border-gray-200 p-2 rounded-md cursor-pointer"
                        >
                          {item.title}
                          <ChevronRight />
                        </div>
                      );
                    })}{" "}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <CommunitySection
        image={image}
        title={"Do You Want To Elevate Your Application?"}
        text="Our consultants have a track record of crafting applications that no admission committee or recruiter can ignore"
      />
    </>
  );
};

export default page;

const team = [
  { name: "Dennis Frimpong", title: "President & Founder", img: "/#" },
  { name: "Dennis Frimpong", title: "President & Founder", img: "/#" },
  { name: "Dennis Frimpong", title: "President & Founder", img: "/#" },
  { name: "Dennis Frimpong", title: "President & Founder", img: "/#" },
  { name: "Dennis Frimpong", title: "President & Founder", img: "/#" },
  { name: "Dennis Frimpong", title: "President & Founder", img: "/#" },
];

const faqs: ("General" | "Billing" | "Education Services")[] = [
  "General",
  "Billing",
  "Education Services",
];

const faqsContent = {
  General: {
    contents: [
      { title: "Home can I book a service", text: "" },
      {
        title: "How is the process after booking a service with IBS?",
        text: "",
      },
      {
        title: "How is IBS' success rate so high?",
        text: "",
      },
      { title: "Home can I book a service", text: "" },
      {
        title: "How is the process after booking a service with IBS?",
        text: "",
      },
      {
        title: "How is IBS' success rate so high?",
        text: "",
      },
    ],
  },
  Billing: {
    contents: [
      { title: "Home can I book a service", text: "" },
      {
        title: "How is the process after booking a service with IBS?",
        text: "",
      },
      {
        title: "How is IBS' success rate so high?",
        text: "",
      },
      { title: "Home can I book a service", text: "" },
      {
        title: "How is the process after booking a service with IBS?",
        text: "",
      },
      {
        title: "How is IBS' success rate so high?",
        text: "",
      },
    ],
  },
  "Education Services": {
    contents: [
      { title: "Home can I book a service", text: "" },
      {
        title: "How is the process after booking a service with IBS?",
        text: "",
      },
      {
        title: "How is IBS' success rate so high?",
        text: "",
      },
      { title: "Home can I book a service", text: "" },
      {
        title: "How is the process after booking a service with IBS?",
        text: "",
      },
      {
        title: "How is IBS' success rate so high?",
        text: "",
      },
    ],
  },
};
