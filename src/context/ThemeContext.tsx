"use client";

import React, { createContext, useState, useMemo, ReactNode } from "react";

// Define the shape of the context data
interface ThemeContextProps {
  theme: string;
  // Include setTheme if you need to change the theme from components
  // setTheme: (theme: string) => void;
}

// Create the context with a default value (can be undefined or a default object)
// Using undefined requires checking for null in consumers, which is safer.
export const ThemeContext = createContext<ThemeContextProps | undefined>(
  undefined
);

// Define the props for the provider component
interface ThemeProviderProps {
  children: ReactNode;
}

// Create the provider component
export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  // Basic theme state (e.g., 'light' or 'dark') - you might want to enhance this later
  const [theme, setTheme] = useState<string>("dark"); // Default theme

  // Memoize the context value to prevent unnecessary re-renders
  const value = useMemo(
    () => ({
      theme,
      // Pass setTheme if needed: setTheme,
    }),
    [theme]
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

// Optional: Custom hook for easier consumption
export const useTheme = () => {
  const context = React.useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
