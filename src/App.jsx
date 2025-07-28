import './index.css';
import Navbar from './components/NavBar';
import Hero from './components/Hero';
import About from './components/About';
// More components to come...

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        {/* Add Products, Testimonials, Gallery, Contact, Footer later */}
      </main>
    </>
  );
}

export default App;
