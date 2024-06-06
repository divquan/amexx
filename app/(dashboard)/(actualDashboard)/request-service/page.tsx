import { Button } from "@/components/ui/button";
import { Briefcase, Teacher } from "iconsax-react";
import React from "react";
import { formData } from "./formData";
import Link from "next/link";

const page = () => {
  return (
    <div className="w-full flex px-3 md:px-[8%]  md:flex-row gap-5 justify-center mt-10">
      {/* <ProgressComponent /> */}
      <div className="max-w-6xl w-full flex flex-row justify-between ">
        <div className="max-w-[516px] w-full flex gap-12 flex-col justify-between">
          {formData.map((item, index) => (
            <div className="flex gap-3 flex-col" key={index}>
              <span>{item.title}</span>
              {item.items.map((radioItem, radioIndex) => {
                return (
                  <CustomRadioButton
                    key={radioIndex + "radio" + index}
                    description={radioItem.description}
                    isSchool={radioItem.isSchool}
                    title={radioItem.title}
                    value={radioItem.value}
                    groupKey={item.groupKey}
                  />
                );
              })}
            </div>
          ))}
        </div>
        <div className="max-w-sm border shadow-lg p-3 border-gray-300 rounded-[16px] flex flex-col h-fit gap-3">
          <p>Click to proceed once you are done fillling the necessary forms</p>
          <div className="flex flex-col gap-3">
            <Link className="w-full" href="/request-service/education">
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

export default page;

const ProgressComponent = () => {
  const progressItems = [
    {
      name: "General",
      pathname: "general",
    },
    {
      name: "Education Goals",
      pathname: "education-goals",
    },
    {
      name: "General",
      pathname: "general",
    },
  ];
  return <div></div>;
};

const CustomRadioButton = (props: {
  isSchool: boolean;
  title: string;
  description: string;
  value: string;
  groupKey: string;
}) => {
  const { isSchool, description, groupKey, title, value } = props;
  return (
    <label
      className="flex gap-2 justify-between w-full border border-gray-300 rounded-[16px] p-4"
      htmlFor={value}
    >
      <div className="flex flex-col gap-2">
        <div className="flex gap-4 items-center">
          <Button
            variant={isSchool ? "default" : "secondary"}
            className={`h-10 w-10 rounded-full p-0`}
          >
            {isSchool ? (
              <Teacher size={24} variant="Bold" />
            ) : (
              <Briefcase size={24} />
            )}
          </Button>
          <h2>{title}</h2>
        </div>
        <div>
          <p className="opacity-60">{description}</p>
        </div>
      </div>
      <input type="radio" name={groupKey} value={value} id={value} />
    </label>
  );
};
