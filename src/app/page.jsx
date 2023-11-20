import { Featured } from '@/components/featured/Featured';
import { Menu } from '@/components/menu/Menu';
import styles from './homepage.module.css';
import CardList from '@/components/cardList/cardList';
import { CategoryList } from '@/components/categoryList/categoryList';

export default function Home({ searchParams }) {
  //  search params for pagination since server side rendering
  const page = parseInt(searchParams.page) || 1;

  return (
    <div className={styles.container}>
      <Featured />
      <CategoryList />

      <div className={styles.content}>
        <CardList page={page} />
        <Menu />
      </div>
    </div>
  );
}
