import type { StaticImageData } from 'next/image';

import Button from '@/components/ui/button/button';
import Typography from '@/components/ui/typography/typography';
import IonIcon from '@reacticons/ionicons';
import Image from 'next/image';

import styles from './projects.module.css';


// **** Types **** //

interface IProps {
  data: {
    title: string;
    description: string;
    seeMoreButtonText: string;
    seeMoreButtonIcon: any;
    projects: {
      thumbnail: StaticImageData;
      thumbnailAlt: string;
      demoLink?: string;
      demonLinkText: string;
      demoLinkIcon: any;
      projectLink?: string;
      projectLinkText: string;
      projectLinkIcon: any;
    }[];
  };
}


// **** Component **** //

const projects = ({ data }: IProps) => {
  return (
    <section className={styles.projects}>
      <div className={styles.outerGrid}>
        <div className={styles.descriptionWrapper}>
          <div className={styles.description}>
            <Typography className={styles.header} variant='heading-5'>{data.title}</Typography>
            <Typography className={styles.text} variant='body-4'>{data.description}</Typography>
          </div>
          <div className={styles.underline}></div>
        </div>

        <div className={styles.innerGrid}>
          {
            data.projects.map((project) => (
              <div className={styles.item}>
                <Image className={styles.thumbnail} src={project.thumbnail} alt={project.thumbnailAlt} />
                <div className={styles.overlay}>
                  <Button
                    className={styles.demoButton}
                    href={project.demoLink}
                    target="_blank"
                    endAdornment={<IonIcon className={styles.icon} name={project.demoLinkIcon} />}
                  >
                    {project.demonLinkText}
                  </Button>
                  <Button
                    className={styles.projectButton}
                    variant='outlined'
                    color='white'
                    href={project.projectLink}
                    target="_blank"
                    endAdornment={<IonIcon className={styles.icon} name={project.projectLinkIcon} />}
                  >
                    {project.projectLinkText}
                  </Button>
                </div>
              </div>
            ))
          }
        </div>
      </div>

      <div className={styles.seeMoreButtonWrapper}>
        <Button
          variant='outlined'
          className={styles.seeMoreButton}
          endAdornment={<IonIcon className={styles.icon} name={data.seeMoreButtonIcon} />}
        >
          {data.seeMoreButtonText}
        </Button>
      </div>
    </section>
  );
};


// **** Default export **** //

export default projects;
