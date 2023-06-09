import SectionTitle from '../atoms/titles/section-title/SectionTitle';
import Intro from '../organisms/Intro/Intro';
import PopularSearch from '../organisms/popular-search/PopularSearch';

import styles from '@/styles/home-template.module.css';
import 'swiper/css';
import 'swiper/css/navigation';

import bshLogo from '../../../public/images/page1/bosch_logo.webp';
import aktifBankLogo from '../../../public/images/page1/aktif_bank.webp';
import akbankLogo from '../../../public/images/page1/akbank.webp';
import arcelikLogo from '../../../public/images/page1/arc_elik.webp';
import allianzLogo from '../../../public/images/page1/allianz.webp';
import bezmialemLogo from '../../../public/images/page1/bezmi_alem_logo.webp';
import MainSlider from '../molecules/main-slider/MainSlider';

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

export default function HomePageTemplate() {
  return (
    <main>
      <Intro />
      <PopularSearch />
      <div className={`container ${styles.mainSectionContainer}`}>
        <SectionTitle title={'Öne çıkan iş ilanları'} />
        <div className={styles.mainSectionSliderContainer}>
          <MainSlider datas={jobPosts} />
        </div>
      </div>
    </main>
  );
}
