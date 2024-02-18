import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
// Async thunks
export const getTodosAsync = createAsyncThunk(
  "todos/getTodosAsync",
  async () => {
    const response = await fetch("http://localhost:3000/todos");
    if (response.ok) {
      const todos = await response.json(); // Ensure await to get the JSON data
      return todos; // Return the todos directly
    }
  }
);

export const addTodosAsync = createAsyncThunk(
  "todos/addTodosAsync",
  async (payload) => {
    const response = await fetch("http://localhost:3000/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: payload.title,
      }),
    });

    if (response.ok) {
      const todo = await response.json(); // Ensure await to get the JSON data
      return todo; // Return the todo directly
    }
  }
);

// Reducers
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
        id: uuidv4(),
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
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTodosAsync.fulfilled, (state, action) => {
        state.push(...action.payload);
      })
      .addCase(addTodosAsync.fulfilled, (state, action) => {
        state.push(action.payload);
      });
  },
});

export const { addTodo, toggleComplete, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
