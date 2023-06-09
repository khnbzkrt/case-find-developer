import HorizontalLink from '@/components/molecules/horizontal-link/HorizontalLink';
import styles from './styles.module.css';

const contracts = [
  {
    id: 1,
    text: 'Gizlilik Merkezi',
    href: '/',
  },
  {
    id: 2,
    text: 'Çerezler',
    href: '/',
  },
  {
    id: 3,
    text: 'Gizlilik',
    href: '/',
  },
  {
    id: 4,
    text: 'Şartlar',
    href: '/',
  },
];

const siteLinks = [
  {
    id: 1,
    text: "Finddeveloper'da Çalışmak",
    href: '/',
  },
  {
    id: 2,
    text: 'Hakkımızda',
    href: '/',
  },
  {
    id: 3,
    text: 'Yardım Merkezi',
    href: '/',
  },
];

export default function Footer() {
  return (
    <footer
      className="container"
      style={{ backgroundColor: '#626160', color: '#fff' }}
    >
      <div className={styles.footerLinksContainer}>
        <span>®2020 Finddeveloper.net</span>
        <HorizontalLink links={contracts} />
        <HorizontalLink links={siteLinks} />
        <span>®2020 Finddeveloper.net</span>
      </div>
    </footer>
  );
}
