"use client";
import PageName from "@/components/dashboard/PageName";
import React, { useState } from "react";
import { formData } from "../formData";
import { Button } from "@/components/ui/button";
import Input from "@/components/dashboard/input";
import Link from "next/link";

type detailType = {
  whyAGoodFit: string;
  struggles: string;
  anythingElse: string;
};
const Page = () => {
  const [details, setDetails] = useState<detailType>({
    whyAGoodFit: "",
    struggles: "",
    anythingElse: "",
  });

  const handleChange = (name: keyof detailType, value: string) => {
    const val = value || "";
    setDetails((prevDetails) => ({ ...prevDetails, [name]: val }));
  };
  return (
    <div className="w-full flex px-3 md:px-[8%] flex-col gap-12 md:gap-5">
      <PageName name="Request New Service" />
      <div className="flex flex-col md:flex-row justify-between gap-8 items-center  ">
        <div className="max-w-[516px] w-full flex flex-col gap-12 justify-between">
          <div className="flex flex-col gap-6">
            <h1>Now, tell us about your past work experience</h1>
            <div>
              <label className="text-gray-600">
                What makes you a good fit for your desired programs?
              </label>
              <Input
                placeholder="What makes you a good fit for your desired programs?"
                value={details.whyAGoodFit}
                onChange={(e) => handleChange("whyAGoodFit", e.target.value)}
              />
            </div>
            <div>
              <label className="text-gray-600">
                What are your main struggles?
              </label>
              <Input
                placeholder="What are your main struggles?"
                value={details.struggles}
                onChange={(e) => handleChange("struggles", e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="max-w-[516px] md:max-w-sm border shadow-lg p-3 border-gray-300 rounded-[16px] flex flex-col h-fit gap-3 w-full md:w-fit">
          <p>Click to proceed once you are done fillling the necessary forms</p>
          <div className="flex flex-col gap-3">
            <Link className="w-full" href="/dashboard">
              <Button className="w-full">Proceed</Button>
            </Link>
            <Link className="w-full" href="/dashboard">
              <Button className="w-full" variant="outline">
                Cancel
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
