import { CardList } from '@/components/cardList/cardList';
import styles from './categoryPage.module.css';
import { Menu } from '@/components/menu/Menu';

const BlogPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}> Style Blog</h1>
      <div className={styles.content}>
        {/* pass search params to card list */}
        <CardList /> 
        <Menu />
      </div>
    </div>
  );
};

export default BlogPage;