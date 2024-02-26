import React from 'react';
import { Form } from 'react-router-dom';

function MyForm() {
  
    return (
        <>
       <h1>Contact us</h1>
       <Form method='post' action='/form'>
        <div>

       <label >
        <span>Your Name : </span>
        <input type="text" name='name' placeholder='write your name' required/>
       </label>
       </div>
       <div>
       <label >
        <span>Your number : </span>
        <input type="number" name='number' placeholder='write your number ' required/>
       </label>
       </div>
       <div>
       <label >
        <span>Your email : </span>
        <input type="email" name='email' placeholder='write your email' required/>
       </label>
        </div>
       <div>
       <label >
        <span>Your message : </span>
        <textarea name="message" required></textarea>
       </label>
        </div>

        <button>Submit</button>
       </Form>
        </>
    );
}

export default MyForm;
