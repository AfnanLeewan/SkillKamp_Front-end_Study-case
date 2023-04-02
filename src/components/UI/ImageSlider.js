import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import img1 from '../../assets/image/Banner1.png'
import img2 from '../../assets/image/Banner2.png'
import img3 from '../../assets/image/Banner3.png'
const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
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
