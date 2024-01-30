const { createStore } = require("redux");

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET = "RESET";

// Initial state for the counter
const initialCounterState = {
  count: 0,
};

// Action creator for incrementing the counter
const incrementCounter = () => ({ type: INCREMENT });

// Action creator for decrementing the counter
const decrementCounter = () => ({ type: DECREMENT });

// Action creator for reset the counter
const resetCounter = () => ({ type: RESET });

const counterReducer = (state = initialCounterState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    case RESET:
      // Decrement the count in the state
      return {
        ...state,
        count: 0,
      };

    default:
      return state;
  }
};

const store = createStore(counterReducer);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(incrementCounter());
store.dispatch(incrementCounter());
store.dispatch(decrementCounter());
store.dispatch(resetCounter());
