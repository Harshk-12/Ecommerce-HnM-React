import React from 'react'

function Contact() {
  return (
    <div className='form-container-parent'>

    <div className='form-container'>
      <form action="/" className='form' >
        <h1>Contact Us</h1>
        <input type="text" placeholder='Enter your name' required />
        <input type="text" placeholder='Enter your number' required/>
        <input type="email" placeholder='Enter your Email Id' required />
         <button type='submit'>Send</button>

      </form>
    </div>
    </div>
  )
}

export default Contact