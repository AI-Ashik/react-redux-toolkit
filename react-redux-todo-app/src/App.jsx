import "bootstrap/dist/css/bootstrap.min.css";
import AddTodoForm from "../components/AddTodoForm";
import TodoList from "../components/TodoList";
import TotalCompleteItems from "../components/TotalCompletedItems";

function App() {
  return (
    <div className="container bg-white p-4 mt-5">
      <h2>hello world</h2>
      <AddTodoForm />
      <TodoList />
      <TotalCompleteItems />
    </div>
  );
}

export default App;
