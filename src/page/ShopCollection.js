import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import FilterCard from '../components/FilterCard'
import Collection from '../components/ProductCollection'

const ShopCollection = () => {
  return (
    <React.Fragment>
     <div style={{ zIndex: '2', position: 'relative' }}><Navbar/></div>
    <div style={ { display: 'flex', zIndex: '1', position: 'relative' } }>
      <div style={{ width: '700px' }}><FilterCard/></div>
      <div style={{ height: '70%' }}><Collection/></div>
    </div>

    <Footer/>
    </React.Fragment>
  )
}
export default ShopCollection
