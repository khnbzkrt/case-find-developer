import Link from 'next/link';
import styles from './styles.module.css';

export default function SectionTitle({
  title,
  href,
  linkText,
  color = 'var(--color)',
  border,
}) {
  return (
    <div
      className={styles.sectionTitleContainer}
      style={{
        borderBottom: border ? '1px solid var(--border-color-gray) ' : 'none',
      }}
    >
      <h2
        className={styles.sectionTitle}
        style={{
          color: color,
        }}
      >
        {title}
      </h2>
      {href && <Link href={href}>{linkText}</Link>}
    </div>
  );
}
