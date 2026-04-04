"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === "undefined") {
      return "dark";
    }

    const preferredDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const savedTheme = window.localStorage.getItem("theme") as Theme | null;
    return savedTheme ?? (preferredDark ? "dark" : "light");
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => {
      return prev === "dark" ? "light" : "dark";
    });
  };

  return { theme, toggleTheme };
}
