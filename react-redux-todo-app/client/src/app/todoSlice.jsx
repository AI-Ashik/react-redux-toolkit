import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getTodosAsync = createAsyncThunk(
  "todosd/getTodosAsync",
  async () => {
    try {
      const response = await fetch("http://localhost:3000/todos");
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      return { data };
    } catch (error) {
      // Handle errors
      return error.message;
    }
  }
);

const todoSlice = createSlice({
  name: "todos",
  initialState: [
    { id: 1, title: "lorem 1", completed: false },
    { id: 2, title: "lorem 2", completed: false },
    { id: 3, title: "lorem 3", completed: true },
  ],
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        title: action.payload.title,
        completed: false,
      };
      state.push(newTodo);
    },

    toggleComplete: (state, action) => {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      state[index].completed = action.payload.completed;
    },
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload.id);
    },
    extraReducers: (builder) => {
      builder
        // eslint-disable-next-line no-unused-vars
        .addCase(getTodosAsync.pending, (state) => {
          console.log("Fetching data");
        })
        .addCase(getTodosAsync.fulfilled, (state, action) => {
          console.log("Fetched data");
          return action.payload.todos;
        })
        .addCase(getTodosAsync.rejected, (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        });
    },
  },
});

export const { addTodo, toggleComplete, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
