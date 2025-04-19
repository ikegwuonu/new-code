"use client";
import Ads from "@/components/ui/Ads";
import EditorCard from "@/components/ui/EditorCard";
import Play from "@/components/ui/Play";
import Title from "@/components/ui/Title";
import { useGetTopPodcasts } from "@/lib/api/actions";
import Image from "next/image";
import React from "react";
import Skeleton from "react-loading-skeleton";

export default function EditorPick() {
  const { data, isSuccess } = useGetTopPodcasts();
  // const podcastData = data?.data?.data;
  console.log(data);
  return (
    <div className="bg-[#f6f6f6] py-[27px] app-container">
      <div className=" app-width mx-auto">
        <p className="text-[#282828] font-bold text-2xl pb-[6px]">
          EDITORS&apos;S PICK
        </p>
        <Title text="Featured Episodes" />
        <div className="grid md:grid-cols-2 grid-cols-1 pt-[18px] gap-8">
          {!isSuccess ? (
            <>
              <Skeleton height={300} className="w-full" />
              <Skeleton height={300} className="w-full" />
            </>
          ) : (
            data && (
              <>
                <div className="relative h-full">
                  <Image
                    src={data?.data?.data[0]?.picture_url}
                    width={670}
                    height={561}
                    alt="Editor"
                    className="h-[561px] w-[670px]"
                  />
                  <div className="py-3 w-full px-[25px] flex gap-4 absolute items-center left-0 bottom-0 bg-black opacity-50">
                    <Play />
                    <p className="text-white text-2xl font-[800]">
                      {data?.data?.data[0]?.title}
                    </p>
                  </div>
                </div>
                <div className="h-full ">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pb-[23px]">
                    {Array.from({ length: 2 }).map((item, index) => (
                      <EditorCard
                        key={index}
                        picture_url={data?.data?.data[1 + index]?.picture_url}
                        title={data?.data?.data[1 + index]?.title}
                        created_at={data?.data?.data[1 + index]?.created_at}
                      />
                    ))}
                  </div>
                  <Ads
                    width={634}
                    height={114}
                    image="/Ads2.png"
                    className=" mb-auto "
                  />
                </div>
              </>
            )
          )}
        </div>
      </div>
    </div>
  );
}
