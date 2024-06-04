import MessageArea from "@/components/dashboard/MessageArea";
import MessageAreaHeader from "@/components/dashboard/MessageAreaHeader";
import MessageInput from "@/components/dashboard/MessageInput";
import MessageSidebar from "@/components/dashboard/MessageSidebar";
import React from "react";

const page = () => {
  return (
    <div className="flex overflow-hidden gap-4 message-area-height">
      <MessageSidebar />
      <div className=" flex-1 flex flex-col relative">
        <MessageAreaHeader />
        <MessageArea />
        <MessageInput />
      </div>
    </div>
  );
};

export default page;
