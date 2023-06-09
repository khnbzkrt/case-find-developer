import styles from './styles.module.css';

export default function ServiceSection() {
  return (
    <section className={`container`}>
      <div className={styles.serviceContainer}>
        <div className={styles.serviceLeftContent}></div>
        <div className={styles.serviceRightContent}></div>
      </div>
    </section>
  );
}
