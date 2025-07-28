import './index.css';
import Navbar from './components/NavBar';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Products />
        <Testimonials />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;
