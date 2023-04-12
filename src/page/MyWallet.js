import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { NavLink } from 'react-router-dom'
const Mywallet = () => {
  return (

    <React.Fragment>
        <Navbar/>
        <hr/>
              <div style={{ display: 'flex', justifyContent: 'center', fontFamily: 'brandon_reg', marginTop: '50px' }}>
            <div>
                <div style={{ border: '1px solid #282828', width: '200px', height: '150px', textAlign: 'center', marginBottom: '10px' }}
                ><p style={{ marginTop: '100px' }}>{localStorage.getItem('name')}</p></div>
                <div style={{ border: '1px solid #282828', width: '200px' }}>
                    <ul style={{ listStyle: 'none', marginLeft: '30px' }}>
                    <li style={{ margin: '20px auto' }}><NavLink style={{ textDecoration: 'none' }} to='/my-orders' >My Order</NavLink> </li>
                    <li style={{ margin: '20px auto' }}><NavLink style={{ textDecoration: 'none' }}to='/my-address' >My Address</NavLink> </li>
                    <li style={{ margin: '20px auto' }}><NavLink style={{ textDecoration: 'none' }}to='/my-wallet' >My Wallet</NavLink> </li>
                    <li style={{ margin: '20px auto' }}><NavLink style={{ textDecoration: 'none' }}to='/my-wishlist' >My Wishlist</NavLink> </li>
                    <li style={{ margin: '20px auto' }}><NavLink style={{ textDecoration: 'none' }}to='/my-subscribtion' >My subscribtion</NavLink> </li>
                    <li style={{ margin: '20px auto' }}><NavLink className='list' style={{ textDecoration: 'none' }}to='/my-account' >My Account</NavLink> </li></ul></div>
            </div>
            <div style={{ border: '1px solid #282828', marginLeft: '40px', marginBottom: '10px', padding: '40px' }}>
                <h1 style={{ margin: '0' }}> My Wallet</h1>
                <p>Save your credit and debit card details for faster checkout.</p>
                <div style={{ width: '600px' }}>
                                    <hr/>
                <div style={{ margin: '100px auto', textAlign: 'center' }}>
                    <p>You Haven’t Saved Any Cards Yet.</p>
                    <p>Securely save your payment details when you place an order at checkout.</p>
                </div>
                <hr/>
                </div>

            </div>
        </div>
        <Footer/>
        </React.Fragment>
  )
}
export default Mywallet
