"use client";

import { useEffect } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  useEffect(() => {
    try {
      document.documentElement.dataset.theme = localStorage.getItem("alma-theme") || "light";
    } catch {}
  }, []);

  function toggleTheme() {
    const theme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = theme;
    try { localStorage.setItem("alma-theme", theme); } catch {}
  }

  return (
    <button className="theme-toggle" type="button" onClick={toggleTheme} aria-label="Switch between light and dark theme" title="Switch color theme">
      <Moon className="theme-moon" size={18} aria-hidden="true" />
      <Sun className="theme-sun" size={18} aria-hidden="true" />
      <span className="theme-moon">Dark</span>
      <span className="theme-sun">Light</span>
    </button>
  );
}
