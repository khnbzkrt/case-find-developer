import { Navbar } from '@/components';

import styles from './styles.module.css';

export default function Header() {
  return (
    <header className={`${styles.headerContainer} container`}>
      <Navbar />
    </header>
  );
}
