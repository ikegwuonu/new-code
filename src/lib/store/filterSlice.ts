// features/filterSort/filterSortSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITopPodcastData } from "../types";

export type filterType = "popular" | "latest";

const initialState: ITopPodcastData[] = [];

const filterSortSlice = createSlice({
  name: "filterSort",
  initialState,
  reducers: {
    setPodcast: (state, action: PayloadAction<ITopPodcastData[]>) => {
      // Proper array mutation with Immer
      state.splice(0, state.length, ...action.payload);
    },
    setFilter: (state, action: PayloadAction<filterType>) => {
      // Create a copy before sorting to avoid mutating original array
      const sorted = [...state].sort((a, b) => {
        if (action.payload === "popular") {
          return b.subscriber_count - a.subscriber_count;
        }
        return (
          new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
        );
      });

      // Replace state contents with sorted array
      state.splice(0, state.length, ...sorted);
    },
    setCategory: (state, action: PayloadAction<string>) => {
      const filtered = state.filter(
        (podcast) =>
          podcast.category_type.toLowerCase() == action.payload.toLowerCase()
      );
      state.splice(0, state.length, ...filtered);
    },
  },
});

export const { setPodcast, setFilter, setCategory } = filterSortSlice.actions;
export default filterSortSlice.reducer;
