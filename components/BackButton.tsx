"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { Button } from "./ui/button";
import { FaChevronLeft } from "react-icons/fa6";

const BackButton = () => {
  const router = useRouter();
  return (
    <div
      className="p-2 h-max w-max grid place-content-center bg-muted rounded-full aspect-square cursor-pointer"
      onClick={() => router.back()}
    >
      <FaChevronLeft size={16} />
    </div>
  );
};

export default BackButton;
