import projectsData from '@/data/projects';
import skillsData from '@/data/skills';
import heroData from '@/data/hero';

import Contact from '@/components/portfolio/contact/contact';
import Hero from '@/components/shared/hero/hero';
import Projects from '@/components/portfolio/projects/projects';
import Skills from '@/components/portfolio/skills/skills';
import HireMe from '@/components/portfolio/hire-me/hire-me';

import styles from './page.module.css';


// **** Component **** //

export const Home = () => {
  return (
    <div>
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
    </div >
  );
};


// **** Default export **** //

export default Home;
