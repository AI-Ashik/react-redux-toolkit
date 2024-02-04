import axios from "axios";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

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
  extraReducers: (builder) => {},
});
