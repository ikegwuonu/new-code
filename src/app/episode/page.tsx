"use client";
import React from "react";
import PodcastPlayer from "./PodCastPlayer";
import PodcastEpisodeCard from "./EpisodeCard";
import { useGetLatestEpisodes } from "@/lib/api/actions";
import Skeleton from "react-loading-skeleton";

export default function Page() {
  const { data } = useGetLatestEpisodes();
  const episodes = data?.data?.data;
  return (
    <div>
      <PodcastPlayer />
      <div className="pt-[49px] pb-[127px] app-container bg-[#fcfcfc]">
        <div className="app-width mx-auto">
          <p className="uppercase border-b-2 pb-5 border-[#dcdcdc] font-[800] ">
            Next Episodes in queue
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-10 pt-[31px]">
            {episodes && episodes?.length > 0 ? (
              episodes
                ?.slice(0, 3)
                .map((episode, i) => (
                  <PodcastEpisodeCard
                    id={String(episode.id)}
                    description={episode.description}
                    picture_url={episode.picture_url}
                    title={episode.title}
                    created_at={episode.created_at}
                    key={i}
                  />
                ))
            ) : (
              <>
                <Skeleton height={300} className="w-full" />
                <Skeleton height={300} className="w-full" />
                <Skeleton height={300} className="w-full" />
                <Skeleton height={300} className="w-full" />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
