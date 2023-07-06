import type { TTypographyVariants } from '@/components/ui/typography/typography';
import { chooseTypography } from '@/components/ui/typography/typography';
import React from 'react';
import styles from './button.module.css';


// **** Types **** //

interface IProps {
  variant?: 'contained' | 'outlined' | 'ghost';
  color?: 'primary' | 'secondary' | 'gray' | 'white';
  typography?: TTypographyVariants;
  endAdornment?: React.ReactNode;
  className?: string;
  id?: string;
  type?: "button" | "submit" | "reset";
  href?: string;
  target?: string;
  onClick?: (event: React.MouseEvent<any>) => any;
  children?: React.ReactNode;
}


// **** Variables **** //

const colorStyles = {
  primary: styles.primary,
  secondary: styles.secondary,
  gray: styles.gray,
  white: styles.white,
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
  endAdornment,
  className,
  children,
  type = 'button',
  href,
  ...props
}: IProps) => {
  const [typeStyle] = chooseTypography(typography);
  const elementName = href ? 'a' : 'button';

  const elementProps: IProps = {
    className: `${styles.button} ${typeStyle} ${colorStyles[color]} ${variantStyles[variant]} ${className}`,
    href: href,
    ...props
  };

  if (!href) {
    elementProps['type'] = type;
  }

  const element = React.createElement(
    elementName,
    elementProps,
    children,
    endAdornment ? <span className={styles.endAdornmentContainer}>{endAdornment}</span> : null
  );

  return element;
};


// **** Default export **** //

export default Button;
