import "./index.css";
import Navbar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Products from "./components/Products";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Ticker from "./components/Ticker";
import VisitorCounter from "./components/VisitCounter";

function App() {
  return (
    <>
      <VisitorCounter />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Products />
        <Testimonials />
        <Contact />
        <Footer />
      </main>
      <Ticker />
    </>
  );
}

export default App;
