"use client";
import { useState } from "react";
import MessageItem from "./MessageItem";
import PageName from "./PageName";
import Input from "./input";

const MessageSidebar = () => {
  const [term, setTerm] = useState("");
  return (
    <div className="max-w-sm flex flex-col gap-3 p-3 border border-gray-200 ">
      <div className="flex flex-col gap-2">
        <PageName name="All Messages" />
      </div>
      <div>
        <Input
          onChange={(e) => setTerm(e.target.value)}
          placeholder="Search for message"
          value={term}
        />
      </div>
      <div className="overflow-y-scroll flex-1 flex flex-col gap-2">
        <MessageItem />
        <MessageItem />
        <MessageItem />
        <MessageItem />
        <MessageItem />
        <MessageItem />
        <MessageItem />
        <MessageItem />
        <MessageItem />
      </div>
    </div>
  );
};

export default MessageSidebar;
