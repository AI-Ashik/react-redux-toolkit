import { useDispatch } from "react-redux";
import { deleteTodoAsync, toggleCompleteAsync } from "../src/app/todoSlice";

// eslint-disable-next-line react/prop-types
const TodoItem = ({ id, title, completed }) => {
  const dispatch = useDispatch();

  const handleCheckboxChange = () => {
    dispatch(toggleCompleteAsync({ id, completed: !completed }));
  };

  const handleDeleteClick = () => {
    dispatch(deleteTodoAsync({ id }));
  };

  return (
    <li className={`list-group-item ${completed && "list-group-item-success"}`}>
      <div className="d-flex justify-content-between">
        <span className="d-flex align-items-center">
          <input
            type="checkbox"
            className="mr-3"
            checked={completed}
            onChange={handleCheckboxChange}
          ></input>
          {title}
        </span>
        <button onClick={handleDeleteClick} className="btn btn-danger">
          Delete
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
