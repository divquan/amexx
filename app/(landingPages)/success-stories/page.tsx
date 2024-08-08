import Image from "next/image";
import React from "react";
import image1 from "@/public/images/testing.svg";
import image2 from "@/public/images/unlockpotential3.svg";
import pp1 from "@/public/images/pp1.jpeg";
import pp2 from "@/public/images/pp2.jpeg";
import Link from "next/link";
import { Crown1 } from "iconsax-react";

const page = () => {
  return (
    <div className="flex flex-col items-center ">
      <div className="max-w-5xl px-3 md:px-10 py-32 gap-10 grid grid-cols-1">
        <div className="h-[466px] gradient-pink rounded-[36px] flex  items-center p-12">
          <div className="flex-1  flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <div className=" p-2 bg-white bg-opacity-30 rounded-full">
                <Crown1 variant="Bold" color="rgba(0, 0, 0, 0.6)" />
              </div>

              <span>From Man</span>
            </div>
            <p className="font-bold text-4xl leading-[45px]">
              “Dreams do come true with AMEXT Consult, I am currently pursuing
              my masters degree and the process was stress free ”
            </p>
            <Link className="text-blue-900" href="#">
              Read similar stories
            </Link>
          </div>
          <div className="flex-1">
            <Image
              src={image2.src}
              alt=""
              height={image1.height}
              width={image1.width}
            />
          </div>
        </div>

        <div className="h-[466px] gradient-limegreen rounded-[36px] flex  justify-center p-12">
          <div className="flex-1  flex flex-col align-top">
            <div className="fle">
              <span className="font-bold">Titi Shukurah</span>
            </div>
            <p className="text-sm text-black text-opacity-60">
              Had a hard time choosing an undergraduate program. Our career
              services and coaching helped him identify his strengths and what
              he would be most productive and enjoy doing. He had assistance in
              choosing a program that aligned him with his goals and
              aspirations. He excelled in his college and enjoyed learning a
              program he was interested in.{" "}
            </p>
          </div>
          <div className="flex-1 object-center flex">
            <Image
              src={image1.src}
              alt=""
              height={image1.height}
              width={image1.width}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-10">
          <div className="bg-[#FFC300B2] rounded-[36px] flex flex-col p-6 py-12 gap-12">
            <div className=" flex items-center gap-8">
              <Image
                className="bg-gray-100 rounded-full h-32 w-32 aspect-square object-cover "
                src={pp2.src}
                height={pp2.height}
                width={pp2.width}
                alt="person "
              />{" "}
              <div className="flex-1">
                <h3>Sally Acquah</h3>
                <p className="text-sm text-[#00000099]">
                  Working and studying without stress
                </p>
              </div>
            </div>
            <div>
              <p className="text-[#00000099]">
                Sally Acquah, as a postgraduate international student, one of
                the common challenges is finding a job while in school to
                support yourself. With a strong profile on LinkedIn created by
                their experts, I gained recognition in the professional space
                with ease. They also helped me to organise a professional CV to
                increase my chances of landing a job.
              </p>
            </div>
          </div>
          <div className="h-[466px] bg-[#FF573399] rounded-[36px] flex flex-col p-6 py-12 gap-12">
            <div className=" flex items-center gap-8">
              <Image
                className="bg-gray-100 rounded-full h-32 w-32 aspect-square "
                src={pp1.src}
                height={pp1.height}
                width={pp1.width}
                alt="person "
              />
              <div className="flex-1">
                <h3>David Gyasi</h3>
                <p className="text-sm text-[#00000099]">
                  Gained scholarship and work opportunity
                </p>
              </div>
            </div>
            <div>
              <p className="text-[#00000099]">
                I have always dreamt of studying and working abroad to gain
                experience of diverse cultures. But the expenses and hectic
                processes involved almost cause dme to give up on that dream,
                until I heard about AMEXT consult. They simplified step by step
                process got me into a good school and landed me a job as
                well-all in a very short period of time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
