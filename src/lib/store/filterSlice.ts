// features/filterSort/filterSortSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITopPodcastData } from "../types";

export type filterType = "popular" | "latest" | "all";

const initialState: {
  allPodcasts: ITopPodcastData[];
  filteredPodcast: ITopPodcastData[];
} = {
  allPodcasts: [],
  filteredPodcast: [],
};

const filterSortSlice = createSlice({
  name: "filterSort",
  initialState,
  reducers: {
    setPodcast: (state, action: PayloadAction<ITopPodcastData[]>) => {
      state.allPodcasts = action.payload;
    },
    setFilter: (state, action: PayloadAction<filterType>) => {
      const sorted = [...state.allPodcasts].sort((a, b) => {
        if (action.payload === "popular") {
          return b.subscriber_count - a.subscriber_count;
        }
        if (action.payload === "latest") {
          return (
            new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
          );
        }
        return 0;
      });
      state.filteredPodcast = sorted.length ? [...sorted] : state.allPodcasts;
    },
    setCategory: (state, action: PayloadAction<string>) => {
      const filtered = state.allPodcasts.filter(
        (podcast) =>
          podcast.category_type.toLowerCase() == action.payload.toLowerCase()
      );
      state.filteredPodcast = [...filtered];
    },
  },
});

export const { setPodcast, setFilter, setCategory } = filterSortSlice.actions;
export default filterSortSlice.reducer;
