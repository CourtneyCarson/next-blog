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

      {/* start: categories */}
      <h2 className={styles.subtitle}>Discover by topic</h2>
      <h1 className={styles.title}>Categories</h1>

      <div className={styles.CategoryList}>
        <Link
          href="/blog?cat=style"
          className={`${styles.CategoryItem} ${styles.style}`}>
          Style
        </Link>
        <Link
          href="/blog?cat=style"
          className={`${styles.category} ${styles.style}`}>
          <Image
            src="/style.png"
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
          style
        </Link>
        {/* travel */}
        <Link
          href="/blog?cat=style"
          className={`${styles.category} ${styles.travel}`}>
          <Image
            src="/travel.png"
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
          travel
        </Link>
        {/* culture */}
        <Link
          href="/blog?cat=style"
          className={`${styles.category} ${styles.culture}`}>
          <Image
            src="/culture.png"
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
          culture
        </Link>
        {/* coding */}
        <Link
          href="/blog?cat=style"
          className={`${styles.category} ${styles.coding}`}>
          <Image
            src="/coding.png"
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
          coding
        </Link>
        {/* food */}
        <Link
          href="/blog?cat=style"
          className={`${styles.category} ${styles.food}`}>
          <Image
            src="/food.png"
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
          food
        </Link>
        {/* fashion */}
        <Link
          href="/blog?cat=style"
          className={`${styles.category} ${styles.fashion}`}>
          <Image
            src="/fashion.png"
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
          fashion
        </Link>
      </div>

      <h2 className={styles.subtitle}>{'Chosen by the editors'}</h2>
      <h1 className={styles.title}>Editors Pick</h1>

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
