import ArticleCard from '@/components/article-card/article-card';
import TextInput from '@/components/ui/text-input/text-input';
import Typography from '@/components/ui/typography/typography';
import Pagination from '@/components/ui/pagination/pagination';
import IonIcon from '@reacticons/ionicons';

import styles from './articles.module.css';


// **** Component **** //

const Articles = () => {
  return (
    <section id='articles' className={styles.articles}>
      <div className={styles.topSection}>
        <Typography className={styles.title} variant='heading-5'>Recent Articles</Typography>
        <TextInput
          className={styles.searchInput}
          placeholder='Filter articles'
          endAdornment={<IonIcon name='search-outline' className={styles.icon} />}
        />
      </div>

      <div className={styles.articlesList}>
        <ArticleCard className={styles.newestArticle} />

        <div className={styles.articlesGrid}>
          {[0, 0, 0, 0, 0, 0].map((_number, index) => (
            <ArticleCard key={index} />
          ))}
        </div>

        <Pagination />
      </div>
    </section>
  );
};


// **** Default export **** //

export default Articles;
