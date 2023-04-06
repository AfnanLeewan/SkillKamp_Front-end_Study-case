/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './ImageSlider.css'
import img1 from '../../../assets/image/Banner1.png'
import img2 from '../../../assets/image/Banner2.png'
import img3 from '../../../assets/image/Banner3.png'
import rightArrow from '../../../assets/image/Icon/angle-right-solid.svg'
import leftArrow from '../../../assets/image/Icon/angle-left-solid.svg'
const images = [
  { src: img1, caption: 'Image 1' },
  { src: img2, caption: 'Image 2' },
  { src: img3, caption: 'Image 3' }
]
function ImageSlider () {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((currentImage + 1) % images.length)
    }, 10000)

    return () => {
      clearInterval(timer)
    }
  }, [currentImage])
  function handlePrevious () {
    setCurrentImage((currentImage - 1 + images.length) % images.length)
  }

  function handleNext () {
    setCurrentImage((currentImage + 1) % images.length)
  }

  return (

          <div className="slider">
            {currentImage === 2 && <div className='image-container'>
                  <div className='label-image'>
                    <h1>NEW COLLECTION</h1>
                      <button>Shop Now</button>
                  </div>
                </div>}

      <button className="prev" onClick={handlePrevious}>
        <img src={leftArrow}/>
      </button>
      <button className="next" onClick={handleNext}>
        <img src={rightArrow}/>
      </button>
      <div className="slider-content">
        <img src={images[currentImage].src} alt={images[currentImage].caption} />
      </div>
    </div>

  )
}
export default ImageSlider
