import styles from "./link.module.css"
import Typography, { TTypographyVariants } from "@/components/ui/typography/typography";


// **** Components **** //

export default function Link({
  href = '#',
  typography,
  children,
}: {
  href?: string;
  typography?: TTypographyVariants,
  children: React.ReactNode;
}) {
  return (
    <a href={href} className={styles.link}>
      <Typography variant={typography}> {children} </Typography>
    </a>
  );
}