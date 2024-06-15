"use client";
import React, { FormEventHandler, useState } from "react";
import { FaChevronLeft } from "react-icons/fa";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { validateKeys } from "@/lib/utils";
import { toast } from "sonner";

import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { signInUser } from "./actions";
const Page = () => {
  const [userInput, setUserInput] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSumbit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const invaildKeys = validateKeys(userInput);
      if (invaildKeys.length > 0) {
        console.log("These fields are required: ", invaildKeys);
        toast.error("These fields are required: " + invaildKeys.join(", "));
        setLoading(false);
        return;
      }
      await signInUser(userInput.email, userInput.password);
      setLoading(false);
      toast.success("Successfully logged in", {
        style: { backgroundColor: "green", color: "GrayText" },
      });
      router.push("/dashboard");
    } catch (error: any) {
      console.log(error); // Failure
      setLoading(false);
      toast.error(error.message, {
        style: { backgroundColor: "red", color: "GrayText" },
      });
    }
  };

  return (
    <div className="">
      <div>
        <div className="flex justify-between">
          <div className="p-2 h-max w-max grid place-content-center bg-muted rounded-full aspect-square cursor-pointer">
            <FaChevronLeft size={16} />
          </div>
          <Link href={"/signup"}>
            <Button variant={"secondary"}>Signup</Button>
          </Link>
        </div>
      </div>
      <form onSubmit={handleSumbit} className="max-w-xl pt-12 pl-3 ">
        <h2 className="text-lg md:text-xl lg:text-2xl font-bold">
          Log into your account
        </h2>
        <div className="flex flex-col items-stretch gap-6 mt-8 ">
          <div>
            <label>Email</label>
            <input
              type="email"
              placeholder="example@example.com"
              value={userInput.email}
              onChange={(e) =>
                setUserInput((prev) => ({ ...prev, email: e.target.value }))
              }
              className="w-full border border-gray-300 rounded-xl h-10 md:h-12 px-3 focus:outline outline-gray-500"
            />
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              value={userInput.password}
              onChange={(e) =>
                setUserInput((prev) => ({ ...prev, password: e.target.value }))
              }
              className="w-full border border-gray-300 rounded-xl h-10 md:h-12 px-3 focus:outline outline-gray-500"
            />
          </div>
          <Button className="mt-8 w-full" disabled={loading}>
            <span>Log in</span>
            {loading && <Loader2 className="animate-spin " />}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Page;
