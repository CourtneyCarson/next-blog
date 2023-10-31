import Link from 'next/link';
import * as styles from './authLinks.module.css';

export const AuthLinks = () => {
  const status = 'notauthenticated';
  // temporary until auth done
  return (
    <>
      {status === 'notauthenticated' ? (
        <Link href="/login"> Login </Link>
      ) : (
        <>
          <Link href="/write"> Write </Link>
          <span className={styles.link}>Logout</span>
        </>
      )}
    </>
  );
};
