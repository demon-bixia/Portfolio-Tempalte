'use client'

import Button from '@/components/ui/button/button';
import TextInput from '@/components/ui/text-input/text-input';
import Typography from '@/components/ui/typography/typography';
import FadeOnScroll from '@/components/transitions/fade-on-scroll/fade-on-scroll';
import IonIcon from '@reacticons/ionicons';
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

          <form className={styles.contactForm}>
            <TextInput id='email' label='Email Address' placeholder='Enter your email address.' />
            <TextInput id='email-content' label='Content' placeholder='Type the content of you message.' multiline />
            <div className={styles.sendButtonWrapper}>
              <Button className={styles.sendButton} variant='outlined' endAdornment={<IonIcon name='send-outline' className={styles.icon} />}>
                Send Email
              </Button>
            </div>
          </form>
        </div>
      </section>
    </FadeOnScroll>
  );
};


// **** Default export **** //

export default Contact;
