import React from "react";
import Navbar from "@/components/dashboard/navbar";
import { supabase } from "@/lib/superbase";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Layout = async ({ children }: { children: React.ReactNode }) => {
  const {
    data: { user },
  } = await supabase.auth.getUser();
  // const user = null;
  console.log(user);
  if (!user) {
    return (
      <div className="h-[100dvh] w-screen grid place-content-center">
        <div className="flex gap-3  flex-col items-center border border-yellow-600 text-yellow-700 bg-yellow-100 p-3 rounded-lg">
          You are not authenticated. Please log in first.
          <Link href="/login">
            <Button variant="outline">Login</Button>
          </Link>
        </div>
      </div>
    );
  }
  return (
    <main>
      <Navbar />
      {children}
    </main>
  );
};

export default Layout;
