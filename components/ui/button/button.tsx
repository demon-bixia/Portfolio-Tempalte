import type { TTypographyVariants } from '@/components/ui/typography/typography';
import { chooseTypography } from '@/components/ui/typography/typography';
import styles from './button.module.css';


// **** Types **** //

interface IProps {
  variant?: 'contained' | 'outlined' | 'ghost';
  color?: 'primary' | 'secondary' | 'gray';
  typography?: TTypographyVariants;
  className?: string;
  id?: string;
  endAdornment?: React.ReactNode;
  onClick?: (event: React.MouseEvent<any>) => any;
  children: React.ReactNode;
}


// **** Variables **** //

const colorStyles = {
  primary: styles.primary,
  secondary: styles.secondary,
  gray: styles.gray,
};

const variantStyles = {
  contained: styles.contained,
  outlined: styles.outlined,
  ghost: styles.ghost,
};


// **** Component **** //

const Button = ({
  variant = 'contained',
  color = 'primary',
  typography = 'heading-7',
  className,
  endAdornment,
  children,
  ...props
}: IProps) => {
  const [typeStyle] = chooseTypography(typography);

  return (
    <button
      className={`${styles.button} ${typeStyle} ${colorStyles[color]} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
      {endAdornment ? <span className={styles.endAdornmentContainer}>{endAdornment}</span> : null}
    </button>
  );
};


// **** Default export **** //

export default Button;
