import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styles from "./addBook.module.css";
import { addBook } from "./bookSlice";

const AddBook = () => {
  // State for the book title and author
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  // Retrieve the number of books from the Redux store
  const numberOfBooks = useSelector((state) => state.bookReducer.books.length);

  // Dispatch function for Redux actions
  const dispatch = useDispatch();

  // Navigate to another route
  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new book object
    const newBook = {
      id: numberOfBooks + 1, // Generate ID based on the number of books
      title: title,
      author: author,
    };

    // Dispatch the addBook action with the new book object
    dispatch(addBook(newBook));

    // Navigate to the "/show-books" route after adding the book
    navigate("/show-books");
  };

  return (
    <div className={styles.addBookContainer}>
      <h2 style={{ textAlign: "center" }}>Add Books</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.formField}>
          <label htmlFor="title" className={styles.label}>
            Title:
          </label>
          <input
            className={styles.inputText}
            type="text"
            name="title"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className={styles.formField}>
          <label htmlFor="author" className={styles.label}>
            Author:
          </label>
          <input
            className={styles.inputText}
            type="text"
            name="author"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>
        <button className={styles.submitButton} type="submit">
          Add Book
        </button>
      </form>
    </div>
  );
};

export default AddBook;
