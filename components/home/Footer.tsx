import { ArrowRight, Linkedin } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

const Footer = () => {
  return (
    <div className="bg-black bg-opacity-80 text-white w-full flex items-center justify-center py-8">
      <div className="max-w-4xl w-full ">
        <div className="flex gap-3 justify-between items-start w-full pb-8">
          <div className="flex flex-col gap-7">
            <h2 className="font-bold text-lg">Logo</h2>
            <div className="flex flex-col gap-2">
              <Link href={"tel:+1 (7635) 547-12-97"}>+1 (7635) 547-12-97</Link>
              <span>support@amex.com</span>
            </div>
          </div>
          <div className="flex gap-12 ">
            {footerLinks.map((item, index) => {
              return (
                <div key={"footer-key" + index} className="flex flex-col gap-5">
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
        <div>
          <div>
            {socials.map((item, index) => (
              <Link href={item.icon}>
                <Button
                  variant="outline"
                  className="rounded-full bg-opacity-0 "
                >
                  <Linkedin className=" " />{" "}
                </Button>
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
  { icon: "", url: "" },
  { icon: "", url: "" },
  { icon: "", url: "" },
];
