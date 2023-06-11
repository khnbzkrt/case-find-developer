'use client';
import Image from 'next/image';

import { Dropdown } from '@/components/atoms/dropdown/Dropdown';
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
  { id: 'tr', item: 'Türkçe' },
  { id: 'en', item: 'İngilizce' },
  { id: 'de', item: 'Almanca' },
  { id: 'ro', item: 'Rumence' },
];

export default function Footer({ isDefault = false }) {
  return (
    <footer className={`container ${styles.footerContainer}`}>
      <div className={styles.footerLinksContainer}>
        <span>®2020 Finddeveloper.net</span>
        <HorizontalLink links={contracts} />
        <HorizontalLink links={siteLinks} />
        <Dropdown menuItems={options} defaultValue={options[0]} />
      </div>
      {!isDefault && (
        <div className={styles.footerDescriptionContainer}>
          <Image src={Iskur} width={100} height={100} alt="iskur logo" />
          <p>
            Finddeveloper.net A.Ş. Özel İstihdam Bürosu Olarak
            31/08/2018-30/08/2021 tarihleri arasında faaliyette bulunmak üzere,
            Türkiye İş Kurumu tarafından 16.07.2018 tarih ve 26124 sayılı karar
            uyarınca 170 nolu belge ile faaliyet göstermektedir. 4904 sayılı
            kanun uyarınca iş arayanlardan ücret alınmayacak ve menfaat temin
            edilmeyecektir. Şikayetleriniz için aşağıdaki telefon numaralarına
            başvurabilirsiniz. Diğer iller için tıklayın. Türkiye İş Kurumu
            İstanbul İl Müdürlüğü: 0212 555 55 55 Türkiye iş Kurumu İstanbul
            Çalışma ve İş Kurumu Ümraniye Hizmet Merkezi : <br /> 0216 523 90 26
          </p>
        </div>
      )}
    </footer>
  );
}
