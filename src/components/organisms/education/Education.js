import styles from './styles.module.css';

export default function Education({ university, degree, section, date }) {
  return (
    <div className={styles.educationContainer}>
      <h3 className={styles.educationUniversity}>{university}</h3>
      <h4 className={styles.educationDegree}>{degree}</h4>
      <span className={styles.educationSection}>{section}</span>
      <span className={styles.educationDate}>{date}</span>
    </div>
  );
}
