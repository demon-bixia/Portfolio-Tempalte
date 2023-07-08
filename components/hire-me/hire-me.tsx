import Button from '@/components/ui/button/button';
import IonIcon from '@reacticons/ionicons';
import styles from './hire-me.module.css';


// **** Components **** //

const HireMe = () => {
  return (
    <div className={styles.buttonGroup}>
      <Button className={styles.button}>Hire Me</Button>
      <Button
        className={styles.button}
        variant='ghost'
        endAdornment={<IonIcon name='open-outline' className={styles.openIcon} />}
      >
        Projects
      </Button>
    </div>
  );
};


// **** Export default **** //

export default HireMe;
