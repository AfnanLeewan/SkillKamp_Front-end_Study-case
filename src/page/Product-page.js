import React, { useEffect, useRef, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useParams } from 'react-router-dom'
import Detail from '../components/Detail'
const ProductPage = () => {
  const param = useParams()
  const childRef = useRef(null)
  const [CartNum, setCartNum] = useState(0)
  const [validCred, setValidCred] = useState(false)
  useEffect(() => { console.log(param.id) }, [])
  const setValid = (state) => {
    console.log(state)
    setValidCred(state)
    childRef.current.onClose()
  }
  const setCart = (num) => {
    setCartNum(num)
    console.log(num)
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
