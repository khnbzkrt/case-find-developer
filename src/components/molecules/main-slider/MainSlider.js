'use client';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/navigation';

export default function MainSlider({ datas }) {
  return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={10}
      slidesPerView={6}
      navigation={{
        prevEl: '.prev',
        nextEl: '.next',
      }}
      className="mySwiper"
    >
      {datas.map((data) => (
        <SwiperSlide key={data.id}>
          <Image src={data.image} width={70} height={70} alt={data.title} />
        </SwiperSlide>
      ))}
      <button className="prev">
        <i className="fa-solid fa-arrow-left"></i>
      </button>
      <button className="next">Nenxt</button>
    </Swiper>
  );
}
