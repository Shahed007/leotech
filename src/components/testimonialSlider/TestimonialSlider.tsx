"use client";

import TestimonialCard from "../card/TestimonialCard";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import { clients } from "@/utility/testimonials";

const TestimonialSlider = () => {
  return (
    <div className="custom-container ">
      <Swiper loop={true} spaceBetween={30} slidesPerView={3}>
        {clients.map((item, idx) => (
          <SwiperSlide key={idx} className="h-full ">
            <TestimonialCard {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialSlider;
