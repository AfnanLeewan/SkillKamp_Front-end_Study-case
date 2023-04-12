import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Home from './page/Home'
import ShopCollection from './page/ShopCollection'
import OurStory from './page/OurStory'
import Contact from './page/Contact'
import ProductPage from './page/Product-page'
import CartPage from './page/Carts'
import Myorder from './page/Myorder'
import MyAccount from './page/MyAccount'
import Myaddress from './page/MyAddress'
import Mywallet from './page/MyWallet'
import MyWishlist from './page/MyWishlist'
import MySubscriptions from './page/MySubscriptions'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
    children: [
      { index: true, element: <Home/> }
    ]
  },
  {
    path: '/shop-collection',
    element: <ShopCollection/>
  },
  {
    path: '/Our-Story',
    element: <OurStory/>
  },
  {
    path: '/Contact',
    element: <Contact/>
  },
  {
    path: '/product-page/:id',
    element: <ProductPage/>
  },
  {
    path: '/cart',
    element: <CartPage/>
  },
  {
    path: '/my-orders',
    element: <Myorder/>
  },
  {
    path: '/my-address',
    element: <Myaddress/>
  },
  {
    path: '/my-account',
    element: <MyAccount/>
  },
  {
    path: '/my-wallet',
    element: <Mywallet/>
  },
  {
    path: '/my-wishlist',
    element: <MyWishlist/>
  },
  {
    path: '/my-subscribtion',
    element: <MySubscriptions/>
  }
])
export default router
