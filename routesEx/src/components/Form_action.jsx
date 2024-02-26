import React from 'react'
import { redirect } from 'react-router-dom'



    

const Form_action = () => async ({Request})=>{
    const data = await Request.formData()
    const submission = {
        name: data.get('name'),
        email: data.get('email'),
        number: data.get('number'),
        message: data.get('message')

    }
    console.log(submission)
    return redirect ('/')
}

export default Form_action
