import React from 'react'
import Navbar from '../components/Navbar'
import ImageSlider from '../components/UI/ImageSlider/ImageSlider'
import NewArrival from '../components/NewArival'
import Button from '../components/UI/Button'
import Footer from '../components/Footer'

const Home = () => {
  return <React.Fragment>
    <Navbar/>
    <ImageSlider/>
    <NewArrival/>
    <Button text='Shop All' icon='none' color='#282828'/>
    <Footer/>
    </React.Fragment>
}
export default Home
