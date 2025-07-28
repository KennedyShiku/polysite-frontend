// import product1 from '../assets/images/product1.jpg';
// import product2 from '../assets/images/product2.jpg';
// import product3 from '../assets/images/product3.jpg';
// import product4 from '../assets/images/product4.jpg';
// import product5 from '../assets/images/product5.jpg';
// import product6 from '../assets/images/product6.jpg';

const products = [
  { id: 1, name: "Bottle A", text: "High quality PET bottle",  },
  { id: 2, name: "Jar B", text: "Durable for household use",  },
  { id: 3, name: "Bottle C", text: "Eco-friendly option",  },
  { id: 4, name: "Jar D", text: "Leak-proof design",  },
  { id: 5, name: "Bottle E", text: "Compact and stylish",  },
  { id: 6, name: "Jar F", text: "Chemical resistant",  },
];

const Products = () => {
  return (
    <section className="menu-section" id="menu">
      <h2 className="section-title">Our Products</h2>
      <div className="section-content">
        <ul className="menu-list">
          {products.map(product => (
            <li className="menu-item" key={product.id}>
              <img src={product.image} alt={product.name} className="menu-image" />
              <h3 className="name">{product.name}</h3>
              <p className="text">{product.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Products;
