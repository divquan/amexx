import {
  ArrowRight,
  Linkedin,
  LinkedinIcon,
  LucideLinkedin,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import fb from "@/public/images/fb.svg";
import linkedin from "@/public/images/Linkedin.svg";
import { TiSocialLinkedin, TiSocialTwitter } from "react-icons/ti";

import x from "@/public/images/x.svg";
import Image from "next/image";
import { RiFacebookFill } from "react-icons/ri";
import logo from "@/public/images/logo_onblue.png";

const Footer = () => {
  return (
    <div className="bg-black bg-opacity-80 text-white w-full flex items-center justify-center py-12 px-3">
      <div className="max-w-4xl w-full ">
        <div className="flex gap-3 flex-col md:flex-row justify-between items-start md:items-end w-full pb-8">
          <div className="flex flex-col gap-3">
            <Image
              src={logo.src}
              height={logo.height}
              width={logo.width}
              alt="logo"
              className="w-44 h-auto"
            />{" "}
            <div className="flex flex-col gap-2">
              <Link href={"tel:+1 (7635) 547-12-97"}>+1 (7635) 547-12-97</Link>
              <span>support@amex.com</span>
            </div>
          </div>
          <div className="flex gap-12 flex-col md:flex-row">
            {footerLinks.map((item, index) => {
              return (
                <div
                  key={"footer-key" + index}
                  className="flex flex-col gap-5 h-full justify-between  "
                >
                  <h1 className="font-semibold ">{item.name}</h1>
                  <div className="flex flex-col gap-2">
                    {item.links.map((item, index) => {
                      return (
                        <Link
                          className="text-gray-400"
                          href={item.url}
                          key={"footerlink" + item.name}
                        >
                          {item.name}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              );
            })}
            <div className="flex gap-4 flex-col">
              <h2>Subscribe</h2>
              <div className="flex  ">
                <input
                  className="w-44 rounded-sm rounded-r-none p-3"
                  placeholder="Get product updates"
                />
                <button className="flex items-center justify-center p-3 bg-blue-500 rounded-sm rounded-l-none">
                  <ArrowRight />
                </button>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="pt-8">
          <div className="flex  gap-3">
            {socials.map((item, index) => (
              <Link href={item.url} key={index}>
                <div className="rounded-full h-[35px] w-[35px] border border-gray-500 p-2 ">
                  {item.icon}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

const footerLinks = [
  {
    name: "Company",
    links: [
      { name: "About Us", url: "#" },
      { name: "Blog", url: "#" },
      { name: "Contact Us", url: "#" },
      { name: "Our Team", url: "#" },
    ],
  },
  {
    name: "Product",
    links: [
      { name: "Employee database", url: "#" },
      { name: "Payroll", url: "#" },
      { name: "Absences", url: "#" },
      { name: "Time tracking", url: "#" },
    ],
  },
];

const socials = [
  { icon: <TiSocialLinkedin className="h-full w-full" />, url: "" },
  { icon: <RiFacebookFill className="h-full w-full" />, url: "" },
  { icon: <TiSocialTwitter className="h-full w-full" />, url: "" },
];
