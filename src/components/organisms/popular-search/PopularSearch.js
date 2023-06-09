import SectionTitle from '@/components/atoms/titles/section-title/SectionTitle';
import FilterLinkButton from '@/components/atoms/buttons/filter-link-button/FilterLinkButton';

import styles from './styles.module.css';

const popularSearchs = [
  {
    id: 1,
    title: 'UX designer',
    href: '/',
  },
  {
    id: 2,
    title: 'UI designer',
    href: '/',
  },
  {
    id: 3,
    title: 'Front-end developer',
    href: '/',
  },
  {
    id: 4,
    title: 'Back-end developer',
    href: '/',
  },
  {
    id: 5,
    title: 'iOS developer',
    href: '/',
  },
  {
    id: 6,
    title: 'Android developer',
    href: '/',
  },
  {
    id: 7,
    title: 'FullStack developer',
    href: '/',
  },
  {
    id: 8,
    title: 'Product Manager',
    href: '/',
  },
];

export default function PopularSearch() {
  return (
    <section className={`${styles.popularSearchContainer} container`}>
      <div className={styles.popularSearchContent}>
        <SectionTitle title={'Popüler aramalar'} />
        <div className={styles.popularSearchButtonsContainer}>
          {popularSearchs.map((popularSearch) => (
            <FilterLinkButton
              key={popularSearch.id}
              href={popularSearch.href}
              text={popularSearch.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
