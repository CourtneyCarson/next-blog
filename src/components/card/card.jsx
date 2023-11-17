import styles from './card.module.css';
import Image from 'next/image';
import Link from 'next/link';

export const Card = ({ key, item }) => {
  return (

    <div className={styles.container} key={key}>
      <div className={styles.imageContainer}>
        <Image src="/p1.jpeg" alt="" fill className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>{item.date} </span>
          <span className={styles.category}>{item.category}</span>
        </div>
        <h1>{item.title}</h1>
        <p className={styles.desc}>{item.desc}</p>
        <Link href="/" className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  );
};
