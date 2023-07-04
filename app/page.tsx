import styles from './page.module.css';
import Skills from '@/components/skills/skills';
import Hero from '@/components/hero/hero';


// **** Component **** //

export const Home = () => {
  return (
    <main id='mainContent'>
      {/* Blur Background */}
      <div className={styles.blurBackground}></div>

      {/* Hero Section */}
      <Hero />

      {/* Skills Section */}
      <Skills />
    </main >
  );
};


// **** Default export **** //

export default Home;
