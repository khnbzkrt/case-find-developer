import MainSlider from '@/components/molecules/main-slider/MainSlider';

import styles from './styles.module.css';

import bshLogo from '../../../../public/images/page1/bosch_logo_2.webp';
import aktifBankLogo from '../../../../public/images/page1/aktif_bank_logo_2.webp';
import akbankLogo from '../../../../public/images/page1/akbank_logo_2.webp';
import arcelikLogo from '../../../../public/images/page1/arc_elik.webp';
import allianzLogo from '../../../../public/images/page1/logo_allianz_2.webp';
import bezmialemLogo from '../../../../public/images/page1/bezmi_alem_logo_2.webp';
import SectionTitle from '@/components/atoms/titles/section-title/SectionTitle';

const jobPosts = [
  {
    id: 1,
    title: 'IT Müdürü',
    company: 'Bosch',
    image: bshLogo,
  },
  {
    id: 2,
    title: 'Front-end Developer',
    company: 'Aktif Bank Genel Müdürlüğü',
    image: aktifBankLogo,
  },
  {
    id: 3,
    title: 'Back-end Developer',
    company: 'Ankbank Genel Müdürlüğü',
    image: akbankLogo,
  },
  {
    id: 4,
    title: '.Net Developer',
    company: 'Arçelik',
    image: arcelikLogo,
  },
  {
    id: 5,
    title: 'Junior .net Developer',
    company: 'Allianz',
    image: allianzLogo,
  },
  {
    id: 6,
    title: 'Sales Manager',
    company: 'Bezmialem Vakıf Üniversitesi',
    image: bezmialemLogo,
  },
  {
    id: 7,
    title: 'Sales Manager',
    company: 'Bezmialem Vakıf Üniversitesi',
    image: bezmialemLogo,
  },
];

export default function JobPost() {
  return (
    <section className={`container ${styles.mainSectionContainer}`}>
      <SectionTitle title={'Öne çıkan iş ilanları'} />
      <MainSlider datas={jobPosts} />
    </section>
  );
}
