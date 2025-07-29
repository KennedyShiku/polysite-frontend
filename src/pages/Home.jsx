import Hero from '../components/Hero';
import About from '../components/About';
import Products from '../components/Products';
import Testimonials from '../components/Testimonials';
import Gallery from '../components/Gallery';
import Contact from '../components/Contact';
import Downloads from '../components/Downloads';
import Feedback from '../components/Feedback'; 
import Ticker from '../components/Ticker';
import VisitorCounter from '../components/VisitCounter';

const Home = () => {
  return (
    <>
      <VisitorCounter />
      <Hero />
      <About />
      <Products />
      <Testimonials />
      <Gallery />
      <Feedback /> 
      <Contact />
      <Downloads />
      <Ticker />
    </>
  );
};

export default Home;
