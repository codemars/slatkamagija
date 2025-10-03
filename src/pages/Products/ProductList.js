import React from 'react';
import { Link } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation, Pagination } from 'swiper/modules';

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
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        slidesPerView={3}
        centeredSlides={true}
        loop={true}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 10 },
          640: { slidesPerView: 2, spaceBetween: 20 },
          768: { slidesPerView: 3, spaceBetween: 30 },
          1024: { slidesPerView: 3, spaceBetween: 40 },
        }}


        slidesOffsetBefore={45}
        className="product-carousel"
      >
        {products.map((product) => (
          <SwiperSlide key={product.id} className="product-slide">
            <div className="product-item">
              <Link to={`/Proizvodi/${product.slug}`}>
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
