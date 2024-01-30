// Importing createStore function from the Redux library
const { createStore } = require("redux");

// Defining action types
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

// Initial state for the counter
const initialCounterState = {
  count: 0,
};

// Action creator for incrementing the counter
const incrementCounter = () => ({ type: INCREMENT });

// Action creator for decrementing the counter
const decrementCounter = () => ({ type: DECREMENT });

// Reducer function to manage state changes
const counterReducer = (state = initialCounterState, action) => {
  switch (action.type) {
    case INCREMENT:
      // Increment the count in the state
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT:
      // Decrement the count in the state
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      // Return the current state if no action type matches
      return state;
  }
};

// Creating a Redux store with the counterReducer
const store = createStore(counterReducer);

// Subscribe to store changes and log the current state
store.subscribe(() => {
  console.log(store.getState());
});

// Dispatching actions to increment and decrement the counter
store.dispatch(incrementCounter());
store.dispatch(incrementCounter());
store.dispatch(decrementCounter());
