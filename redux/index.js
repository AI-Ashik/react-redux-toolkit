const { createStore } = require("redux");

// const INCREMENT = "INCREMENT";
// const DECREMENT = "DECREMENT";
// const RESET = "RESET";
// const INCREMENT_BY_VALUE = "INCREMENT_BY_VALUE";

const ADD_USER = "ADD_USER";

// Initial state for the counter
const initialCounterState = {
  count: 0,
  user: ["ashik"],
};

// Action creator for incrementing the counter
// const incrementCounter = () => ({ type: INCREMENT });

// Action creator for decrementing the counter
// const decrementCounter = () => ({ type: DECREMENT });

// Action creator for reset the counter
// const resetCounter = () => ({ type: RESET });

// Action creator for incrementing the counte by 2
// const incrementByValue = (value) => {
//   return {
//     type: INCREMENT_BY_VALUE,
//     payload: value,
//   };
// };

const addUser = (data) => {
  return {
    type: ADD_USER,
    payload: data,
  };
};

const counterReducer = (state = initialCounterState, action) => {
  switch (action.type) {
    // case INCREMENT:
    //   return {
    //     ...state,
    //     count: state.count + 1,
    //   };
    // case DECREMENT:
    //   return {
    //     ...state,
    //     count: state.count - 1,
    //   };
    // case INCREMENT_BY_VALUE:
    //   return {
    //     ...state,
    //     count: state.count + action.payload,
    //   };
    // case RESET:
    // Decrement the count in the state
    //   return {
    //     ...state,
    //     count: 0,
    //   };

    case ADD_USER:
      return {
        user: [...state.user, action.payload],
        count: state.count + 1,
      };

    default:
      return state;
  }
};

const store = createStore(counterReducer);

store.subscribe(() => {
  console.log(store.getState());
});

// store.dispatch(incrementCounter());
// store.dispatch(incrementCounter());
// store.dispatch(decrementCounter());
// store.dispatch(resetCounter());
// store.dispatch(incrementByValue(5));
// store.dispatch(incrementByValue(10));
store.dispatch(addUser("arman"));
