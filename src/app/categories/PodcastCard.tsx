import { Dot, Gift, Share } from "@/components/svg/icon";
import { ITopPodcastData } from "@/lib/types";
import { formatDate } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function PodcastCard({ podcast }: { podcast: ITopPodcastData }) {
  return (
    <div className="h-full w-full">
      <Link href={`/podcast?id=${podcast.id}`} className="h-full w-full">
        <Image
          width={223}
          height={187}
          alt="Card"
          src={podcast?.picture_url}
          className="h-[187px] w-full"
        />
        <p className="text-[18px] text-[#282828] font-[700] pt-[13px] pb-[18px]">
          {podcast?.category_name || "Category"}
        </p>

        <p className="text-[15px] font-[500]">
          <span className="font-[600]">EP {podcast.id + 1}:</span>
          {podcast.title}
        </p>
        <p className="text-[#828282] text-[13px] font-[500] flex pt-1 pb-3 uppercase">
          {formatDate(podcast.created_at)}
          <span>•</span>
          <span>35 MINS</span>
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
      </Link>
    </div>
  );
}
