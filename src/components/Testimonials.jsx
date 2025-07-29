import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import user1 from '../assets/images/user1.jpg';
import user2 from '../assets/images/user2.jpg';
import user3 from '../assets/images/user3.jpg';

const testimonials = [
  { id: 1, name: "Sarah Johnson", feedback: "Excellent quality!", image: user1 },
  { id: 2, name: "James Wilson", feedback: "Very reliable service.",  image: user2},
  { id: 3, name: "Michael Brown", feedback: "Packaging was top-notch!", image: user3 },
];

const Testimonials = () => {
  return (
    <section className="testimonials-section" id="testimonials">
      <h2 className="section-title">Reviews</h2>
      <div className="section-content">
        <div className="slider-container">
          <Swiper
            loop={true}
            pagination={{ clickable: true }}
            navigation={true}
            modules={[Navigation, Pagination]} // ✅ this is all you need now
            className="slider-wrapper"
          >
            {testimonials.map((t) => (
              <SwiperSlide className="testimonial" key={t.id}>
                <img src={t.image} alt={t.name} className="user-image" />
                <h3 className="name">{t.name}</h3>
                <p className="feedback">{t.feedback}</p>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
