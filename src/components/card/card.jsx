import styles from './card.module.css';
import Image from 'next/image';
import Link from 'next/link';

export const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src="/p1.jpeg" alt="" fill className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>11.09.2023 - </span>
          <span className={styles.category}>CULTURE</span>
        </div>
        <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h1>
        <p className={styles.desc}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis,
          repellendus asperiores aliquid excepturi recusandae minima at quia.
          Esse praesentium recusandae labore beatae eum perspiciatis quam
          reprehenderit. Voluptas perspiciatis temporibus quisquam.
        </p>
        <Link href="/" className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  );
};
