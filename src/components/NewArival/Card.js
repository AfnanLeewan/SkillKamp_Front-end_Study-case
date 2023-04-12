import React, { useState } from 'react'
import PropTypes from 'prop-types'
import DetailCard from '../DetailCard'
import { NavLink } from 'react-router-dom'
const Card = (props) => {
  const [cardState, setCardState] = useState(false)
  const [displayDetail, setDisplayDetail] = useState(false)
  const onClose = () => {
    setDisplayDetail(false)
  }
  return (
        <div className="card-wrapper" onMouseOver={() => setCardState(true)} onMouseLeave={() => { setCardState(false) }}>
       {displayDetail && <DetailCard sku={props.sku} onClose={onClose} mediaUrl={props.mediaUrl}
        name={props.name}
        description={props.description}
        price={props.formattedPrice}/>}
        <div className="card">
          <NavLink style={{ textDecoration: 'none' } }to={'/product-page/' + props.url}>
          {cardState && <div className='block'>Quick View</div>}
          <div>
          <img src={props.mediaUrl} alt={props.mediaUrl} />
          <div className="description">{props.name}</div>
          <div className="description">{props.price}</div></div>

          </NavLink>

          <button onClick={() => setDisplayDetail(true)} className="button">Add to Cart</button>
        </div>
      </div>
  )
}

Card.propTypes = {
  sku: PropTypes.string,
  mediaUrl: PropTypes.string,
  price: PropTypes.string,
  name: PropTypes.string,
  url: PropTypes.string,
  id: PropTypes.string,
  description: PropTypes.string,
  formattedPrice: PropTypes.string
}
export default Card
