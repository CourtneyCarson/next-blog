import { Pagination } from '../pagination/Pagination';
import styles from './cardlist.module.css';

export const CardList = () => {
  return (
    <div className={styles.container}>
      CardList
      <Pagination />
    </div>
  );
};
