/* eslint-disable no-unused-vars */
import React, { useRef, useState } from 'react'
import PropTypes from 'prop-types'
import './index.css'
import xicon from '../../assets/image/Icon/xmark-solid.svg'
import ReCAPTCHA from 'react-google-recaptcha'

const SignInPage = (props) => {
  const nameRef = useRef()
  const signUpemailRef = useRef()
  const signUppassRef = useRef()
  const loginemailRef = useRef()
  const loginpassRef = useRef()
  const [isLogIn, setIsLogIn] = useState(false)

  // eslint-disable-next-line no-unused-vars
  const [capcha, getcapcha] = useState(null)
  // eslint-disable-next-line no-unused-vars
  const [showForm, setShowForm] = useState(false)
  function onChange (value) {
    console.log('Captcha value:', value)
    getcapcha(value)
  }
  const handleSignUp = async (event) => {
    event.preventDefault()
    const formData = {
      fullname: nameRef.current.value,
      email: signUpemailRef.current.value,
      password: signUppassRef.current.value
    }
    try {
      const response = await fetch('https://skillkamp-api.com/v1/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
      const data = await response.json()
      console.log(data)
    } catch (error) {
      console.error(error)
    }
  }
  const handleLogIn = async (event) => {
    event.preventDefault()
    const formData = {
      email: loginemailRef.current.value,
      password: loginpassRef.current.value
    }
    try {
      const response = await fetch('https://skillkamp-api.com/v1/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
      const data = await response.json()
      console.log(data.detail.Token)
      localStorage.setItem('token', data.detail.Token)
      localStorage.setItem('name', data.detail.Name)
    } catch (error) {
      console.error(error)
    }
    props.onClose()
  }
  return (
    <div className='page'>
      <button className='cross' onClick={props.onClose}><img src={xicon} /></button>
        <div className='page-container'>
                   <h1>{isLogIn ? 'Log In' : 'Sign Up'} </h1>
        <div className='text-container'>
        <p>{isLogIn ? 'New to this site?' : 'Already a member?'} </p>
        <button onClick={() => {
          setIsLogIn(!isLogIn)
          setShowForm(false)
        } } > {!isLogIn ? 'Log In' : 'Sign Up'}  </button>
        </div>
        <div>
                { !showForm
                  ? <div>
          <div className='facebook bar'>
          <p>{!isLogIn ? 'Sign up' : 'Login'} with Facebook</p>
      </div>
      <div className='google bar'>
          <p>{!isLogIn ? 'Sign up' : 'Login'} with Google</p>
      </div>
      <div className="or-line">
<hr/>
<span className="or-text">or</span>
<hr/>
</div>

      <div onClick={() => { setShowForm(true) }} className='email bar'>
          <p>{!isLogIn ? 'Sign up' : 'Login'} with Email</p>
      </div>
      </div>
                  : isLogIn
                    ? <div><form className='form' >

           <p className='field required'>
    <label className='label required'>Email</label>
    <input className='text-input' id='email' name='email' required type='email' ref={loginemailRef}/>
  </p>
  <p className='field required'>
    <label className='label required'>Password</label>
    <input className='text-input' id='password' name='password' required type='password' ref={loginpassRef} />
  </p>
  {/* <ReCAPTCHA
    sitekey="6LfbmHElAAAAAKVW8YJMFLdlDnJxCTzNNSA54jve"
    onChange={onChange}
  /> */} <button onClick={handleLogIn}>{isLogIn ? 'Log In' : 'Sign Up'}</button>
          </form></div>
                    : <div><form className='form'>
                                 <p className='field required'>
    <label className='label required'>Full Name</label>
    <input className='text-input' id='fullname' name='fullname' required type='text' ref={nameRef}/>
  </p>
  <p className='field required'>
    <label className='label required'>Email</label>
    <input className='text-input' id='email' name='email' required type='email' ref={signUpemailRef}/>
  </p>
  <p className='field required'>
    <label className='label required'>Password</label>
    <input className='text-input' id='password' name='password' required type='password' ref={signUppassRef} />
  </p>
  {/* <ReCAPTCHA
    sitekey="6LfbmHElAAAAAKVW8YJMFLdlDnJxCTzNNSA54jve"
    onChange={onChange}
  /> */}
 <button onClick={handleSignUp}>{isLogIn ? 'Log In' : 'Sign Up'}</button>
          </form> </div>}
        </div>

        </div>
    </div>
  )
}
SignInPage.propTypes = {
  onClose: PropTypes.func.isRequired
}

export default SignInPage
