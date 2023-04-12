import React, { useEffect, useRef } from 'react'
import './Selection.css'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
const SelectionCard = (props) => {
  const onLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('name')
    location.reload()
  }

  const ref = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        props.onClickOutside(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [ref])

  return (
        <div>
            <div className='selection' ref={ref}>
                <ul>
                    <li><NavLink style={{ textDecoration: 'none' }} to='/my-orders' >My Order</NavLink> </li>
                    <li><NavLink style={{ textDecoration: 'none' }}to='/my-address' >My Address</NavLink> </li>
                    <li><NavLink style={{ textDecoration: 'none' }}to='/my-wallet' >My Wallet</NavLink> </li>
                    <li><NavLink style={{ textDecoration: 'none' }}to='/my-wishlist' >My Wishlist</NavLink> </li>
                    <li><NavLink style={{ textDecoration: 'none' }}to='/my-subscribtion' >My subscribtion</NavLink> </li>
                    <li><NavLink className='list' style={{ textDecoration: 'none' }}to='/my-account' >My Account</NavLink> </li>
                    <hr/>
                    <li onClick={onLogout}>Logout</li>
                </ul>
            </div>
        </div>

  )
}
export default SelectionCard

SelectionCard.propTypes = {
  onClickOutside: PropTypes.func,
  show: PropTypes.bool
}
