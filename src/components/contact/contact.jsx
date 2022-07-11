import React from "react";
import "./contact.css";
import { MdEmail } from "react-icons/md";
import { BsTwitter } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_e9ah8ct",
      "template_yu3jpme",
      form.current,
      "vMIz_0Tj0wxdvbTX0"
    );
    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>Jamesoluwaleye@gmail.com</h5>
            <a href="mailto:jamesoluwaleye@gmail.com" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <BsTwitter className="contact__option-icon" />
            <h4>Twitter</h4>
            <h5>jA10TH</h5>
            <a href="Https://twitter.com/ja10th" target="_blank">
              Private chat
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <h5>07045380644</h5>
            <a
              href="https://api.whatsapp.com/send?=+2347045380644"
              target="_blank">
              Send a message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Full-Name" required />
          <input
            type="email"
            name="email"
            placeholder="Email-Address"
            required
          />
          <textarea
            name="message"
            rows="7"
            placeholder="Your message"
            required></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
