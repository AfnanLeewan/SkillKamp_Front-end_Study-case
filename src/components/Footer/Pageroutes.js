import React from 'react'
import './Pageroutes.css'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
const Pageroute = (props) => {
  return (
    <div>
        <ul className='routelists'>
          <li>
            <NavLink className='routelist' exact to="/">
              {props.c1}
            </NavLink>
          </li>
          <li>
            <NavLink className='routelist' to="/about">
            {props.c2}
            </NavLink>
          </li>
          <li>
            <NavLink className='routelist' to="/contact">
                {props.c3}
            </NavLink>
          </li>
          <li>
            <NavLink className='routelist' to="/contact">
            {props.c4}
            </NavLink>
          </li>
        </ul>
    </div>
  )
}
Pageroute.propTypes = {
  c1: PropTypes.string,
  c2: PropTypes.string,
  c3: PropTypes.string,
  c4: PropTypes.string

}
export default Pageroute
