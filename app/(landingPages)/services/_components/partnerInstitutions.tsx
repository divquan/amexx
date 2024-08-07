import { partnerImages } from "@/Constants/appData";
import Image from "next/image";
import React from "react";

const PartnerInstitutions = () => {
  return (
    <>
      <div className="flex gap-4 overflow-x-hidden h-[90px] ">
        {partnerImages.map((item, index) => {
          return (
            <Image
              src={item.src}
              height={item.height}
              width={500}
              alt="dfs"
              key={index}
              className="object-contain"
            />
          );
        })}
      </div>
    </>
  );
};

export default PartnerInstitutions;
