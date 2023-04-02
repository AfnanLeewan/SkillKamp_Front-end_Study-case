/* eslint-disable react/prop-types */
import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import img1 from '../../../assets/image/Banner1.png'
import img2 from '../../../assets/image/Banner2.png'
import img3 from '../../../assets/image/Banner3.png'
const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props
  return (
      <div className={className} style={{ ...style, display: 'block' }} onClick={onClick}>
        <span className="material-icons">arrow_back_ios</span>
      </div>
  )
}

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props
  return (
      <div className={className} style={{ ...style, display: 'block' }} onClick={onClick}>
        <span className="material-icons">arrow_forward_ios</span>
      </div>
  )
}
const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />
  }

  return (
    <Slider {...settings}>
      <div>
        <img src={img1}alt="slide 1" />
      </div>
      <div>
        <img src={img2} alt="slide 2" />
      </div>
      <div>
        <img src={img3} alt="slide 3" />
      </div>
    </Slider>
  )
}
export default ImageSlider
