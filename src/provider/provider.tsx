"use client";

import QueryProvider from "@/context/QueryClientProvider";
import { PropsWithChildren } from "react";
import { ToastContainer } from "react-toastify";
import { UiProviders } from "./ui-provider";

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <QueryProvider>
      <UiProviders>
        {children}
        <ToastContainer />
      </UiProviders>
    </QueryProvider>

  );
};
