import "tailwindcss/tailwind.css";
const NavBar = () => {
  return (
    <div>
      <nav>
        <ul>
          <li className="bg-red-600">
            <a href="/">Home</a>
          </li>

          <li>
            <a href="/add-book">Add Book</a>
          </li>

          <li>
            <a href="/books-view">Show Books</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
