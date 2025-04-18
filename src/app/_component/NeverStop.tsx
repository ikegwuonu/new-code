import { Warning } from "@/components/svg/icon";
import Image from "next/image";
import React from "react";

export default function NeverStop() {
  return (
    <div className="2xl:px-[146px] md:px-10 px-4 py-[33px] flex flex-wrap justify-between gap-10 xl:gap-0 bg-[#F6E8E8] items-center">
      <div className="text-[#282828]">
        <p className="text-[32px] text-[#282828] font-[800] ">
          Never stop listening!
        </p>
        <p className="font-[500] text-2xl">
          Every episodes is a journey you don’t wanna miss out on.{" "}
        </p>
        <p className="pt-[51px] pb-[11px] text-base">
          Get the latest headlines and unique ABR stories, sent every weekday.
        </p>
        <form className="flex gap-1 items-center flex-col sm:flex-row">
          <input
            placeholder="Enter your email"
            className="bg-[#d9d9d9] rounded-[3px] md:w-[336px] w-auto h-full text-sm font-[500] py-3 px-[17px]"
          />
          <div className="flex items-center gap-1">
            <button className="text-base text-white font-[700] bg-[#CC0001] py-[9.5px] px-[22px] rounded-[3px] mr-[5px]">
              Get me in
            </button>
            <Warning className="" />
          </div>
        </form>
      </div>
      <div className="relative mx-auto">
        <Image src="/Ellipse 39.png" width={404} height={404} alt="Ellipsis" />
        <Image
          src={"/Ellipse 40.png"}
          width={218}
          height={218}
          alt="ellipsis"
          className="absolute bottom-0 left-[-120]"
        />
        <Image
          src={"/image 23.png"}
          width={68.1}
          height={68.1}
          alt="ellipsis"
          className="absolute top-55 left-[-150]"
        />
        <Image
          src={"/image 22.png"}
          width={50}
          height={50}
          alt="ellipsis"
          className="absolute right-0 top-8"
        />
      </div>
    </div>
  );
}
