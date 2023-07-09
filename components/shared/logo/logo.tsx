import { useState } from 'react';

import Link from '@/components/ui/link/link';
import IonIcon from '@reacticons/ionicons';
import Image from 'next/image';

import MyLogo from '@/public/vectors/logo.svg';
import styles from './logo.module.css';


// **** Component **** //

const Logo = () => {
  const [skipLinkFocused, setSkipLinkFocused] = useState(false);

  return (
    <div className={styles.container}>
      <Link
        href='#mainContent'
        className={skipLinkFocused ? '' : styles.hideSkip}
        onBlur={() => { setSkipLinkFocused(false) }}
        onFocus={() => { setSkipLinkFocused(true) }}
        aria-label='skip to main content'
      >
        <IonIcon name='play-forward-outline' />
      </Link>

      <Link
        href='/'
        className={skipLinkFocused ? styles.hideLogo : ''}
        aria-label='home'
      >
        <Image src={MyLogo} alt='MS Logo' />
      </Link>
    </div>
  );
};


// **** Default export **** //

export default Logo;
