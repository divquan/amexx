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
      <div className=" w-fit top-24 md:top-[120px] left-1 md:left-4 sticky border border-gray-200 py-3 px-2 rounded-[20px]">
        <ServiceSidebar />
      </div>
      <div className=" pl-3 md:pl-14 pr-3 top-[120px] bottom-0 left-[90px] w-[calc(100% - 90px)] h-full transition-all ease-in-out duration-700 max-w-6xl mx-auto">
        {children}
      </div>
    </div>
  );
}
