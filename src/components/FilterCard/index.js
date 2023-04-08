import React, { useState } from 'react'
import plus from '../../assets/image/Icon/plus-solid.svg'
import minus from '../../assets/image/Icon/minus-solid.svg'
import RangeSlider from 'react-range-slider-input'
import 'react-range-slider-input/dist/style.css'
import './index.css'
const FilterCard = () => {
  const [state, setState] = useState({ collection: false, price: false, color: false, size: false })
  const [minPrice, setMinPrice] = useState(17)
  const [maxPrice, setMaxPrice] = useState(19)

  return (
        <div className='filter-container'>
            <h2>Filter by</h2>
            <hr/>
            <div className='filter-list'><p>Collection</p><button className='filter-toggle'onClick={() => { setState({ ...state, collection: !state.collection }) } }>{!state.collection ? <img src={plus}/> : <img src={minus}/> } </button> </div>
           {state.collection && (<div className='collection-list'>
            <p>All</p>
            <p>T shirt</p>
            <p>Bodysuit</p>
           </div>)}

            <hr/>
            <div className='filter-list'><p>Price</p><button className='filter-toggle' onClick={() => { setState({ ...state, price: !state.price }) } }>{!state.price ? <img src={plus}/> : <img src={minus}/> } </button> </div>
            {state.price && <><div><div className='price-slider'>            <RangeSlider className='price-slider'
              min={17}
              max={19}
              step={1}
              values={[minPrice, maxPrice]}
              onInput={(values) => {
                setMinPrice(values[0])
                setMaxPrice(values[1])
              } }
              range /></div></div><div className='price-label'> <p>{minPrice}</p> <p>{maxPrice}</p></div></>}
            <hr/>
            <div className='filter-list'><p>Color</p><button className='filter-toggle'onClick={() => { setState({ ...state, color: !state.color }) } }>{!state.color ? <img src={plus}/> : <img src={minus}/> } </button> </div>
            {state.color && <div>
                <ul className='color-lists'>
                    <li className='color-list'> <button className='red'/></li>
                    <li className='color-list'><button className='cream'/></li>
                    <li className='color-list'><button className='green'/></li>
                    <li className='color-list'><button className='lightPink'/></li>
                    <li className='color-list'><button className='peach'/></li>
                    <li className='color-list'><button className='terracotta'/></li>
                    <li className='color-list'><button className='white'/></li>
                </ul>
            </div> }

            <hr/>
            <div className='filter-list'><p>Size</p><button className='filter-toggle'onClick={() => { setState({ ...state, size: !state.size }) } }>{!state.size ? <img src={plus}/> : <img src={minus}/> } </button></div>
            {state.size && <div>
           <div>
                <input type="checkbox" name='10'/>
                <label>0-3 months</label>
            </div>
            <div>
                <input type="checkbox" name='10'/>
                <label>12-18 months</label>
            </div>
            <div>
                <input type="checkbox" name='10'/>
                <label>18-24 months</label>
            </div>
            <div>
                <input type="checkbox" name='10'/>
                <label>2 years</label>
            </div>
            <div>
                <input type="checkbox" name='10'/>
                <label>3 years</label>
            </div>
            <div>
                <input type="checkbox" name='10'/>
                <label>3-6 months</label>
            </div>
            <div>
                <input type="checkbox" name='10'/>
                <label>6-12 months</label>
            </div>
            </div>}

            <hr/>
        </div>
  )
}
export default FilterCard
