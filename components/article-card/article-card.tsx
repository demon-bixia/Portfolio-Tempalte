import Link from '@/components/ui/link/link';
import Typography from '@/components/ui/typography/typography';

import styles from './article-card.module.css';


// **** Types **** //

interface IProps {
  className?: string;
}


// **** Component **** //

const ArticleCard = ({ className }: IProps) => {
  return (
    <div
      className={`${styles.articleCard} ${className}`}
    >
      <div className={styles.cover} style={{ backgroundImage: `url('https://w.wallhaven.cc/full/9m/wallhaven-9mjoy1.png')` }}></div>
      <Link className={styles.overlay}>
        <Typography className={styles.date} variant='body-5'>June 1st, 2023</Typography>
        <Typography className={styles.title} variant='heading-7'>The Future of AI in Software Development</Typography>
        <Typography className={styles.description} variant='body-4'>Explore the potential of artificial intelligence in revolutionizing the way we develop software.</Typography>
      </Link>
    </div>
  );
};


// **** Default export **** //

export default ArticleCard;
