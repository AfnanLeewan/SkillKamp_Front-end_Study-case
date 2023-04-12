import React from 'react'
import './index.css'
import Banner from './banner'
import Navigation from './Navigation'
import PropTypes from 'prop-types'
const Navbar = (props) => (
  <React.Fragment>
    <Banner />
  <Navigation validCred={props.validCred} CartNum={props.CartNum}/>
  </React.Fragment>
)
Navbar.propTypes = {
  validCred: PropTypes.bool,
  CartNum: PropTypes.number
}
export default Navbar
