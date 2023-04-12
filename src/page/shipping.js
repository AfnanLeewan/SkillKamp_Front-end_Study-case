import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
const Shipping = () => {
  return (

    <React.Fragment>
        <Navbar/>
        <hr />
        <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <div style={{ marginBottom: '90px', textAlign: 'center', fontFamily: 'brandon_reg', width: '850px', letterSpacing: '1px' }}>
          <h1 style={{ margin: '50px' }}>Shipping & Returns</h1>
        <div style={{ margin: '70px auto' }}>
          <h3>SHIPPING POLICY</h3>
          <p>I&apos;m a shipping policy section. I&apos;m a great place to update your customers about your shipping methods, packaging and costs. Use plain, straightforward language to build trust and make sure that your customers stay loyal!</p>
        <p>I&apos;m the second paragraph in your shipping policy section. Click here to add your own text and edit me. It&apos;s easy. Just click “Edit Text” or double click me to add details about your policy and make changes to the font. I&apos;m a great place for you to tell a story and let your users know a little more about you.</p>
        </div>
        <div>
          <h3>RETURN & EXCHANGE POLICY</h3>
          <p>I’m a return policy section. I’m a great place to let your customers know what to do in case they’ve changed their mind about their purchase, or if they’re dissatisfied with a product. Having a straightforward refund or exchange policy is a great way to build trust and reassure your customers that they can buy with confidence.</p>
          <p>I&apos;m the second paragraph in your return & exchange policy. Click here to add your own text and edit me. It&apos;s easy. Just click “Edit Text” or double click me to add details about your policy and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p>
        </div></div>
        </div>
        <Footer/>
        </React.Fragment>
  )
}
export default Shipping
