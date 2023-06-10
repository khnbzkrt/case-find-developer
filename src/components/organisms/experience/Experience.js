import styles from './styles.module.css';

export default function Experience({
  title,
  company,
  dateText,
  location,
  content,
}) {
  return (
    <div className={styles.experienceContainer}>
      <h3 className={styles.experienceTitle}>{title}</h3>
      <h4 className={styles.experienceCompany}>{company}</h4>
      <span className={styles.experienceDateText}>{dateText}</span>
      <span className={styles.experienceLocation}>{location}</span>
      <p className={styles.experienceContent}>{content}</p>
    </div>
  );
}
