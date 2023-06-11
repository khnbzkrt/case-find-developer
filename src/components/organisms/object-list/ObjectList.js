import styles from './styles.module.css';
import { useCallback, useState } from 'react';
import Link from 'next/link';
import IconTextLabel from '@/components/molecules/icon-text-label/IconTextLabel';

export default function ObjectList({ title, objectItems, linkTitle, href }) {
  const [items, setItems] = useState(objectItems);

  const handleCrossClick = useCallback((id) => {
    setItems((prevItems) =>
      prevItems.filter((item) => item.id.toString() !== id.toString())
    );
  }, []);

  return (
    <div className={styles.objectListContainer}>
      <h3 className={styles.objectListTitle}>{title}</h3>
      {items?.map((item) => {
        return (
          <IconTextLabel
            id={item.id}
            icon={item.icon}
            text={item.text}
            key={item.id}
            handleCrossClick={() => handleCrossClick(item.id)}
          />
        );
      })}
      {href && linkTitle && (
        <Link href={href} className={styles.objectListAddButton}>
          {linkTitle}
        </Link>
      )}
    </div>
  );
}
