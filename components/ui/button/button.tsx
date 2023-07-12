import type { TTypographyVariants } from "@/components/ui/typography/typography";
import { chooseTypography } from "@/components/ui/typography/typography";
import React from "react";
import styles from "./button.module.css";
import NextLink from "next/link";


// **** Types **** //

interface IProps {
  variant?: "contained" | "outlined" | "ghost";
  color?: "primary" | "secondary" | "gray" | "white";
  typography?: TTypographyVariants;
  endAdornment?: React.ReactNode;
  className?: string;
  id?: string;
  type?: "button" | "submit" | "reset";
  href?: string;
  target?: string;
  disabled?: boolean;
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
  variant = "contained",
  color = "primary",
  typography = "heading-7",
  endAdornment,
  className,
  children,
  type = "button",
  href,
  ...props
}: IProps) => {
  const [typeStyle] = chooseTypography(typography);

  return (
    <React.Fragment>
      {
        href
          ? (
            <NextLink
              className={`${styles.button} ${typeStyle} ${colorStyles[color]} ${variantStyles[variant]} ${className}`}
              href={href}
              {...props}
            >

              {children}

              {
                endAdornment
                  ? (<span className={styles.endAdornmentContainer}>{endAdornment}</span>)
                  : null
              }
            </NextLink>
          )
          : (
            <button
              className={`${styles.button} ${typeStyle} ${colorStyles[color]} ${variantStyles[variant]} ${className}`}
              {...props}
            >

              {children}

              {
                endAdornment
                  ? (<span className={styles.endAdornmentContainer}>{endAdornment}</span>)
                  : null
              }
            </button>
          )
      }
    </React.Fragment>
  );
};


// **** Default export **** //

export default Button;
