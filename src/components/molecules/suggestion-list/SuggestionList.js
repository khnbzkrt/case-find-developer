import Link from 'next/link';

import styles from './styles.module.css';

export default function SuggestionList({ listHeaderTitle, listItems }) {
  return (
    <div className={styles.suggestionListContainer}>
      <h3>{listHeaderTitle}</h3>
      <ul>
        {listItems.map((item) => (
          <li key={item.id}>
            <Link href={item.href}>{item.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
