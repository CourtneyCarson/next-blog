import CardList from '@/components/cardList/cardList';
import styles from './categoryPage.module.css';
import { Menu } from '@/components/menu/Menu';

const BlogPage = ({ searchParams }) => {
  const page = parseInt(searchParams.page) || 1;
  const { cat } = searchParams;

  console.log(searchParams);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}> {cat} Blog</h1>
      <div className={styles.content}>
        {/* pass search params to card list */}
        <CardList page={page} cat={cat} />
        <Menu />
      </div>
    </div>
  );
};

export default BlogPage;
