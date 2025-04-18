"use client";
import { ArrowLeft, Gift, Share } from "@/components/svg/icon";
import CustomSwiper from "@/components/ui/Swiper";
import Title from "@/components/ui/Title";
import { useGetTopPodcasts } from "@/lib/api/actions";
import { ITopPodcastData } from "@/lib/types";
import Image from "next/image";
import { it } from "node:test";
import React from "react";

const ads: string[] = ["/Ads3", "/Ads4", "/Ads5"];
export default function Listen() {
  const { data, isSuccess } = useGetTopPodcasts();
  const categoryData = data?.data?.data;
  const categories =
    Array.from(
      new Set(data?.data?.data.flatMap((item) => item.category_type))
    ) || [];
  console.log(categories);

  return (
    <div className="pt-[114px] bg-[#fcfcfc] app-container">
      <div className="app-width mx-auto pb-[150px]">
        <p className="text-[#282828] py-[17px] px-[29px] text-2xl font-[800] bg-[#F0E4FF] rounded-[3px]">
          LISTEN BY ABR CATEGORIES
        </p>
        {categoryData && <Category title={categories[0]} data={categoryData} />}
        <div className="pt-[100px] gap-4 flex-col md:flex-row items-center md:gap-[71px] max-w-[992px] flex mx-auto">
          {ads.map((item) => (
            <Image
              src={`${item}.png`}
              width={285}
              height={255}
              alt="ads"
              key={item}
            />
          ))}
        </div>
        {categoryData && (
          <>
            <Category title={categories[4]} data={categoryData} />
            <Category title={categories[2]} data={categoryData} />
            <Category title={categories[3]} data={categoryData} />
          </>
        )}
      </div>
    </div>
  );
}

type CategoryProps = {
  title?: string;
  data: ITopPodcastData[];
};
const Category = ({ title, data }: CategoryProps) => {
  const categoryType = data?.filter((item) => item.category_type == title);
  console.log(categoryType.length);
  return (
    <>
      <div className="flex justify-between pt-[71px] pb-10 items-center">
        {title && <Title text={title} />}
        <button className="font-[500] items-center text-[15px] flex  text-[#9747FF] border border-[#9747ff] rounded-[22px] px-[18px] py-[7px] gap-1">
          View all <ArrowLeft />
        </button>
      </div>
      <div className="">
        <CustomSwiper
          numberOfSlides={4}
          slide={categoryType?.map((item, i) => (
            <News key={i} item={item} />
          ))}
        />
      </div>
    </>
  );
};
const News = ({ item }: { item: ITopPodcastData }) => {
  return (
    <div className="bg-[#f4f4f4]  border-b-[5px] border-[#d5d3d3] py-[23px] px-[21px] rounded-[5px]">
      <Image
        src={item?.picture_url}
        width={223}
        height={234}
        alt="news"
        className="w-full"
      />
      <p className="text-[#282828] text-[18px] font-[700] pt-[17px] pb-[14px]">
        {item?.title}
      </p>
      <div className="flex gap-[11px]">
        <Share />
        <Gift />
      </div>
    </div>
  );
};
