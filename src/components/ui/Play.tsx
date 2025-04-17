import Image from "next/image";
import React from "react";

export default function Play({ className }: { className?: string }) {
  return (
    <Image
      src={"/Play.png"}
      width={43}
      height={43}
      alt="Play"
      className={`w-[43px] h-[43px] ${className}`}
    />
  );
}
