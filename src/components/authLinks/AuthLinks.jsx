'use client';
import Link from 'next/link';
import * as styles from './authLinks.module.css';
import { useState } from 'react';
export const AuthLinks = () => {
  const status = 'notauthenticated'; // temporary until auth done
  const [open, setOpen] = useState(false);

  return (
    <>
      {status === 'notauthenticated' ? (
        <Link href="/login" className={styles.link}>
          {' '}
          Login{' '}
        </Link>
      ) : (
        <>
          <Link href="/write" className={styles.link}>
            {' '}
            Write{' '}
          </Link>
          <span className={styles.link}>Logout</span>
        </>
      )}
      <div className={styles.burger} onClick={() => setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      {/* if open show mobile menu  */}
      {open && (
        <div className={styles.ResponsiveMenu}>
          <Link href="/">Homepage</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
          {/* if not authentiated show login/logout buttons?  */}
          {status === 'notauthenticated' ? (
            <Link href="/login" className={styles.link}>
              {' '}
              Login{' '}
            </Link>
          ) : (
            <>
              <Link href="/write" className={styles.link}>
                {' '}
                Write{' '}
              </Link>
              <span className={styles.link}>Logout</span>
            </>
          )}
        </div>
      )}
    </>
  );
};
