/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import Carts from './Cart'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Button from '../components/UI/Button'
import Checkout from '../components/Checout'

const CartPage = () => {
  const [total, settotal] = useState(0)
  const [CartNum, setCartNum] = useState(0)
  const [data, setData] = useState([])
  const [display, setDisplay] = useState(false)
  const token = localStorage.getItem('token')
  let Product
  useEffect(() => {
    fetch('https://skillkamp-api.com/v1/api/cart', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // eslint-disable-next-line quote-props
        'accept': 'application/json',
        // eslint-disable-next-line quote-props
        'Authorization': `Bearer ${token}`
      }
    }
    )
      .then(response => response.json())
      .then(data => {
        const products = data
        const sum = data.detail.cart_list.reduce((acc, cur) => acc + cur.qty, 0)
        setCartNum(sum)
        settotal(data.detail.total)
        setData(data.detail.cart_list)
      })
  }, [])
  const reRender = () => {
    fetch('https://skillkamp-api.com/v1/api/cart', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // eslint-disable-next-line quote-props
        'accept': 'application/json',
        // eslint-disable-next-line quote-props
        'Authorization': `Bearer ${token}`
      }
    }
    )
      .then(response => response.json())
      .then(data => {
        const products = data
        const sum = data.detail.cart_list.reduce((acc, cur) => acc + cur.qty, 0)
        setCartNum(sum)
        settotal(data.detail.total)
        setData(data.detail.cart_list)
        Product = data.map(item => { return (<Carts reRender={{ reRender }} key={ item.sky } item={item} />) })
      })
  }
  Product = data.map(item => { return (<Carts reRender={{ reRender }} key={ item.sky } item={item} />) })
  return (
    <React.Fragment>
        <Navbar/>
<div style={{ display: 'flex', justifyContent: 'center', fontFamily: 'brandon_reg', marginBottom: '400px' }}><div style={{ display: 'flex', justifyContent: 'center', margin: 'auto 30px', width: '1300px' }}>
    <div style={{ width: '60%', margin: 'auto 30px' }}>
        <h2>My Cart</h2>
        <hr/>
        <div>{Product}</div>
    </div>
    <div style={{ width: '30%', margin: '0 30px' }}>
    <h2>Order summary</h2>
    <hr />
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <p>Subtotal</p>
        <p>{total.toFixed(2)}</p>
    </div>
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <p>Shipping </p>
        <p>FREE</p>
    </div>
    <p style={{ textDecoration: 'underline' }}>Bangkok, Thailand</p>
    <hr/>
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <p>Total </p>
        <p>{total.toFixed(2)}</p>
    </div>
    <div>
        <Button text='Checkout' color='#282828' icon='none' width='100%' onClick={() => { setDisplay(true) }}/>
        <p style={{ margin: '0', textAlign: 'center' }}>Secure Checkout</p>
    </div>
    </div>
</div></div>
{display && <Checkout onClose={() => { setDisplay(false) }}/>}
<Footer />
    </React.Fragment>
  )
}
export default CartPage
