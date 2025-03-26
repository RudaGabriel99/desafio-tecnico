"use client";

import type { ThemeProviderProps } from "next-themes";
import * as React from "react";
import { HeroUIProvider } from "@heroui/system";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
}

export function UiProviders({ children, themeProps }: ProvidersProps) {

  return (
    <>
      <HeroUIProvider>
        <NextThemesProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          {...themeProps}
        >
          {children}
        </NextThemesProvider>
      </HeroUIProvider>
    </>
  );
}
