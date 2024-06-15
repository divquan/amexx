"use client";
import React from "react";
import Navbar from "@/components/dashboard/navbar";
import AuthProvider, { useAuth } from "@/lib/useAuth";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <AuthProvider>
      <main>
        <Navbar />
        {children}
      </main>
    </AuthProvider>
  );
};

export default Layout;
