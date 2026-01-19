"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="border-2 border-border py-1 px-3 text-sm hover:bg-border hover:text-[#eaeff5] transition-colors"
      aria-label="Toggle theme"
    >
      {resolvedTheme === "dark" ? "☀️ light" : "🌙 dark"}
    </button>
  );
}
