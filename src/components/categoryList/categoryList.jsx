import Image from 'next/image';
import Link from 'next/link';
import styles from './categorylist.module.css';

const getData = async () => {
  const res = await fetch('http://localhost:3000/api/categories', {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error(res.statusText);
  }
  return res.json();
};

export const CategoryList = async () => {
  const data = await getData();
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      {/* add both cat and style classes */}
      <div className={styles.categories}>
        {data.map((item) => (
          <Link
            href="/blog"
            className={`${styles.category} ${styles[item.slug]}`}
            key={item._id}>
            {item.img && (
              <Image
                src={item.img}
                alt=""
                width={32}
                height={32}
                className={styles.image}
              />
            )}
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};
