"use client";

import { account } from "@/lib/appwrite";
import { Loader2 } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";

import React, { Suspense, useEffect } from "react";
import { toast } from "sonner";
import VerificationLoader from "./verificationLoading";

const Page = () => {
  const [state, setState] = React.useState({ loading: true, verified: false });
  const [error, setError] = React.useState("");
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const secret = searchParams?.get("secret") || "";
    const userId = searchParams?.get("userId") || "";
    const promise = account.updateVerification(userId, secret);

    promise.then(
      function (response) {
        console.log(response);
        setState({ loading: false, verified: true });
        router.push("/dashboard");
      },
      function (error) {
        console.log(error);
        setState({ loading: false, verified: false });
        toast.error("Couldn't verify", { style: { backgroundColor: "red" } });
        setError("Couldn't verify email");
      }
    );
  }, []);
  return (
    <Suspense
      fallback={
        <div>
          <Loader2 className="text-3xl animate-spin" />
        </div>
      }
    >
      <VerificationLoader />
    </Suspense>
  );
};

export default Page;
