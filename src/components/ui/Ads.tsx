import Image from "next/image";
import React from "react";

type AdsProps = {
  height: number;
  width: number;
  image: string;
  className?: string;
};
export default function Ads({ width, height, image, className }: AdsProps) {
  return (
    <div className={`${className} w-[${width}px] h-[${height}px]`}>
      <p className="text-[#5A5A5A] font-[700] text-[11px] text-right">
        ADVERTISEMENT
      </p>
      <Image
        alt="Advert"
        width={width}
        height={height}
        src={image}
        className={` w-full h-full `}
      />
    </div>
  );
}
