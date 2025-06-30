"use client";

import { ClerkProvider } from "@clerk/nextjs";
import { Provider } from "react-redux";
import { store } from "./store/store";

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <Provider store={store}>{children}</Provider>
    </ClerkProvider>
  );
}
