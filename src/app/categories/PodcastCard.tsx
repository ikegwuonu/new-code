import { Dot, Gift, Share } from "@/components/svg/icon";
import Image from "next/image";
import React from "react";

export default function PodcastCard() {
  return (
    <div>
      <Image
        width={223}
        height={187}
        alt="Card"
        src={"/Editor.png"}
        className=""
      />
      <p className="text-[18px] text-[#282828] font-[700] pt-[13px] pb-[18px]">
        Fitness Focus
      </p>

      <p className="text-[15px] font-[500]">
        <span className="font-[600]">EP12:</span> Cardio Vascular Exercise Part
        3
      </p>
      <p className="text-[#828282] text-[13px] font-[500] flex pt-1 pb-3">
        SEPT 3, 2024 <Dot className="px-3" /> <span>35 MINS</span>
      </p>
      <div className="mt-4 flex gap-[11px] h-10 overflow-hidden">
        <Image
          width={30}
          height={30}
          alt="play"
          src={"/Play.png"}
          className="h-[30px] w-[30px]"
        />

        <Share className="w-10 h-full" />
        <Gift className="w-10 h-10" />
      </div>
    </div>
  );
}
