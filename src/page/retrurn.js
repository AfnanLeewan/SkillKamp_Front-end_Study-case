import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
const Return = () => {
  return (

    <React.Fragment>
        <Navbar/>
        <hr />
        <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <div style={{ marginBottom: '90px', textAlign: 'center', fontFamily: 'brandon_reg', width: '850px', letterSpacing: '1px' }}>
          <h1 style={{ margin: '50px' }}>Store Policy</h1>
        <div style={{ margin: '70px auto' }}>
          <h3>CUSTOMER CARE</h3>
          <p>I’m a customer care section. I’m a great place to write a long text about your company and your services, and, most importantly, how to contact your store with queries. Writing a detailed Customer Care policy is a great way to build trust and reassure your customers that they can buy with confidence.</p>
        <p>I&apos;m the second paragraph in your customer care section. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add details about your policy and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p>
        </div>
        <div>
          <h3>WHOLESALE INQUIRIES</h3>
          <p>I’m a privacy & safety policy section. I’m a great place to inform your customers about how you use, store, and protect their personal information. Add details such as how you use third-party banking to verify payment, the way you collect data or when will you contact users after their purchase was completed successfully.</p>
          <p>Your user’s privacy is of the highest importance to your business, so take the time to write an accurate and detailed policy. Use straightforward language to gain their trust and make sure they keep coming back to your site!</p>
        </div>
        <div>
          <h3 style={{ marginTop: '70px' }}>PRIVACY & SAFETY</h3>
          <p>I’m a wholesale inquiries section. I’m a great place to inform other retailers about how they can sell your stunning products. Use plain language and give as much information as possible in order to promote your business and take it to the next level!</p>
          <p>I&apos;m the second paragraph in your wholesale inquiries section. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add details about your policy and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you</p>
        </div>
        <div>
        <h3 style={{ marginTop: '70px' }}>PAYMENT METHODS</h3>
        <p>- Credit / Debit Cards</p>
        <p>- PAYPAL</p>
        <p>- Offline Payments</p>
        </div>
        </div>
        </div>
        <Footer/>
        </React.Fragment>
  )
}
export default Return
