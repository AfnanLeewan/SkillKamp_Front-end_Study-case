import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './index.css'
const Button = (props) => {
  const [hover, setHover] = useState(false)
  const ButtonType = () => {
    if (props.icon === 'none') {
      return (
        <button onClick={props.onClick}
        onMouseOver={() => { setHover(true) } }
        onMouseLeave={() => { setHover(false) }}
        className='btn'
        style={{
          backgroundColor: hover ? '#D2461c' : props.color,
          color: '#ffffff',
          width: `${props.width}`
        }}>{props.text}</button>
      )
    }
    if (props.icon === 'left') {
      return (
        <button onClick={props.onClick} className='btn'style={{ color: `${props.color}` }}>
          {props.text}
         </button>
      )
    }
    if (props.icon === 'right') {
      return (
        <button onClick={props.onClick} className='btn' style={{ color: `${props.color}` }}>{props.text}</button>
      )
    }
  }
  return (
  <div>{ButtonType()}</div>
  )
}
Button.propTypes = {
  icon: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  width: PropTypes.string,
  onClick: PropTypes.func
}

export default Button
