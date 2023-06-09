import Link from 'next/link';
import styles from './styles.module.css';

export default function FilterLinkButton({ href, text }) {
  return (
    <Link href={href} className={styles.filterLinkButton}>
      {text}
    </Link>
  );
}
