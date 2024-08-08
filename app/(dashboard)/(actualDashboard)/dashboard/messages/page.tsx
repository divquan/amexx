import MessageArea from "@/components/dashboard/MessageArea";
import MessageAreaHeader from "@/components/dashboard/MessageAreaHeader";
import MessageInput from "@/components/dashboard/MessageInput";
import MessageSidebar from "@/components/dashboard/MessageSidebar";
import React from "react";

const page = () => {
  return (
    <div className="flex gap-4 message-area-height items-center flex-col p-4">
      <div className="max-w-6xl flex overflow-hidden w-full h-full border border-gray-200 rounded-3xl">
        <MessageSidebar />
        <div className=" flex-1 flex flex-col relative p-3">
          <MessageAreaHeader />
          <MessageArea />
          <MessageInput />
        </div>
      </div>
    </div>
  );
};

export default page;
