import React, { useRef } from "react";
import aboutpic from "../Assets/about pic1.png";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { animate, delay, motion, useInView } from "framer-motion";
import './CSS/about.css'
import { init } from "@emailjs/browser";

const aboutimgvariant={
  initial:{
    x:-200,
    opacity:0,
  },
  animate:{
    x:0,
    opacity:1,
    transition:{
      duration:0.7,
      staggerChildren: 0.3,
    }
  }
}
const aboutvariant={
  initial:{
    x:200,
    opacity:0,
  },
  animate:{
    x:0,
    opacity:1,
    transition:{
      duration:0.7,
      staggerChildren: 0.3,
    }
  }
}
const aboutheadvariant={
  initial:{
    y:100,
    opacity:0,
  },
  animate:{
    y:0,
    opacity:1,
    transition:{
      duration:0.7,
      staggerChildren: 0.3,
    }
  }
}



function About() {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });
  return (
    <div id="about" style={{overflow:'hidden'}}>
      <div style={{ minHeight: "100vh" }}>

        <h1 className="text-center  mt-5 pt-5"><span style={{color:'orange'}}>About</span> Me</h1>
        <motion.div 
         ref={ref}
         variants={aboutheadvariant}
         initial="initial"
         whileInView="animate"
         transition={{duration:.7}}
         viewport={{
         once:true
     }}
        className="container">
        <Row>
          
          <Col>
          <motion.div 
          ref={ref}
          variants={aboutimgvariant}
          initial="initial"
          whileInView="animate"
          transition={{duration:.2}}
          viewport={{
          once:true
      }}
          >
            <img className="aboutimg" src={aboutpic}  alt="" />
            </motion.div>
          </Col>
          <Col>
          <motion.div
          ref={ref}
          variants={aboutvariant}
          initial="initial"
          whileInView="animate"
          transition={{duration:.2}}
          viewport={{
          once:true
      }}
          >
            <p style={{textAlign:'left',position:'relative',fontSize:'27px',marginRight:'20px',marginTop:'80px'}}>
              Hi, I'm ASWIN, a passionate MEARN developer with a love for
              creating innovative and efficient web applications. I have a
              strong foundation in both front-end and back-end technologies,
              allowing me to bring ideas to life from concept to implementation.
            </p>
            </motion.div>
          </Col>
        
        </Row>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
