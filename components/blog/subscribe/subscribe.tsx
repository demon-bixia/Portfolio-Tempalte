import Button from "@/components/ui/button/button";
import styles from "./subscribe.module.css"


// **** Component **** //

const Subscribe = () => {
  return (
    <div className={styles.container}>
      <input className={styles.emailInput} type="text" placeholder="Email Address" />

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
