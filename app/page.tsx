import projectsData from '@/data/projects';
import skillsData from '@/data/skills';
import heroData from '@/data/hero';

import Contact from '@/components/contact/contact';
import Hero from '@/components/hero/hero';
import Projects from '@/components/projects/projects';
import Skills from '@/components/skills/skills';
import HireMe from '@/components/hire-me/hire-me';

import styles from './page.module.css';


// **** Component **** //

export const Home = () => {
  return (
    <main id='mainContent'>
      {/* Blur Background */}
      <div className={styles.blurBackground}></div>

      {/* Hero Section */}
      <Hero data={heroData.portfolio}>
        <HireMe />
      </Hero>

      {/* Skills Section */}
      <Skills data={skillsData} />

      {/* Projects Section */}
      <Projects id='projects' data={projectsData.development} />

      {/* Designs Section */}
      <Projects id='designs' data={projectsData.designs} />

      {/* Contact Section */}
      <Contact />

    </main >
  );
};


// **** Default export **** //

export default Home;
