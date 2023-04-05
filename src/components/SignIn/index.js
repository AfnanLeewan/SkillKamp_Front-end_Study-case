import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './index.css'
import xicon from '../../assets/image/Icon/xmark-solid.svg'

const SignInPage = (props) => {
  const [isLogIn, setIsLogIn] = useState(false)
  return (
    <div className='page'>
      <button className='cross' onClick={props.onClose}><img src={xicon} /></button>
        <div className='page-container'>
                   <h1>{!isLogIn ? 'Log In' : 'Sign Up'} </h1>
        <div className='text-container'>
        <p>{!isLogIn ? 'New to this site?' : 'Already a member?'} </p>
        <button onClick={() => { setIsLogIn(!isLogIn) } } > {isLogIn ? 'Log In' : 'Sign Up'}  </button>
        </div>
        <div className='facebook bar'>
            <p>{isLogIn ? 'Sign up' : 'Login'} with Facebook</p>
        </div>
        <div className='google bar'>
            <p>{isLogIn ? 'Sign up' : 'Login'} with Google</p>
        </div>
        <div className="or-line">
  <hr/>
  <span className="or-text">or</span>
  <hr/>
</div>

        <div className='email bar'>
            <p>{isLogIn ? 'Sign up' : 'Login'} with Email</p>
        </div>
        </div>
    </div>
  )
}
SignInPage.propTypes = {
  onClose: PropTypes.func.isRequired
}

export default SignInPage
