import type { IArticle } from "@/types/interfaces";

import Typography from "@/components/ui/typography/typography";
import { DiscussionEmbed } from 'disqus-react';

import styles from "./article.module.css";


// **** Types **** //

interface IProps {
  article: IArticle;
  children: React.ReactNode;
}


// **** Component **** //http://' +

const Article = ({ children, article }: IProps) => {
  const config = { url: window.location.href, identifier: article.url, title: article.title, language: 'en_US' }

  return (
    <section className={styles.article}>
      {/* article header */}
      <Typography className={styles.title} variant="heading-4">{article.title}</Typography>
      <Typography className={styles.date} variant="body-2">{article.date}</Typography>
      <div className={styles.cover} style={{ backgroundImage: `url("${article.cover}")`, }}></div>
      <Typography className={styles.description} variant="body-2">{article.description}</Typography>

      {/* article body */}
      <div className={styles.articleContent}>
        {children}
      </div>

      {/* comment section */}
      <Typography className={styles.commentsTitle} variant="heading-4">Comments</Typography>
      <DiscussionEmbed shortname='demon-bixia' config={config} />
    </section>
  );
};


// **** Default export **** //

export default Article;
