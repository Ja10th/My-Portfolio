import React from "react";
import "./testimonial.css";
import AV1 from "../../assets/avatar1.jpg";
import AV2 from "../../assets/avatar2.jpg";
import AV3 from "../../assets/avatar3.jpg";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const testimonial = () => {
  const data = [
    {
      avatar: AV2,
      name: "Kahlida",
      review:
        "James was a pleasure to work with. He had the skills and expertise to complete the project and he worked very quickly! I look forward to another opportunity to work with him again. From Voluteering at CatchaFire",
    },
    {
      avatar: AV1,
      name: "Moniola School",
      review:
        "He's a professional. He designed our school websites to our taste and most importantly he's very fast in doing so. He works fast and provide quality projects",
    },
    {
      avatar: AV3,
      name: "FCHBM",
      review:
        "He worked on our church website and all we can say is we're grateful for the excellent work he did. Our messages was able to get through with members and people can connect back with us",
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
