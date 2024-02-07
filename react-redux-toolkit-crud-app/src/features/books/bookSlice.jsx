import { createSlice } from "@reduxjs/toolkit";

const initialBooks = {
  books: [
    { id: 1, title: "I love bangladesh", author: "Arman" },
    { id: 2, title: "I love India", author: "Arman" },
  ],
};

const bookSlice = createSlice({
  name: "books",
  initialState: initialBooks,
  reducers: {
    showBooks: (state) => state,
  },
});

export const { showBooks } = bookSlice.actions;

export default bookSlice.reducer;
