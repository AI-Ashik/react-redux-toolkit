import { BrowserRouter, Route, Routes } from "react-router-dom";
import Error from "../pages/Error";
import Home from "../pages/Home";

const Index = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Index;
