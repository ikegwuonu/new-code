"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/grid";
import { MoveLeft, MoveRight } from "../svg/icon";

const CustomSwiper = ({
  slide,
  numberOfSlides = 4,
}: {
  slide: React.ReactNode[];
  numberOfSlides?: number;
}) => {
  return (
    <div className="bg-[#fcfcfc] relative gap-[35px]">
      <Swiper
        grid={{
          //rows: 2,
          fill: "row",
        }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: true,
        }}
        navigation={{
          nextEl: ".explore-button-next",
          prevEl: ".explore-button-prev",
        }}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 20 },
          375: { slidesPerView: 1, spaceBetween: 20 },
          425: { slidesPerView: 1, spaceBetween: 20 },
          640: { slidesPerView: 2, spaceBetween: 40 },
          768: { slidesPerView: 3, spaceBetween: 50 },
          1024: { slidesPerView: 3, spaceBetween: 40 },
          1440: { slidesPerView: numberOfSlides, spaceBetween: 10 },
        }}
        modules={[Grid, Autoplay, Navigation]}
        spaceBetween={30}
      >
        {slide.map((item, i) => (
          <SwiperSlide key={i} className="min-w-[140px] grid h-full">
            {item}
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation arrows */}
      {/* <div className="z-10 flex items-center  shadow-md absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-white rounded-full cursor-pointer !w-[46px] !h-[46px]">
        <ArrowLeft className="!w-6 !h-6" />
      </div> */}
      <div
        className="z-10 flex items-center shadow-md  absolute right-0 top-1/2 transform -translate-y-1/2 py-[14px] px-[11px] rounded-xl bg-white 
       cursor-pointer !h-11 gap-5"
      >
        <MoveRight className=" explore-button-prev" />
        <MoveLeft className=" explore-button-next" />
      </div>
    </div>
  );
};

export default CustomSwiper;
