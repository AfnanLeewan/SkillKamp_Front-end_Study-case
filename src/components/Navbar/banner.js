import React, { useEffect, useState } from 'react'
import './Banner.css'
const Banner = () => {
  const [state, setState] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setState(!state)
    }, 5000)

    return () => {
      clearInterval(interval)
    }
  })
  return (
       <React.Fragment>
        <div className='banner'>
            <h3 className='banner-text'>{state ? 'Get 10% Off - Use Coupon Code HAPPY123' : 'Free Shipping Over $50'}</h3>
        </div>
        <h1 className='banner-logo'>happy kids</h1>

       </React.Fragment>
  )
}

export default Banner
