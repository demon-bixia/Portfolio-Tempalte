'use client'

import { useEffect } from "react";
import styles from "./page-spinner.module.css"


// **** Component **** //

const PageSpinner = () => {

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "visible";
    };
  }, []);

  return (
    <div className={styles.pageSpinner}>
      <div className={styles.spinnerWrapper}>
        <div className={styles.spinner} />
      </div>
    </div>
  );
};


// **** Default export **** //

export default PageSpinner;
