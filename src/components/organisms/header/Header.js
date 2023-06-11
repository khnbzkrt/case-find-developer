import Navbar from '@/components/molecules/navbar/Navbar';

import styles from './styles.module.css';

export default function Header() {
  return (
    <header className={`${styles.headerContainer} container`}>
      <Navbar />
    </header>
  );
}
