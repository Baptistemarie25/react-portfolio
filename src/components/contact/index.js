import React from 'react'

function Contact() {

    return (
        <section id='Contact-me'>

            <h4>Contact Me</h4>
        
            <div className='container contact-info'>

                <div className='contact-specs'>

                <article className='contact-1'>
                    <h4>Email</h4>
                    <h5>baptiste.mariee24@gmail.com</h5>
                    <a href='mailto:baptiste.mariee24@gmail.com'>Email to reach</a>
                </article>
        
                <article className='contact-2'>
                    <h4>LinkedIn</h4>
                    <h5>Marie Baptiste</h5>
                    <a href='https://www.linkedin.com/in/marie-baptiste-a06b39155/' target="_blank">Let's Talk</a>
                </article>
                </div>
            </div>
        </section>
    )
}

export default Contact;