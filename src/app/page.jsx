import { CategoryList } from '@/components/categoryList/CategoryList';
import { Featured } from '@/components/featured/Featured';
import styles from './homepage.module.css';
import { CardList } from '@/components/cardList/CardList';
import { Menu } from '@/components/menu/Menu';

export default function Home({ searchParams }) {
  //  search params for pagination since server side rendering
  const page = parseInt(searchParams.page) || 1;
  return (
    <div>
      <div className={styles.container}>
        <Featured />
        <CategoryList />

        <div className={styles.content}>
          <CardList page={page} />
          <Menu />
        </div>
      </div>
    </div>
  );
}
