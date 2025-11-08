import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import HeroContent from "./HeroContent";
import { SliderData } from "../../data/SliderData";

export default function HeroSlider() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper h-[650px]"
      >
        {SliderData.map((slide, index) => (
          <SwiperSlide key={index} className="relative">
            <div className="absolute h-full w-full bg-black/30 flex flex-col items-center justify-center text-white">
              <HeroContent slide={slide} />
            </div>
            <img
              className="h-full w-full object-cover object-center"
              src={slide.image}
              alt={`slide-${index}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
