import Image from 'next/image';

import styles from './styles.module.css';

import Logo from '../../../../public/images/page1/logo.webp';

export default function SocialMediaLogo() {
  return (
    <Image
      src={Logo}
      width={700}
      height={700}
      alt="logo"
      className={styles.socialMediaLogo}
      quality={100}
    />
  );
}
