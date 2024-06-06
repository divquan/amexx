"use client";
import PageName from "@/components/dashboard/PageName";
import React, { useState } from "react";
import { formData } from "../formData";
import { Button } from "@/components/ui/button";
import Input from "@/components/dashboard/input";
import Link from "next/link";

type detailType = {
  areaOfStudy: string;
  desiredSchoolAndProgram: string;
  anythingElse: string;
};
const Page = () => {
  const [details, setDetails] = useState<detailType>({
    areaOfStudy: "",
    desiredSchoolAndProgram: "",
    anythingElse: "",
  });

  const handleChange = (name: keyof detailType, value: string) => {
    const val = value || "";
    setDetails((prevDetails) => ({ ...prevDetails, [name]: val }));
  };
  return (
    <div className="w-full flex px-3 md:px-[8%] flex-col gap-5">
      <PageName name="Request New Service" />
      <div className="flex flex-col md:flex-row justify-between gap-5 ">
        <div className="max-w-[516px] w-full flex flex-col gap-12">
          <div className="flex flex-col gap-6">
            <h1>Tell us more about your current educational goals</h1>
            <div>
              <label className="text-gray-700">Area of Study</label>
              <Input
                placeholder="Area of Study"
                value={details.areaOfStudy}
                onChange={(e) => handleChange("areaOfStudy", e.target.value)}
              />
            </div>
            <div>
              <label className="text-gray-700">
                Desired Programs & Schools
              </label>
              <Input
                placeholder="Desired Programs & Schools"
                value={details.desiredSchoolAndProgram}
                onChange={(e) =>
                  handleChange("desiredSchoolAndProgram", e.target.value)
                }
              />
            </div>
            <div>
              <label className="text-gray-700">
                Anything else we should know about your goals?
              </label>
              <Input
                placeholder="Desired Programs & Schools"
                value={details.anythingElse}
                onChange={(e) => handleChange("anythingElse", e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="max-w-sm border shadow-lg p-3 border-gray-300 rounded-[16px] flex flex-col h-fit gap-3">
          <p>Click to proceed once you are done fillling the necessary forms</p>
          <div className="flex flex-col gap-3">
            <Link className="w-full" href="/request-service/educational-goals">
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
