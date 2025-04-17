"use client";

import Image from "next/image";
import { Play } from "lucide-react";

interface PodcastEpisodeCardProps {
  title?: string;
  episodeNumber?: number;
  part?: number;
  guestName?: string;
  guestTitle?: string;
  guestImage?: string;
  date?: string;
  duration?: string;
  nextEpisodeTitle?: string;
  nextEpisodeDate?: string;
  nextEpisodeDuration?: string;
  onPlay?: () => void;
}

export default function PodcastEpisodeCard({
  nextEpisodeTitle,
  nextEpisodeDate,
  nextEpisodeDuration,
  onPlay,
}: PodcastEpisodeCardProps) {
  return (
    <div className="max-w-md mx-auto">
      {/* Main Episode Card */}
      <Image src={"/Editor.png"} width={300} height={288} alt="CARD" />

      {/* Next Episode Section */}
      {nextEpisodeTitle && (
        <div className="mt-4 relative">
          <button
            onClick={onPlay}
            className="absolute -left-6 top-1/2 transform -translate-y-1/2 bg-red-600 rounded-full p-3 shadow-lg"
            aria-label="Play episode"
          >
            <Play className="h-5 w-5 text-white" fill="white" />
          </button>
          <div className="pl-10">
            <h3 className="font-bold text-lg">{nextEpisodeTitle}</h3>
            <div className="flex text-gray-600 text-sm">
              <span>{nextEpisodeDate}</span>
              <span className="mx-2">|</span>
              <span>{nextEpisodeDuration}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
