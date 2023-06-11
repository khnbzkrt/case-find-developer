import { NavbarProfile } from '@/components';

import styles from './styles.module.css';

export default function SocialMediaNavbar() {
  return (
    <nav className={styles.navbarContainer}>
      <NavbarProfile />
    </nav>
  );
}
