'use client';
import Image from 'next/image';
import { useContext } from 'react';
import { ThemeContext } from '@/context/ThemeContext';
import styles from './themeToggle.module.css';

export const ThemeToggle = () => {
  const { theme } = useContext(ThemeContext);

  console.log('theme', theme);
  return (
    <div className={styles.container}>
      <Image src="/moon.png" alt="" width={14} height={14} />
      <div className={styles.ball}></div>
      <Image src="/sun.png" alt="" width={14} height={14} />
    </div>
  );
};
