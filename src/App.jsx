import About from "./components/About";
import Get from "./components/Get";
import Home from "./components/Hone";
import Product from "./components/Praduct";
import Review from "./components/Review";
import Footer from "./pages/Footer";
import Navbar from "./pages/Navbar";

function App() {
  return (
    <>
      <div>
        <div className="nav_hone">
          <Navbar />
          <Home />
        </div>

        <Product />
        <About />
        <Review />
        <Get />
        <Footer />
      </div>
    </>
  );
}

export default App;
