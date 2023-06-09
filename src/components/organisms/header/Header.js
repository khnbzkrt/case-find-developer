import PrimaryLinkButton from '@/components/atoms/buttons/primary-link-button/PrimaryLinkButton';
import styles from './styles.module.css';
import Navbar from '@/components/molecules/navbar/Navbar';

export default function Header() {
  return (
    <header className={`${styles.headerContainer} container`}>
      <Navbar />
    </header>
  );
}
