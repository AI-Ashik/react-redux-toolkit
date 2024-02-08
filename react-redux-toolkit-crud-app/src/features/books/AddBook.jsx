import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styles from "./addBook.module.css";
import { addBook } from "./bookSlice";

const AddBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const numberOfBooks = useSelector((state) => state.bookReducer.books.length);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const book = { id: numberOfBooks + 1, title, author };
    dispatch(addBook(book));
    navigate("/show-books", { replace: true });
  };

  return (
    <div className={styles.addBookContainer}>
      <h2 style={{ textAlign: "center" }}>Add Books</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.formField}>
          <label htmlFor="title" className={styles.label}>
            Title :{" "}
          </label>
          <input
            className={styles.inputText}
            type="text"
            name="title"
            id="title"
            value={title}
            required
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className={styles.formField}>
          <label htmlFor="author" className={styles.label}>
            Author :{" "}
          </label>
          <input
            className={styles.inputText}
            type="text"
            name="author"
            id="author"
            value={author}
            required
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <button className={styles.submitButton} type="submit">
          Add book
        </button>
      </form>
    </div>
  );
};

export default AddBook;
