import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddBook from "../features/books/AddBook";
import BooksView from "../features/books/BooksView";
import Error from "../pages/Error";
import Home from "../pages/Home";

const Index = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/show-books" element={<BooksView />} />
          <Route path="/add-book" element={<AddBook />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Index;
