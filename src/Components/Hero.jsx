import React, { useEffect, useRef, useState } from "react";
import dp from "../Assets/dpimg.png";
import "./CSS/hero.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "@mui/material/Button";
import Stack from '@mui/material/Stack';
import { delay, motion, useInView } from "framer-motion";
import { Element, animateScroll as scroll, Link as ScrollLink } from 'react-scroll';

const SideButtonvariants = {
  initial: {
    x: -50,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    
  },
};

const HeroHeadvariant ={
  initial:{
    y:300,
    opacity:0
  },
  animate:{
    y:0,
    opacity:1,
    transition: {
      duration: 0.7,
      staggerChildren: 0.3,
    },
  },
};

const dpvariant={
  initial:{
    x:500,
    y:-500,
    rotate:-45,
    opacity:0
  },
  animate:{
    x:0,
    y:0,
    rotate:-45,
    opacity:1,
    transition: {
      duration: 0.7,
      staggerChildren: 0.3,
    },
   
  }
};
const dpimgvariant={
  initial:{
    y:-200,
    opacity:0,
    rotate:45
  },
  animate:{
    rotate:45,
    y:0,
    opacity:1,
    transition:{
      duration:.6,
      delay:.1
    }

  }
}



function Hero() {
  const ref = useRef();
  const [openNavSecond, setOpenNavSecond] = useState(false);
  const scrollToSection = (sectionId) => {
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      const targetPosition = targetElement.offsetTop;
      scroll.scrollTo(targetPosition, {
        smooth: true,
        duration: 500,
      });
      setOpenNavSecond(false); // Close the navbar after clicking a link
    }
  };

  useEffect(() => {
    const scrollers = document.querySelectorAll(".scroller1");
    addAnimation(scrollers);
  }, []);
  const isInView = useInView(ref, { margin: "-100px" });
  function addAnimation(scrollers) {
    scrollers.forEach((scroller) => {
      // add data-animated="true" to every `.scroller` on the page
      scroller.setAttribute("data-animated", true);

      // Make an array from the elements within `.scroller-inner`
      const scrollerInner = scroller.querySelector(".scroller__inner1");
      const scrollerContent = Array.from(scrollerInner.children);

      // For each item in the array, clone it
      // add aria-hidden to it
      // add it into the `.scroller-inner`
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        duplicatedItem.setAttribute("aria-hidden", true);
        scrollerInner.appendChild(duplicatedItem);
      });
    });
  }
  return (
    <div id="home" style={{  overflow: "hidden" }}>
      <Row>
        <Col
          className="d-flex flex-column justify-content-center ms-5 "
          style={{}}
        >
          <motion.div
          ref={ref}
          variants={SideButtonvariants}
          initial="initial"
          whileInView="animate"
          transition={{duration:.2}}
          viewport={{
          once:true
      }}
          className="rectangle1">
          <a href="https://www.facebook.com/">  <i
              class="brandlogo fa-brands fa-facebook fs-1  m-2"
              
              style={{ color: "#138eec" }}
            ></i>{" "}</a>
          </motion.div>
          <motion.div 
          ref={ref}
          variants={SideButtonvariants}
          initial="initial"
          whileInView="animate"
          transition={{duration:.4,delay:.1}}
          viewport={{
          once:true
      }}
          className="rectangle1">
           <a href="https://www.linkedin.com/in/aswin-ks-48922a14b/"> <i
              class="brandlogo fa-brands fa-linkedin fs-1 m-2"
              
              style={{ color: "#138eec" }}
            ></i>{" "}</a>
          </motion.div>
          <motion.div
          ref={ref}
          variants={SideButtonvariants}
          initial="initial"
          whileInView="animate"
          transition={{duration:.6,delay:.1}}
          viewport={{
          once:true
      }}
          className="rectangle1">
            {" "}
           <a href="https://github.com/Aswin-K-S"> <i class="brandlogo fa-brands fa-github fs-1 m-2"></i></a>
          </motion.div>
          <motion.div 
            ref={ref}
            variants={SideButtonvariants}
            initial="initial"
            whileInView="animate"
            transition={{duration:.8,delay:.1}}
            viewport={{
            once:true
        }}
          className="rectangle1">
          <a href="https://www.instagram.com/cyber_gpsy_?igsh=MWFhdWQ5MGY0ZTY1eg=="> <i class="brandlogo fa-brands fa-instagram fs-1 m-2"></i>{" "}</a> 
          </motion.div>
          <motion.div
            className="herohead ms-5"
            ref={ref}
            variants={HeroHeadvariant}
            initial="initial"
            whileInView="animate"           
            viewport={{
            once:true
        }}
          >
            <motion.h4 variants={HeroHeadvariant}>Hi there !</motion.h4>
            <motion.h4>
              <motion.h2 variants={HeroHeadvariant} >
                I am <span style={{ color: "orange" }}>ASWIN</span>
              </motion.h2>
            </motion.h4 >
            <motion.h3 variants={HeroHeadvariant}>I am a MEARN developer</motion.h3>
            <Stack direction="row" spacing={2}>
             <motion.Button onClick={() => scrollToSection('project')} variants={HeroHeadvariant}  className="hmbtn mt-3 btn btn-outline-warning rounded-pill" variant="outlined" color="warning" >Projects</motion.Button>
              
            <a href="https://www.linkedin.com/in/aswin-ks-48922a14b/">  <motion.Button variants={HeroHeadvariant}  className="hmbtn mt-3 btn btn-outline-warning rounded-pill" variant="outlined" color="warning"  >
                Hire Me
              </motion.Button></a>
            </Stack>
          </motion.div>
        </Col>
        <Col>
          <motion.div
            ref={ref}
            variants={dpvariant}
            initial="initial"
            whileInView="animate"           
            viewport={{
            once:true
        }}
            className="rectangle"
            style={{
              height: "47.945205479452056vh",
              width: "52.083333333333336vw",
              backgroundColor: "orange",
              borderRadius: "27.397260273972602vh 0px 0px 27.397260273972602vh",
              transform: "rotate(-45deg)",
              position: "relative",
              left: "9.765625vw",
              overflow: "hidden",
            }}
          >
            <motion.img
              variants={dpimgvariant}
              src={dp}
              alt=""
              style={{
                transform: "rotate(45deg)",
                width: "40%",
                position: "relative",
                top: "-30px",
              }}
            />
          </motion.div>
        </Col>
      </Row>
      <Row>
        <Col>
        <div className="scroller1 ms-5 " data-speed="fast">
            <ul className="tag-list1 scroller__inner1">
              <li>MONGODB</li>
              <li>EXPRESS</li>
              <li>ANGULAR</li>
              <li>REACT</li>
              <li>NODE</li>
            </ul>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Hero;
