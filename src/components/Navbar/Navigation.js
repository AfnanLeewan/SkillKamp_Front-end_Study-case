import React, { useState } from 'react'
import './Navigation.css'
import { NavLink } from 'react-router-dom'
import userIcon from '../../assets/image/Icon/circle-user-solid.svg'
import CartIcon from '../../assets/image/Icon/cart-svgrepo-com.svg'
import SignInPage from '../SignIn'
const Navigation = () => {
  const [display, setDisplay] = useState(false)
  const onClose = () => {
    setDisplay(!display)
  }
  return (
    <header className='header'>
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
        setDisplay(!display)
        console.log('clik')
      } }>
        <img src={userIcon} style={{ width: '20px' }}/>
        <p>Log In</p>
        </button>
        <button>
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
