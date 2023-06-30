import styles from "./navbar.module.css";
import Logo from "@/public/vectors/logo.svg";

import Button from "@/components/ui/button/button";
import Link from "@/components/ui/link/link";
import Image from 'next/image'

// **** Components **** //

export default function Navbar({ }: {}) {

  return (
    <nav className={styles.navbar}>
      <Image src={Logo} alt="My SVG" />

      <ul className={styles.links}>
        <li className={styles.link}><Link typography="body-2">About</Link></li>
        <li className={styles.link}><Link typography="body-2">Skills</Link></li>
        <li className={styles.link}><Link typography="body-2">Projects</Link></li>
        <li className={styles.link}><Link typography="body-2">Designs</Link></li>
        <li className={styles.link}><Link typography="body-2">Blog</Link></li>
      </ul>

      <div>
        <Button variant="outlined" color="gray">
          Contact Me
        </Button>
      </div>
    </nav>
  );
}