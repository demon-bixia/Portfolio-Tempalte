import styles from "./typography.module.css";


// **** Types **** //

export type TTypographyVariants =
  | "heading-1"
  | "heading-2"
  | "heading-3"
  | "heading-4"
  | "heading-5"
  | "heading-6"
  | "heading-7"
  | "body-1"
  | "body-2"
  | "body-3"
  | "body-4"
  | "body-5"
  | "display-1"
  | "display-2"
  | "display-3";


// **** Components **** //

export default function Typography({
  variant = "body-1",
  children,
}: {
  variant?: TTypographyVariants;
  children: React.ReactNode;
}) {
  const variantStyles = {
    'heading-1': styles.heading_1,
    'heading-2': styles.heading_2,
    'heading-3': styles.heading_3,
    'heading-4': styles.heading_4,
    'heading-5': styles.heading_5,
    'heading-6': styles.heading_6,
    'heading-7': styles.heading_7,
    'display-1': styles.display_1,
    'display-2': styles.display_2,
    'display-3': styles.display_3,
    'body-1': styles.body_1,
    'body-2': styles.body_2,
    'body-3': styles.body_3,
    'body-4': styles.body_4,
    'body-5': styles.body_5,
  };

  return (
    <p className={styles.base + ' ' + variantStyles[variant]}>{children}</p>
  );
}