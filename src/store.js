import { configureStore } from "@reduxjs/toolkit";
import ArtSlice from "./features/ArtSlice";
import SingleSlice from "./features/SingleSlice";

export const store = configureStore({
  reducer: {
    art: ArtSlice,
    singleArt: SingleSlice,
  },
});
