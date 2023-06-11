import styles from './styles.module.css';

import { PrimaryLinkButton } from '@/components';

export default function Navbar() {
  return (
    <nav className={styles.navbarContainer}>
      <PrimaryLinkButton href={'/social-media'} text={'Kayıt Ol'} />
      <PrimaryLinkButton href={'/social-media'} text={'Giriş Yap'} />
    </nav>
  );
}
