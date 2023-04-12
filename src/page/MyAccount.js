import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Button from '../components/UI/Button'
import { NavLink } from 'react-router-dom'
const MyAccount = () => {
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
                    <li style={{ margin: '20px auto' }}><NavLink className='list' style={{ textDecoration: 'none' }}to='/my-account' >My Account</NavLink> </li>
                </ul></div>
            </div>
            <div style={{ border: '1px solid #282828', marginLeft: '40px', marginBottom: '10px', padding: '40px' }}>
                <div style={{ display: 'flex', position: 'relative', left: '300px' }}>
  <Button text='Update Info' icon='none' color='black' />
  <button style={{
    backgroundColor: 'transparent',
    fontFamily: 'brandon_reg',
    height: '40px',
    width: '150px',
    marginLeft: '20px'
  }}>Discard</button>
</div>
                <h1 style={{ margin: '0' }}> My Account</h1>
                <p>View and edit your personal info below.</p>
                <div style={{ width: '600px' }}>
                                    <hr/>
                <div>
                  <h3>Account</h3>
                  <p style={{ margin: '20px auto' }}>Update your personal information.</p>
                  <p style={{ margin: '0' }}>Login Email:</p>
                  <p style={{ margin: '0' }}>demo@email.com</p>
                  <p style={{ margin: '0', marginBottom: '20px' }}>Your Login email can&apos;t be changed</p>
                <form action='' className='form'>            <p className='field required half'>

    <label className='label'>First Name</label>
    <input className='text-input' id='email' name='fname' required type='text' style={{ border: '1px solid #282828' }}/>
  </p>
  <p className='field half'>
    <label className='label'>Last Name</label>
    <input className='text-input' id='phone' name='lname' type='text' style={{ border: '1px solid #282828' }}/>
  </p>

 </form>
 <form action='' className='form'>            <p className='field required half'>

<label className='label'>Email</label>
<input className='text-input' id='email' name='fname' required type='text' style={{ border: '1px solid #282828' }}/>
</p>
<p className='field half'>
<label className='label'>Phone</label>
<input className='text-input' id='phone' name='lname' type='text' style={{ border: '1px solid #282828' }}/>
</p>
<div style={{ display: 'flex', position: 'relative', left: '300px' }}>
  <Button text='Update Info' icon='none' color='black' />
  <button style={{
    backgroundColor: 'transparent',
    fontFamily: 'brandon_reg',
    height: '40px',
    width: '150px',
    marginLeft: '20px'
  }}>Discard</button>
</div>
</form>

                </div>

                </div>

            </div>
        </div>
        <Footer/>
        </React.Fragment>

  )
}
export default MyAccount
