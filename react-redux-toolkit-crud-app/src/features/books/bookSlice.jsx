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
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    deleteBook: (state, action) => {
      const id = action.payload;
      state.books = state.books.filter((book) => book.id !== id);
    },
  },
});

export const { showBooks, addBook, deleteBook } = bookSlice.actions;

export default bookSlice.reducer;
