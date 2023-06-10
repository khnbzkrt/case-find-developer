'use client';
import Image from 'next/image';
import Select from 'react-select';

import HorizontalLink from '@/components/molecules/horizontal-link/HorizontalLink';

import styles from './styles.module.css';

import Iskur from '../../../../public/images/page1/iskur_logo.webp';

const contracts = [
  {
    id: 1,
    text: 'Gizlilik Merkezi',
    href: '/',
  },
  {
    id: 2,
    text: 'Çerezler',
    href: '/',
  },
  {
    id: 3,
    text: 'Gizlilik',
    href: '/',
  },
  {
    id: 4,
    text: 'Şartlar',
    href: '/',
  },
];

const siteLinks = [
  {
    id: 1,
    text: "Finddeveloper'da Çalışmak",
    href: '/',
  },
  {
    id: 2,
    text: 'Hakkımızda',
    href: '/',
  },
  {
    id: 3,
    text: 'Yardım Merkezi',
    href: '/',
  },
];

const options = [
  { value: 'tr', label: 'Türkçe' },
  { value: 'en', label: 'İngilizce' },
  { value: 'de', label: 'Almanca' },
  { value: 'ro', label: 'Rumence' },
];

const colourStyles = {
  control: (styles) => ({
    ...styles,
    backgroundColor: 'transparent',
    border: 'none',
  }),
  option: (styles) => ({
    ...styles,
    color: 'black',
  }),
  singleValue: (styles) => ({ ...styles, color: '#ffffff' }),
};

export default function Footer() {
  return (
    <footer className={`container ${styles.footerContainer}`}>
      <div className={styles.footerLinksContainer}>
        <span>®2020 Finddeveloper.net</span>
        <HorizontalLink links={contracts} />
        <HorizontalLink links={siteLinks} />
        <Select
          options={options}
          menuPlacement="top"
          defaultValue={options[0]}
          styles={colourStyles}
          className={styles.footerLanguageSelect}
        />
      </div>
      <div className={styles.footerDescriptionContainer}>
        <Image src={Iskur} width={100} height={100} alt="iskur logo" />
        <p>
          Finddeveloper.net A.Ş. Özel İstihdam Bürosu Olarak
          31/08/2018-30/08/2021 tarihleri arasında faaliyette bulunmak üzere,
          Türkiye İş Kurumu tarafından 16.07.2018 tarih ve 26124 sayılı karar
          uyarınca 170 nolu belge ile faaliyet göstermektedir. 4904 sayılı kanun
          uyarınca iş arayanlardan ücret alınmayacak ve menfaat temin
          edilmeyecektir. Şikayetleriniz için aşağıdaki telefon numaralarına
          başvurabilirsiniz. Diğer iller için tıklayın. Türkiye İş Kurumu
          İstanbul İl Müdürlüğü: 0212 555 55 55 Türkiye iş Kurumu İstanbul
          Çalışma ve İş Kurumu Ümraniye Hizmet Merkezi : <br /> 0216 523 90 26
        </p>
      </div>
    </footer>
  );
}
