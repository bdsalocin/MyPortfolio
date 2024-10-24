import React, { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import "../styles/components/_ThemeToggle.scss";

interface ThemeToggleProps {
  onThemeChange: (isDarkMode: boolean) => void; // Prop pour transmettre l'état du thème au parent
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ onThemeChange }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
      document.body.classList.add("dark-mode");
    }

    // Notifie le parent du mode sombre lors du montage si déjà activé
    onThemeChange(savedTheme === "dark");
  }, [onThemeChange]);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      if (newMode) {
        document.body.classList.add("dark-mode");
        localStorage.setItem("theme", "dark");
      } else {
        document.body.classList.remove("dark-mode");
        localStorage.setItem("theme", "light");
      }

      // Notifie le parent du changement de thème
      onThemeChange(newMode);
      return newMode;
    });
  };

  return (
    <button
      onClick={toggleTheme}
      className="theme-toggle"
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
};

export default ThemeToggle;
