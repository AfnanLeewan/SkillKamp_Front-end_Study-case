import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import ImageSlider from '../components/UI/ImageSlider/ImageSlider'
import NewArrival from '../components/NewArival'
import Button from '../components/UI/Button'
import Footer from '../components/Footer'

const Home = () => {
  const [NewArrivalProducts, setNewArrivalProducts] = useState([])
  useEffect(() => {
    fetch('https://skillkamp-api.com/v1/api/products')
      .then(response => response.json())
      .then(data => {
        const products = data.detail.data.catalog.category.productsWithMetaData.list
        setNewArrivalProducts(data)
        console.log(products)
      })
  }, [])
  return <React.Fragment>
    <Navbar/>
    <ImageSlider/>
    <NewArrival products={NewArrivalProducts} />
    <Button text='Shop All' icon='none' color='#282828'/>
    <Footer/>
    </React.Fragment>
}
export default Home
