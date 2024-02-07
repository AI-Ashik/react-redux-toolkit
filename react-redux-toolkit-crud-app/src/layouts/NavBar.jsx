import styles from "./navbar.module.css"; // Import module-level CSS

const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <a href="/" className={styles.navLink}>
            Home
          </a>
        </li>
        <li className={styles.navItem}>
          <a href="/add-book" className={styles.navLink}>
            Add Book
          </a>
        </li>
        <li className={styles.navItem}>
          <a href="/show-books" className={styles.navLink}>
            Show Books
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
