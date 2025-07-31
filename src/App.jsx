import "./index.css";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import Ticker from "./components/Ticker";
import VisitorCounter from "./components/VisitCounter";

import Home from "./pages/Home";
import About from "./pages/About"; 
import Products from "./pages/Products";
import Testimonials from "./pages/Testimonials"; 
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact"; 
import Queries from "./pages/Queries";
import Services from "./pages/Services";

import ScrollToTop from "./components/ScrollToTop";

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
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/queries" element={<Queries />} />
            <Route path="/services" element={<Services />} />
          </Routes>
        </main>
        <Footer />
      </div>
      <Ticker />
    </>
  );
}

export default App;
