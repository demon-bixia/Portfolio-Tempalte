import styles from './skills.module.css';
import Typography from '@/components/ui/typography/typography';
import IonIcon from '@reacticons/ionicons';


// **** Component **** //

const Skills = () => {
  return (
    <section className={styles.outerGrid}>
      <div className={styles.descriptionWrapper}>
        <div className={styles.description}>
          <Typography className={styles.header} variant='heading-5'>My Skills</Typography>
          <Typography className={styles.text} variant='body-4'>Take a look at my diverse set of skills and expertise.</Typography>
        </div>
        <div className={styles.underline}></div>
      </div>

      <div className={styles.innerGrid}>
        <div className={styles.item}>
          <IonIcon className={styles.icon} name='code-slash-outline' />
          <Typography className={styles.name} variant='heading-5'>Front End Development</Typography>
          <Typography variant='body-4'>I build client-side of web applications and user-friendly websites.</Typography>
        </div>
        <div className={styles.item}>
          <IonIcon className={styles.icon} name='construct-outline' />
          <Typography className={styles.name} variant='heading-5'>Back End Development</Typography>
          <Typography variant='body-4'>I create server-side application including APIs and web applications.</Typography>
        </div>
        <div className={styles.item}>
          <IonIcon className={styles.icon} name='color-palette-outline' />
          <Typography className={styles.name} variant='heading-5'>UI/UX Design</Typography>
          <Typography variant='body-4'>I design the user experience for digital products. to create an easy-to-use interface.</Typography>
        </div>
        <div className={styles.item}>
          <IonIcon className={styles.icon} name='phone-portrait-outline' />
          <Typography className={styles.name} variant='heading-5'>Hybrid Apps</Typography>
          <Typography variant='body-4'>I create mobile applications using hybrid frameworks like React Native.</Typography>
        </div>
        <div className={styles.item}>
          <IonIcon className={styles.icon} name='terminal-outline' />
          <Typography className={styles.name} variant='heading-5'>Automation Scripts</Typography>
          <Typography variant='body-4'>I write scripts that automate boring repetitive tasks using Python.</Typography>
        </div>
        <div className={styles.item}>
          <IonIcon className={styles.icon} name='book-outline' />
          <Typography className={styles.name} variant='heading-5'>Always Learning</Typography>
          <Typography variant='body-4'>I am always willing to learn new technologies and adapt to the stack my clients are using.</Typography>
        </div>
      </div>
    </section>
  );
};


// **** Default export **** //

export default Skills;
