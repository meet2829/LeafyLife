import React from 'react'
import { Carousel } from 'react-bootstrap';
import img1 from './img/banner1.jpg';
import img2 from './img/banner2.jpg';
import img3 from './img/banner3.jpg';


const Banner = () => {
  return (
    <div>

        <Carousel>
      <Carousel.Item>
        <img
          src={img1} style={{ width:'100%',height:'650px', borderRadius: '10px',backgroundSize:"100%" }}
          alt="Healthcare Facilities"
        />
        
      </Carousel.Item>

      <Carousel.Item>
        <img
          src={img2} style={{ width:'100%',height:'650px', borderRadius: '10px',backgroundSize:"100%" }}
          alt="Public Transportation"
        />
        
      </Carousel.Item>

      <Carousel.Item>
        <img
          src={img3} style={{ width:'100%',height:'650px', borderRadius: '10px',backgroundSize:"cover" }}
          alt="Educational Institutions"
        />
        
      </Carousel.Item>
      </Carousel> 
    </div>
  )
}

export default Banner
