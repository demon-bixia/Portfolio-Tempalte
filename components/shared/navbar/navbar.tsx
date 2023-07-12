"use client"

import { useEffect, useRef, useState } from "react";

import Logo from "@/components/shared/logo/logo";
import Button from "@/components/ui/button/button";
import Link from "@/components/ui/link/link";
import IonIcon from "@reacticons/ionicons";

import styles from "./navbar.module.css";


// **** Component **** //

const Navbar = () => {
  const navElement = useRef<HTMLElement>(null);
  const navWrapperElement = useRef<HTMLDivElement>(null);
  const linksWrapperElement = useRef<HTMLDivElement>(null);
  const [navigationState, setNavigationState] = useState(false);

  /**
   * open the navigation menu with scale-up animation.
   */
  const openMenu = () => {
    if (linksWrapperElement.current !== null) {
      // prevent scrolling when the navigation is opened.
      document.body.style.overflow = "hidden";
      setNavigationState(true);
      linksWrapperElement.current.classList.remove(styles.disabled, styles.scaleClose);
      linksWrapperElement.current.classList.add(styles.scaleOpen);
    }
  };

  /**
   * close the navigation menu with scale-down animation.
   */
  const closeMenu = () => {
    if (linksWrapperElement.current !== null) {
      // allow scrolling when the navigation is closed
      document.body.style.overflow = "visible";
      setNavigationState(false);
      linksWrapperElement.current.classList.remove(styles.active, styles.scaleOpen);
      linksWrapperElement.current.classList.add(styles.scaleClose);

      // give it some time before closing so the animation can finish
      setTimeout(() => {
        linksWrapperElement.current
          ? linksWrapperElement.current.classList.add(styles.disabled)
          : {}
      }, 100);
    }
  };

  /**
   * hide element when the user scrolls down,
   * and show it when the user scrolls up.
   */
  useEffect(() => {
    let previousScrollPosition = 0;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (navElement.current) {
        if (scrollPosition > 100) {
          navElement.current?.classList.add(styles.fixed);
          navWrapperElement.current?.classList.add(styles.fixed);
        } else {
          navElement.current?.classList.remove(styles.fixed);
          navWrapperElement.current?.classList.remove(styles.fixed);
        }

        if (previousScrollPosition > scrollPosition) {
          navElement.current?.classList.remove(styles.hide);
        } else {
          navElement.current?.classList.add(styles.hide);
        }
      }

      previousScrollPosition = scrollPosition;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles.navbarWrapper} ref={navWrapperElement}>
      <nav className={styles.navbar} ref={navElement}>
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
            <IonIcon name="close-outline" className={styles.menuIcon} size="large" />
          </Button>

          <ul className={styles.links}>
            <li className={styles.link}><Link onClick={closeMenu} typography="body-2" href="/#hero">About</Link></li>
            <li className={styles.link}><Link onClick={closeMenu} typography="body-2" href="/#skills">Skills</Link></li>
            <li className={styles.link}><Link onClick={closeMenu} typography="body-2" href="/#projects">Projects</Link></li>
            <li className={styles.link}><Link onClick={closeMenu} typography="body-2" href="/#designs">Designs</Link></li>
            {/* <li className={styles.link}><Link onClick={closeMenu} typography="body-2" href="/blog/">Blog</Link></li> */}
            <li className={styles.link}><Link onClick={closeMenu} typography="body-2" href="/#contact">Contact Me</Link></li>
          </ul>
        </div>

        <div>
          <Button className={styles.contactButton} variant="outlined" color="gray" href="/#contact">
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
            <IonIcon name="menu-outline" className={styles.menuIcon} size="large" />
          </Button>
        </div>
      </nav>
    </div>
  );
};


// **** Default export **** //

export default Navbar;
