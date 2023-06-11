import Link from 'next/link';
import Image from 'next/image';

import { SearchButton } from '@/components';

import styles from './styles.module.css';

import SearchIcon from '../../../../public/images/page1/icon_filled_search.webp';
import SearchButtonText from '../../../../public/images/page1/group_6.webp';

export default function SearchInput({ placeholder, border = false }) {
  return (
    <div className={styles.searchInputContainer}>
      <div className={styles.searchInputGroup}>
        <Image
          src={SearchIcon}
          width={24}
          height={24}
          alt="search icon"
          className={styles.searchIcon}
        />
        <input
          type="text"
          className={border ? styles.searchInputBordered : styles.searchInput}
          placeholder={placeholder}
        />
        <SearchButton border>
          <Image
            src={SearchButtonText}
            width={60}
            height={25}
            alt="search button text"
          />
          <Link href={'/'} className={styles.detailSearch}>
            Detaylı Arama
          </Link>
        </SearchButton>
      </div>
    </div>
  );
}
