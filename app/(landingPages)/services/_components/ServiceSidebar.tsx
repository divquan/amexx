"use client";
import React, { useState } from "react";
import usa from "@/public/images/usa.png";
import { Button } from "@/components/ui/button";
import { BsQuestion } from "react-icons/bs";
import Image from "next/image";
import { BiMailSend } from "react-icons/bi";
import { Briefcase, Teacher, TrendUp } from "iconsax-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
const ServiceSidebar = () => {
  let timeout: any;
  const pathnames = usePathname().split("/").slice(1);
  const [open, setOpen] = useState(false);
  return (
    <div
      className=" flex gap-24 flex-col"
      onMouseEnter={() => {
        timeout = setTimeout(() => {
          setOpen(true);
        }, 400);
      }}
      onMouseLeave={() => {
        clearTimeout(timeout);
        setOpen(false);
      }}
    >
      <div
        className={`flex flex-col gap-2 ${
          open ? "transition-all duration-700" : ""
        }`}
      >
        {sideBarItems.map((Item, index) => {
          const currentPath = !(pathnames.length < 2)
            ? "/" + pathnames[1]
            : "/";
          const isActive = currentPath == Item.link;
          const Icon = () =>
            Item?.icon ? (
              <Item.icon
                variant={`${isActive ? "Bold" : "Linear"}`}
                className={`h-6 w-6  ${
                  isActive
                    ? "text-white"
                    : "text-muted-foreground transition ease-out delay-500"
                }`}
              />
            ) : Item.img ? (
              <Image
                alt=""
                src={Item.img.src}
                height={Item.img.height}
                width={Item.img.width}
                className="rounded-full h-5 w-5 bg-white"
              />
            ) : (
              <BsQuestion className="h-6 w-6" />
            );
          return (
            <Link href={"/services" + Item.link} key={index}>
              <Button
                className={` transition-all ease-in-out duration-300 rounded-full ${
                  open ? "p-4 w-full items-center justify-start " : "p-1 w-12"
                }   h-12 flex gap-4`}
                key={index}
                variant={isActive ? "default" : "ghost"}
              >
                <Icon />

                <span
                  className={`transition ease-out  ${
                    open ? "w-fit" : "w-0 hidden"
                  } delay-500 `}
                >
                  {Item.name}
                </span>
              </Button>
            </Link>
          );
        })}
      </div>
      <div>
        <div className="w-full">
          {open && (
            <div className="max-w-36">
              <h6 className="text-[13px] font-bold text-muted-foreground w-full">
                Do you want to elevate your application?
              </h6>
              <p className="text-xs text-muted-foreground ">
                {" "}
                Reach out to us and lets get started
              </p>
            </div>
          )}
          <Button
            variant={"secondary"}
            className={`rounded-full p-0 h-12 ${open ? "w-full" : "w-12"}`}
          >
            <BiMailSend className={open ? "hidden" : ""} />
            <span className={open ? "" : "hidden"}>Contact Us</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ServiceSidebar;
const sideBarItems = [
  { name: "Education", link: "/", icon: Teacher },
  { name: "Work", link: "/career", icon: Briefcase },
  { name: "Study USA", link: "/study-us-canada", img: usa },
  { name: "others", link: "/business", icon: TrendUp },
];
