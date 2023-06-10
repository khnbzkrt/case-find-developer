import styles from './styles.module.css';

export default function Certificate({ title, organisation, date }) {
  return (
    <div className={styles.certificateContainer}>
      <h3 className={styles.certificateTitle}>{title}</h3>
      <h4 className={styles.certificateOrganisation}>{organisation}</h4>
      <span className={styles.certificateDate}>{date}</span>
    </div>
  );
}
