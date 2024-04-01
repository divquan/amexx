"use client";
import React from "react";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu } from "lucide-react";

const Navbar = () => {
  const pathname = usePathname().split("/")[1];
  return (
    <nav className="fixed top-[20px] md:top-[35px] w-[98%] lg:w-10/12 max-w-6xl left-1/2 -translate-x-1/2 mx-auto backdrop-blur-md bg-[#FBFBFB] bg-opacity-50  border border-[rgba(0, 0, 0, 0.1)] z-20  rounded-[36px] p-2 md:p-4 flex justify-between items-center ">
      <span>Logo</span>
      <div className="gap-2  hidden md:flex">
        {links.map((link, index) => (
          <Link href={"/" + link.url} key={index}>
            <Button
              variant={link.url === pathname ? "default" : "ghost"}
              className="rounded-[36px]"
              // size={"lg"}
            >
              {link.name}
            </Button>
          </Link>
        ))}
      </div>
      <Button variant={"secondary"} className="rounded-[24px] hidden md:block">
        Free Consultation
      </Button>
      <Button className="md:hidden">
        <Menu />
      </Button>
    </nav>
  );
};

export default Navbar;

const links = [
  { name: "Home", url: "" },
  { name: "About", url: "about" },
  { name: "Services", url: "services" },
  { name: "Success Stories", url: "success-stories" },
  { name: "Contact Us", url: "contact-us" },
];
