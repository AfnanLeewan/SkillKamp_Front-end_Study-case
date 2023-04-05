import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

import GoogleLogin from 'react-google-login'

const ShopCollection = () => {
  return (
    <React.Fragment>
    <Navbar/>
    <GoogleLogin/>
    <Footer/>
    </React.Fragment>
  )
}
export default ShopCollection
