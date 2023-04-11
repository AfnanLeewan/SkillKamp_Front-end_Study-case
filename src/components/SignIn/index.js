/* eslint-disable no-unused-vars */
import React, { useRef, useState } from 'react'
import PropTypes from 'prop-types'
import './index.css'
import xicon from '../../assets/image/Icon/xmark-solid.svg'
import ReCAPTCHA from 'react-google-recaptcha'
import Button from '../UI/Button'

const SignInPage = (props) => {
  const nameRef = useRef()
  const emailRef = useRef()
  const passRef = useRef()
  const loginemailRef = useRef()
  const loginpassRef = useRef()
  const [isLogIn, setIsLogIn] = useState(false)
  const [validEmail, setValidEmail] = useState('')
  const [validPass, setValidPass] = useState('')
  const [validName, setValidName] = useState('')

  // eslint-disable-next-line no-unused-vars
  const [capcha, getcapcha] = useState(null)
  // eslint-disable-next-line no-unused-vars
  const [showForm, setShowForm] = useState(false)
  function onChange (value) {
    console.log('Captcha value:', value)
    getcapcha(value)
  }
  const handleSignUp = async (event) => {
    setValidEmail('')
    setValidPass('')
    setValidName('')

    event.preventDefault()
    const formData = {
      fullname: nameRef.current.value,
      email: emailRef.current.value,
      password: passRef.current.value
    }
    try {
      const response = await fetch('https://skillkamp-api.com/v1/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
      console.log(response.status)
      const data = await response.json()
      if (response.status === 201) {
        handleLogIn()
      } else {
        if (response.status === 200) {
          setValidEmail('An account with this email already exists.')
        }
        if (response.status === 401) {
          setValidPass('Wrong email or password')
        }
        if (response.status === 401) {
          setValidPass('Wrong email or password')
        }
        if (emailRef.current.value.trim() === '' ||
       passRef.current.value.trim() === '' ||
        passRef.current.value.length < 3
        ) {
          if (emailRef.current.value.trim() === '') {
            setValidEmail('Email Cannot be blank')
          }
          if (response.status === 422) {
            setValidEmail('Double check your email and try again.')
          }
          if (passRef.current.value.length < 4) {
            setValidPass('Passwords must be at least 4 characters long. Try again.')
          }
          if (passRef.current.value.trim() === '') {
            setValidPass('Make sure you enter a password.')
          }
        }
      }
      console.log(data)
    } catch (error) {
      console.error(error)
    }
  }
  const handleLogIn = async (event) => {
    setValidEmail('')
    setValidPass('')
    console.log('3333', isLogIn)
    if (isLogIn) { event.preventDefault() }
    const formData = {
      email: emailRef.current.value,
      password: passRef.current.value
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
      console.log(data, response.status)
      if (response.status === 200) {
        localStorage.setItem('token', data.detail.Token)
        localStorage.setItem('name', data.detail.Name)
        props.onClose()
      } else {
        if (response.status === 422) {
          setValidEmail('Double check your email and try again.')
        }
        if (response.status === 401) {
          setValidPass('Wrong email or password')
        }
        if (emailRef.current.value.trim() === '' ||
       passRef.current.value.trim() === '' ||
        passRef.current.value.length < 3
        ) {
          if (emailRef.current.value.trim() === '') {
            setValidEmail('Email Cannot be blank')
          }
          if (passRef.current.value.length < 4) {
            setValidPass('Passwords must be at least 4 characters long. Try again.')
          }
          if (passRef.current.value.trim() === '') {
            setValidPass('Make sure you enter a password.')
          }
        }
      }
    } catch (error) {
      console.error(error)
    }
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
          setValidEmail('')
          setValidPass('')
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
                  : <div><form className='form loginform'>
                                 {!isLogIn && <p className='field required'>
    <label className='label required'>Full Name</label>
    <input className='text-input' id='fullname' name='fullname' required type='text' ref={nameRef}/>
    <p className='valid'>{validName}</p>
  </p>}
  <p className='field required'>
    <label className='label required'>Email</label>
    <input className='text-input' id='email' name='email' required type='email' ref={emailRef}/>
    <p className='valid'>{validEmail}</p>
  </p>
  <p className='field required'>
    <label className='label required'>Password</label>
    <input className='text-input' id='password' name='password' required type='password' ref={passRef} />
    <p className='valid'> {validPass}</p>
  </p>
  <div style={{ margin: 'auto' }}><Button text={isLogIn ? 'Log In' : 'Sign Up'} onClick={isLogIn ? handleLogIn : handleSignUp} icon='none' color='#D2461c' width='400px' /></div>
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
