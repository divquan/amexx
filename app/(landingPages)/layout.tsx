import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/home/Footer";

export const metadata: Metadata = {
  title: "AMEXT",
  description: "Your Trusted Consultancy for Guidance on Traveling Abroad",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>{children}</div>
      <Footer />
    </>
  );
}
