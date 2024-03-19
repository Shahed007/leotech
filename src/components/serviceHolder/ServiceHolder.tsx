"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import brand1 from "@/assets/icons/01.svg";
import brand2 from "@/assets/icons/02.svg";
import brand3 from "@/assets/icons/03.svg";
import brand4 from "@/assets/icons/04.svg";
import brand5 from "@/assets/icons/05.svg";
import brand6 from "@/assets/icons/06.svg";

import "swiper/css";
import Image from "next/image";
const ServiceHolder = () => {
  return (
    <Swiper spaceBetween={50} slidesPerView={3} loop={true}
    breakpoints={{
      
      1280:{
        slidesPerView: 6,
      }
    }}
    >
      {brands.map((item, idx) => (
        <SwiperSlide key={idx}>
          <Image src={item} alt={`brand ${idx}`} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

const brands: string[] = [
  brand1,
  brand2,
  brand3,
  brand4,
  brand5,
  brand6,
  brand1,
  brand2,
  brand3,
  brand4,
  brand5,
  brand6,
];

export default ServiceHolder;
