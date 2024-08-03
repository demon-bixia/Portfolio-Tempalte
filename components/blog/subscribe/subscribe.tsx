"use client"

import { useState } from "react";
import Button from "@/components/ui/button/button";
import styles from "./subscribe.module.css"


// **** Component **** //

const Subscribe = () => {
  const [focused, setFocused] = useState(false);

  return (
    <div className={`${styles.container}  ${focused ? styles.activeContainer : ''}`}>
      <input
        className={styles.emailInput}
        type="text"
        placeholder="Email Address"
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
      <div className={styles.subscribeButtonWrapper}>
        <Button className={styles.subscribeButton} color="gray">
          Subscribe
        </Button>
      </div>
    </div>
  );
};


// **** Default export **** //

export default Subscribe;
