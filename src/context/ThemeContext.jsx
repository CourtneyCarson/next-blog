'use client';
// next uses server side rendering, so we need to use react context
import { createContext, useEffect, useState } from 'react';

export const ThemeContext = createContext();

const getFromLocalStorage = () => {
  if (typeof window !== undefined) {
    const value = localStorage.getItem('theme');
    return value || 'light';
  }
};

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    return getFromLocalStorage();
  });

  const toggle = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  // whenever theme changes, update local storage
  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
};

// store theme state at the beginning,
// create an action to dispatch and update state
// if dark mode make light, light mode make dark
