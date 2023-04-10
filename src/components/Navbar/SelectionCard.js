import React from 'react'
import './Selection.css'
const SelectionCard = () => {
  const onLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('name')
    location.reload()
  }

  return (
        <div>
            <div className='selection'>
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
