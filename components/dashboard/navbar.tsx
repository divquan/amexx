"use client";
import { Button } from "@/components/ui/button";
import { ArrowDown2, Notification, Sms } from "iconsax-react";
import Link from "next/link";
import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import logo from "@/public/images/logo.png";
import Image from "next/image";
import { useGetUser } from "@/hooks/useUser";
import { useAuth } from "@/hooks/useAuth";

const Navbar = () => {
  const { data, isLoading, error } = useGetUser();
  const auth = useAuth();

  if (isLoading) return "Loading...";
  if (!data || data?.length <= 0) return "user data not found";
  return (
    <div className="flex items-center justify-center p-6 md:p-8 h-[85px] ">
      <div className="max-w-6xl flex justify-between w-full items-center">
        <Link href={"/dashboard "}>
          <Image
            src={logo.src}
            height={logo.height}
            width={logo.width}
            alt="logo"
            className="w-auto h-12"
          />{" "}
        </Link>
        <div className=" flex gap-1 items-center">
          <Link href="/dashboard/messages" className="hidden md:block">
            <Button
              variant={"ghost"}
              className=" rounded-full h-12 w-12 p-0 hidden md:flex"
            >
              <Sms size={22} />
            </Button>
          </Link>
          <Link href="/dashboard/notifications" className="hidden md:block">
            <Button variant={"ghost"} className=" rounded-full h-12 w-12 p-0">
              <Notification size={22} />
            </Button>
          </Link>
          <div className="relative">
            <Popover>
              <PopoverTrigger>
                <div className="flex gap-2 rounded-3xl p-3 hover:bg-gray-50 items-center cursor-pointer">
                  <div className="h-11 w-11 bg-gray-300 rounded-full"></div>
                  <div className="flex flex-col">
                    <span className="hidden md:block">
                      {data[0].first_name + " " + data[0]?.last_name}
                    </span>
                    <div className="flex items-center gap-1">
                      <div className="h-2 w-2 rounded-full bg-green-500"></div>
                      <span className="hidden md:block"> Active</span>
                    </div>
                  </div>
                  {/* <Button variant={"ghost"} className=" rounded-full h-12 w-12 p-0"> */}
                  <ArrowDown2 size={22} />
                  {/* </Button> */}
                </div>
              </PopoverTrigger>
              <PopoverContent className="flex flex-col">
                {menuItems.map((item, index) => {
                  return (
                    <Button
                      className="rounded-none text-left justify-start"
                      variant={"ghost"}
                      key={index}
                    >
                      {item.name}
                    </Button>
                  );
                })}
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

const menuItems = [
  { name: "Profile", link: "/" },
  { name: "Settings", link: "/" },
  { name: "Settings", link: "/" },
];
