"use client";
import { Dot, Gift, Share } from "@/components/svg/icon";
import { useGetLatestEpisodes } from "@/lib/api/actions";
import { formatDate } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import Skeleton from "react-loading-skeleton";

export default function NewlyAdded() {
  const { data, isSuccess } = useGetLatestEpisodes();
  const latestEpisodes = data?.data?.data;
  return (
    <div className="bg-[#fcfcfc] pt-[96px] app-container ">
      <div className="app-width mx-auto">
        <p className="font-[700] text-[#282828] text-2xl pb-2">
          Newly Added Episodes
        </p>
        {!isSuccess ? (
          <Skeleton height={250} width={300} count={2} />
        ) : (
          <div className="grid grid-cols-4 gap-[26px] pt-[31px]">
            {latestEpisodes &&
              latestEpisodes?.slice(0, 4).map((item, i) => (
                <div className=" h-full " key={i}>
                  <Image
                    src={item.picture_url}
                    width={223}
                    height={187}
                    alt="Editor"
                    className="h-[187px] w-full"
                  />
                  <div>
                    <p className="uppercase text-[#828282] text-[13px] font-[700] pt-[13px] pb-[11px] flex items-center">
                      {formatDate(item?.created_at)}
                      <Dot className="px-[13px] text-[#828282]" /> 45 mins
                    </p>
                    <p className="text-[#282828] text-base font-[700] pb-[14px]">
                      {item.title}
                    </p>
                    <div className="flex items-center gap-[11px]">
                      <p className="font-[500] text-[13px] pr-3">
                        More Episodes
                      </p>
                      <Share />
                      <Gift />
                    </div>
                  </div>
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
}
