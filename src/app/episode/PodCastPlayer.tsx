"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Play, Pause } from "lucide-react";
import { Slider } from "@/components/ui/Slider";
import { useGetEpisode } from "@/lib/api/actions";
import { useSearchParams } from "next/navigation";
import { convertSecToMin, formatDate } from "@/lib/utils";
import { BackTen, FrontTen, Gift, Share } from "@/components/svg/icon";

export default function PodcastPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(15);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const id = useSearchParams().get("id");
  const { data, isSuccess } = useGetEpisode(id || "1");
  const episode = data?.data;
  const [duration, setDuration] = useState(episode?.duration ?? 28 * 60 + 4); // 28:04 in seconds

  const formatTime = (timeInSeconds: number) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleRewind = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = Math.max(
        0,
        audioRef.current.currentTime - 10
      );
    }
  };

  const handleForward = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = Math.min(
        duration,
        audioRef.current.currentTime + 10
      );
    }
  };

  const handleSliderChange = (value: number[]) => {
    if (audioRef.current) {
      const newTime = value[0];
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  // Update current time as audio plays
  useEffect(() => {
    const audio = audioRef.current;

    const updateTime = () => {
      if (audio) {
        setCurrentTime(audio.currentTime);
      }
    };

    if (audio) {
      audio.addEventListener("timeupdate", updateTime);
      audio.addEventListener("ended", () => setIsPlaying(false));
    }

    return () => {
      if (audio) {
        audio.removeEventListener("timeupdate", updateTime);
        audio.removeEventListener("ended", () => setIsPlaying(false));
      }
    };
  }, []);
  useEffect(() => {
    if (episode) setDuration(episode.duration);
  }, [isSuccess]);
  return (
    <div className="app-container bg-gradient-to-br from-[#2B3221] to-[#f2f2f2]  pt-8 pb-[67px] ">
      {isSuccess && episode && (
        <div className="relative  text-white app-width mx-auto">
          {/* Hidden audio element */}
          <audio ref={audioRef} src={episode.content_url} />

          <Link
            href="/podcast"
            className="inline-flex items-center mb-8 hover:underline"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back to podcast
          </Link>

          <div className="flex flex-col md:flex-row gap-6 mb-12">
            <div className="flex-shrink-0">
              <Image
                priority
                src={episode.picture_url}
                alt="Hope Window Podcast"
                width={200}
                height={200}
                className="rounded-md"
              />
            </div>

            <div className="flex-1">
              <div className="flex flex-wrap gap-x-4 gap-y-1 mb-3 text-sm text-gray-300 uppercase">
                <span> {formatDate(episode.created_at)}</span>
                <span className="flex items-center before:content-['•'] before:mx-2 uppercase">
                  {convertSecToMin(episode.duration)} MINS
                </span>
              </div>

              <h1 className="text-2xl md:text-3xl font-bold mb-4">
                {episode.title}
              </h1>

              <p className="text-sm md:text-base mb-4 leading-relaxed">
                {episode.description}
              </p>

              <button className="text-green-400 font-medium hover:underline">
                READ MORE
              </button>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-sm w-10">{formatTime(currentTime)}</span>
              <Slider
                value={[currentTime]}
                min={0}
                max={duration}
                step={1}
                onValueChange={handleSliderChange}
                className="flex-1"
              />
              <span className="text-sm w-10">{formatTime(duration)}</span>
            </div>

            {/* Controls */}
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <button
                  onClick={handleRewind}
                  className="bg-white/10 rounded-full p-2 hover:bg-white/20 transition-colors"
                  aria-label="Rewind 10 seconds"
                >
                  <div className="relative">
                    <BackTen />
                  </div>
                </button>

                <button
                  onClick={handlePlayPause}
                  className="bg-red-600 rounded-full p-4 hover:bg-red-700 transition-colors"
                  aria-label={isPlaying ? "Pause" : "Play"}
                >
                  {isPlaying ? (
                    <Pause className="h-6 w-6" />
                  ) : (
                    <Play className="h-6 w-6" />
                  )}
                </button>

                <button
                  onClick={handleForward}
                  className="bg-white/10 rounded-full p-2 hover:bg-white/20 transition-colors"
                  aria-label="Forward 10 seconds"
                >
                  <div className="relative">
                    <FrontTen />
                  </div>
                </button>
              </div>

              <div className="flex items-center gap-4">
                <button
                  className="bg-white/10 rounded-full p-2 hover:bg-white/20 transition-colors"
                  aria-label="Share"
                >
                  <Share className="h-5 w-5" />
                </button>

                <button
                  className="bg-white/10 rounded-full p-2 hover:bg-white/20 transition-colors"
                  aria-label="Download"
                >
                  <Gift className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
