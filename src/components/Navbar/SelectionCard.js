import React, { useEffect, useRef } from 'react'
import './Selection.css'
import PropTypes from 'prop-types'
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
                    <li>My Order</li>
                    <li>My Address</li>
                    <li>My Wallet</li>
                    <li>My wishlist</li>
                    <li>My Subscription</li>
                    <li>My Account</li>
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
