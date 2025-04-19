import Image from "next/image";
import Play from "./Play";
import React from "react";
import Link from "next/link";
import { formatDate } from "@/lib/utils";

type EditorCardProps = {
  picture_url: string;
  title: string;
  created_at: string;
  id?: string | number;
};

export default function EditorCard({
  picture_url,
  title,
  created_at,
  id,
}: EditorCardProps) {
  return (
    <Link href={`/podcast?id=${id}`}>
      <Image
        src={picture_url}
        alt="Card"
        width={300}
        height={288}
        className=" h-[288px] w-full"
      />
      <div className="pt-[13px] pb-4 px-4 bg-white relative pl-10">
        <Play className="absolute top-2.5 left-[-12]" />
        <p className="text-[#282828] font-semibold text-[18px]">{title}</p>
        <p className="pt-4 text-[#282828] text-[13px] font-[500]">
          {formatDate(created_at)} <span>|</span> <span>35 mins</span>
        </p>
      </div>
    </Link>
  );
}
