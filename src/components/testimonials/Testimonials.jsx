import React from 'react'
import './testimonials.css'
import data from '../testimonials/data'

//Swiper Core Modules
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

//Swiper Styles
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>O que falam sobre mim</h5>
      <h2>Depoimentos</h2>

      <Swiper className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {
          data.map(({ image, clientName, clientReview }, index) => (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={image} alt="Avatar One" />
              </div>
              <h5 className='client__name'>{clientName}</h5>
              <small className='client__review'>
                {clientReview}
              </small>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </section>
  )
}

export default Testimonials