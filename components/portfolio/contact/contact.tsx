'use client'

import ContactForm from '@/components/portfolio/contact/contact-form/contact-form';
import FadeOnScroll from '@/components/transitions/fade-on-scroll/fade-on-scroll';
import Typography from '@/components/ui/typography/typography';

import styles from './contact.module.css';


// **** Component **** //

export const Contact = () => {
  return (
    <FadeOnScroll>
      <section id='contact' className={styles.contact}>
        <div className={styles.grid}>
          <div className={styles.descriptionWrapper}>
            <div className={styles.description}>
              <Typography className={styles.header} variant='heading-5'>Contact Me</Typography>
              <Typography className={styles.text} variant='body-4'>Send me an email let’s start working together, you can also find all my links in the footer of this page.</Typography>
            </div>
            <div className={styles.underline}></div>
          </div>
          <ContactForm />
        </div>
      </section>
    </FadeOnScroll>
  );
};


// **** Default export **** //

export default Contact;
