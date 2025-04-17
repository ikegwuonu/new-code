import { ArrowLeft, Gift, Share } from "@/components/svg/icon";
import Title from "@/components/ui/Title";
import Image from "next/image";
import React from "react";

const ads: string[] = ["/Ads3", "/Ads4", "/Ads5"];
export default function Listen() {
  return (
    <div className="pt-[114px] bg-[#fcfcfc] app-container">
      <div className="app-width mx-auto pb-[150px]">
        <p className="text-[#282828] py-[17px] px-[29px] text-2xl font-[800] bg-[#F0E4FF] rounded-[3px]">
          LISTEN BY ABR CATEGORIES
        </p>
        <Category title="News & Storytelling" />
        <div className="pt-[100px]  gap-[71px] max-w-[992px] flex mx-auto">
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
        <Category title="Educational" />
        <Category title="Educational & Lifestyle" />
        <Category title="Other Podcasts" />
      </div>
    </div>
  );
}

const News = () => {
  return (
    <div className="bg-[#f4f4f4]  border-b-[5px] border-[#d5d3d3] py-[23px] px-[21px] rounded-[5px]">
      <Image src="/Editor.png" width={223} height={234} alt="news" />
      <p className="text-[#282828] text-[18px] font-[700] pt-[17px] pb-[14px]">
        Fitness Focus
      </p>
      <div className="flex gap-[11px]">
        <Share />
        <Gift />
      </div>
    </div>
  );
};
type CategoryProps = {
  title?: string;
};
const Category = ({ title }: CategoryProps) => {
  return (
    <>
      <div className="flex justify-between pt-[71px] pb-10 items-center">
        {title && <Title text={title} />}
        <button className="font-[500] items-center text-[15px] flex  text-[#9747FF] border border-[#9747ff] rounded-[22px] px-[18px] py-[7px] gap-1">
          View all <ArrowLeft />
        </button>
      </div>
      <div className="flex gap-[25px]">
        {Array.from({ length: 5 }).map((_, i) => (
          <News key={i} />
        ))}
      </div>
    </>
  );
};
