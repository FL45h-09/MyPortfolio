'use client';

import { useEffect, useState } from "react";
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';

function ThemeMode() {
  const [currentTheme, setCurrentTheme] = useState('dark');

  useEffect(() => {
    const saved = localStorage.getItem("theme") || "dark";
    setCurrentTheme(saved);
  }, []);

  const toggleCurrentTheme = () => {
    const newTheme = currentTheme === "light" ? "dark" : "light";

    document.documentElement.classList.remove(currentTheme);
    document.documentElement.classList.add(newTheme);

    localStorage.setItem("theme", newTheme);
    setCurrentTheme(newTheme);
  };

  return (
    <button
      aria-label="toggle theme"
      onClick={toggleCurrentTheme}
      className="p-2 rounded-full btn-hover-bg"
      title="Toggle theme"
    >
      {currentTheme === "light" ? (
        <MoonIcon className="h-5 w-5" />
      ) : (
        <SunIcon className="h-5 w-5" />
      )}
    </button>
  );
}

export default ThemeMode;