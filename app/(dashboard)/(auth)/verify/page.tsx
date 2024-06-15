import { Loader2 } from "lucide-react";

import React, { Suspense } from "react";
import VerificationLoader from "./verificationLoading";

const Page = () => {
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
