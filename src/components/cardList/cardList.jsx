import { Card } from '../card/card';
import { Pagination } from '../pagination/Pagination';
import styles from './cardlist.module.css';
import Image from 'next/image';

export const CardList = () => {
  return (
    <div className={styles.container}>
      <h1>Recent Posts</h1>
      <div className={styles.posts}>
        <div className={styles.post}>
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>

      <Pagination />
    </div>
  );
};
