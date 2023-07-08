import type { TTypographyVariants } from '@/components/ui/typography/typography';
import Typography from '@/components/ui/typography/typography';
import styles from './hero.module.css';


// **** Types **** //

interface IProps {
  data: {
    title: string;
    description: string;
    textMaxWidth: string;
    titleFont: TTypographyVariants;
    descriptionFont: TTypographyVariants;
  }
  children: React.ReactNode;
}


// **** Component **** //

const Hero = ({ data, children }: IProps) => {
  return (
    <section id='hero' className={styles.hero}>
      <div className={styles.welcome} style={{ maxWidth: data.textMaxWidth }}>
        <Typography variant={data.titleFont}>{data.title}</Typography>
        <Typography variant={data.descriptionFont}>{data.description}</Typography>
      </div>

      {children}
    </section>
  );
};


// **** Default export **** //

export default Hero;
