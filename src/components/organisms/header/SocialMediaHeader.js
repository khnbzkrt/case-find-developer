import Image from 'next/image';

import { SocialMediaNavbar, SocialMediaLogo } from '@/components';

import styles from './styles.module.css';

import HeaderLeft from '../../../../public/images/page2/group_27_2.webp';
import HeaderCenter from '../../../../public/images/page2/group_20_2.webp';
import HeaderRight from '../../../../public/images/page2/group_22_2.webp';

export default function SocialMediaHeader() {
  return (
    <header className={`${styles.socialMediaHeaderContainer} container`}>
      <div className={`${styles.socialMediaHeader}`}>
        <SocialMediaLogo />
        <SocialMediaNavbar />
        <Image
          src={HeaderLeft}
          width={700}
          height={700}
          alt="header background left"
          className={styles.socialMediaHeaderBgLeft}
        />
        <Image
          src={HeaderCenter}
          width={700}
          height={700}
          alt="header background center"
          className={styles.socialMediaHeaderBgCenter}
        />
        <Image
          src={HeaderRight}
          width={700}
          height={700}
          alt="header background right"
          className={styles.socialMediaHeaderBgRight}
        />
      </div>
    </header>
  );
}
