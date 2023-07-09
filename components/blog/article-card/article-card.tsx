import type { IArticle } from '@/types/interfaces';
import Link from '@/components/ui/link/link';
import Typography from '@/components/ui/typography/typography';

import styles from './article-card.module.css';


// **** Types **** //

interface IProps {
  className?: string;
  article: IArticle;
}


// **** Component **** //

const ArticleCard = ({ className, article }: IProps) => {
  return (
    <div
      className={`${styles.articleCard} ${className}`}
    >
      <div className={styles.cover} style={{ backgroundImage: `url('${article.cover}')` }}></div>
      <Link className={styles.overlay} href={article.url}>
        <Typography className={styles.date} variant='body-5'>{article.date}</Typography>
        <Typography className={styles.title} variant='heading-7'>{article.title}</Typography>
        <Typography className={styles.description} variant='body-4'>{article.description}</Typography>
      </Link>
    </div>
  );
};


// **** Default export **** //

export default ArticleCard;
