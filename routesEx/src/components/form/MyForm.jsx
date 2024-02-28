import React from 'react';
import { Form } from 'react-router-dom';
import './Myform.css'
function MyForm() {
  
    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Access form data using FormData
        const formData = new FormData(e.target);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');
        
        // You can now do whatever you need with the form data, like sending it to a server
        
        // For example, log the form data to the console
        setTimeout(() => {
            console.log('Name:', name);
            console.log('Email:', email);
            console.log('Message:', message);
          }, 3000);
        
        // Redirect to success page on successful submission
        window.location.href = '/success';
      };
    return (
        <>
        <section className='sizing '>

      <div className="container ">
      <Form onSubmit={handleSubmit} className="contact-form ">
      <div className='row'>
        <div className="col-lg-6 m_size ">
        <label>Name:</label></div>
        <div className="col-lg-6 name_box ">

        <input type="text" name="name" placeholder='Write your Name' />
        </div>
      </div>
      <div className='row'>
        <div className="col-lg-6 m_size">
        <label>Email:</label>

        </div>
        <div className="col-lg-6  email_box">

        <input type="email" name="email" placeholder='write your email'/>
        </div>
      </div>
      <div className='row d-inline-flex msg_box'>
        <div className='msg_box'>

        <label>Message:</label>
        </div>
        <div className='message_box'>

        <textarea name="message" placeholder='write your message here'></textarea>
        </div>
      </div>
      <div className='row'>
<div className='btn'>

      <button type="submit">Submit</button>
</div>
      </div>
    </Form>
    </div>
    </section>
        </>
    );
}

export default MyForm;
