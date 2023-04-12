import React, { useState } from 'react'
import PropTypes from 'prop-types'
const ItemCard = (props) => {
  const [num, setNum] = useState(props.item.qty)
  const onAdd = async (event) => {
    const formData = {
      sku: props.item.sku,
      name: props.item.name,
      price: props.item.price,
      discountedPrice: props.item.discountedPrice,
      color: props.item.color,
      size: props.item.size,
      qty: props.item.qty + 1
    }
    try {
      const response = await fetch('https://skillkamp-api.com/v1/api/cart', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          // eslint-disable-next-line quote-props
          'accept': 'application/json',
          // eslint-disable-next-line quote-props
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(formData
        )
      })
      const data = await response.json()
      console.log(data)
      setNum(num + 1)
    } catch (error) {
      console.error(error)
    }
  }
  const ondec = async (event) => {
    const formData = {
      sku: props.item.sku,
      name: props.item.name,
      price: props.item.price,
      discountedPrice: props.item.discountedPrice,
      color: props.item.color,
      size: props.item.size,
      qty: props.item.qty - 1
    }
    try {
      const response = await fetch('https://skillkamp-api.com/v1/api/cart', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          // eslint-disable-next-line quote-props
          'accept': 'application/json',
          // eslint-disable-next-line quote-props
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(formData
        )
      })
      const data = await response.json()
      console.log(data)
      setNum(num - 1)
    } catch (error) {
      console.error(error)
    }
  }
  const ondel = async (event) => {
    const formData = {
      sku: props.item.sku,
      name: props.item.name,
      price: props.item.price,
      discountedPrice: props.item.discountedPrice,
      color: props.item.color,
      size: props.item.size,
      qty: props.item.qty
    }
    try {
      const response = await fetch('https://skillkamp-api.com/v1/api/cart', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          // eslint-disable-next-line quote-props
          'accept': 'application/json',
          // eslint-disable-next-line quote-props
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(formData
        )
      })
      const data = await response.json()
      console.log(data)
      props.reRender()
    } catch (error) {
      console.error(error)
    }
  }
  return (
        <div style={{ display: 'flex', marginBottom: '30px' }}>
            <img width='30%' height = '30%' src={props.item.fullUrl} />
            <div style={{ margin: '0.7rem' }}>
            <p onClick={ondel} style={{ position: 'absolute', right: '30px', margin: '0', cursor: 'pointer' }}>x</p>
                <p style={{ margin: '0.3rem' }}>{props.item.name}</p>
                <p style={{ margin: '0.3rem' }}>{props.item.price}$</p>
                <div style={{ display: 'flex', margin: '0', border: '1px solid #282828', width: '65px' }}>
                    <p onClick={ondec} style={{ margin: '0', marginLeft: '5px', marginBottom: '5px', cursor: 'pointer' }}>-</p>
                    <p style={{ margin: ' auto 1rem' }}> {num}</p>
                    <p onClick={onAdd} style={{ margin: '0', cursor: 'pointer' }}>+</p>
                </div>
            </div>
        </div>
  )
}
ItemCard.propTypes = {
  mediaUrl: PropTypes.string,
  name: PropTypes.string,
  qty: PropTypes.number,
  formattedPrice: PropTypes.string,
  item: PropTypes.array,
  reRender: PropTypes.func
}
export default ItemCard
