import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import cover from '../assets/image/Banner4- Our story.png'
const OurStory = () => {
  return (
    <React.Fragment>
    <Navbar/>
    <div style={{ width: '100%', height: '650px' }}>
  <img src={cover} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
</div>
    <h2 style={
        {
          textAlign: 'center',
          fontFamily: 'brandon_reg',
          letterSpacing: '3px',
          fontSize: '30px',
          marginTop: '30px',
          marginBottom: '30px'
        }}>Our Story</h2>
        <p style={
            {
              fontFamily: 'brandon_light',
              textAlign: 'center',
              margin: '50px auto 30px auto ',
              fontSize: '15px',
              letterSpacing: '1px',
              width: '900px'

            }
        }
        >I&apos;m a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me and you can start adding your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you. </p>
                <p style={
            {
              fontFamily: 'brandon_light',
              textAlign: 'center',
              margin: '1px auto 50px auto ',
              fontSize: '15px',
              letterSpacing: '1px',
              width: '900px'

            }
        }
        >This is a great space to write long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors. Make your company stand out and show your visitors who you are. </p>

    <Footer/>
    </React.Fragment>
  )
}
export default OurStory
