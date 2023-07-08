import heroData from '@/data/hero';

import Hero from '@/components/hero/hero';
import Subscribe from '@/components/subscribe/subscribe';
import Articles from '@/components/articles/articles';

import styles from './page.module.css';


// **** Component **** //

const Blog = () => {
  return (
    <main id='mainContent'>
      {/* Blur Background */}
      <div className={styles.blurBackground}></div>

      {/* Hero Section */}
      <Hero data={heroData.blog}>
        <Subscribe />
      </Hero>

      {/* Articles Section */}
      <Articles />
    </main>
  );
};


// **** Default export **** //

export default Blog;
