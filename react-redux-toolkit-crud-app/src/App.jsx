import Footer from "./layouts/Footer";
import NavBar from "./layouts/NavBar";
import Index from "./routes";

function App() {
  return (
    <>
      <h2>
        <NavBar />
        <Index />
        <Footer />
      </h2>
    </>
  );
}

export default App;
