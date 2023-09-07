"use client"

import { createContext, useContext, useEffect, useState } from "react";

export const ThemeContext = createContext()

const getFromLocalStorage = () => {
  if (typeof window !== undefined) {
    const value = localStorage.getItem('theme')
    return value || 'dark'
  }
}

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    return getFromLocalStorage()
  })

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light')

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }} >
      {children}
    </ThemeContext.Provider>
  )
}

export const useThemeContext = () => useContext(ThemeContext)