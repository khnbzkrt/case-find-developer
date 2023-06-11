import Image from 'next/image';
import Link from 'next/link';

import { IconTitleSmall } from '@/components';

import styles from './styles.module.css';

import DownloadIcon from '../../../../public/images/page2/shape_2.webp';

export default function UserInformation({ name, job, location, email, phone }) {
  return (
    <div className={styles.userInformationContainer}>
      <h3 className={styles.userInformationName}>{name}</h3>
      <h4 className={styles.userInformationJob}>{job}</h4>
      <span className={styles.userInformationLocation}>{location}</span>
      <span className={styles.userInformationEmail}>{email}</span>
      <span className={styles.userInformationPhone}>{phone}</span>
      <IconTitleSmall
        icon={
          <Image
            src={DownloadIcon}
            width={16}
            height={16}
            alt="download icon"
          />
        }
        text={"Find CV'mi indir"}
      />
      <Link href={'/'} className={styles.userInformationEditLink}>
        Profili Düzenle
      </Link>
    </div>
  );
}
