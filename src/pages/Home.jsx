import Hero from '../components/Hero';
import Feedback from '../components/Feedback';
import Sitemap from '../components/Sitemap';
import Ticker from '../components/Ticker';
import VisitorCounter from '../components/VisitCounter';

const Home = () => {
  return (
    <>
      <VisitorCounter />
      <Hero />
      <Feedback />
      <Sitemap />
      <Ticker />
    </>
  );
};

export default Home;
