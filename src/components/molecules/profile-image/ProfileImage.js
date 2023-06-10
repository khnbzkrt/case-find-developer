import styles from './styles.module.css';

import ProfileIcon from '../../../../public/images/page2/group_3.webp';
import ProfileIconCorner from '../../../../public/images/page2/group_39.webp';
import EditIcon from '../../../../public/images/page2/icon_filled_edit.webp';

import Image from 'next/image';

export default function ProfileImage() {
  return (
    <div className={styles.profileImageContainer}>
      <Image src={ProfileIcon} width={100} height={100} alt="profile icon" />
      <Image
        src={ProfileIconCorner}
        width={64}
        height={66}
        className={styles.profileIconCorner}
        alt="profile icon corner"
      />
      <Image
        src={EditIcon}
        width={24}
        height={24}
        className={styles.profileImageEditIcon}
        alt="profile edit icon"
      />
    </div>
  );
}
