import React from 'react'
import './contact.css'

function Contact() {
    return (
        <>
            <section className="contact" id="contact">

                <h1 className="heading">get in touch</h1>

                <div className="row">

                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3681.4693329697852!2d87.50233471744384!3d22.673566000000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f7ff9541bc6fcf%3A0xf92ca15e1d4dd8e8!2sPanchkhuri%20primary%20school!5e0!3m2!1sen!2sin!4v1689225592563!5m2!1sen!2sin" width="600" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                    <form action="https://formspree.io/f/xwkdkyqj" method='POST' className='contact-inputs'>

                        <div className="inputBox">
                            <input type="text" autoComplete='off' required />
                            <label>name</label>
                        </div>
                        <div className="inputBox">
                            <input type="email" autoComplete='off' required />
                            <label>email</label>
                        </div>
                        <div className="inputBox">
                            <input type="number" autoComplete='off' required />
                            <label>contact number</label>
                        </div>
                        <div className="inputBox">
                            <textarea required autoComplete='off' name="message" id="" cols="30" rows="10"></textarea>
                            <label>message</label>
                        </div>

                        <input type="submit" value="send message" className="btn" />

                    </form>




                </div>

            </section>

        </>
    )
}
export default Contact;
