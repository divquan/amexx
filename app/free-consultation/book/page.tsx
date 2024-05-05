"use client";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";
import { InlineWidget } from "react-calendly";

const page = () => {
  const router = useRouter();
  return (
    <div>
      <div>
        <Button
          variant={"ghost"}
          className="p-2 aspect-square absolute top-8 left-8"
          onClick={() => router.back()}
        >
          <ArrowLeft></ArrowLeft>
        </Button>
      </div>
      <InlineWidget url="https://calendly.com/divquan/select-date-time-for-your-consultation" />
    </div>
  );
};

export default page;
