import React from 'react'
import Navbar from '../components/Navbar'
import ImageSlider from '../components/UI/ImageSlider/ImageSlider'
import NewArrival from '../components/NewArival'
import Button from '../components/UI/Button'
import Footer from '../components/Footer'
import fbicon from '../assets/image/Icon/Social icons/facebook-svgrepo-com.svg'
import ptricon from '../assets/image/Icon/Social icons/pinterest-svgrepo-com.svg'
import igicon from '../assets/image/Icon/Social icons/instagram-svgrepo-com.svg'
import { NavLink } from 'react-router-dom'
const Home = () => {
  return <React.Fragment>
    <Navbar/>
    <ImageSlider/>
    <NewArrival/>
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <NavLink to={'/shop-collection'}><Button text='Shop All' icon='none' color='#282828'/></NavLink>
    </div>
    <div style={{ position: 'fixed', right: '3vh', bottom: '40vh' }}>
      <ul style={{ listStyle: 'none' }}>
        <li style={{ marginTop: '10px', cursor: 'pointer' }} ><img width='20px' src={fbicon}/></li>
        <li style={{ marginTop: '20px', cursor: 'pointer' }} ><img width='20px' src={ptricon}/></li>
        <li style={{ marginTop: '20px', cursor: 'pointer' }}> <img width='20px' src={igicon}/></li>
      </ul>
    </div>
    <Footer/>
    </React.Fragment>
}
export default Home
