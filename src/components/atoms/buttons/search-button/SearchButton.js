import styles from './styles.module.css';

export default function SearchButton({ children }) {
  return <button className={styles.searchButton}>{children}</button>;
}
