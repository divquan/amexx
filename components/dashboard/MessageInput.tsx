import React from "react";
import Input from "./input";
import { Messages1 } from "iconsax-react";

const MessageInput = () => {
  return (
    <div className="bottom-0 static">
      <div className="flex gap-2">
        <input
          placeholder="type your message here"
          className="p-3 border border-gray-200 w-full rounded-full my-3"
        />
        <Messages1 />
      </div>
    </div>
  );
};

export default MessageInput;
