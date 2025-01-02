import { createContext } from "react";

type ThemeContextType = {
  theme: string | null;
  setTheme: (theme: string) => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  theme: "dark",
  setTheme: () => {},
});
