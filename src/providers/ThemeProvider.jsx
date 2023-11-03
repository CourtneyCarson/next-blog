'use client';
import { ThemeContext } from '@/context/ThemeContext';
import React, { useContext, useState, useEffect } from 'react';

export const ThemeProvider = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (mounted) {
    return <div className={theme}>{children}</div>;
  }
};
