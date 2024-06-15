"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { account } from "@/lib/appwrite";
import { toast } from "sonner";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LoaderCircle } from "lucide-react";
import Navbar from "@/components/dashboard/navbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  // const [loading, setLoading] = useState(false);
  // const [user, setUser] = useState();

  // const router = useRouter();

  // useEffect(() => {
  //   const fetch = async () => {
  //     setLoading(true);
  //     try {
  //       console.log('fetching....');
  //       const result = await account.get();
  //       console.log('lll', result);
  //     } catch (e: any) {
  //       if (e.type === 'general_unauthorized_scope') {
  //         console.error('Error getting user session: ', e.type);
  //         toast.error(
  //           'You are not authorized to view this page. Please login first'
  //         );
  //         router.push('/login?redirect=/dashboard&error=unauthorized');
  //       }
  //       toast.error('Something went wrong. Plese log in again. ', {
  //         action: (
  //           <Link href={'/login'}>
  //             <Button>Login</Button>
  //           </Link>
  //         ),
  //       });
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   fetch();
  // }, []);
  // if (loading)
  //   return (
  //     <div className="bg-gray-300 h-screen w-screen grid place-content-center ">
  //       <LoaderCircle className="text-black animate-spin" />
  //     </div>
  //   );
  return (
    <main>
      <Navbar />
      {children}
    </main>
  );
};

export default Layout;
