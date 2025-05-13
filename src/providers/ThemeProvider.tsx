import { ReactNode, useEffect } from "react"
import { useLocalStorage } from "../hooks/useLocaleStorage"
import { Theme, ThemeContext } from "../context/ThemeContext"

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useLocalStorage<Theme>("theme", "dark");

  useEffect(() => {
    document.body.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
