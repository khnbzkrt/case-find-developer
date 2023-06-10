import styles from './styles.module.css';

export default function SearchButton({ children, border = false }) {
  return (
    <button
      className={border ? styles.searchButtonBordered : styles.searchButton}
    >
      {children}
    </button>
  );
}
