import React from 'react'
import './index.scss'
const ContactUS = () => {
  return (
    <div className='contact-us-container'>
        <div className='contact-information'>
               <h3>Contact Information</h3>
               <div>
                    <span className='key'>Adress:</span>
                    <span className='value'>198 West 21th Street, Suite 721 New York NY 10016</span>
               </div>
               <div>
                    <span className='key'>Phone:</span>
                    <span className='value'>+ 1235 2355 98</span>
               </div>
               <div>
                    <span className='key'>Email:</span>
                    <span className='value'>Koushaljha889@gmail.com</span>
               </div>
               <div>
                    <span className='key'>Website:</span>
                    <span className='value'> yoursite.com</span>
               </div>
        </div>
        <div className='send-message-container'>
           <div className='name-email'>
            <input type='text' placeholder='Name' className='style-inputs'></input>
            <input type='text' placeholder='Email' className='style-inputs'></input>
           </div>
           <input type='text' placeholder='Subject' className='style-inputs'></input>
           <textarea type='text' placeholder='Message' className='style-inputs'></textarea>
           <button className='send-message-button'>Send Message</button>
        </div>
    </div>
  )
}

export default ContactUS