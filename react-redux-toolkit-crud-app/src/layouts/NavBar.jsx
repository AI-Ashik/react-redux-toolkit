import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/show-books">Show Books</Link>
        <Link to="/add-book">Add Book</Link>
      </nav>
    </div>
  );
};

export default NavBar;
