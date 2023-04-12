import React, { useRef, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Detail from '../components/Detail'
const ProductPage = () => {
  const childRef = useRef(null)
  const [CartNum, setCartNum] = useState(0)
  const [validCred, setValidCred] = useState(false)
  const setValid = (state) => {
    setValidCred(state)
    childRef.current.onClose()
  }
  const setCart = (num) => {
    setCartNum(num)
  }
  return (
        <React.Fragment>
            <Navbar validCred={validCred} CartNum={CartNum} />
            <Detail setValid={setValid} setCart={setCart}/>
            <Footer/>
        </React.Fragment>
  )
}
export default ProductPage
