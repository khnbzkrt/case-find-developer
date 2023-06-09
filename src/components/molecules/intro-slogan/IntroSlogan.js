import Image from 'next/image';

import styles from './styles.module.css';

import Logo from '../../../../public/images/page1/logo.webp';
import HeaderText from '../../../../public/images/page1/header_text.webp';

export default function IntroSlogan() {
  return (
    <div className={styles.introSloganContainer}>
      <Image
        src={Logo}
        width={706}
        height={96}
        className={styles.logoImage}
        alt="logo"
        quality={100}
      />
      <Image
        src={HeaderText}
        width={460}
        height={50}
        className={styles.headerTextImage}
        alt="header text"
        quality={100}
      />
    </div>
  );
}
