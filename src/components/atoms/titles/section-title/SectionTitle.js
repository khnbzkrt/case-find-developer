import styles from './styles.module.css';

export default function SectionTitle({ title }) {
  return <h2 className={styles.sectionTitle}>{title}</h2>;
}
