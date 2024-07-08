"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Eye, Trash } from "iconsax-react";

const Page = () => {
  return (
    <div className="flex items-center justify-center p-3 md:p-4 pt-8  mt-4">
      <div className="flex  min-h-screen flex-col w-full max-w-6xl gap-5 md:gap-8 ">
        <header className="w-full flex justify-between items-center">
          <span className="text-2xl font-bold">Welcome, Jake</span>
          <Link href="/request-service">
            <Button variant={"default"}>Request New Service</Button>
          </Link>
        </header>
        <div>
          <div>
            <div>
              <Table>
                <TableCaption>A list of your service requests.</TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead className="font-bold">Service name</TableHead>
                    <TableHead className="font-bold">Date</TableHead>
                    <TableHead className="font-bold">Status</TableHead>
                    <TableHead className="font-bold">
                      Assigned consultant
                    </TableHead>
                    <TableHead className="font-bold text-right">
                      Actions
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {Items.map((item, index) => {
                    return <RequestedServicesItem item={item} key={index} />;
                  })}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;

const Titles = [
  "Service name",
  "Date",
  "Status",
  "Assigned consultant",
  "Actions",
];

const Items = [
  {
    name: "Basic Education Package",
    date: "February 5, 2024",
    status: "Request Sent",
    consultant: "John Doe",
  },
  {
    name: "Basic Education Package",
    date: "February 5, 2024",
    status: "Request Sent",
    consultant: "John Doe",
  },
  {
    name: "Basic Education Package",
    date: "February 5, 2024",
    status: "Request Sent",
    consultant: "John Doe",
  },
  {
    name: "Basic Education Package",
    date: "February 5, 2024",
    status: "Request Sent",
    consultant: "John Doe",
  },
  {
    name: "Basic Education Package",
    date: "February 5, 2024",
    status: "Request Sent",
    consultant: "John Doe",
  },
  {
    name: "Basic Education Package",
    date: "February 5, 2024",
    status: "Request Sent",
    consultant: "John Doe",
  },
  {
    name: "Basic Education Package",
    date: "February 5, 2024",
    status: "Request Sent",
    consultant: "John Doe",
  },
];

const RequestedServicesItem = ({
  item,
}: {
  item: {
    name: string;
    date: string;
    status: string;
    consultant: string;
  };
}) => {
  return (
    <TableRow>
      <TableCell className="font-medium">{item.name}</TableCell>
      <TableCell>{item.date}</TableCell>
      <TableCell>{item.status}</TableCell>
      <TableCell className="text-center">{item.consultant}</TableCell>
      <TableCell className="flex gap-2 justify-end">
        <Trash size="24" color="black" />
        <Eye size="24" color="black" />
      </TableCell>
    </TableRow>
  );
};
