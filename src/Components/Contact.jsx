import React from 'react'
import './CSS/contact.css'
import "./CSS/contact.scss";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import emailjs from "@emailjs/browser";
const variants = {
  initial: {
    y: 300,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};
function Contact() {
  const ref = useRef();
  const formRef = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const isInView = useInView(ref, { margin: "-100px" });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9w37d1e",
        "template_arjdci8",
        formRef.current,
        "krgRjw9SKrpVrBsF5"
      )
      .then(
        (result) => {
          setSuccess(true)
        },
        (error) => {
          setError(true);
        }
      );
  };
  return (
    <div id='contact' className='mt-5 mb-5'>
        <motion.div
        style={{minHeight:'100vh'}}
      ref={ref}
      className="contact"
      variants={variants}
      initial="initial"
      whileInView="animate"
      viewport={{
        once:true
      }}
    >
      <motion.div className="textContainer" variants={variants}>
        <motion.h1 variants={variants}>Let’s <span style={{color:'orange'}}> work</span> together</motion.h1>
        <motion.div className="item" variants={variants}>
          <h2>Mail</h2>
          <span>aswinkizhuppully@gmail.com</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>Address</h2>
          <span>kizhuppully(h) <br />Nandikkara <br />Thrissur</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>Phone</h2>
          <span>+971 543895149</span>
        </motion.div>
      </motion.div>
      <div className="formContainer">
       
        <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ }}
          viewport={{
            once:true,
          }}
        >
          <input type="text" required placeholder="Name" name="name"/>
          <input type="email" required placeholder="Email" name="email"/>
          <textarea rows={8} placeholder="Message" name="message"/>
          <button>Submit</button>
          {error && "Error"}
          {success && "Success"}
        </motion.form>
      </div>
    </motion.div>
    </div>
  )
}

export default Contact