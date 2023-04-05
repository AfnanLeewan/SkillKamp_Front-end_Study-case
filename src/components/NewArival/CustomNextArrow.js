import React from 'react'
import PropTypes from 'prop-types'
import arrow from '../../assets/image/Icon/angle-right-solid.svg'
function CustomNextArrow (props) {
  const { className, onClick } = props
  return (
    <button className={`${className} next-arrow`} onClick={onClick}>
        <img src={arrow} />
      </button>
  )
}

CustomNextArrow.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string
}
export default CustomNextArrow
