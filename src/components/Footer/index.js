import React from 'react'
import './index.css'
import Pageroute from './Pageroutes'
import Button from '../UI/Button'
import fbicon from '../../assets/image/Icon/Social icons/facebook-svgrepo-com.svg'
import ptricon from '../../assets/image/Icon/Social icons/pinterest-svgrepo-com.svg'
import igicon from '../../assets/image/Icon/Social icons/instagram-svgrepo-com.svg'
const Footer = () => {
  return (

            <div className='body'>
                <h3 className='name'>happy kids</h3>
                <div className='container'>
                    <div className='item'><Pageroute c1='Home' c2='Shop Collection' c3='Our Story' c4='Cantact' /></div>
                    <div className='item'>
                        <div className='icon-container'>
                            <ul className='lists-icon'>
                                <li><img src={fbicon} width='20px'/></li>
                                <li><img src={ptricon} width='20px'/></li>
                                <li><img src={igicon} width='20px'/></li>
                            </ul>

                        </div>

                    </div>
                    <div className='item'><Pageroute c1='Shipping & Returns' c2='Store Policy' c3='Payment Methods' c4='FAQ' /></div>
                </div>
                <div className='maillist'>
                   <h4>Join Our Mailing List</h4>
                   <form>
                    <input type="text" placeholder='Enter your email here*' />
                    <div className='btn-container'><Button text='Subscibe Now' icon='none' color='#282828'/></div>
                   </form>
                </div>
                <footer>© 2035 by happy kids. Powered and secured by React</footer>
            </div>

  )
}

export default Footer
