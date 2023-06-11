import { Header, IntroSlogan, SearchInput } from '@/components';

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
