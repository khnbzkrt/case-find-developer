import SearchInput from '@/components/molecules/search-input/SearchInput';

import styles from './styles.module.css';

export default function SearchBar() {
  return (
    <section className={`container ${styles.searchBarContainer}`}>
      <SearchInput placeholder={'İş Ara | İş, Şirket, Anahtar Kelime'} border />
    </section>
  );
}
