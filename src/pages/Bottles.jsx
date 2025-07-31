import bottle1 from "../assets/images/product1.jpg";
import bottle2 from "../assets/images/product3.jpg";

const bottleProducts = [
  {
    name: "PET Bottle 500ml",
    text: "Durable PET bottle with 500ml capacity. Ideal for beverages and chemicals.",
    image: bottle1,
  },
  {
    name: "HDPE Bottle 1L",
    text: "High-density polyethylene bottle with secure cap and 1-liter capacity.",
    image: bottle2,
  },
];

const Bottles = () => {
  return (
    <section className="menu-section" id="bottles">
      <h2 className="section-title">Bottle Products</h2>
      <div className="product-grid section-content">
        {bottleProducts.map((bottle, index) => (
          <div
            className="product-card"
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 150}
          >
            <img src={bottle.image} alt={bottle.name} className="product-image" />
            <h3 className="name">{bottle.name}</h3>
            <p className="text">{bottle.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Bottles;
