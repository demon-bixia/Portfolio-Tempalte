import styles from "./button.module.css";
import Typography, { TTypographyVariants } from "@/components/ui/typography/typography";


// **** Components **** //

export default function Button({
  variant = "contained",
  color = "primary",
  typography = "heading-7",
  children,
}: {
  variant?: "contained" | "outlined";
  color?: "primary" | "secondary" | "gray";
  typography?: TTypographyVariants;
  children: React.ReactNode;
}) {
  const colorStyles = {
    primary: styles.primary,
    secondary: styles.secondary,
    gray: styles.gray,
  };
  const variantStyles = {
    contained: styles.contained,
    outlined: styles.outlined,
  };

  return (
    <button
      className={
        styles.base + " " + colorStyles[color] + " " + variantStyles[variant]
      }
    >
      <Typography variant={typography}> {children} </Typography>
      <span className={styles.endAdornment}></span>
    </button>
  );
}