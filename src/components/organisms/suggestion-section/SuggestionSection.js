import { SectionTitle, SuggestionList } from '@/components';
import {
  popularCategories,
  popularCompanyAdvert,
  popularLocations,
  popularTitles,
} from './suggestion-data';

import styles from './styles.module.css';

export default function SuggestionSection() {
  return (
    <section className="container">
      <div className={styles.suggestionContainer}>
        <SectionTitle title={'Sizin için iş ilanları'} />
        <div className={styles.suggestionListContainer}>
          <SuggestionList
            listHeaderTitle={'Popüler Kategoriler'}
            listItems={popularCategories}
          />
          <SuggestionList
            listHeaderTitle={'Popüler Başlıklar'}
            listItems={popularTitles}
          />
          <SuggestionList
            listHeaderTitle={'Popüler Lokasyonlar'}
            listItems={popularLocations}
          />
          <SuggestionList
            listHeaderTitle={'Popüler Şirket İlanları'}
            listItems={popularCompanyAdvert}
          />
        </div>
      </div>
    </section>
  );
}
