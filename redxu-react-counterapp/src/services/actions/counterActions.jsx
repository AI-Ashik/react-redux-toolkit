import { DECREMENT, INCREMENT, RESET } from "../costants/counterConstants";

export const counterIncrement = () => {
  return {
    type: INCREMENT,
  };
};

export const counterDecrement = () => {
  return {
    type: DECREMENT,
  };
};

export const counterReset = () => {
  return {
    type: RESET,
  };
};
