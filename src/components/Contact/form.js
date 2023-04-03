import React from 'react'
import './form.css'
const MessageForm = () => {
  return (
        <div>
            <h3 className='form-header'>FOR ANY QUESTIONS, PLEASE SEND US A MESSAGE</h3>
            <form action='' className='form'>

  <p className='field required half'>
    <label className='label'>First Name</label>
    <input className='text-input' id='email' name='email' required type='email'/>
  </p>
  <p className='field half'>
    <label className='label'>Last Name</label>
    <input className='text-input' id='phone' name='phone' type='phone'/>
  </p>
  <p className='field required'>
    <label className='label required'>Email</label>
    <input className='text-input' id='name' name='name' required type='text'/>
  </p>
  <p className='field required'>
    <label className='label required'>Subject</label>
    <input className='text-input' id='name' name='name' required type='text' />
  </p>
  <p className='field required'>
    <label className='label required'>Message</label>
    <textarea id='name' name='name' />
  </p>
  </form> <div className='container'><button className='submit'>Submit</button></div>
        </div>
  )
}
export default MessageForm
