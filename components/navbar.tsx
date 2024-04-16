"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import logo from "@/public/images/logo.png";
import Image from "next/image";

const Navbar = () => {
  const pathname = usePathname().split("/")[1];
  return (
    <nav className="fixed top-[15px] md:top-[20px] w-[98%] lg:w-10/12 max-w-6xl left-1/2 -translate-x-1/2 mx-auto backdrop-blur-md bg-[#FBFBFB] bg-opacity-50  border border-[rgba(0, 0, 0, 0.1)] z-20  rounded-[36px] p-2 md:p-4 flex justify-between items-center ">
      <Image
        src={logo.src}
        height={logo.height}
        width={logo.width}
        alt="logo"
        className="w-auto h-12"
      />
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
      <Sheet>
        <SheetTrigger asChild>
          <Button className="md:hidden">
            <Menu />
          </Button>
        </SheetTrigger>

        <SheetContent>
          <SheetHeader>Menu</SheetHeader>
          <div className="flex flex-col mt-4 gap-3">
            {links.map((link, index) => (
              <Link href={"/" + link.url} key={index}>
                <Button
                  variant={link.url === pathname ? "default" : "outline"}
                  className="w-full text-left"
                  // size={"lg"}
                >
                  {link.name}
                </Button>
              </Link>
            ))}
          </div>
          <SheetFooter></SheetFooter>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default Navbar;

const links = [
  { name: "Home", url: "" },
  { name: "About", url: "about-us" },
  { name: "Services", url: "services" },
  { name: "Success Stories", url: "success-stories" },
  { name: "Contact Us", url: "contact-us" },
];
