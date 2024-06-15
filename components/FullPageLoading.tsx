import { Loader, Loader2 } from "lucide-react";
import React from "react";

const FullPageLoading = () => {
  return (
    <div className="h-[100dvh] w-screen bg-gray-100 grid place-content-center ">
      <div className="flex flex-col items-center gap-3">
        <Loader className="animate-spin " />
        <div
          className="flex text-mono
        "
        >
          <span className="animate-bounce delay-0">A</span>
          <span className="animate-bounce delay-75">u</span>
          <span className="animate-bounce delay-100">t</span>
          <span className="animate-bounce delay-150">h</span>
          <span className="animate-bounce delay-200">e</span>
          <span className="animate-bounce delay-300">n</span>
          <span className="animate-bounce delay-500">t</span>
          <span className="animate-bounce delay-700">i</span>
          <span className="animate-bounce delay-1000">ca</span>
          <span className="animate-bounce delay-">tion</span>
        </div>
      </div>
    </div>
  );
};

export default FullPageLoading;
