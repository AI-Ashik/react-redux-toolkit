const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const ADD_USER = "ADD_USER";

const initialCounterState = {
  counter: 0,
};

// action - Object(2) - type, payload
const incrementCounter = () => {
  return {
    type: INCREMENT,
  };
};



const decrementCounter = () => {
  return {
    type: DECREMENT,
  };
};

const counterReducer = (state = initialCounterState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.counter + 1,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.counter - 1,
      };

    default:
      return state;
  }
};
