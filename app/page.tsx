import projectsData from '@/data/projects';
import skillsData from '@/data/skills';
import footerData from '@/data/footer';

import Contact from '@/components/contact/contact';
import Hero from '@/components/hero/hero';
import Projects from '@/components/projects/projects';
import Skills from '@/components/skills/skills';
import Footer from '@/components/footer/footer';

import styles from './page.module.css';


// **** Component **** //

export const Home = () => {
  return (
    <main id='mainContent'>
      {/* Blur Background */}
      <div className={styles.blurBackground}></div>

      {/* Hero Section */}
      <Hero />

      {/* Skills Section */}
      <Skills data={skillsData} />

      {/* Projects Section */}
      <Projects data={projectsData.development} />

      {/* Designs Section */}
      <Projects data={projectsData.designs} />

      {/* Contact Section */}
      <Contact />

      {/* Footer Section */}
      <Footer data={footerData} />
    </main >
  );
};


// **** Default export **** //

export default Home;
