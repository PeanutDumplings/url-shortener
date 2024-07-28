"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const isDarkMode = theme === "dark";
  const handleToggle = () => {
    setTheme(isDarkMode ? "light" : "dark");
  };

  return (
    <Button variant="outline" size="icon" onClick={handleToggle}>
      <Moon
        className={`h-[1.2rem] w-[1.2rem] ${isDarkMode ? "hidden" : "block"}`}
      />
      <Sun
        className={`h-[1.2rem] w-[1.2rem] ${isDarkMode ? "block" : "hidden"}`}
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
