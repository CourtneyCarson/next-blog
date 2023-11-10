import React from 'react';
import styles from './categorylist.module.css';
import Link from 'next/link';
import Image from 'next/image';

export const CategoryList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.category}>Popular Categories</h1>
      <div className={styles.category}>
        <div className={styles.category}>
          <Link href='/blog?cat=style'>
            <Image
              src="/style.png"
              alt=""
              width={32}
              height={32}
              className={styles.image}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};
