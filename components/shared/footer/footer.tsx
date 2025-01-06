import type { StaticImageData } from "next/image";

import Link from "@/components/ui/link/link";
import Typography from "@/components/ui/typography/typography";
import IonIcon from "@reacticons/ionicons";
import Image from "next/image";

import MyLogo from "@/public/vectors/logo.svg";
import styles from "./footer.module.css";


// **** Types **** //

interface IProps {
  data: {
    logo: StaticImageData,
    copyright: string,
    socialLinks: {
      socialLinkIcon: any,
      url: string
    }[]
  }
}


// **** Components **** //

const Footer = ({ data }: IProps) => {
  return (
    <footer id="footer" className={styles.footer}>
      <div className={styles.grid}>
        <div>
          <Image className={styles.logo} src={MyLogo} alt="MS Logo" />
        </div>

        <div className={styles.copyright}>
          <Typography className={styles.copyright} variant="body-4">{data.copyright}</Typography>
        </div>

        <ul className={styles.socialLinks}>
          {data.socialLinks.map((socialLink, index) => (
            <li className={styles.item} key={index}>
              <Link className={styles.socialLink} href={socialLink.url} target="_blank">
                <IonIcon className={styles.icon} name={socialLink.socialLinkIcon} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};


// **** Default export **** //

export default Footer;
