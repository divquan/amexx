import { Briefcase, BriefcaseBusiness, GraduationCap } from "lucide-react";
import React from "react";
import usa from "@/public/images/usa.png";
import trendUp from "@/public/images/trend-up.png";
import { Button } from "@/components/ui/button";
import { BsMailbox, BsQuestion } from "react-icons/bs";
import Image from "next/image";
import { BiMailSend } from "react-icons/bi";
const ServiceSidebar = () => {
  return (
    <>
      <div className="flex flex-col">
        {sideBarItems.map((Item, index) => {
          const Icon = () =>
            Item?.icon ? (
              <Item.icon className="h-6 w-6 text-muted-foreground" />
            ) : Item.img ? (
              <Image alt="" {...Item.img} className="rounded-full h-5 w-5" />
            ) : (
              <BsQuestion className="h-6 w-6" />
            );
          return (
            <Button
              className="rounded-full p-0 w-12 h-12"
              key={index}
              variant={"ghost"}
            >
              <Icon />
            </Button>
          );
        })}
      </div>
      <div>
        <Button variant={"secondary"} className="rounded-full p-0 w-12 h-12">
          <BiMailSend />
        </Button>
      </div>
    </>
  );
};

export default ServiceSidebar;
const sideBarItems = [
  { name: "Education", link: "education", icon: BriefcaseBusiness },
  { name: "Work", link: "career", icon: GraduationCap },
  { name: "Education", link: "education" },
  { name: "Study USA", link: "study-usa", img: usa },
  { name: "others", link: "others", img: trendUp },
];
