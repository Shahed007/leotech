"use client";

import TestimonialCard from "../card/TestimonialCard";
// import Swiper core and required modules
import { Pagination } from "swiper/modules";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { clients } from "@/utility/testimonials";

const TestimonialSlider = () => {
  return (
    <div className="custom-container ">
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        loop={true}
        slidesPerView={1}
        breakpoints={{
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        
      >
        {clients.map((item, idx) => (
          <SwiperSlide key={idx} className="h-full px-2 ">
            <TestimonialCard {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialSlider;
