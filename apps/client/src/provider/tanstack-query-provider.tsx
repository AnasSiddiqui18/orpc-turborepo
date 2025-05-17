"use client";

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const client = new QueryClient();

type TanstackQueryProviderProps = {
  children: React.ReactNode;
};

export function TanstackQueryProvider({
  children,
}: TanstackQueryProviderProps) {
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
}
