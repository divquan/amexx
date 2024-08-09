import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { FaCircleCheck } from "react-icons/fa6";

const OfferCard = ({ item }: { item: PropType }) => {
  return (
    <>
      <div className="flex flex-col p-6 border border-gray-300 gap-4 justify-between rounded-2xl h-full">
        <div>
          <h4 className="text-2xl text-primary font-bold">{item?.title}</h4>
          <p className="text-sm text-gray-400">{item?.tagLine}</p>
          <p className="text-xl text-secondary font-bold">{item?.price}</p>
        </div>
        <p>{item.description}</p>
        <div className="flex gap-4 flex-col">
          {item?.perks.map((perk, index) => {
            return (
              <div className="flex gap-3  items-start " key={index}>
                <FaCircleCheck
                  size={18}
                  className="h-4 w-4 rounded-full mt-1 "
                  fill="rgba(0, 0, 0, 0.6)"
                />
                <p className="flex-1">{perk}</p>
              </div>
            );
          })}
        </div>
        <Link href={"/apply"}>
          <Button className="w-full">Book Now </Button>
        </Link>
      </div>
    </>
  );
};

type PropType = {
  title?: string;
  tagLine?: string;
  price?: string;
  description?: string;
  perks: string[];
  actionBtnUrl: string;
};

export default OfferCard;
