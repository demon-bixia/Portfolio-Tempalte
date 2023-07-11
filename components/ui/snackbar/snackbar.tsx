import type { TTypographyVariants } from '@/components/ui/typography/typography';

import Typography from '@/components/ui/typography/typography';
import IonIcon from '@reacticons/ionicons';

import styles from './snackbar.module.css';


// **** Types **** //

interface IProps {
  icon: any;
  color: 'success' | 'danger';
  typography?: TTypographyVariants;
  children: React.ReactNode;
}


// **** Variables **** //

const colorVariants = {
  'danger': styles.danger,
  'success': styles.success,
}


// **** Component **** //

const Snackbar = ({ icon, color, children, typography = 'body-2' }: IProps) => {
  const colorStyle = colorVariants[color];

  return (
    <div className={`${styles.snackbar} ${colorStyle}`}>
      <Typography variant={typography}>{children}</Typography>
      <IonIcon className={styles.icon} name={icon} />
    </div>
  );
};


// **** Default export **** //

export default Snackbar;
