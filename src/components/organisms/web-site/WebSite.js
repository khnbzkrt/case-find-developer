import Image from 'next/image';
import Link from 'next/link';

import styles from './styles.module.css';

export default function WebSite({ socialMediaLinks }) {
  return (
    <div className={styles.webSiteContainer}>
      <h3 className={styles.webSiteTitle}>Web Sitesi</h3>
      <div className={styles.webSiteIcons}>
        {socialMediaLinks?.map((item) => (
          <Link href={item.href} key={item.id}>
            <Image
              src={item.icon}
              width={20}
              height={20}
              alt="social media link"
            />
          </Link>
        ))}
      </div>
      <Link href={'/'} className={styles.webSiteEditLink}>
        Düzenle
      </Link>
    </div>
  );
}
