import React from 'react'
import PropTypes from 'prop-types'
import arrow from '../../assets/image/Icon/angle-left-solid.svg'
function CustomPrevArrow (props) {
  const { className, onClick } = props
  return (
      <button className={`${className} prev-arrow`} onClick={onClick}>
        P     <img src={arrow} />
      </button>
  )
}

CustomPrevArrow.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string
}
export default CustomPrevArrow
