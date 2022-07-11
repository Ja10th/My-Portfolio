import React from "react";
import "./testimonial.css";
import AV1 from "../../assets/avatar1.jpg";
import AV2 from "../../assets/avatar2.jpg";
import AV3 from "../../assets/avatar3.jpg";
import AV4 from "../../assets/avatar4.jpg";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const testimonial = () => {
  const data = [
    {
      avatar: AV1,
      name: "Mark Weblow",
      review:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum nihil officiis, incidunt vel, necessitatibus esse voluptates tenetur, eligendi voluptas explicabo maiores perferendis labor vitae id ea natus minus est? Optio!",
    },
    {
      avatar: AV2,
      name: "Tina Snow",
      review:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum nihil officiis, incidunt vel, necessitatibus esse voluptates tenetur, eligendi voluptas explicabo maiores perferendis labor vitae id ea natus minus est? Optio!",
    },
    {
      avatar: AV3,
      name: "Marcus Eddie",
      review:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum nihil officiis, incidunt vel, necessitatibus esse voluptates tenetur, eligendi voluptas explicabo maiores perferendis labor vitae id ea natus minus est? Optio!",
    },
    {
      avatar: AV4,
      name: "Angela Beth",
      review:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum nihil officiis, incidunt vel, necessitatibus esse voluptates tenetur, eligendi voluptas explicabo maiores perferendis labor vitae id ea natus minus est? Optio!",
    },
  ];
  return (
    <section id="testimonial">
      <h5>Review from client</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}>
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="avatar1" />
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

export default testimonial;
