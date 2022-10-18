import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// const url = "https://api.artic.edu/api/v1/artworks";

export const getArtItems = createAsyncThunk("art/getArtItems", async (url) => {
  try {
    const resp = await fetch(url);
    return await resp.json();
  } catch (err) {
    return console.log(err);
  }
});

const initialState = {
  artItem: [],
  isLoading: false,
};

const ArtSlice = createSlice({
  name: "art",
  initialState,

  extraReducers: {
    [getArtItems.pending]: (state) => {
      state.isLoading = true;
    },
    [getArtItems.fulfilled]: (state, action) => {
      const { data } = action.payload;
      console.log(data);
      state.isLoading = false;
      state.artItem = data;
    },
    [getArtItems.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export default ArtSlice.reducer;
