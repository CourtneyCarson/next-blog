import React from 'react';
import styles from './menu.module.css';
import Link from 'next/link';
import Image from 'next/image';

export const Menu = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>{"What's hot"}</h2>
      <h1 className={styles.title}>Most Popular</h1>
      <div className={styles.items}>
        <Link href="/" className={styles.item}>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.travel}`}>
              travel
            </span>
            <h3 className={styles.postTitle}>
              {' '}
              Lorem ipsum dolor s ipsum libero quisquam illo iure odit.
            </h3>
            <div className={styles.detail}>
              <span className={styles.username}> John Doe</span>
              <span className={styles.date}> 11.07.23</span>
            </div>
          </div>
        </Link>
        <Link href="/" className={styles.item}>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.culture}`}>
              culture
            </span>
            <h3 className={styles.postTitle}>
              {' '}
              Lorem ipsum dolor s ipsum libero quisquam illo iure odit.
            </h3>
            <div className={styles.detail}>
              <span className={styles.username}> John Doe</span>
              <span className={styles.date}> 11.07.23</span>
            </div>
          </div>
        </Link>
        <Link href="/" className={styles.item}>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.food}`}>Food</span>
            <h3 className={styles.postTitle}>
              {' '}
              Lorem ipsum dolor s ipsum libero quisquam illo iure odit.
            </h3>
            <div className={styles.detail}>
              <span className={styles.username}> John Doe</span>
              <span className={styles.date}> 11.07.23</span>
            </div>
          </div>
        </Link>
        <Link href="/" className={styles.item}>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.fashion}`}>
              fashion
            </span>
            <h3 className={styles.postTitle}>
              {' '}
              Lorem ipsum dolor s ipsum libero quisquam illo iure odit.
            </h3>
            <div className={styles.detail}>
              <span className={styles.username}> John Doe</span>
              <span className={styles.date}> 11.07.23</span>
            </div>
          </div>
        </Link>
      </div>

      {/* start: chosen by the editors  */}
      <h2 className={styles.subtitle}>{'Chosen by the editors'}</h2>
      <h1 className={styles.title}>Editors Pick</h1>
      <div className={styles.items}>
        <Link href="/" className={styles.item}>
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.travel}`}>
              travel
            </span>
            <h3 className={styles.postTitle}>
              {' '}
              Lorem ipsum dolor s ipsum libero quisquam illo iure odit.
            </h3>
            <div className={styles.detail}>
              <span className={styles.username}> John Doe</span>
              <span className={styles.date}> 11.07.23</span>
            </div>
          </div>
        </Link>
        <Link href="/" className={styles.item}>
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.culture}`}>
              culture
            </span>
            <h3 className={styles.postTitle}>
              {' '}
              Lorem ipsum dolor s ipsum libero quisquam illo iure odit.
            </h3>
            <div className={styles.detail}>
              <span className={styles.username}> John Doe</span>
              <span className={styles.date}> 11.07.23</span>
            </div>
          </div>
        </Link>
        <Link href="/" className={styles.item}>
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.food}`}>Food</span>
            <h3 className={styles.postTitle}>
              {' '}
              Lorem ipsum dolor s ipsum libero quisquam illo iure odit.
            </h3>
            <div className={styles.detail}>
              <span className={styles.username}> John Doe</span>
              <span className={styles.date}> 11.07.23</span>
            </div>
          </div>
        </Link>
        <Link href="/" className={styles.item}>
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.fashion}`}>
              fashion
            </span>
            <h3 className={styles.postTitle}>
              {' '}
              Lorem ipsum dolor s ipsum libero quisquam illo iure odit.
            </h3>
            <div className={styles.detail}>
              <span className={styles.username}> John Doe</span>
              <span className={styles.date}> 11.07.23</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};
