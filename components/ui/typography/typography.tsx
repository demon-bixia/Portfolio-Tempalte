import React from 'react';
import styles from './typography.module.css';


// **** Types **** //

export type TTypographyVariants =
  | 'heading-1'
  | 'heading-2'
  | 'heading-3'
  | 'heading-4'
  | 'heading-5'
  | 'heading-6'
  | 'heading-7'
  | 'body-1'
  | 'body-2'
  | 'body-3'
  | 'body-4'
  | 'body-5'
  | 'display-1'
  | 'display-2'
  | 'display-3';

interface IProps {
  variant?: TTypographyVariants;
  children?: React.ReactNode;
  className?: string;
};


// **** Variables **** //

const variants = {
  'heading-1': [styles.heading_1, 'h1'],
  'heading-2': [styles.heading_2, 'h2'],
  'heading-3': [styles.heading_3, 'h3'],
  'heading-4': [styles.heading_4, 'h4'],
  'heading-5': [styles.heading_5, 'h5'],
  'heading-6': [styles.heading_6, 'h6'],
  'heading-7': [styles.heading_7, 'h6'],
  'display-1': [styles.display_1, 'h1'],
  'display-2': [styles.display_2, 'h1'],
  'display-3': [styles.display_3, 'h1'],
  'body-1': [styles.body_1, 'p'],
  'body-2': [styles.body_2, 'p'],
  'body-3': [styles.body_3, 'p'],
  'body-4': [styles.body_4, 'p'],
  'body-5': [styles.body_5, 'p'],
};


// **** Functions **** //

/**
 * returns an array that contains the style of the 
 * typography and the name of element html to be used.
 */
export const chooseTypography = (variant: TTypographyVariants) => {
  return variants[variant];
};


// **** Component **** //

const Typography = ({
  variant = 'body-1',
  children,
  className,
  ...props
}: IProps) => {
  const [style, elementName] = chooseTypography(variant);

  const element = React.createElement(
    elementName,
    {
      className: `${styles.base} ${style} ${className}`,
      ...props
    },
    children
  );

  return element;
};


// **** Default export **** //

export default Typography;
