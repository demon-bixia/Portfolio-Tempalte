import Hero from '@/components/hero/hero';
import Skills from '@/components/skills/skills';
import Projects from '@/components/projects/projects';
import styles from './page.module.css';

import projectsData from '@/data/projects';


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

      {/* Projects Section */}
      <Projects data={projectsData.development} />

      {/* Designs Section */}
      <Projects data={projectsData.designs} />
    </main >
  );
};


// **** Default export **** //

export default Home;
