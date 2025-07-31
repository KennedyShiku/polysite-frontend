import "./index.css";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import Ticker from "./components/Ticker";
import VisitorCounter from "./components/VisitCounter";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import About from "./pages/AboutContact";
import Products from "./pages/Products";
import Reviews from "./pages/Reviews";
import Gallery from "./pages/Gallery";
import Queries from "./pages/Queries";
import Services from "./pages/Services";
import Bottles from "./pages/Bottles";
import Jars from "./pages/Jars";


function App() {
  return (
    <>
      <div className="site-wrapper">
        <ScrollToTop />
        <VisitorCounter />
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/queries" element={<Queries />} />
            <Route path="/services" element={<Services />} />
            <Route path="/products/bottles" element={<Bottles />} />
            <Route path="/products/jars" element={<Jars />} />
          </Routes>
        </main>
        <Footer />
      </div>
      <Ticker />
    </>
  );
}

export default App;
