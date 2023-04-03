import React from 'react'
import './index.css'
import Details from './details'
import MessageForm from './form'

const ContactUs = () => {
  return (
        <div className='main-container'>
                <h2 className='contact-header'>Contact Us</h2>
                <Details/>
                <MessageForm/>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1875.2526037660214!2d-122.38870634631444!3d37.77160671693622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7e30a49dcf0f%3A0x97224833eb32cac5!2sCisco%20Meraki!5e0!3m2!1sen!2sth!4v1680513255926!5m2!1sen!2sth" height="450" style={{ border: 'none', width: '100%' }} allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        </div>
  )
}
export default ContactUs
