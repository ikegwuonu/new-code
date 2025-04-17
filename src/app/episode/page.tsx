import React from "react";
import PodcastPlayer from "./PodCastPlayer";
import PodcastEpisodeCard from "./EpisodeCard";

export default function Page() {
  return (
    <div>
      <PodcastPlayer />
      <div className="pt-[49px] pb-[127px] app-container">
        <div className="app-width mx-auto">
          <p className="uppercase border-b-2 pb-5 border-[#dcdcdc] ">
            Next Episodes in queue
          </p>
          <div>
            <PodcastEpisodeCard
              title="The Funeral Experience (The Good, The Bad, and the Ugly)"
              episodeNumber={2}
              part={2}
              guestName="Ms. Grace Udodong"
              guestTitle="Executive Director of State Year One Programs"
              guestImage="/placeholder.svg?height=64&width=64"
              date="Sept 3, 2023"
              duration="28 mins"
              nextEpisodeTitle="Relationship Button - Starting Afresh as a Widow"
              nextEpisodeDate="Aug 29, 2023"
              nextEpisodeDuration="45 mins"
              //onPlay={handlePlay}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
