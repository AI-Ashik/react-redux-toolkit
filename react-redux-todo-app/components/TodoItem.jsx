import { useDispatch } from "react-redux";
import { toggleComplete } from "../src/app/todoSlice";

// eslint-disable-next-line react/prop-types
const TodoItem = ({ id, title, completed }) => {
  const dispatch = useDispatch();

  const handleCompleteChange = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    dispatch(
      toggleComplete({
        id: id,
        completed: !completed,
      })
    );
  };

  return (
    <li className={`list-group-item ${completed && "list-group-item-success"}`}>
      <div className="d-flex justify-content-between">
        <span className="d-flex align-items-center">
          <input
            type="checkbox"
            className="mr-3"
            onChange={handleCompleteChange}
          />
          {title}
        </span>
        <button className="btn btn-danger">Delete</button>
      </div>
    </li>
  );
};

export default TodoItem;
