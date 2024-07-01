"use client";
import React from "react";
import { QueryClient } from "react-query";
import { QueryClientProvider } from "react-query";

const UseQueryProvider = ({ children }: { children: React.ReactNode }) => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default UseQueryProvider;
