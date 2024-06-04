"use client";
const MessageArea = () => {
  return (
    <div className=" flex-1 h-full overflow-y-scroll">
      {chatMessages.map((item, index) => {
        return <MessageCard item={item} />;
      })}
    </div>
  );
};

export default MessageArea;

const chatMessages = [
  {
    sender: "AMEXT",
    message: "Hi Bob, how are you doing today?",
    timestamp: new Date("2024-06-04T10:30:00"),
  },
  {
    sender: "Bob",
    message: "Hey Alice! I'm good, thanks for asking. How about you?",
    timestamp: new Date("2024-06-04T10:31:20"),
  },
  {
    sender: "AMEXT",
    message: "I'm doing great too, thanks!",
    timestamp: new Date("2024-06-04T10:32:45"),
  },
  {
    sender: "Bob",
    message: "That's awesome! Did you hear about the new movie coming out?",
    timestamp: new Date("2024-06-04T10:34:10"),
  },
  {
    sender: "Bob",
    message: "That's awesome! Did you hear about the new movie coming out?",
    timestamp: new Date("2024-06-04T10:34:10"),
  },
  {
    sender: "AMEXT",
    message: "I'm doing great too, thanks!",
    timestamp: new Date("2024-06-04T10:32:45"),
  },
  {
    sender: "Bob",
    message: "That's awesome! Did you hear about the new movie coming out?",
    timestamp: new Date("2024-06-04T10:34:10"),
  },
  {
    sender: "Bob",
    message: "That's awesome! Did you hear about the new movie coming out?",
    timestamp: new Date("2024-06-04T10:34:10"),
  },
  {
    sender: "AMEXT",
    message: "I'm doing great too, thanks!",
    timestamp: new Date("2024-06-04T10:32:45"),
  },
  {
    sender: "AMEXT",
    message: "I'm doing great too, thanks!",
    timestamp: new Date("2024-06-04T10:32:45"),
  },
  {
    sender: "Bob",
    message: "That's awesome! Did you hear about the new movie coming out?",
    timestamp: new Date("2024-06-04T10:34:10"),
  },
  {
    sender: "AMEXT",
    message: "I'm doing great too, thanks!",
    timestamp: new Date("2024-06-04T10:32:45"),
  },
  {
    sender: "Bob",
    message: "That's awesome! Did you hear about the new movie coming out?",
    timestamp: new Date("2024-06-04T10:34:10"),
  },
  {
    sender: "AMEXT",
    message: "I'm doing great too, thanks!",
    timestamp: new Date("2024-06-04T10:32:45"),
  },
  // Add more messages as needed
];

const MessageCard = ({
  item,
}: {
  item: { sender: string; message: string; timestamp: Date };
}) => {
  const fromClass = " bg-blue-100 self-end rounded-br-none";
  const toClass = " bg-blue-400 self-start rounded-bl-none text-white";
  return (
    <div className="w-full p-3 flex flex-col">
      <div
        className={
          " p-5 w-fit max-w-[350px] rounded-full  " +
          (item.sender === "AMEXT" ? fromClass : toClass)
        }
      >
        <p>{item.message}</p>
      </div>
    </div>
  );
};
