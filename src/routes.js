import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Home from './page/Home'
import ShopCollection from './page/ShopCollection'
import OurStory from './page/OurStory'
import Contact from './page/Contact'
import ProductPage from './page/Product-page'

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
  }
])
export default router
