import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Home from './page/Home'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
    children: [
      { index: true, element: <Home/> }
    ]
  }
])
export default router
