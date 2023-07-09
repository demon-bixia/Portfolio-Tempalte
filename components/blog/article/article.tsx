import Typography from '@/components/ui/typography/typography';
import styles from './article.module.css';


// **** Types **** //

interface IProps {
  children: React.ReactNode
}


// **** Component **** //

const Article = ({ children }: IProps) => {
  return (
    <section className={styles.article}>
      <Typography className={styles.title} variant='heading-4'>The Future of AI in Software Development</Typography>
      <Typography className={styles.date} variant='body-3'>June 1st, 2023</Typography>
      <div className={styles.cover} style={{ backgroundImage: `url('https://w.wallhaven.cc/full/9m/wallhaven-9mjoy1.png')`, }}></div>
      <Typography className={styles.description} variant='body-3'>“ Explore the potential of artificial intelligence in revolutionizing the way we develop software. ”</Typography>
      <div className={styles.articleContent}>
        {children}
      </div>
    </section>
  );
};


// **** Default export **** //

export default Article;
