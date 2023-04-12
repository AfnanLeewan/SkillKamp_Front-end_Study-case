import React, { useEffect, useState } from 'react'
import './Navigation.css'
import { NavLink } from 'react-router-dom'
import userIcon from '../../assets/image/Icon/circle-user-solid.svg'
import CartIcon from '../../assets/image/Icon/cart-svgrepo-com.svg'
import SignInPage from '../SignIn'
import down from '../../assets/image/Icon/angle-down-solid.svg'
import SelectionCard from './SelectionCard'
import Cart from '../CartCard'
import PropTypes from 'prop-types'
const Navigation = (props) => {
  const [display, setDisplay] = useState(false)
  // eslint-disable-next-line no-unused-vars
  const [selState, setSelState] = useState(false)
  const [CartState, setCartState] = useState(false)
  // eslint-disable-next-line no-unused-vars
  const [CartNum, setCartNum] = useState(0)
  const onClose = () => {
    setDisplay(!display)
  }
  const onCloseCart = () => {
    setCartState(false)
    setDisplay(props.validCred)
  }
  useEffect(() => {
    fetch('https://skillkamp-api.com/v1/api/cart',
      {
        headers: {
          'Content-Type': 'application/json',
          // eslint-disable-next-line quote-props
          'accept': 'application/json',
          // eslint-disable-next-line quote-props
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      })
      .then(response => response.json())
      .then(data => {
        const sum = data.detail.cart_list.reduce((acc, cur) => acc + cur.qty, 0)
        setCartNum(sum)
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
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    }
    )
      .then(response => response.json())
      .then(data => {
        const sum = data.detail.cart_list.reduce((acc, cur) => acc + cur.qty, 0)
        setCartNum(sum)
      })
  }

  return (
    <header className='header'>{selState && <SelectionCard show={selState} onClickOutside={() => { setSelState(false) }}/>}
      {CartState && <Cart reRender={reRender} onClose={onCloseCart} />}
      <nav>
        <ul className='lists'>
          <li>
            <NavLink className='list' to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className='list' to="/shop-collection">Shop Collection</NavLink>
          </li>
          <li>
            <NavLink className='list' to="/our-story">Our Story</NavLink>
          </li>
          <li>
            <NavLink className='list' to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
      <div className='account'>
      <button onClick={() => {
        if (!localStorage.getItem('token')) {
          setDisplay(!display)
        } else {
          setSelState(!selState)
        }
      } }>
        <img src={userIcon} style={{ width: '20px' }}/>
        <p>{localStorage.getItem('token') ? <img style={{ width: '20px', marginTop: '0' }} src={down}/> : 'login'}</p>
        </button>
        <button onClick={() => { setCartState(true) }}>
        <img src={CartIcon} style={{ width: '20px' }}/>
        <p className='number'>{CartNum}</p>
        </button>

      </div>
      <div className={`fullscreen ${display ? 'displayed' : ''}`}>
      <SignInPage onClose={onClose}/>

    </div>
    </header>
  )
}
Navigation.propTypes = {
  validCred: PropTypes.func,
  CartNum: PropTypes.number
}
export default Navigation
