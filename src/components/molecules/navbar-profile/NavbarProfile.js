'use client';
import Select from 'react-select';

import styles from './styles.module.css';
import Link from 'next/link';
import Image from 'next/image';

import ProfileImage from '../../../../public/images/page2/profile.jpeg';

const options = [
  { label: <Link href={'/'}>Profil</Link> },
  { label: <Link href={'/'}>Çıkış</Link> },
];

const colourStyles = {
  control: (styles) => ({
    ...styles,
    backgroundColor: 'transparent',
    border: 'none',
    color: '#ffffff!important',
  }),
  option: (styles) => ({
    ...styles,
    color: 'black',
  }),
  input: (styles) => ({ ...styles, color: '#ffffff' }),
  singleValue: (styles) => ({ ...styles, color: '#ffffff' }),
};

export default function NavbarProfile() {
  return (
    <div className={styles.navbarProfileContainer}>
      <div>
        <Select
          options={options}
          placeholder="Eray Karakullukçu"
          styles={colourStyles}
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
