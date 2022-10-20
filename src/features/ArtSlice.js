import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// const url = "https://api.artic.edu/api/v1/artworks";

// ==================================Function to fetch the Api and store it in the initial States =======================

export const getArtItems = createAsyncThunk("art/getArtItems", async (url) => {
  try {
    const resp = await fetch(url);
    return resp.json();
  } catch (err) {
    console.log("err");
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

  extraReducers(builder) {
    builder.addCase(getArtItems.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getArtItems.fulfilled, (state, action) => {
      console.log("fulfilled data check ");
      const { data } = action.payload;
      state.isLoading = false;
      state.artItem = data;
    });
    builder.addCase(getArtItems.rejected, (state) => {
      console.log("rejected");
      state.isLoading = false;
    });
  },
});

export default ArtSlice.reducer;
