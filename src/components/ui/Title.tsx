import React from "react";

export default function Title({ text }: { text: string }) {
  return (
    <p className="font-semibold text-[#5a5a5a] text-base border-l-3 border-[#CC0001] pl-1 h-fit">
      {text}
    </p>
  );
}
