import React from "react";
import "./Testimonials.css";
import AVTR1 from "../../Assets/avatar1.png";
import AVTR2 from "../../Assets/avatar2.jpeg";
import AVTR3 from "../../Assets/avatar3.jpeg";
import AVTR4 from "../../Assets/avatar4.jpeg";


import { Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR1,
    name: "Riya Sin",
    review:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique aspernatur dolor iusto tempore, sapiente itaque error accusamus eum voluptatem doloremque! Blanditiis quod, numquam iure odio illum corporis totam doloremque assumenda.",
  },
  {
    avatar: AVTR2,
    name: "loana min",
    review:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique aspernatur dolor iusto tempore, sapiente itaque error accusamus eum voluptatem doloremque! Blanditiis quod, numquam iure odio illum corporis totam doloremque assumenda.",
  },
  {
    avatar: AVTR3,
    name: "joe doel",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique aspernatur dolor iusto tempore, sapiente itaque error accusamus eum voluptatem doloremque! Blanditiis quod, numquam iure odio illum corporis totam doloremque assumenda.",
  },
  {
    avatar: AVTR4,
    name: "lim jose",
    review:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique aspernatur dolor iusto tempore, sapiente itaque error accusamus eum voluptatem doloremque! Blanditiis quod, numquam iure odio illum corporis totam doloremque assumenda.",
  },
];
const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
