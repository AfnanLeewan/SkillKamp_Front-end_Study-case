import React, { useEffect, useState } from 'react'
import './Navigation.css'
import { NavLink } from 'react-router-dom'
import userIcon from '../../assets/image/Icon/circle-user-solid.svg'
import CartIcon from '../../assets/image/Icon/cart-svgrepo-com.svg'
import SignInPage from '../SignIn'
import down from '../../assets/image/Icon/angle-down-solid.svg'
import SelectionCard from './SelectionCard'
import Cart from '../CartCard'
const Navigation = () => {
  const [display, setDisplay] = useState(false)
  // eslint-disable-next-line no-unused-vars
  const [selState, setSelState] = useState(false)
  const [CartState, setCartState] = useState(false)
  const onClose = () => {
    setDisplay(!display)
  }
  const onCloseCart = () => {
    setCartState(false)
  }
  useEffect(() => {
    console.log(localStorage.getItem('token'))
    setSelState(false)
  }, [localStorage.getItem('token')])
  return (
    <header className='header'>{selState && <SelectionCard set/>}
      {CartState && <Cart onClose={onCloseCart}/>}
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
          console.log('clik')
        } else {
          setSelState(!selState)
        }
      } }>
        <img src={userIcon} style={{ width: '20px' }}/>
        <p>{localStorage.getItem('token') ? <img style={{ width: '20px', marginTop: '0' }} src={down}/> : 'login'}</p>
        </button>
        <button onClick={() => { setCartState(true) }}>
        <img src={CartIcon} style={{ width: '20px' }}/>
        <p className='number'>0</p>
        </button>

      </div>
      <div className={`fullscreen ${display ? 'displayed' : ''}`}>
      <SignInPage onClose={onClose}/>

    </div>
    </header>
  )
}
export default Navigation
