// import "./index.css";
// import Navbar from "./components/NavBar";
// import Hero from "./components/Hero";
// import About from "./components/About";
// import Products from "./components/Products";
// import Testimonials from "./components/Testimonials";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";
// import Ticker from "./components/Ticker";
// import Gallery from "./components/Gallery"
// import VisitorCounter from "./components/VisitCounter";
// import Downloads from "./components/Downloads";

// function App() {
//   return (
//     <>
//       <VisitorCounter />
//       <Navbar />
//       <main>
//         <Hero />
//         <About />
//         <Products />
//         <Testimonials />
//         <Gallery />
//         <Contact />
//         <Downloads />
//         <Footer />
//       </main>
//       <Ticker />
//     </>
//   );
// }

// export default App;
import './index.css';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/NavBar';
import Footer from './components/Footer';
import Ticker from './components/Ticker';
import VisitorCounter from './components/VisitCounter';

import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Testimonials from './pages/Testimonials';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Downloads from './pages/Downloads';
import Sitemap from './pages/Sitemap';
import Queries from './pages/Queries';
import Services from './pages/Services';

function App() {
  return (
    <>
      <VisitorCounter />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/downloads" element={<Downloads />} />
        <Route path="/sitemap" element={<Sitemap />} />
        <Route path="/queries" element={<Queries />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <Footer />
      <Ticker />
    </>
  );
}

export default App;
