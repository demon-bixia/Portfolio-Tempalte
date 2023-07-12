"use client"

import type { StaticImageData } from "next/image";
import React, { useState } from "react";

import FadeOnScroll from "@/components/transitions/fade-on-scroll/fade-on-scroll";
import Button from "@/components/ui/button/button";
import Typography from "@/components/ui/typography/typography";
import IonIcon from "@reacticons/ionicons";
import Image from "next/image";
import { PhotoSlider } from "react-photo-view";

import "react-photo-view/dist/react-photo-view.css";
import styles from "./projects.module.css";


// **** Types **** //

interface IProject {
  id: string;
  thumbnail: StaticImageData;
  thumbnailAlt: string;
  demoLink?: string;
  demonLinkText: string;
  demoLinkIcon: any;
  projectLink?: string;
  projectLinkText: string;
  projectLinkIcon: any;
  screenshots?: string[];
}

interface IProps {
  id: string;
  data: {
    title: string;
    description: string;
    seeMoreButtonText: string;
    seeMoreButtonIcon: any;
    projects: IProject[];
  };
}


// **** Functions **** //

const getSliderInitialStates = (projects: IProject[]) => {
  const states: { [key: string]: { index: number, visible: boolean } } = {};

  projects.forEach((project) => {
    if (project.screenshots && project.screenshots.length > 0) {
      states[project.id] = { index: 0, visible: false };
    }
  });

  return states;
};



// **** Component **** //

const Projects = ({ id, data }: IProps) => {
  const [slidersStates, setSlidersStates] = useState(getSliderInitialStates(data.projects));

  /**
   * set the value of the index slider
   */
  const setIndex = (index: number, id: string) => {
    setSlidersStates({ ...slidersStates, [id]: { ...slidersStates[id], index: index } });
  };

  /**
   * set the value of the visible slider
   */
  const setVisible = (visible: boolean, id: string) => {
    setSlidersStates({ ...slidersStates, [id]: { ...slidersStates[id], visible: visible } });
  };

  /**
   * opens the slider of the selected project.
   */
  const handleOpenSlider = (project: IProject) => {
    if (project.screenshots && !project.demoLink) {
      setVisible(true, project.id);
    }
  };

  return (
    <FadeOnScroll>
      <section id={id} className={styles.projects}>
        <div className={styles.outerGrid}>
          <div className={styles.descriptionWrapper}>
            <div className={styles.description}>
              <Typography className={styles.header} variant="heading-5">{data.title}</Typography>
              <Typography className={styles.text} variant="body-4">{data.description}</Typography>
            </div>
            <div className={styles.underline}></div>
          </div>

          <div className={styles.innerGrid}>
            {
              data.projects.map((project) => (
                <React.Fragment key={project.id}>
                  <div className={styles.item}>
                    <Image className={styles.thumbnail} src={project.thumbnail} alt={project.thumbnailAlt} />
                    <div className={styles.overlay}>
                      <Button
                        className={styles.demoButton}
                        onClick={() => handleOpenSlider(project)}
                        href={project.demoLink}
                        target="_blank"
                        endAdornment={<IonIcon className={styles.icon} name={project.demoLinkIcon} />}
                      >
                        {project.demonLinkText}
                      </Button>
                      <Button
                        className={styles.projectButton}
                        variant="outlined"
                        color="white"
                        href={project.projectLink}
                        target="_blank"
                        endAdornment={<IonIcon className={styles.icon} name={project.projectLinkIcon} />}
                      >
                        {project.projectLinkText}
                      </Button>
                    </div>
                  </div >

                  {
                    project.screenshots && project.screenshots.length > 0
                      ? (<PhotoSlider
                        images={project.screenshots.map((item, index) => ({ src: item, key: index }))}
                        visible={slidersStates[project.id].visible}
                        onClose={() => setVisible(false, project.id)}
                        index={slidersStates[project.id].index}
                        onIndexChange={(index: number) => setIndex(index, project.id)}
                      />)
                      : null
                  }
                </React.Fragment>
              ))
            }
          </div>
        </div>

        <div className={styles.seeMoreButtonWrapper}>
          <Button
            variant="outlined"
            className={styles.seeMoreButton}
            endAdornment={<IonIcon className={styles.icon} name={data.seeMoreButtonIcon} />}
          >
            {data.seeMoreButtonText}
          </Button>
        </div>
      </section>
    </FadeOnScroll >
  );
};


// **** Default export **** //

export default Projects;
