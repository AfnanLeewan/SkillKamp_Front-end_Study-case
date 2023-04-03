import React from 'react'
import classes from './detail.module.css'
const Details = () => {
  return (<div>
        <ul className={classes['contact-lists'] } >
          <li>
            <div className={classes['contact-list'] }>
            <ul>
            <li className={classes['contact-subheader']}><p>VISIT US</p></li>

            <li className={classes['contact-detail']}>
                <ul>
                <li>500 Terry Francois St.</li>
            <li>San Francisco, CA 94158</li>
            <li>123-456-7890</li>
                </ul>
            </li>
            </ul>
            </div>
          </li>
          <li>
          <div className={classes['contact-list'] }>
            <ul>
            <li className={classes['contact-subheader']}><p>OPENING HOURS</p></li>
            <li className={classes['contact-detail']}>
                <ul>
                <li>Mon - Fri: 7am - 10pm.</li>
                <li>Saturday: 7am - 10pm</li>
                <li>Sanday: 7am - 10pm</li>
                </ul>
            </li>
            </ul>
            </div>
          </li>
          <li>
          <div className={classes['contact-list'] }>
            <ul>
            <li className={classes['contact-subheader']}><p>CUSTOMER SERVICE</p></li>

            <li className={classes['contact-detail']}>
                <ul>
                <li>1-800-000-000</li>
            <li>123-456-7890</li>
            <li>info@mysite.com</li>
                </ul>
            </li>
            </ul>
            </div>
          </li>
        </ul>
    </div>)
}
export default Details
