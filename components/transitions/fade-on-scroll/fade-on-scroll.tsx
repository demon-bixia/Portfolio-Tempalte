import { useEffect, useRef } from "react";
import styles from "./fade-on-scroll.module.css";


// **** Components **** //

const FadeOnScroll = ({ children }: { children?: React.ReactNode; }) => {
  const element = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entires: IntersectionObserverEntry[]) => {
      for (const entry of entires) {
        if (entry.isIntersecting) {
          // The element is now intersecting the viewport, so fade it in
          element.current?.classList.add(styles.active)
        }
      }
    }, { threshold: 0.4 });

    if (element.current) {
      observer.observe(element.current);
    }
  }, []);

  return (
    <div className={styles.element} ref={element}>
      {children}
    </div>
  );
};


// **** Default export **** //

export default FadeOnScroll
