'use client';

import Image from 'next/image';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import styles from './styles.module.css';
import 'swiper/css';
import 'swiper/css/navigation';

import ArrowLeft from '../../../../public/images/page1/icon_filled_arrow_left.webp';
import ArrowRight from '../../../../public/images/page1/icon_filled_arrow_left_2.webp';

export default function MainSlider({ datas }) {
  return (
    <div className={styles.sliderContainer}>
      <Swiper
        modules={[Navigation]}
        spaceBetween={10}
        slidesPerView={1}
        navigation={{
          prevEl: '.prev',
          nextEl: '.next',
          disabledClass: styles.navigationDisabled,
        }}
        breakpoints={{
          768: {
            slidesPerView: 6,
          },
        }}
        className={styles.slider}
      >
        {datas.map((data) => (
          <SwiperSlide key={data.id}>
            <div className={styles.sliderContentContainer}>
              <span className={styles.sliderContentTitle}>{data.title}</span>
              <span className={styles.sliderContentCompany}>
                {data.company}
              </span>
              <Image
                src={data.image}
                width={70}
                height={70}
                alt={data.title}
                className={styles.sliderContentImage}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <button className={`prev ${styles.sliderNavigation} ${styles.arrowLeft}`}>
        <Image src={ArrowLeft} width={24} height={24} alt="arrow left" />
      </button>
      <button
        className={`next ${styles.sliderNavigation} ${styles.arrowRight}`}
      >
        <Image src={ArrowRight} width={24} height={24} alt="arrow left" />
      </button>
    </div>
  );
}
