import jar1 from '../assets/images/product2.jpg';
import jar2 from '../assets/images/product4.jpg';
import jar3 from '../assets/images/product6.jpg';

const jars = [
  {
    id: 1,
    name: 'Jar B',
    text: 'Durable for household use - 250ml - KES 20',
    image: jar1,
  },
  {
    id: 2,
    name: 'Jar D',
    text: 'Leak-proof design - 500ml - KES 35',
    image: jar2,
  },
  {
    id: 3,
    name: 'Jar F',
    text: 'Chemical resistant - 750ml - KES 45',
    image: jar3,
  },
];

const Jars = () => {
  return (
    <section className="menu-section" id="jars">
      <div className="section-content">
        <nav className="breadcrumb" aria-label="breadcrumb">
          <p>
            <a href="/">Home</a> &gt; <a href="/products">Products</a> &gt; Jars
          </p>
        </nav>
        <h2 className="section-title">Plastic Jars</h2>
        <div className="product-grid">
          {jars.map((jar, index) => (
            <div className="product-card" key={jar.id} data-aos="fade-up" data-aos-delay={index * 100}>
              <img src={jar.image} alt={jar.name} className="product-image" />
              <h3 className="name">{jar.name}</h3>
              <p className="text">{jar.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Jars;
