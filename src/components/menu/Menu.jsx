import { MenuCategories } from '../menuCategories/menuCategories';
import { MenuPosts } from '../menuPosts/menuPosts';
import styles from './menu.module.css';

export const Menu = () => {
  return (
    <div className={styles.container}>
      {/* start: popular */}
      <h2 className={styles.subtitle}>{"What's hot"}</h2>
      <h1 className={styles.title}>Most Popular</h1>
      <MenuPosts withImage={false} />
      {/* start: categories */}
      <h2 className={styles.subtitle}>Discover by topic</h2>
      <h1 className={styles.title}>Categories</h1>
      <MenuCategories />

      {/* start: chosen by the editors  */}
      <h2 className={styles.subtitle}>Chosen by the editor</h2>
      <h1 className={styles.title}>Editors Pick</h1>
      <MenuPosts withImage={true} />
    </div>
  );
};
