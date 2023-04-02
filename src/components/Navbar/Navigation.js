import React from 'react'
import './Navigation.css'
import { NavLink } from 'react-router-dom'
const Navigation = () => {
  return (
    <header className='header'>
      <nav>
        <ul className='lists'>
          <li>
            <NavLink className='list' exact to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className='list' to="/about">Shop Collection</NavLink>
          </li>
          <li>
            <NavLink className='list' to="/contact">Our Story</NavLink>
          </li>
          <li>
            <NavLink className='list' to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}
export default Navigation
