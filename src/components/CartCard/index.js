import React, { useEffect, useState } from 'react'
import Button from '../UI/Button'
import './index.css'
import PropTypes from 'prop-types'
import ItemCard from './ItemCard'
import { NavLink } from 'react-router-dom'
const Cart = (props) => {
  const [total, settotal] = useState(0)
  const [CartNum, setCartNum] = useState(0)
  const [data, setData] = useState([])
  const token = localStorage.getItem('token')
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
        console.log(products)
        settotal(data.detail.total)
        console.log(data.detail.total)
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
        console.log(products)
        settotal(data.detail.total)
        console.log(data.detail.total)
        setData(data.detail.cart_list)
      })
    props.reRender()
  }

  const Product = data.map(item => { return (<ItemCard reRender={reRender} key={ item.sky } item={item} />) })
  return (
        <div className='cart-container'>
            <div onClick={props.onClose} className='close'><svg xmlns="http://www.w3.org/2000/svg" fill='currentColor' viewBox="0 0 320 512"><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/></svg></div>
            <header><h3>Cart</h3></header>
{token && CartNum !== 0
  ? <div>
            <div className='button-cart'><NavLink to='/cart'><Button text='View Cart'
             color='#282828' width='250px' icon='none'/></NavLink></div>
             <div className='product-card'>{Product}</div>
            <div className='foot'><h3>Subtotal</h3><h3>{total.toFixed(2)}</h3>
            <div className='button-cart'>
                <NavLink to='/cart'><Button text='View Cart'
             color='#282828' width='250px' icon='none'/></NavLink>
                </div></div>
            </div>
  : <div style={{ textAlign: 'center' }}>Cart is empty</div>}
        </div>
  )
}
Cart.propTypes = {
  onClose: PropTypes.func,
  reRender: PropTypes.func
}
export default Cart
