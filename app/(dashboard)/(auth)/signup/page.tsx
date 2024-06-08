import React from "react";
import { FaChevronLeft } from "react-icons/fa";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Form from "./_form";

const Page = async () => {
  const date = new Date();
  const isoString = date.toISOString(); // "2023-06-07T14:48:00.000Z"

  return (
    <>
      <div>
        <div className="flex justify-between">
          <div className="p-2 h-max w-max grid place-content-center bg-muted rounded-full aspect-square cursor-pointer">
            <FaChevronLeft size={16} />
          </div>
          <Link href={"/login"}>
            <Button variant={"secondary"}>Log In</Button>
          </Link>
        </div>
        <Form serverDate={isoString} />
      </div>
    </>
  );
};

export default Page;
