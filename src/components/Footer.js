import React, { useState } from 'react'
import '../styles/footer.scss'
import "regenerator-runtime/runtime"
import axios from 'axios'


function Footer() {
    let [email, setEmail] = useState('');
    let [subject, setSubject] = useState('');
    let [body, setBody] = useState('');

    const postEmail = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post('http://localhost:3030', {
                email: email,
                subject: subject,
                body: body,
            })
            console.log(`Email Sent! ${response}`)
        }
        catch (error) {
            console.log(error)
        }
    }

    return (
        <section className="footer" id="footer">
            {/* Title */}
            <h2 className="title"> Contact Me! </h2>
            {/* Form */}
            {/* action="https://formsubmit.co/sebsphotosofficial@gmail.com" */}
            <form method="POST">
                {/* Captcha */}
                {/* <input type="hidden" name="_captcha" value="false" /> */}
                {/* Email */}
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Email Address" onChange={(e) => { setEmail(e.target.value) }} required />
                {/* Subject */}
                <label htmlFor="_subject">Subject</label>
                <input type="text" id="subject" name="_subject" onChange={(e) => { setSubject(e.target.value) }} required />
                {/* Body */}
                <label htmlFor="message">Body</label>
                <textarea name="message" rows={10} cols={50} onChange={(e) => { setBody(e.target.value) }} required />
                {/* Submit Button */}
                <button type="submit" onClick={postEmail}>Submit</button>
            </form>
        </section>
    )
}

export default Footer
