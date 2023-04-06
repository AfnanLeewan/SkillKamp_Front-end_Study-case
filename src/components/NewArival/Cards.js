import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import './Cards.css'
import PropTypes from 'prop-types'
import CustomNextArrow from './CustomNextArrow'
import CustomPrevArrow from './CustomPrevArrow'
import Card from './Card'

// const cards = [
//   {
//     image: 'image1.jpg',
//     description: 'Description 1',
//     button: 'Button 1'
//   },
//   {
//     image: 'image2.jpg',
//     description: 'Description 2',
//     button: 'Button 2'
//   },
//   {
//     image: 'image3.jpg',
//     description: 'Description 3',
//     button: 'Button 3'
//   },
//   {
//     image: 'image4.jpg',
//     description: 'Description 4',
//     button: 'Button 4'
//   },
//   {
//     image: 'image4.jpg',
//     description: 'Description 4',
//     button: 'Button 4'
//   }
//   // Add more cards as needed
// ]

function CardSlider (props) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />
  }
  const [NewArrivalProducts, setNewArrivalProducts] = useState([])
  useEffect(() => {
    fetch('https://skillkamp-api.com/v1/api/products/new_arrivals')
      .then(response => response.json())
      .then(data => {
        const products = data.detail.data.catalog.category.productsWithMetaData.list
        setNewArrivalProducts(products)
        console.log(products)
      })
  }, [])
  return (
    <div className="card-slider">
      <Slider {...settings}>
        {NewArrivalProducts.map((card, index) => {
          return (
            <Card key={card.id} sku={card.sku} mediaUrl={card.media[0].url} name={card.name} description={card.description} price={card.formattedPrice}/>
          )
        })}
      </Slider>
    </div>
  )
}
CardSlider.propTypes = {
  products: PropTypes.array
}
export default CardSlider
