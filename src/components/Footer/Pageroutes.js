import React from 'react'
import './Pageroutes.css'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
const Pageroute = (props) => {
  return (
    <div>
        <ul className='routelists'>
          <li>
            <NavLink className='routelist' to={props.l1}>
              {props.c1}
            </NavLink>
          </li>
          <li>
            <NavLink className='routelist' to={props.l2}>
            {props.c2}
            </NavLink>
          </li>
          <li>
            <NavLink className='routelist' to={props.l3}>
                {props.c3}
            </NavLink>
          </li>
          <li>
            <NavLink className='routelist' to={props.l4}>
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
  c4: PropTypes.string,
  l1: PropTypes.string,
  l2: PropTypes.string,
  l3: PropTypes.string,
  l4: PropTypes.string
}
export default Pageroute
