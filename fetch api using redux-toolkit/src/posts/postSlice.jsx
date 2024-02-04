import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const res = await axios("https://jsonplaceholder.typicode.com/todos");
  return res.data;
});

const postSlice = createSlice({
  name: "posts",
  initialState: {
    isLoading: false,
    post: [],
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.post = action.payload;
      state.error = null;
    });
    builder.addCase(fetchPosts.rejected, (state, action) => {
      state.isLoading = false;
      state.post = [];
      state.error = action.error.message;
    });
  },
});

export default postSlice.reducer;
