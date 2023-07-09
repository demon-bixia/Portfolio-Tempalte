import heroData from '@/data/hero';

import Hero from '@/components/shared/hero/hero';
import Subscribe from '@/components/blog/subscribe/subscribe';
import Articles from '@/components/blog/articles/articles';

import styles from './page.module.css';


// **** Component **** //

const Blog = () => {
  return (
    <div>
      {/* Blur Background */}
      <div className={styles.blurBackground}></div>

      {/* Hero Section */}
      <Hero data={heroData.blog}>
        <Subscribe />
      </Hero>

      {/* Articles Section */}
      <Articles />
    </div>
  );
};


// **** Default export **** //

export default Blog;
