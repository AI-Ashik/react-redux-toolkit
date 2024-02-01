import { useDispatch, useSelector } from "react-redux";
import {
  counterDecrement,
  counterIncrement,
  counterReset,
} from "./services/actions/counterActions";

function App() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch(counterIncrement());
  };
  const handleDecrement = () => {
    dispatch(counterDecrement());
  };
  const handleReset = () => {
    dispatch(counterReset());
  };

  return (
    <>
      <h2>Counter App</h2>

      <h3>Count : {count}</h3>

      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement} disabled={count === 0}>
        Decrement
      </button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
}

export default App;
