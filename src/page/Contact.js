import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
const Contact = () => {
  return (
    <React.Fragment>
    <Navbar/>
    <h2 style={
        {
          textAlign: 'center',
          fontFamily: 'brandon_reg',
          letterSpacing: '3px',
          fontSize: '30px',
          marginTop: '30px',
          marginBottom: '30px'
        }}>Contact Us</h2>
    <Footer/>
    </React.Fragment>
  )
}
export default Contact
