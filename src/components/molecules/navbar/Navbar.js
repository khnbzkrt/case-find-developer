import styles from './styles.module.css';

import PrimaryLinkButton from '@/components/atoms/buttons/primary-link-button/PrimaryLinkButton';

export default function Navbar() {
  return (
    <nav className={styles.navbarContainer}>
      <PrimaryLinkButton href={'/social-media'} text={'Kayıt Ol'} />
      <PrimaryLinkButton href={'/social-media'} text={'Giriş Yap'} />
    </nav>
  );
}
