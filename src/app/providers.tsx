"use client";

import { ThemeProvider } from "next-themes";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"      // adds/removes "dark" on <html>
      defaultTheme="system"  // respect OS by default
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
}
