import React from 'react'

import Modal from '../UI/Modal/Modal'
import PropTypes from 'prop-types'
const DetailCard = (props) => {
  return (
        <Modal onClose={props.onClose}>
            <div>
                <img style={{ width: '300px' }} src={props.mediaUrl}/>
                <p>{props.name}</p>
                <p>{props.price}</p>
                <p>sku {props.sku}</p>
                <p>color</p>
                <p>Size</p>
            </div>
        </Modal>
  )
}
DetailCard.propTypes = {
  onClose: PropTypes.func,
  sku: PropTypes.string,
  mediaUrl: PropTypes.string,
  price: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  description: PropTypes.string,
  formattedPrice: PropTypes.string
}
export default DetailCard
