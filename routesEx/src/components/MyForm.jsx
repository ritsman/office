import React from 'react';
import { Form } from 'react-router-dom';
import './Myform.css'
function MyForm() {
  
    return (
        <>
      <div className="contact-container">
            <h1>Contact us</h1>
            <form method='post' action='/form' className="form-container">
                <div className="form-group">
                    <label>
                        <span>Your Name :</span>
                        <input type="text" name='name' placeholder='Write your name' required />
                    </label>
                </div>
                <div className="form-group">
                    <label>
                        <span>Your Number :</span>
                        <input type="tel" name='number' placeholder='Write your number' required />
                    </label>
                </div>
                <div className="form-group">
                    <label>
                        <span>Your Email :</span>
                        <input type="email" name='email' placeholder='Write your email' required />
                    </label>
                </div>
                <div className="form-group">
                    <label>
                        <span>Your Message :</span>
                        <textarea name="message" required></textarea>
                    </label>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
        </>
    );
}

export default MyForm;
