"use client";
import { Button } from "@/components/ui/button";
import React from "react";

const page = () => {
  return (
    <div className="w-full max-w-2xl px-3 md:mx-[8%]">
      <Header name="Notifications" />
      <div className="relative">
        <input
          className="w-full h-12 border border-[#D6D6D6] rounded-[35px] placeholder:text-[#828282] pl-10 "
          placeholder="Search for notification"
        />
        <SearchNormal1
          color="#828282"
          size={18}
          className="absolute left-2 top-1/2 -translate-y-1/2 ml-2 font-bold"
        />
      </div>
      <div className="flex flex-col gap-4 mt-6">
        <NotificationItem
          date="12 May 2024"
          details="Your Comprehensive Education Package request has been sent. The team will respond within one business day."
          title="Your Comprehensive Education Package"
          user={{ name: "Iva Gyann" }}
        />
        <Separator />

        <NotificationItem
          date="12 May 2024"
          details="Your Comprehensive Education Package request has been sent. The team will respond within one business day."
          title="Your Comprehensive Education Package"
          user={{ name: "Ivan Gyan" }}
        />
        <Separator />

        <NotificationItem
          date="12 May 2024"
          details="Your Comprehensive Education Package request has been sent. The team will respond within one business day."
          title="Your Comprehensive Education Package"
          user={{ name: "Iva Gyann" }}
        />
      </div>
    </div>
  );
};

export default page;

import { useRouter } from "next/navigation";
import { ArrowLeft2, SearchNormal1 } from "iconsax-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { X } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Header: React.FC<{ name: string }> = ({ name }) => {
  const router = useRouter();
  const handleBack = () => {
    router.back();
  };
  return (
    <div className="flex gap-3 items-center ">
      <Button
        variant={"ghost"}
        className=" rounded-full h-12 w-12 p-0"
        onClick={handleBack}
      >
        <ArrowLeft2 variant="Linear" size={22} />
      </Button>
      <div>
        <span className="text-xl font-bold">{name}</span>
      </div>
    </div>
  );
};

const NotificationItem = (notificationProps: {
  title: string;
  details: string;
  date: string;
  user: { name: string; url?: string };
}) => {
  const { date, details, title, user } = notificationProps;
  return (
    <div className="flex gap-3 items-center">
      <div>
        <Avatar className="">
          {user.url && <AvatarImage src="https://github.com/shadcn.png" />}{" "}
          <AvatarFallback className="bg-green-200">
            {user.name.split(" ")[0].charAt(0) +
              " " +
              user.name.split(" ")[0].charAt(1)}
          </AvatarFallback>
        </Avatar>
      </div>
      <div className="flex flex-col">
        <h1 className="text-[15px] font-bold">{title}</h1>
        <p className="text-sm">{details}</p>
        <span className="text-sm font-normal text-gray-400">{date}</span>
      </div>
      <div>
        <Button variant={"ghost"}>
          <X />
        </Button>
      </div>
    </div>
  );
};
