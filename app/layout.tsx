import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { QueryClientProvider } from "react-query";
import { queryClient } from "@/lib/queryClient";

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
        <QueryClientProvider client={queryClient}>
          {children} <Toaster />
        </QueryClientProvider>
      </body>
    </html>
  );
}
