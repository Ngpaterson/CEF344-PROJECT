import React, {useEffect, useState} from 'react';
import axios from 'axios';
import "./testimonials.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Scrollbar, A11y } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';


const Testimonial = () => {

  const[data, setData] = useState([]);

  useEffect(()=> {
    axios.get("https://nguepi-backend.cyclic.app/api/testimonial").then(response => {
      const formattedData = response.data.data.map(item => ({
        id: item._id,
        avatar: item.avatar,
        name: item.name,
        review: item.review
      }));
      setData(formattedData)
    }).catch(error => {
      console.log("Error fetching portfolio data:", error);
    })
  }, [])
  
  return (
    <section id="testimonial">
      <h5>Review from client</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      modules={[Pagination, Navigation, Scrollbar, A11y]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      >
        {data.map(({id, avatar, name, review}) => (
            <SwiperSlide key={id} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt= {name} />
              </div>
              <h5 className="client__name"> {name} </h5>
              <small className="client__review"> {review} </small>
            </SwiperSlide>
          
        ))}
      </Swiper>
    </section>
  );
};
export default Testimonial;
