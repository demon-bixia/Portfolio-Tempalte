'use client'


import { useRef, useState } from "react";

import Button from '@/components/ui/button/button';
import Link from '@/components/ui/link/link';
import Logo from '@/components/logo/logo';
import IonIcon from '@reacticons/ionicons';

import styles from './navbar.module.css';


// **** Component **** //

const Navbar = () => {
  const linksWrapperElement = useRef<HTMLDivElement>(null);
  const [navigationState, setNavigationState] = useState(false);

  const openMenu = () => {
    if (linksWrapperElement.current !== null) {
      setNavigationState(true);
      linksWrapperElement.current.classList.remove(styles.disabled, styles.scaleClose);
      linksWrapperElement.current.classList.add(styles.scaleOpen);
    }
  }

  const closeMenu = () => {
    if (linksWrapperElement.current !== null) {
      setNavigationState(false);
      linksWrapperElement.current.classList.remove(styles.active, styles.scaleOpen);
      linksWrapperElement.current.classList.add(styles.scaleClose);
      setTimeout(() => {
        linksWrapperElement.current
          ? linksWrapperElement.current.classList.add(styles.disabled)
          : {}
      }, 100);
    }
  }

  return (
    <nav className={styles.navbar}>
      <Logo />

      <div
        id="linksWrapper"
        ref={linksWrapperElement}
        className={`${styles.linksWrapper} ${styles.disabled}`}
        aria-labelledby="openNavigationButton"
        role="menu">
        <Button
          onClick={closeMenu}
          className={styles.closeButton}
          variant="ghost"
          color="gray"
          aria-label="close navigation menu"
        >
          <IonIcon name='close-outline' className={styles.menuIcon} size='large' />
        </Button>

        <ul className={styles.links}>
          <li className={styles.link}><Link typography='body-2'>About</Link></li>
          <li className={styles.link}><Link typography='body-2'>Skills</Link></li>
          <li className={styles.link}><Link typography='body-2'>Projects</Link></li>
          <li className={styles.link}><Link typography='body-2'>Designs</Link></li>
          <li className={styles.link}><Link typography='body-2'>Blog</Link></li>
          <li className={styles.link}><Link typography='body-2'>Contact Me</Link></li>
        </ul>
      </div>

      <div>
        <Button className={styles.contactButton} variant='outlined' color='gray'>
          Contact Me
        </Button>

        <Button
          onClick={openMenu} id="openNavigationButton"
          className={styles.openButton}
          variant="ghost"
          color="gray"
          aria-label="open navigation menu"
          aria-controls="linksWrapper"
          aria-expanded={navigationState}
        >
          <IonIcon name='menu-outline' className={styles.menuIcon} size='large' />
        </Button>
      </div>
    </nav>
  );
};


// **** Default export **** //

export default Navbar;
