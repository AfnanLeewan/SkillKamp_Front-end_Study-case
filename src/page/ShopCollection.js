import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import FilterCard from '../components/FilterCard'
import Collection from '../components/ProductCollection'

const ShopCollection = () => {
  return (
    <React.Fragment>
    <Navbar/>
    <div style={ { display: 'flex' } }>
      <div style={{ width: '700px' }}><FilterCard/></div>
      <div style={{ height: '70%' }}><Collection/></div>
    </div>

    <Footer/>
    </React.Fragment>
  )
}
export default ShopCollection
