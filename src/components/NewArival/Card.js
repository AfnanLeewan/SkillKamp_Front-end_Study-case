import React, { useState } from 'react'
import PropTypes from 'prop-types'
const Card = (props) => {
  const [cardState, setCardState] = useState(false)
  return (
        <div className="card-wrapper" onMouseOver={() => setCardState(true)} onMouseLeave={() => { setCardState(false) }}>
        <div className="card">
          {cardState && <div className='block'>Quick View</div>}
          <img src={props.mediaUrl} alt={props.mediaUrl} />
          <div className="description">{props.name}</div>
          <div className="description">{props.price}</div>
          <button className="button">Add to Cart</button>
        </div>
      </div>
  )
}
Card.propTypes = {
  mediaUrl: PropTypes.string,
  price: PropTypes.number,
  name: PropTypes.string
}
export default Card
