import React from 'react'
const PrevArrow = (props) => {
  // eslint-disable-next-line react/prop-types
  const { className, style, onClick } = props
  return (

<div className={className} style={{ ...style, display: 'block' }} onClick={onClick}>
        <span className="material-icons">arrow_back_ios</span>
      </div>
  )
}
export default PrevArrow
