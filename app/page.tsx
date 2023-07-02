import Button from '@/components/ui/button/button';
import Typography from '@/components/ui/typography/typography';
import IonIcon from '@reacticons/ionicons';
import styles from './page.module.css';


// **** Component **** //

export const Home = () => {
  return (
    <main id="mainContent" className={styles.main}>
      {/* Blur Background */}
      <div className={styles.blurBackground}></div>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.welcome}>
          <Typography variant='display-1'>Hi! I Am Muhammad Salah</Typography>
          <Typography variant='body-2'>As a full-stack web developer and designer, I create beautiful and functional websites. My skills in front-end and back-end development allow me to build custom solutions for my clients.</Typography>
        </div>
        <div className={styles.buttonGroup}>
          <Button aria-label="Hire me">Hire Me</Button>
          <Button
            aria-label="See my projects"
            variant='ghost'
            endAdornment={<IonIcon name='open-outline' className={styles.openIcon} />}
          >
            Projects
          </Button>
        </div>
      </section>
    </main>
  );
};


// **** Default export **** //

export default Home;
