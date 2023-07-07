import styles from './hero.module.css';
import Button from '@/components/ui/button/button';
import Typography from '@/components/ui/typography/typography';
import IonIcon from '@reacticons/ionicons';


// **** Component **** //

const Hero = () => {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.welcome}>
        <Typography variant='display-1'>Hi! I Am Muhammad Salah</Typography>
        <Typography variant='body-2'>As a full-stack web developer and designer, I create beautiful and functional websites. My skills in front-end and back-end development allow me to build custom solutions for my clients.</Typography>
      </div>
      <div className={styles.buttonGroup}>
        <Button aria-label='Hire me'>Hire Me</Button>
        <Button
          aria-label='See my projects'
          variant='ghost'
          endAdornment={<IonIcon name='open-outline' className={styles.openIcon} />}
        >
          Projects
        </Button>
      </div>
    </section>
  );
};


// **** Default export **** //

export default Hero;
