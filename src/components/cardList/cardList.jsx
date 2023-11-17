import { Card } from '../card/card';
import { Pagination } from '../pagination/Pagination';
import styles from './cardlist.module.css';
import Image from 'next/image';

const getData = async (page) => {
  const res = await fetch(`http://localhost:3000/api/posts?page=${page}`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error(res.statusText);
  }
  return res.json();
};

export const CardList = async ({ page }) => {
  const data = await getData(page);
  return (
    <div className={styles.container}>
      <h1>Recent Posts</h1>
      <div className={styles.posts}>
        {data?.map((item) => (
          <Card item={item} key={item._id} />
        ))}
      </div>

      <Pagination page={page} />
    </div>
  );
};
