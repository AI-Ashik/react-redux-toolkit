import { useDispatch, useSelector } from "react-redux";
import { decrement, increaseByAmount, increment, reset } from "./counterSlice";

const CounterView = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.count);
  return (
    <div>
      <h2>Count : {count}</h2>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
        disabled={count === 0}
      >
        Decrement
      </button>

      <button
        onClick={() => {
          dispatch(reset());
        }}
      >
        Reset
      </button>

      <button
        onClick={() => {
          dispatch(increaseByAmount(5));
        }}
      >
        increaseByAmount
      </button>
    </div>
  );
};

export default CounterView;
