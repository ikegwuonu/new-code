// lib/store.ts
import { configureStore } from "@reduxjs/toolkit";
import filterSortReducer from "./filterSlice";

export const store = configureStore({
  reducer: {
    filterSort: filterSortReducer,
    // Add other reducers here
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
