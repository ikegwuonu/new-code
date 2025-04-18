// features/filterSort/filterSortSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITopPodcast } from "../types";

interface FilterSortState {
  sortBy: "price_asc" | "price_desc" | "name_asc" | "name_desc";
  filters: {
    category: string[];
    priceRange: [number, number];
    inStock: boolean;
  };
}

const initialState: ITopPodcast = {
  data: {
    data: [
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
    ],
  },
  message: "",
};

const filterSortSlice = createSlice({
  name: "filterSort",
  initialState,
  reducers: {
    setPodcast: (state, action: PayloadAction<ITopPodcast>) => {
      state = action.payload;
    },
    setFilter: (state, action: PayloadAction<string[]>) => {
      state.filters.category = action.payload;
    },
    setPriceRange: (state, action: PayloadAction<[number, number]>) => {
      state.filters.priceRange = action.payload;
    },
    setInStockFilter: (state, action: PayloadAction<boolean>) => {
      state.filters.inStock = action.payload;
    },
    resetFilters: (state) => {
      state.filters = initialState.filters;
    },
  },
});

export const {
  setSortBy,
  setCategoryFilter,
  setPriceRange,
  setInStockFilter,
  resetFilters,
} = filterSortSlice.actions;

export default filterSortSlice.reducer;
