import type { Metadata } from "next";
import ServiceSidebar from "./_components/ServiceSidebar";

export const metadata: Metadata = {
  title: "Services | AMEXT",
  description: "Your Trusted Consultancy for Guidance on Traveling Abroad",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative flex flex-row pt-32 min-h-screen items-start">
      <div className=" w-fit   top-[120px] left-4 sticky border border-gray-200 py-3 px-2 rounded-[20px] flex gap-24 flex-col">
        <ServiceSidebar />
      </div>
      <div className=" pl-14 top-[120px] bottom-0 left-[90px] w-[calc(100% - 90px)] h-full">
        {children}
      </div>
    </div>
  );
}
