"use client";
import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

import React, { useState } from "react";

export default function ReactQuery({ children }: React.PropsWithChildren) {
  const [queryClient] = useState(
    new QueryClient({
      queryCache: new QueryCache({
        onError: (error: Error) => {},
      }),
      defaultOptions: { queries: { refetchOnWindowFocus: false } },
    })
  );
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
