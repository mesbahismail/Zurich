"use client";

import { useEffect, useRef } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const input = useRef<HTMLInputElement>(null);

  useEffect(() => {
    let theme = "light";
    try {
      const saved = localStorage.getItem("zurich-theme") ?? localStorage.getItem("alma-theme");
      theme = saved === "dark" ? "dark" : "light";
    } catch {}
    document.documentElement.dataset.theme = theme;
    if (input.current) input.current.checked = theme === "dark";
  }, []);

  function toggleTheme(checked: boolean) {
    const theme = checked ? "dark" : "light";
    document.documentElement.dataset.theme = theme;
    try { localStorage.setItem("zurich-theme", theme); } catch {}
  }

  return (
    <label className="theme-toggle" title="Switch between light and dark mode">
      <input ref={input} type="checkbox" role="switch" aria-label="Dark mode" onChange={(event) => toggleTheme(event.currentTarget.checked)} />
      <span className="theme-switch-track" aria-hidden="true">
        <span className="theme-switch-thumb">
          <Sun className="theme-switch-sun" size={12} />
          <Moon className="theme-switch-moon" size={12} />
        </span>
      </span>
    </label>
  );
}
