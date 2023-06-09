import Link from 'next/link';
import styles from './styles.module.css';

export default function HorizontalLink({ links }) {
  return (
    <ul className={styles.horizontalLinkContainer}>
      {links.map((link) => (
        <li key={link.id}>
          <Link href={link.href}>{link.text}</Link>
        </li>
      ))}
    </ul>
  );
}
