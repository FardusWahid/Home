"use client";

import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function TanstackProvider({ children }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 1000 * 60 * 60 * 24, // 24hrs
            gcTime: 1000 * 60 * 60 * 24 * 2, // 48 hrs
            retry: 4,
            refetchOnWindowFocus: false,
            refetchOnReconnect: false,
            refetchOnMount: false,
            // Added error handling
            onError: (error) => {
              console.error("Query error:", error);
            },
          },
          mutations: {
            retry: 1,
            onError: (error) => {
              console.error("Mutation error:", error);
            },
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
