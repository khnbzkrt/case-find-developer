import Header from '@/components/organisms/header/Header';
import IntroSlogan from '@/components/molecules/intro-slogan/IntroSlogan';
import SearchInput from '@/components/molecules/search-input/SearchInput';

import styles from './styles.module.css';

export default function Intro() {
  return (
    <section className={styles.introContainer}>
      <Header />
      <IntroSlogan />
      <SearchInput placeholder={'İş Ara | İş, Şirket, Anahtar Kelime'} />
    </section>
  );
}
