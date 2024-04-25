import React from "react";

const TestimonyCard = ({ item }: { item: any }) => {
  return (
    <li className=" min-w-5 h-full border border-[rgba(0, 0, 0, 0.5)] rounded-2xl p-4 flex gap-8 flex-col justify-between bg-[#FBFBFB] animate ">
      <p className=" text-gray-600 icon-slide-in transition-transform duration-500 ease-in-out">
        {item.paragraph}
      </p>
      <div className=" flex gap-2">
        <div className="rounded-full h-12 w-12 bg-gray-200"></div>
        <div>
          <h3 className="delay-75 font-extrabold text-black  icon-slide-in transition-transform duration-500 ease-in-out">
            {item.name}
          </h3>
          <p className="text-sm text-gray-600 delay-75 font-extrabold  icon-slide-in transition-transform duration-500 ease-in-out">
            {item.position}
          </p>
        </div>
      </div>
    </li>
  );
};

export default TestimonyCard;
