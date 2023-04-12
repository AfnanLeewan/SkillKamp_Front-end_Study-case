/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'
import './index.css'
import Button from '../UI/Button'
import { Link, NavLink, redirect, useHref, useParams } from 'react-router-dom'
import plus from '../../assets/image/Icon/plus-solid.svg'
import minus from '../../assets/image/Icon/minus-solid.svg'
import CardSlider from '../NewArival/Cards'
import SignInPage from '../SignIn'
const Detail = (props) => {
  const param = useParams()
  const [data, setData] = useState({})
  const [colorlist, setColorlist] = useState([])
  const [sizelist, setSizelist] = useState([])
  const [state, setState] = useState({ info: false, return: false })
  const [thumb, setthumb] = useState([])
  const [validSize, setValidSize] = useState('')
  const [display, setDisplay] = useState(false)
  const [CartNum, setCartNum] = useState(0)
  const [infoState, setInfo] = useState({
    sku: '',
    name: '',
    price: 0,
    discountedPrice: 0,
    color: '',
    size: '',
    qty: 1
  })
  // eslint-disable-next-line no-unused-vars
  const [colorSelected, setColorSelected] = useState([])
  // eslint-disable-next-line no-unused-vars
  const [image, setImage] = useState('')
  const pageNum = ['-4', '-7', '-5', '-8', '-9', '', '-6', '-1', '-10', '-2', '-11', '-3']
  useEffect(() => {
    setValidSize('')
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
            const colorarr = detail.options[0].selections.map(color => { return (color.key.toLowerCase()).replace(/ /g, '') })
            const thumbarr = detail.media.map(color => { return color.thumbnailFullUrl })
            setColorlist(detail.options[0].selections.map(color => { return (color.key.toLowerCase()).replace(/ /g, '') }))
            setSizelist(detail.options[1].selections.map(size => { return (size.value) }))
            console.log(detail)
            console.log(initcolor[0])
            setInfo(setInfo(() => { return { sku: detail.sku, name: detail.name, price: detail.price } }))
            const selected = detail.options[0].selections.filter(element => element.key.toLowerCase().replace(/ /g, '') === initcolor[0])
            const imageURL = selected[0].linkedMediaItems[0].fullUrl
            setImage(imageURL)
            setColorSelected(selected[0].key.toLowerCase().replace(/ /g, ''))
            const combinedcolor = colorarr.map((key, index) => {
              return { key: key, value: thumbarr[index] }
            })
            const selectedcolor = detail.options[0].selections.map(color => { return (color.key) })
            const infoDetail = {
              sku: detail.sku,
              name: detail.name,
              price: detail.price,
              discountedPrice: detail.discountedPrice,
              color: selectedcolor[0],
              size: '',
              qty: 1
            }
            console.log(infoDetail)
            setInfo(infoDetail)
            setthumb(combinedcolor)
          })
          .catch((error) => {
            console.log(error)
          })

      ).then(() => { console.log(infoState) })
      .catch((error) => {
        console.log(error)
      })
  }, [param.id])
  const goNext = () => {
    const after = param.id.slice(param.id.indexOf('t') + 1)
    const index = pageNum.indexOf(after)
    if (index < 11) {
      window.location.replace(`http://localhost:3000/product-page/i-m-a-product${pageNum[index + 1]}`)
      console.log(index)
    }
  }
  const goPrev = () => {
    const after = param.id.slice(param.id.indexOf('t') + 1)
    const index = pageNum.indexOf(after)
    if (index > 0) {
      window.location.replace(`http://localhost:3000/product-page/i-m-a-product${pageNum[index - 1]}`)
    }
  }
  const onChangeValue = (event) => {
    const updatedObject = { ...infoState }
    updatedObject.qty = event.target.value
    setInfo(updatedObject)
  }
  const onChangeSize = (event) => {
    const updatedObject = { ...infoState }
    updatedObject.size = event.target.value
    setInfo(updatedObject)
    console.log(updatedObject)
  }
  const onChangeColor = (color) => {
    const selected = data.options[0].selections.filter(element => element.key.toLowerCase().replace(/ /g, '') === color)
    setColorSelected(selected[0].key.toLowerCase().replace(/ /g, ''))
    setInfo(setInfo(() => { return { ...infoState, color: selected[0].key } }))
    const imageURL = selected[0].linkedMediaItems[0].fullUrl
    setImage(imageURL)
    const updatedObject = { ...infoState }
    updatedObject.color = selected[0].key
    setInfo(updatedObject)
  }
  const onAdd = async (event) => {
    if (infoState.size === '' || infoState.size === 'Select') {
      setValidSize('Select Size')
      return
    }
    setValidSize('')
    console.log(infoState)
    event.preventDefault()
    const formData = {
      sku: infoState.sku,
      name: infoState.name,
      price: infoState.price,
      discountedPrice: infoState.discountedPrice,
      color: infoState.color,
      size: infoState.size,
      qty: infoState.qty
    }
    console.log(JSON.stringify(formData))
    try {
      const response = await fetch('https://skillkamp-api.com/v1/api/cart', {
        method: 'POST',
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
      if (response.status === 200) {
        setDisplay(false)
        const sum = data.detail.cart_list.reduce((acc, cur) => acc + cur.qty, 0)
        setCartNum(sum)
        props.setCart(sum)
        location.reload()
      }
      if (response.status === 403) {
        console.log('not')
        setDisplay(true)
      }

      console.log(data)
    } catch (error) {
      console.error(error)
    }
  }

  return (<div>
    <div style={{ margin: 'auto 20%' }}>
    <div className={`fullscreen ${display ? 'displayed' : ''}`}>
      <SignInPage onClose={() => { setDisplay(false) }}/>
    </div>
<div className='header' style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <p>
                        Home/{data.name}
                    </p>
                    <div style={{ display: 'flex' }}>
                    <p onClick={goPrev} style={{ cursor: 'pointer' }} >&lt; Prev</p>
                    <p style={{ margin: 'auto 10px' }}> | </p>

                    <p onClick={goNext} style={{ cursor: 'pointer' }}>Next &gt; </p>
                    </div>

                </div>
                <div className='detail-container'>
                <div>
                    <img style={{ width: '600px', height: '600px' }} src={image}/>
                   <div>{ thumb.map(color => {
                     return (<img key={color.key} style={{ width: '50px', marginLeft: '10px' }} className={`${colorSelected === color.key && 'selected'} ${color.key}`} onClick={() => { onChangeColor(color.key) }} src={color.value}/>)
                   }) }</div>
                    <div style={{ width: '600px' } } >{data.description}
                        </div>
                </div>
                <div ><h1>{data.name}</h1>
                   <p>sku: {data.sku} </p>
            <p>{data.formattedDiscountedPrice}</p>
                <p>color : {colorSelected}</p>
                <ul className='color-container'>{colorlist.map(color => {
                  return (<li key={color.id} ><button onClick={() => {
                    onChangeColor(color)
                    console.log(colorSelected, color)
                  }} className={`color ${colorSelected === color && 'selected'} ${color}`}/></li>)
                })} </ul>
                <div>
                    <div>size</div>
                    <select value={infoState.size} onChange={onChangeSize}>
                        <option>Select</option>
                        {sizelist.map(size => { return (<option key={size}>{size}</option>) })}
                    </select>
                    {validSize && <p style={{ color: 'red' }}>Select Size</p>}
                </div>
                <div>
                    <p>Quantity</p>
                    <input type="number" min={1} onChange={onChangeValue} value={infoState.qty} />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}><Button text='Add to Cart' color='#282828' icon='none' width='300px' onClick={onAdd}/>
                <div className='whish'> <svg xmlns="http://www.w3.org/2000/svg" fill='currentColor' viewBox="0 0 512 512"><path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"/></svg> </div>
                </div>
                <Button text='Buy Now' color='#D2461c' icon='none' width='350px'/>
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
  </div>
                 <div className='related' ><h3>RELATED PRODUCT</h3><CardSlider num={6}/></div>
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
  formattedPrice: PropTypes.string,
  setValid: PropTypes.func,
  setCart: PropTypes.func
}
export default Detail
