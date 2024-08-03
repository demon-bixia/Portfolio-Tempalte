"use client"

import FadeOnScroll from "@/components/transitions/fade-on-scroll/fade-on-scroll";
import Typography from "@/components/ui/typography/typography";
import IonIcon from "@reacticons/ionicons";

import styles from "./skills.module.css";



// **** Types **** //

interface IProps {
  data: {
    title: string;
    description: string;
    skills: { icon: any, title: string, text: string }[]
  }
};


// **** Component **** //

const Skills = ({ data }: IProps) => {
  return (
    <FadeOnScroll>
      <section id="skills">
        <div className={styles.outerGrid}>
          <div className={styles.descriptionWrapper}>
            <div className={styles.description}>
              <Typography className={styles.header} variant="heading-5">{data.title}</Typography>
              <Typography className={styles.text} variant="body-3">{data.description}</Typography>
            </div>
            <div className={styles.underline}></div>
          </div>

          <div className={styles.innerGrid}>
            {data.skills.map((skill, index) => (
              <div className={styles.item} key={index}>
                <IonIcon className={styles.icon} name={(skill.icon as any)} />
                <Typography className={styles.name} variant="heading-5">{skill.title}</Typography>
                <Typography variant="body-3">{skill.text}</Typography>
              </div>
            ))}
          </div>
        </div>
      </section>
    </FadeOnScroll>
  );
};


// **** Default export **** //

export default Skills;
