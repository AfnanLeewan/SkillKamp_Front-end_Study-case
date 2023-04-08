/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'
import './index.css'
import Button from '../UI/Button'
import { useParams } from 'react-router-dom'
import plus from '../../assets/image/Icon/plus-solid.svg'
import minus from '../../assets/image/Icon/minus-solid.svg'
const Detail = (props) => {
  const param = useParams()
  const [data, setData] = useState({})
  const [colorlist, setColorlist] = useState([])
  const [sizelist, setSizelist] = useState([])
  const [state, setState] = useState({ info: false, return: false })
  // eslint-disable-next-line no-unused-vars
  const [colorSelected, setColorSelected] = useState([])
  // eslint-disable-next-line no-unused-vars
  const [image, setImage] = useState('')
  useEffect(() => {
    axios
      .get('https://skillkamp-api.com/v1/api/products/')
      .then((response) => {
        const productList = response.data.detail.data.catalog.category.productsWithMetaData.list
        const detail = productList.filter(element => element.urlPart === param.id)
        return detail[0].sku
      }).then(sku =>
        axios
          .get(`https://skillkamp-api.com/v1/api/products/details/${sku}`)
          .then((response) => {
            const detail = response.data.detail.data.catalog.product
            const initcolor = detail.options[0].selections.map(color => { return (color.key.toLowerCase()).replace(/ /g, '') })
            setData(detail)
            setColorlist(detail.options[0].selections.map(color => { return (color.key.toLowerCase()).replace(/ /g, '') }))
            setSizelist(detail.options[1].selections.map(size => { return (size.value) }))
            console.log(detail)
            console.log(initcolor[0])
            const selected = detail.options[0].selections.filter(element => element.key.toLowerCase().replace(/ /g, '') === initcolor[0])
            const imageURL = selected[0].linkedMediaItems[0].fullUrl
            setImage(imageURL)
            setColorSelected(selected[0].key.toLowerCase().replace(/ /g, ''))
          })
          .catch((error) => {
            console.log(error)
          })

      )
      .catch((error) => {
        console.log(error)
      })
  }, [])
  const onChangeColor = (color) => {
    const selected = data.options[0].selections.filter(element => element.key.toLowerCase().replace(/ /g, '') === color)
    setColorSelected(selected[0].key.toLowerCase().replace(/ /g, ''))
    const imageURL = selected[0].linkedMediaItems[0].fullUrl
    setImage(imageURL)
  }
  return (
            <div className='detail-container'>
                <div>
                    <img style={{ width: '600px', height: '600px' }} src={image}/>
                    <div style={{ width: '600px' }}>{data.description}
                        </div>
                </div>
                <div ><p>{data.name}</p>
                <p>{data.formattedDiscountedPrice}</p>
                <p>sku: {data.sku} </p>
                <p>color</p>
                <ul className='color-container'>{colorlist.map(color => {
                  return (<li key={color.id} ><button onClick={() => {
                    onChangeColor(color)
                    console.log(colorSelected, color)
                  }} className={`color ${colorSelected === color && 'selected'} ${color}`}/></li>)
                })} </ul>
                <div>
                    <div>size</div>
                    <select id="fruits">
                        <option>Select</option>
                        {sizelist.map(size => { return (<option key={size}>{size}</option>) })}
                    </select>
                </div>
                <div>
                    <p>Quantity</p>
                    <input type="text" value={1} />
                </div>
                <Button text='Add to Cart' color='#282828' icon='none' width='350px' />
                <Button text='Buy Now' color='#D2461c' icon='none' width='350px' />
                <div className='product-info'>
                    <header>
                        <div className='filter-list'><h3>PRODUCT INFO</h3><button className='filter-toggle' onClick={() => { setState({ ...state, info: !state.info }) } }>{!state.info ? <img src={plus}/> : <img src={minus}/> } </button> </div>
                        <div style={{ width: '350px' }}>{state.info && <p >I&apos;m a product detail. I&apos; m a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item. Buyers like to know what they’re getting before they purchase, so give them as much information as possible so they can buy with confidence and certainty.</p>}</div>
                        <hr/>
                        <div className='filter-list'><h3>RETURN AND REFUND POLICY</h3><button className='filter-toggle' onClick={() => { setState({ ...state, return: !state.return }) } }>{!state.return ? <img src={plus}/> : <img src={minus}/> } </button> </div>
                        <div style={{ width: '350px' }}>{state.return && <p >I’m a return and refund policy. I’m a great place to let your customers know what to do in case they are dissatisfied with their purchase. Having a straightforward refund or exchange policy is a great way to build trust and reassure your customers that they can buy with confidence.</p>}</div>
                    </header>
                </div>
                </div>
            </div>
  )
}
Detail.propTypes = {
  onClose: PropTypes.func,
  sku: PropTypes.string,
  mediaUrl: PropTypes.string,
  price: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  description: PropTypes.string,
  formattedPrice: PropTypes.string
}
export default Detail
