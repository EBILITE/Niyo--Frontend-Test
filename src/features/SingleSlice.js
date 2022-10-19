import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// ==================Single item Api fetching Logic

export const singleArtItems = createAsyncThunk(
  "singleArt/singleArtItems",
  async (url) => {
    try {
      const resp = await fetch(url);
      return await resp.json();
    } catch (err) {
      return console.log(err);
    }
  }
);

const initialState = {
  singleItem: [],
  isLoading: false,
};

const SingleArtSlice = createSlice({
  name: "singleArt",
  initialState,

  extraReducers: {
    [singleArtItems.pending]: (state) => {
      state.isLoading = true;
    },
    [singleArtItems.fulfilled]: (state, action) => {
      const { data } = action.payload;
      state.isLoading = false;
      state.singleItem = data;
    },
    [singleArtItems.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export default SingleArtSlice.reducer;
