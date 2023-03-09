import React, { useRef } from "react";
// import emailjs from 'emailjs/browser';
import "./contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // emailjs
    //   .sendForm(
    //     "service_x1hewh5",
    //     "template_2ki8hlo",
    //     form.current,
    //     "vxDcl4UI2jbOQBn6f"
    //   )
    //   e.target.reset()
  };

  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Contact</h2>
      <span className="section__subtitle"></span>

      <div className="contact__container container grid">

        <div className="contact__content" alignSelf='center'>

          <form ref={form} onSubmit={sendEmail} className="contact__form">
            <div className="contact__form-div">
              <label className="contact__form-tag">Name</label>
              <input
                type="text"
                name="name"
                className="contact__form-input"
                placeholder="John Doe"
              />
            </div>

            <div className="contact__form-div">
              <label className="contact__form-tag">Your Email</label>
              <input
                type="email"
                name="email"
                className="contact__form-input"
                placeholder="johndoe@email.com"
              />
            </div>

            <div className="contact__form-div contact__form-area">
              <label className="contact__form-tag">Message</label>
              <textarea
                name="project"
                cols="30"
                rows="10"
                className="contact__form-input"
                placeholder="Hello there!"
              ></textarea>
            </div>

            <button className="button button--flex">
              Send Message
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
          viewBox="0 0 24 24" 
          class="button__icon"
          width="24"
          height="24"
          fill='#97C3FF'>
          <path d="M20.83,15.831c-0.12,0.41-0.47,0.71-0.89,0.77l-7.51,1.18l-5.63,4.66c-0.2,0.16-0.45,0.25-0.7,0.25 c-0.16,0-0.32-0.03-0.47-0.11C5.25,22.401,5,22.011,5,21.591V3.361c0-0.43,0.26-0.83,0.65-1c0.39-0.18,0.86-0.11,1.18,0.18 l13.68,12.15C20.82,14.981,20.95,15.421,20.83,15.831z"></path>
        </svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
