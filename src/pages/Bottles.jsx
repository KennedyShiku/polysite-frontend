import bottle1 from '../assets/images/product1.jpg';
import bottle2 from '../assets/images/product3.jpg';
import bottle3 from '../assets/images/product5.jpg';

const bottles = [
  {
    id: 1,
    name: 'Bottle A',
    text: 'High quality PET bottle - 500ml - KES 25',
    image: bottle1,
  },
  {
    id: 2,
    name: 'Bottle C',
    text: 'Eco-friendly option - 750ml - KES 30',
    image: bottle2,
  },
  {
    id: 3,
    name: 'Bottle E',
    text: 'Compact and stylish - 1L - KES 40',
    image: bottle3,
  },
];

const Bottles = () => {
  return (
    <section className="menu-section" id="bottles">
      <div className="section-content">
        <nav className="breadcrumb" aria-label="breadcrumb">
          <p>
            <a href="/">Home</a> &gt; <a href="/products">Products</a> &gt; Bottles
          </p>
        </nav>
        <h2 className="section-title">Plastic Bottles</h2>
        <div className="product-grid">
          {bottles.map((bottle, index) => (
            <div className="product-card" key={bottle.id} data-aos="fade-up" data-aos-delay={index * 100}>
              <img src={bottle.image} alt={bottle.name} className="product-image" />
              <h3 className="name">{bottle.name}</h3>
              <p className="text">{bottle.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bottles;
