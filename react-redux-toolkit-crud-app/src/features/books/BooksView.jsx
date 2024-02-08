import { useDispatch, useSelector } from "react-redux";
import { deleteBook } from "./bookSlice";
import styles from "./booksView.module.css"; // Import module-level CSS

const BooksView = () => {
  const books = useSelector((state) => state.bookReducer.books);
  const dispatch = useDispatch();

  const handleDeleBook = (id) => {
    dispatch(deleteBook(id));
  };

  return (
    <div style={{ height: "80vh" }}>
      <h2>Books List</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Author</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {books &&
            books.map((book) => {
              const { id, title, author } = book;
              return (
                <tr key={id}>
                  <td>{id}</td>
                  <td>{title}</td>
                  <td>{author}</td>
                  <td>
                    <button className={`${styles.button} ${styles.edit}`}>
                      Edit
                    </button>
                    <button
                      className={`${styles.button} ${styles.delete}`}
                      onClick={() => {
                        handleDeleBook(id);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default BooksView;
