"use client";
import CustomSwiper from "@/components/ui/Swiper";
import Title from "@/components/ui/Title";
import { useGetTrendingEpisodes } from "@/lib/api/actions";
import { IPodcast } from "@/lib/types";
import Image from "next/image";
import React from "react";
import Skeleton from "react-loading-skeleton";

export default function Trending() {
  const { data, isSuccess } = useGetTrendingEpisodes();
  const trendingData = data?.data?.data;
  return (
    <div className="bg-[#fcfcfc] pt-[85px] app-container ">
      <div className="app-width mx-auto">
        <p className="font-[700] text-[#282828] text-2xl pb-2">
          Trending this week
        </p>
        <Title text=" Featured Podcasts" />
        <div className=" pt-[31px]">
          {!isSuccess ? (
            <Skeleton height={300} className="w-full" />
          ) : (
            trendingData &&
            trendingData.length > 0 && (
              <CustomSwiper
                numberOfSlides={4}
                slide={trendingData?.map((item, i) => (
                  <TrendingCard key={i} item={item} />
                ))}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
}

const TrendingCard = ({ item }: { item: IPodcast }) => {
  return (
    <div className="relative h-full ">
      <Image
        src={item?.picture_url}
        width={288}
        height={424}
        alt="Editor"
        className="h-[424px] w-full"
      />
      <div
        className="py-3 px-[21px] w-full bg-gradient-to-b from-transparent to-black 
       gap-4 text-white absolute items-center left-0 bottom-0  "
      >
        <p className="pb-[5px] text-[13px]">{8} Episodes</p>
        <p className="font-[700] text-2xl">{item?.title}</p>
      </div>
    </div>
  );
};
