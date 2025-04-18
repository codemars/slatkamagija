import React from 'react';
import { Link } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation, Pagination, EffectCoverflow, Mousewheel } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

import products from '../../data/products';
import '../../styles/ProductsStyle.css';

const ProductList = () => {


  return (
    <div className="product-carousel-container">
      <h2 className="carousel-title">Naši proizvodi</h2>
      <Swiper
        modules={[Navigation, Pagination, EffectCoverflow, Mousewheel]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={3}
        effect="coverflow"
        coverflowEffect={{
          rotate: 20,
          slideShadows: false,
          depth: 100,
        }}
        breakpoints={{
       
      // Ekrani od 320px do 639px
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    // Ekrani od 640px do 767px
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // Ekrani od 768px do 1023px
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    // Ekrani 1024px i širi
    1024: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  }}
        
        mousewheel={true} 
        
        slidesOffsetBefore={45}
        className="product-carousel"
      >
        {products.map((product) => (
          <SwiperSlide key={product.id} className="product-slide">
            <div className="product-item">
              <Link to={`/proizvod/${product.id}`}>
                <img src={product.image} alt={product.name} className="product-image" loading="lazy" />
              </Link>
              <div className="product-details">
                <h5 className="product-name">{product.name}</h5>
               
              </div>

              
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    
    </div>
  );
};

export default ProductList;
