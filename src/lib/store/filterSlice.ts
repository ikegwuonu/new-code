// features/filterSort/filterSortSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITopPodcastData } from "../types";

const initialState: ITopPodcastData[] = [
  {
    author: "",
    category_name: null,
    category_type: "",
    cover_picture_url: "",
    description: "",
    embeddable_player_settings: null,
    created_at: "",
    updated_at: "",
    subscriber_count: 0,
    publisher: {
      company_name: "",
      first_name: "",
      id: 0,
      last_name: "",
      profile_image_url: "",
      created_at: "",
      updated_at: "",
    },
    id: 0,
    picture_url: "",
    title: "",
    user_id: 0,
  },
];

export type filterType = "popular" | "latest";
//export type filterCategory="business"
const filterSortSlice = createSlice({
  name: "filterSort",
  initialState,
  reducers: {
    setPodcast: (state, action: PayloadAction<ITopPodcastData[]>) => {
      state = action.payload;
    },
    setFilter: (state, action: PayloadAction<filterType>) => {
      if (action.payload === "popular") {
        state = state.sort((a, b) => b.subscriber_count - a.subscriber_count);
      } else {
        state = state.sort(
          (a, b) =>
            new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
        );
      }
      //state=state.data.data.sort((a,b) => podcast.category_name === action.payload);
      //state=state.data.data.sort((a,b)=>a.subscriber_count-b.subscriber_count);
    },
    setCategory: (state, action: PayloadAction<string>) => {
      state = state.filter(
        (podcast) => podcast.category_name == action.payload
      );
    },
  },
});

export const { setPodcast, setFilter, setCategory } = filterSortSlice.actions;

export default filterSortSlice.reducer;
