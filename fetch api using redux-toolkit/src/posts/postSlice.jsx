import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Define an asynchronous thunk for fetching posts
export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  try {
    // Fetch data from the API
    const response = await axios("https://jsonplaceholder.typicode.com/todos");
    return response.data; // Return the data fetched from the API
  } catch (error) {
    // Handle errors if any
    throw Error("Failed to fetch posts");
  }
});

// Define the postSlice
const postSlice = createSlice({
  name: "posts", // Slice name
  initialState: {
    isLoading: false, // Initial loading state
    posts: [], // Initial posts array
    error: null, // Initial error state
  },
  extraReducers: (builder) => {
    // Add reducers for handling different states of the fetchPosts async action
    builder
      .addCase(fetchPosts.pending, (state) => {
        // Handle pending state
        state.isLoading = true; // Set isLoading to true when the fetchPosts action is pending
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        // Handle fulfilled state
        state.isLoading = false; // Set isLoading to false when the fetchPosts action is fulfilled
        state.posts = action.payload; // Update posts array with the fetched data
        state.error = null; // Reset error state
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        // Handle rejected state
        state.isLoading = false; // Set isLoading to false when the fetchPosts action is rejected
        state.posts = []; // Reset posts array
        state.error = action.error.message; // Set error message based on the action
      });
  },
});

export default postSlice.reducer; // Export the reducer
