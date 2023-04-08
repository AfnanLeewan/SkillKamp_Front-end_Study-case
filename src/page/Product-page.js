import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useParams } from 'react-router-dom'
import Detail from '../components/Detail'
const ProductPage = () => {
  const param = useParams()
  useEffect(() => { console.log(param.id) }, [])

  return (
        <React.Fragment>
            <Navbar/>
            <Detail/>
            <Footer/>
        </React.Fragment>
  )
}
export default ProductPage
