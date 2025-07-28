import g1 from '../assets/images/gallery1.jpg';
import g2 from '../assets/images/gallery2.jpg';
import g3 from '../assets/images/gallery3.jpg';
import g4 from '../assets/images/gallery4.jpg';
import g5 from '../assets/images/gallery5.jpg';
import g6 from '../assets/images/gallery6.jpg';

const galleryImages = [g1, g2, g3, g4, g5, g6];

const Gallery = () => {
  return (
    <section className="gallery-section" id="gallery">
      <h2 className="section-title">Gallery</h2>
      <div className="section-content">
        <ul className="gallery-list">
          {galleryImages.map((img, index) => (
            <li className="gallery-item" key={index}>
              <img src={img} alt={`Gallery ${index + 1}`} className="gallery-image" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Gallery;
