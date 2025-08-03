import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import React from 'react'
import Slider from 'react-slick'
import { list as people } from './data'
import { FaQuoteRight } from 'react-icons/fa'


const SlickCarousel = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  console.log(people);
  
  return (
    <section className='slick-container'>
      <Slider {...settings}>
        {people.map((person) => {

        const {id, image, name, title, quote } = person;
        return (
          <div key={id}>
            <img src={image} alt={title} className='person-img'/>
            <h5 className='name'>{name}</h5>
            <p className='title'>{title}</p>
            <p className='text'>{quote}</p>
            <FaQuoteRight className='icon'/>
          </div>
        )
      })}
      </Slider>
    </section>
  )
}
export default SlickCarousel
