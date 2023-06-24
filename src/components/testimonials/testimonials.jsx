import React, {useEffect, useState} from 'react';
import axios from 'axios';
import "./testimonials.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Scrollbar, A11y } from 'swiper';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import 'swiper/css';
import 'swiper/css/pagination';


function Testimonial() {

  const [input, setInput] = useState({
    avatar: '',
    name:'',
    review:''    
  })

function handleChange(event){
  const{name, value}=event.target;

  setInput(prevInput => {
    return{
      ...prevInput,
      [name]:value
    }
  })
}

function handleClick(event){
  event.preventDefault();
  console.log(input);
  const newUser ={
    avatar: input.avatar,
    name: input.name,
    review: input.review,      
  }
  //Address of the backend server to post our data
  axios.post('https://nguepi-backend.cyclic.app/api/create', newUser)
  alert("Testimonial Sent successfully");
}

const handleSubmit = (e) => {
  e.preventDefault();
}

const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  }



  const[data, setData] = useState([]);

  useEffect(()=> {
    axios.get("https://nguepi-backend.cyclic.app/api/take").then(response => {
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

      <Popup trigger ={
  <button onClick={togglePopup} 
  className="btn" id='tes'>Testify</button>}
  modal nested>{
    close => (
      <div className="main-1">
<div className="main-form2">
  <div className="form2">
    <form onSubmit={handleSubmit}>
    <h2 className="GIT">Get in touch</h2>
    <h4>Avatar</h4>

    <input
      className = "avatar" 
      type="text"
      name="avatar"
      value={input.avatar}
      autoComplete="off"
      placeholder="Avatar-image link"
      onChange={handleChange}
      required
    />

    <h4>Name</h4>

    <input
      className = "name" 
      type="text"
      name="name"
      value={input.name}
      autoComplete="off"
      placeholder="Name"
      onChange={handleChange}
      required
    />

    <h4> Your Review </h4>

    <input 
      className = "review"
      type="text"
      value={input.review}
      required
      name="review"
      placeholder = "Review" 
      onChange={handleChange}
    />
      <button type="submit" onClick={handleClick}
      className="btn-1 btn-primary-1">
      Submit</button>
    </form>
  </div>
</div>
</div>
)
  }
</Popup>
    </section>


  );
}

export default Testimonial;
