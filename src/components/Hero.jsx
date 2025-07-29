// import heroImage from '../assets/images/heroImage.jpg';

// const HeroSection = () => {
//   return (
//     <section className="hero-section">
//       <div className="section-content">
//         <div className="hero-details">
//           <h2 className="title" data-aos="fade-up">Best Polysite</h2>
//           <h3 className="subtitle" data-aos="fade-up" data-aos-delay="300">Premium Bottle Manufacturing!</h3>
//           <p className="description" data-aos="fade-up" data-aos-delay="400">
//             Specializing in PET, PP and PC bottles for diverse industries.
//           </p>
//           <div className="button" data-aos="fade-up" data-aos-delay="500">
//             <a href="#" className="button order-now">Order Now</a>
//             <a href="#contact" className="button contact-us">Contact Us</a>
//           </div>
//         </div>
//         <div className="hero-image-wrapper">
//           <img src={heroImage} alt="Hero" className="hero-image" />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import hero1 from '../assets/images/gallery2.jpg';
import hero2 from '../assets/images/pic2.jpg';
import hero3 from '../assets/images/gallery6.jpg';
import hero4 from '../assets/images/product2.jpg';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="section-content">
        <div className="hero-details">
          <h2 className="title" data-aos="fade-up">Best Polysite</h2>
          <h3 className="subtitle" data-aos="fade-up" data-aos-delay="300">
            Premium Bottle Manufacturing!
          </h3>
          <p className="description" data-aos="fade-up" data-aos-delay="400">
            Specializing in PET, PP and PC bottles for diverse industries.
          </p>
          <div className="button" data-aos="fade-up" data-aos-delay="500">
            <a href="#" className="button order-now">Order Now</a>
            <a href="#contact" className="button contact-us">Contact Us</a>
          </div>
        </div>

        <div className="hero-image-wrapper">
          <Swiper
            modules={[Autoplay, Pagination, EffectFade]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            effect="fade"
            pagination={{ clickable: true }}
            className="hero-swiper"
          >
            {[hero1, hero2, hero3, hero4].map((img, index) => (
              <SwiperSlide key={index}>
                <img src={img} alt={`Hero ${index + 1}`} className="hero-image" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
