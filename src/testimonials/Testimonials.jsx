import React from "react";
import "./testimonials.css";
import AVTR1 from "../../src/assets/E3F9E6EF-5FE9-4EDD-93C0-E011D7A485BB.webp";
import AVTR2 from "../../src/assets/avatar2.jpg";
import AVTR3 from "../../src/assets/avatar3.jpg";
import AVTR4 from "../../src/assets/avatar4.jpg";
import AVTR5 from "../../src/assets/sujon.jpg";
import AVTR6 from "../../src/assets/kyle.jpg";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

function Testimonials() {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR1} alt="avtar one" />
          </div>
          <h5 className="client__name">Rafaelfranco21</h5>
          <small className="client__review">
          Great work! Good communication! Thanks.
          </small>
        </SwiperSlide>

        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR5} alt="avtar five" />
          </div>
          <h5 className="client__name">Sujon Chakraborti</h5>
          <small className="client__review">
          Working with Udayan has been an absolute pleasure! From start to finish, he demonstrated professionalism, technical expertise, and a clear understanding of our requirements. The website he developed for us exceeded our expectations in both design and functionality. Udayan was incredibly responsive to our feedback and made the whole process smooth and hassle-free. We highly recommend him for any web development projects and look forward to collaborating again in the future!
          </small>
        </SwiperSlide>

        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR6} alt="avtar six" />
          </div>
          <h5 className="client__name">Kyle</h5>
          <small className="client__review">
          Udayan delivered an outstanding website that perfectly aligns with our brand vision. His attention to detail and creativity really stood out throughout the project. He kept us updated at every stage, and any revisions we requested were handled swiftly and professionally. The final result is a modern, user-friendly site that has already received positive feedback from our customers. We’re thrilled with the outcome and would gladly recommend Udayan to anyone looking for a skilled web developer.
          </small>
        </SwiperSlide>

        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR2} alt="avtar two" />
          </div>
          <h5 className="client__name">Yantri</h5>
          <small className="client__review">
          Working with Udayan was an absolute pleasure! Their web development expertise transformed our outdated website into a modern, user-friendly platform. 
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR3} alt="avtar three" />
          </div>
          <h5 className="client__name">Rolfavarga954</h5>
          <small className="client__review">
          We were looking for a reliable web development partner and found just that with Udayan. They not only delivered a visually stunning website but also ensured it's highly functional and optimized for performance.
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR4} alt="avtar four" />
          </div>
          <h5 className="client__name">Hiya</h5>
          <small className="client__review">
          I approached Udayan for a website redesign, and I am thrilled with the results! They completely revamped our website, giving it a fresh look and improving its functionality..
          </small>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default Testimonials;
