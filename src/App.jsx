import './index.css';
import Navbar from './components/NavBar';
import Hero from './components/Hero';
// import AboutSection from './components/AboutSection';
// More components to come...

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        {/* <AboutSection /> */}
        {/* Add Products, Testimonials, Gallery, Contact, Footer later */}
      </main>
    </>
  );
}

export default App;
