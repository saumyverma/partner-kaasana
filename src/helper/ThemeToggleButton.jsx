"use client";

import React, { useState, useEffect } from "react";

const ThemeToggleButton = () => {
  // 1. State for the current theme, initialized to null before hydration
  const [theme, setTheme] = useState(null);

  // 2. Function to update the theme on the HTML element
  const updateThemeOnHtmlEl = (theme) => {
    if (typeof window !== "undefined") {
      document.documentElement.setAttribute("data-theme", theme);
    }
  };

  // 3. Load theme from localStorage after the component mounts
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedTheme = localStorage.getItem("theme") || "light";
      setTheme(storedTheme);
      updateThemeOnHtmlEl(storedTheme);
    }
  }, []);

  // 4. Toggle theme when button is clicked
  const handleThemeToggle = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);

    if (typeof window !== "undefined") {
      localStorage.setItem("theme", newTheme);
      updateThemeOnHtmlEl(newTheme);
    }
  };

  // 5. Render only after theme state is initialized
  if (!theme) return null;

  return (
    <button
      type='button'
      data-theme-toggle
      className='w-40-px h-40-px bg-neutral-200 rounded-circle d-flex justify-content-center align-items-center'
      onClick={handleThemeToggle}
    >
      Toggle Theme
    </button>
  );
};

export default ThemeToggleButton;
