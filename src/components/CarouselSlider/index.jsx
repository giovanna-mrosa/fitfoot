import React from "react";
import slideImg from '../../assets/carouselImg.jpg'
import slideImgMob from '../../assets/carouselImgMob.jpg'
import Carousel from 'react-elastic-carousel'

import './styles.scss'

export function CarouselSlider() {
  return (
    <Carousel 
      itemsToShow={1}
      className="carousel-container"
      showArrows={false}
      enableAutoPlay={true}
      autoPlaySpeed={3000}
    >     
      <img 
        src={window.screen.width > 768 ? slideImg : slideImgMob} 
        alt="Proposta de e-commerce" 
      />
      <img 
        src={window.screen.width > 768 ? slideImg : slideImgMob} 
        alt="Proposta de e-commerce" 
      />
      <img 
        src={window.screen.width > 768 ? slideImg : slideImgMob} 
        alt="Proposta de e-commerce" 
      />
    </Carousel>
  )
}