import type { TTypographyVariants } from '@/components/ui/typography/typography';
import { chooseTypography } from '@/components/ui/typography/typography';
import styles from './link.module.css';
import NextLink from 'next/link';


// **** Types **** //

interface IProps {
  href?: string;
  typography?: TTypographyVariants,
  children?: React.ReactNode;
  className?: string;
  target?: string;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLAnchorElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLAnchorElement>) => void;
};


// **** Components **** //

const Link = ({
  href = '#',
  typography = 'body-5',
  children,
  ...props
}: IProps) => {
  const [typeStyle] = chooseTypography(typography);

  return (
    <NextLink href={href} className={styles.link + ' ' + typeStyle} {...props}>
      {children}
    </NextLink>
  );
};


// **** Default export **** //

export default Link;
