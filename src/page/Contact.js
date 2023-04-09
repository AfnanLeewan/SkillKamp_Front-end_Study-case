import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import ContactUs from '../components/Contact'
const Contact = () => {
  return (
    <React.Fragment>
      <div style={{ zIndex: '2', position: 'relative' }}><Navbar/></div>
    <div style={{ zIndex: '1', position: 'relative' }}><ContactUs/></div>
    <Footer/>
    </React.Fragment>
  )
}
export default Contact
