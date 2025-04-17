import { Ellipsis } from "@/components/svg/icon";
import React from "react";
import PodcastCard from "./PodcastCard";
import Image from "next/image";

export default function Page() {
  return (
    <div className="bg-[#fcfcfc] app-container pb-[87px]">
      <div className="mx-auto app-width">
        <p className="uppercase text-[#5a5a5a] text-[28px] font-[800] pt-[76px] pb-[17px] ">
          All podcasts
        </p>
        <div className="pt-[27px] border-y-2 border-[#dcdcdc] pb-[53px]">
          <div className="flex pb-[33px] gap-8">
            <p className="text-[#5a5a5a] text-base font-[500] flex gap-1">
              Sort by :{" "}
              <span className="font-[700] text-[#282828]">Popular</span>
              <Ellipsis />
            </p>

            <p className="w-1.5 text-[#979797]">|</p>
            <p className="text-[#5a5a5a] text-base font-[500] flex gap-1">
              Sort by category :{" "}
              <span className="font-[700] text-[#282828]">All</span>
              <Ellipsis />
            </p>
          </div>
          <PodcastCard />
        </div>
        <div>
          <p className="pt-[66px] pb-[39px] text-[#5a5a5a] text-[28px] font-[800]">
            Explore other categories
          </p>
          <div className="relative h-full">
            <Image
              src="/Editor.png"
              width={306}
              height={177}
              alt="Editor"
              className="h-full w-[670px]"
            />
            <div className="py-3 px-[25px]  absolute w-full left-0 bottom-0 bg-black opacity-50">
              <p className="text-white text-2xl font-[800]">
                News & Storytelling
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
