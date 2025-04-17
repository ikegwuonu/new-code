"use client";

import React, { JSX, ReactNode } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/grid";

const CustomSwiper = ({ slide }: { slide: ReactNode[] }): JSX.Element => {
  return (
    <div className=" bg-white relative gap-[35px]'">
      {
        <>
          <Swiper
            grid={{
              rows: 4,
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
              320: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              375: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              425: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              768: {
                slidesPerView: 5,
                spaceBetween: 50,
              },

              1024: {
                slidesPerView: 6,
                spaceBetween: 40,
              },
              1440: {
                slidesPerView: 8,
                spaceBetween: 10,
              },
            }}
            modules={[Grid, Autoplay, Navigation]}
            spaceBetween={30}
            className=""
          >
            {slide.map((item, i) => {
              //const Icon = item.icon;
              return (
                <SwiperSlide className="min-w-[140px]" key={i}>
                  <div className="">{item}</div>
                </SwiperSlide>
              );
            })}
          </Swiper>
          <div className="z-10 flex items-center explore-button-prev shadow-md absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-white rounded-full cursor-pointer !w-[46px] !h-[46px]">
            <ArrowLeft className=" !w-6 !h-6" />
          </div>
          <div className="z-10 flex items-center shadow-md explore-button-next absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-white rounded-full cursor-pointer !w-[46px] !h-[46px]">
            <ArrowRight className=" !w-6 !h-6" />
          </div>
        </>
      }
    </div>
  );
};

export default CustomSwiper;
