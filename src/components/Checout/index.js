import React from 'react'
import Modal from '../UI/Modal/Modal'
import Button from '../UI/Button'
import PropTypes from 'prop-types'
import cross from '../../assets/image/Icon/xmark-solid.svg'
const Checkout = (props) => {
  return (
        <Modal>

            <div style={{ textAlign: 'center', margin: '80px 200px' }}>
            <img width='20px' style={{ cursor: 'pointer', position: 'absolute', right: '20px', top: '20px' }} onClick={props.onClose} src={cross}/>
            <h1>We can&apos;t accept online orders right now</h1>
            <p>Please contact us to complete your purchase.</p>
            <Button text="Got It" color="#282828" width='150px' icon='none' onClick={props.onClose}/>
            </div>
 </Modal>
  )
}
Checkout.propTypes = {
  onClose: PropTypes.func
}
export default Checkout
