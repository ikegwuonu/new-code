import {
  Dot,
  FileIcon,
  Gift,
  Gift2,
  Share,
  Share2,
} from "@/components/svg/icon";
import Ads from "@/components/ui/Ads";
import Image from "next/image";
import React from "react";

export default function Episodes() {
  return (
    <div className="pt-[56px] pb-[174px] app-container">
      <div className="mx-auto app-width flex justify-between gap-[163px]">
        <div>
          <p className="uppercase font-[800] font-sm text-[#5a5a5a] pb-[19px] w-full border-b border-[#dcdcdc]">
            All Episodes <span className="font-[500]">(3 AVAILABLE)</span>
          </p>
          <div className="pl-4 pt-[26px] pr-[26px] pb-[38px] border-b border-[#dcdcdc] flex gap-[18px] ">
            <Image width={157} height={129} alt="episodes" src="/Editor.png" />
            <div>
              <p className="text-[#828282] text-[17px] font-[700] flex">
                SEPT 3, 2024 <Dot className="px-3" /> <span>35 MINS</span>
              </p>
              <p className="text-[#787878] text-xl font-[700] pt-[1px] pb-[7px]">
                The Funeral Experience – the Good, the Bad, and the Ugly
              </p>
              <p className="text-[15px] text-[#282828] font-[500]">
                The struggles of a widow begin immediately when her husband
                dies; she is immediately made to go through various traditional
                rites, disregarding her pain and process of grieving.
              </p>
              <div className="mt-4 flex gap-[21px] h-10 overflow-hidden">
                <Image
                  width={40}
                  height={40}
                  alt="play"
                  src={"/Play.png"}
                  className="h-10 w-10"
                />
                <FileIcon className="w-fit h-fit max-h-fit" />
                <Share2 className="w-10 h-full" />
                <Gift2 className="w-10 h-10" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[34px]">
          <Ads image="/Ads4.png" width={344} height={489} />
          <Image src="/Ads3.png" width={344} height={340} alt="Ads" />
        </div>
      </div>
    </div>
  );
}
