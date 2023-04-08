import React from 'react'
import PropTypes from 'prop-types'
import './index.css'
const Button = (props) => {
  const ButtonType = () => {
    if (props.icon === 'none') {
      return (
        <button className='btn'style={{ backgroundColor: `${props.color}`, color: '#ffffff', width: `${props.width}` }}>{props.text}</button>
      )
    }
    if (props.icon === 'left') {
      return (
        <button className='btn'style={{ color: `${props.color}` }}>
          {props.text}
         </button>
      )
    }
    if (props.icon === 'right') {
      return (
        <button className='btn' style={{ color: `${props.color}` }}>{props.text}</button>
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
  width: PropTypes.string
}

export default Button
