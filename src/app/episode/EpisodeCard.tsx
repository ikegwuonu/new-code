"use client";

import Image from "next/image";
import { Play } from "lucide-react";
import { ITopPodcastData } from "@/lib/types";
import { formatDate } from "@/lib/utils";
import Link from "next/link";

type PodcastEpisodeCardProps = {
  title: string;
  description: string;
  created_at: string;
  picture_url: string;
  id: string;
};
export default function PodcastEpisodeCard({
  title,
  description,
  created_at,
  picture_url,
  id,
}: PodcastEpisodeCardProps) {
  return (
    <Link href={`/episode?id=${id}`} className="w-full ">
      {/* Main Episode Card */}
      <Image
        src={picture_url}
        width={300}
        height={288}
        alt="CARD"
        className="h-[288px] w-full"
      />

      {/* Next Episode Section */}
      {
        <div className="pt-4 relative bg-white">
          <button
            className="absolute -left-6 top-1/2 transform -translate-y-1/2 bg-red-600 rounded-full p-3 shadow-lg"
            aria-label="Play episode"
          >
            <Play className="h-5 w-5 text-white" fill="white" />
          </button>
          <div className="pl-10">
            <h3 className="font-bold text-lg">{title}</h3>
            <div className="flex text-gray-600 text-sm">
              <span>{formatDate(created_at)}</span>
              <span className="px-2">|</span>
              <span>30 mins</span>
            </div>
          </div>
        </div>
      }
    </Link>
  );
}
