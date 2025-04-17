import Image from "next/image";
import React from "react";

export default function Loader() {
  return (
    <div className="w-screen h-screen mx-auto flex items-center justify-center">
      <div className="p-3 rounded-full border-gray-300 border-t-red-500 border-2 animate-spin w-fit h-fit relative">
        <Image
          src={"/Play.png"}
          width={46}
          height={46}
          alt="Loading"
          className=" animate-none"
        />
      </div>
    </div>
  );
}
