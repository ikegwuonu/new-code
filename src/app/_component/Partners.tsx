import Image from "next/image";
import React from "react";
const partner: { src: string; width: number; height: number }[] = [
  { src: "image 5", width: 176, height: 99 },
  { src: "image 17", width: 318, height: 56 },
  { src: "image 16", width: 178, height: 102 },
  { src: "image 12", width: 222, height: 78 },
  { src: "image 18", width: 176, height: 124 },
  { src: "image 10", width: 214, height: 44 },
  { src: "image 14", width: 178, height: 85 },
  { src: "image 9", width: 179, height: 114 },
  { src: "image 15", width: 158, height: 118 },
  { src: "image 21 (1)", width: 109, height: 109 },
  { src: "image 7", width: 246, height: 116 },
  { src: "image 13", width: 91, height: 91 },
  { src: "image 19", width: 266, height: 72 },
  { src: "image 8", width: 108, height: 67 },
  { src: "image 20", width: 105, height: 105 },
];
export default function Partners() {
  return (
    <div className="pt-[146px] pb-[127px] app-container">
      <div className="max-w-[1262px] mx-auto">
        <p className="text-center text-[#282828] font-[800] pb-[42px]">
          OUR GLOBAL PARTNERS
        </p>
        <div className=" flex gap-[62px] flex-wrap">
          {partner.map((item) => (
            <Image
              key={item.src}
              alt={item.src}
              width={item.width}
              height={item.height}
              src={`/partners/${item.src}.png`}
              className="grayscale"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
