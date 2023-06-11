'use client';
import Link from 'next/link';
import Image from 'next/image';

import styles from './styles.module.css';

import ProfileImage from '../../../../public/images/page2/profile.jpeg';
import { Dropdown } from '@/components/atoms/dropdown/Dropdown';

const menuItems = [
  {
    id: 1,
    item: (
      <Link href={'/'} style={{ display: 'block' }}>
        Profil
      </Link>
    ),
  },
  {
    id: 1,
    item: (
      <Link href={'/'} style={{ display: 'block' }}>
        Çıkış
      </Link>
    ),
  },
];

export default function NavbarProfile() {
  return (
    <div className={styles.navbarProfileContainer}>
      <div className={styles.navbarProfileDropdown}>
        <Dropdown
          menuItems={menuItems}
          defaultValue={menuItems[0]}
          label={'Hakan Angın'}
        />
        <span>findtalent’de Kurucu</span>
      </div>
      <Image
        src={ProfileImage}
        width={64}
        height={64}
        alt="profile"
        className={styles.navbarProfileImage}
      />
    </div>
  );
}
