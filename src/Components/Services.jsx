import React, { useEffect, useRef } from "react";
import Container from "react-bootstrap/Container";
import "./CSS/services.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ExpCard from "./ExpCard";
import { delay, motion, useInView } from "framer-motion";


const servicevariants={
  initial:{
    x:100,
    opacity:0,
  },
  animate:{
    x:0,
    opacity:1,
    transition:{
      duration:1,
      staggerChildren: 0.4,
    }

  }
}


function Services() {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });

  useEffect(() => {
    const scrollers = document.querySelectorAll(".scroller");
    addAnimation(scrollers);
  }, []);

  function addAnimation(scrollers) {
    scrollers.forEach((scroller) => {
      scroller.setAttribute("data-animated", true);

      const scrollerInner = scroller.querySelector(".scroller__inner");
      const scrollerContent = Array.from(scrollerInner.children);

    
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        duplicatedItem.setAttribute("aria-hidden", true);
        scrollerInner.appendChild(duplicatedItem);
      });
    });
  }
  return (
    <div id="services" style={{ minHeight: "100vh" }}>
      <div>
        <h1 className="text-center mb-5">
          <span style={{ color: "orange" }}>Service</span> Showcase
        </h1>
        <Container>
          <motion.div
           ref={ref}
           variants={servicevariants}
           initial="initial"
           whileInView="animate"
           transition={{duration:1}}
           viewport={{
           once:true
       }}
          className="row">
            <motion.div 
            variants={servicevariants}
            className="col-md-4">
              <div className="servicecard mb-3">
                <div className="text-center mb-3">
                  <i
                    class="fa-solid fa-paintbrush fs-1"
                    style={{ color: "orange" }}
                  ></i>
                </div>
                <h2 className="text-center">UI/UX Design</h2>
              </div>
            </motion.div>
            <motion.div 
            variants={servicevariants}
            className="col-md-4">
              <div className="servicecard mb-3">
                <div className="text-center mb-3">
                  <i
                    class="fa-brands fa-react fs-1"
                    style={{ color: "orange" }}
                  ></i>
                </div>
                <h2 className="text-center">React Projects</h2>
              </div>
            </motion.div>
            <motion.div
            variants={servicevariants}
            className="col-md-4">
              <div className="servicecard mb-3">
                <div className="text-center mb-3">
                  <i
                    class="fa-brands fa-python fs-1"
                    style={{ color: "orange" }}
                  ></i>
                </div>
                <h2 className="text-center">Python Project</h2>
              </div>
            </motion.div>
          </motion.div>
          <div className="">
          <div className="scroller ms-5 mt-5" data-speed="fast">
            <ul className="tag-list scroller__inner">
              <li>HTML</li>
              <li>CSS</li>
              <li>JS</li>
              <li>React</li>
              <li>Python</li>
              <li>C</li>
              <li>C++</li>
              <li>Graphics Designing</li>
              <li>3D animation</li>
              <li>UI/UX</li>
              <li>GSAP</li>
              <li>Framer motion</li>
            </ul>
          </div>

          <div id="scroller2" className="scroller ms-5 mt-5" data-direction="right" data-speed="fast3">
            <ul className="tag-list scroller__inner">
              <li>HTML</li>
              <li>CSS</li>
              <li>JS</li>
              <li>React</li>
              <li>Python</li>
              <li>C</li>
              <li>C++</li>
              <li>Graphics Designing</li>
              <li>3D animation</li>
              <li>UI/UX</li>
              <li>GSAP</li>
              <li>Framer motion</li>
            </ul>
          </div>
          <div id="scroller3" className="scroller ms-5 mt-5" data-speed="fast2">
            <ul className="tag-list scroller__inner">
              <li>HTML</li>
              <li>CSS</li>
              <li>JS</li>
              <li>React</li>
              <li>Python</li>
              <li>C</li>
              <li>C++</li>
              <li>Graphics Designing</li>
              <li>3D animation</li>
              <li>UI/UX</li>
              <li>GSAP</li>
              <li>Framer motion</li>
            </ul>
          </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Services;
