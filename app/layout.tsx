import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import UseQueryProvider from "@/lib/queryClient";
const inter = Inter({ subsets: ["latin"] });

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
    <html lang="en">
      <body className={inter.className}>
        <UseQueryProvider>
          {children} <Toaster />
        </UseQueryProvider>
      </body>
    </html>
  );
}
