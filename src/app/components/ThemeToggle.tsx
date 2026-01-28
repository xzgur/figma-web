import React from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { motion } from "motion/react";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative w-9 h-9 rounded-lg border border-gray-200 dark:border-gray-800 
                 bg-white dark:bg-gray-900 
                 hover:bg-gray-50 dark:hover:bg-gray-800 
                 transition-all duration-200 
                 flex items-center justify-center group"
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{
          scale: theme === "light" ? 1 : 0,
          rotate: theme === "light" ? 0 : 180,
          opacity: theme === "light" ? 1 : 0,
        }}
        transition={{ duration: 0.2 }}
        className="absolute"
      >
        <Sun className="w-4 h-4 text-gray-700" />
      </motion.div>
      
      <motion.div
        initial={false}
        animate={{
          scale: theme === "dark" ? 1 : 0,
          rotate: theme === "dark" ? 0 : -180,
          opacity: theme === "dark" ? 1 : 0,
        }}
        transition={{ duration: 0.2 }}
        className="absolute"
      >
        <Moon className="w-4 h-4 text-gray-300" />
      </motion.div>
    </button>
  );
}
