import "./App.css";
import CounterView from "./features/counter/CounterView";
import PostsView from "./posts/PostsView";

function App() {
  return (
    <>
      <h2 id="root">Counter App</h2>
      <CounterView />
      <PostsView />
    </>
  );
}

export default App;
