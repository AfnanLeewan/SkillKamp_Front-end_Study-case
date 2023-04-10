import React, { useEffect, useState } from 'react'
import Button from '../UI/Button'
import './index.css'
import PropTypes from 'prop-types'
const Cart = (props) => {
  const [total, settotal] = useState(0)
  useEffect(() => {
    fetch('https://skillkamp-api.com/v1/api/cart', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // eslint-disable-next-line quote-props
        'accept': 'application/json',
        // eslint-disable-next-line quote-props
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmdWxsbmFtZSI6InRlc3QxIiwidXNlcl9pZCI6InRlc3QxQGdtYWlsLmNvbSIsImV4cGlyZXMiOjE2ODExMjYwNjUuMTExMzQ4NH0.Qv73_l-EUSk8FFxnUqTcfSSEytjBNjNWCJ4LIZPioiI'
      }
    }
    )
      .then(response => response.json())
      .then(data => {
        const products = data
        console.log(products)
        settotal(data.detail.total)
        console.log(data.detail.total)
      })
  }, [])
  return (
        <div className='cart-container'>
            <div onClick={props.onClose} className='close'><svg xmlns="http://www.w3.org/2000/svg" fill='currentColor' viewBox="0 0 320 512"><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/></svg></div>
            <header><h3>Cart</h3></header>
            <div className='button-cart'><Button text='View Cart'
             color='#282828' width='250px' icon='none'/></div>
            <div className='foot'><h3>Subtotal</h3><h3>{total.toFixed(2)}</h3>
            <div className='button-cart'><Button text='View Cart'
             color='#282828' width='250px' icon='none'/></div></div>
        </div>
  )
}
Cart.propTypes = {
  onClose: PropTypes.func
}
export default Cart
