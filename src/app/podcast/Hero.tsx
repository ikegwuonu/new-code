import { Color, Music, Spotify, Wokpa } from "@/components/svg";
import { Share } from "@/components/svg/icon";
import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <div className="bg-red-50 app-container py-11 w-screen">
      <div className="app-width flex gap-[25px] mx-auto w-full">
        <Image src="/Editor.png" width={390} height={350} alt="Podcast" />
        <div className="text-white w-full">
          <div className="flex justify-between">
            {" "}
            <p></p>
            <Share className="text-right float-right" />
          </div>

          <p className="text-[#bfbfbf] text-sm font-[700] py-5">PODCAST</p>
          <p className="text-[28px] font-[800] pb-1">Hope For the Widow</p>
          <p className="text-[15px] font-[500] max-w-[60ch]">
            The show aims to shed light on the challenges faced by less
            privileged widows, providing support and a platform to promote a
            better life. Join us in making a difference. #EmpoweringWidows
            #SupportingWidows.
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
    </div>
  );
}
