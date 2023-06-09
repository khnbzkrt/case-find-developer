import Link from 'next/link';

import styles from './styles.module.css';

export default function PrimaryLinkButton({ href, text }) {
  return (
    <Link href={href} className={styles.primaryLinkButton}>
      {text}
    </Link>
  );
}
