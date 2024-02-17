import { Link } from "react-router-dom";
import styles from "./navbar.module.css"; // Import module-level CSS

const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <Link className={styles.navItem} to="/">
          <p className={styles.navLink}>Home</p>
        </Link>
        <Link to="/add-book" className={styles.navItem}>
          <p className={styles.navLink}>Add Book</p>
        </Link>
        <Link className={styles.navItem} to="/show-books">
          <p className={styles.navLink}>Show Books</p>
        </Link>
      </ul>
    </nav>
  );
};

export default NavBar;
