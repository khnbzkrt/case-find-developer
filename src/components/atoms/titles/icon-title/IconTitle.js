import styles from './styles.module.css';

export default function IconTitle({ icon, text }) {
  return (
    <div className={styles.iconTitleContainer}>
      <span>{icon}</span>
      <span className={styles.iconTitleText}>{text}</span>
    </div>
  );
}
