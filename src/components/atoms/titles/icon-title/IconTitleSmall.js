import styles from './styles.module.css';

export default function IconTitleSmall({ icon, text }) {
  return (
    <div className={styles.iconTitleSmallContainer}>
      <span>{icon}</span>
      <span className={styles.iconTitleSmallText}>{text}</span>
    </div>
  );
}
