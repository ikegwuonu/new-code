"use client";
import { Color, Music, Spotify, Wokpa } from "@/components/svg";
import { Share } from "@/components/svg/icon";
import { useGetPodcast } from "@/lib/api/actions";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import React from "react";
import Skeleton from "react-loading-skeleton";

export default function Hero() {
  const id = useSearchParams().get("id");
  const { data, isSuccess } = useGetPodcast(id || "1");
  const podcast = data?.data;
  return (
    <div className="bg-gradient-to-br from-[#2B3221] to-[#f2f2f2] app-container py-11 w-screen">
      {!isSuccess ? (
        <Skeleton count={1} width={300} height={300} />
      ) : (
        podcast &&
        isSuccess && (
          <div className="app-width flex gap-[25px] mx-auto w-full flex-col md:flex-row">
            <Image
              src={podcast.picture_url}
              width={390}
              height={350}
              alt="Podcast"
            />
            <div className="text-white w-full">
              <div className="flex justify-between">
                {" "}
                <p></p>
                <Share className="text-right float-right" />
              </div>

              <p className="text-[#bfbfbf] text-sm font-[700] py-5">PODCAST</p>
              <p className="text-[28px] font-[800] pb-1">{podcast.title}</p>
              <p className="text-[15px] font-[500] max-w-[60ch]">
                {podcast.description}
              </p>
              <div>
                <p className="text-[#bfbfbf] font-[600] text-sm pb-[13px] pt-10">
                  Available on
                </p>
                <div className="flex gap-[15px]">
                  {/* <Spotify />
              <Music />
              <Color />
              <Wokpa /> */}
                </div>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
}
