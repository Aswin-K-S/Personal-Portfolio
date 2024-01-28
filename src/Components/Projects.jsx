import React, { useRef, useState } from "react";
import Container from "react-bootstrap/Container";
import "./CSS/projects.css";
import p1 from "../Assets/1.png";
import p2 from "../Assets/2.png";
import p3 from "../Assets/3.png";
import p4 from "../Assets/4.png";
import p5 from "../Assets/5.png";
import p6 from "../Assets/6.png";
import p7 from "../Assets/7.png";
import p8 from "../Assets/8.png";
import { MDBCollapse, MDBBtn } from "mdb-react-ui-kit";
import { delay, motion, useInView } from "framer-motion";



const projectvarinats={
  initial:{
    y:100,
    opacity:0
  },
  animate:{
    y:0,
    opacity:1,
    transition:{
      duration:1,
      staggerChildren: 0.4,
    }
  }
}

function Projects() {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });

  const [isOpen, setIsOpen] = useState(false);
  const [knowmore, setKnowMore] = useState("View More");
  const toggleOpen = () => {
    setIsOpen(!isOpen);
    setKnowMore(isOpen ? "View More" : "View Less");
  };

  return (
    <div id="project" style={{ minHeight: "100vh" }}>
      <div>
        <h1 className="text-center">
          <span style={{ color: "orange" }}>Project</span> Showcase
        </h1>
        <Container >
          <motion.div 
           ref={ref}
           variants={projectvarinats}
           initial="initial"
           whileInView="animate"
           transition={{duration:1}}
           viewport={{
           once:true
       }}
          className="row" >
            <motion.div
            variants={projectvarinats}
            className="col-md-5 ">
              <div
                className="projectcard"
                style={{
                  
                  overflow: "hidden",
                }}
              >
                
                  <img src={p1}  alt="" />
                
                <div className="project-buttons">
                  <a href="https://aswin-k-s.github.io/Bank/" className="live btn btn-secondary w-25">Live</a>
                  <a href="https://github.com/Aswin-K-S/Bank.git" className="github btn btn-secondary w-25">GitHub</a>
                </div>
              </div>
         
            </motion.div>
            <div className="col-md-2"></div>
            <motion.div variants={projectvarinats} className="col-md-5 ">
              <div
                className="projectcard"
                style={{
                  
                  overflow: "hidden",
                }}
              >
                
                  <img src={p3}  alt="" />
               
                <div className="project-buttons">
                  <a href="https://aswin-k-s.github.io/Food-Gallery/" className="live btn btn-secondary w-25">Live</a>
                  <a href="https://github.com/Aswin-K-S/Food-Gallery.git" className="github btn btn-secondary w-25">GitHub</a>
                </div>
              </div>
         
            </motion.div>
          </motion.div>
          <motion.div 
           ref={ref}
           variants={projectvarinats}
           initial="initial"
           whileInView="animate"
           transition={{duration:1}}
           viewport={{
           once:true
       }}
          className="row" >
            <motion.div 
            variants={projectvarinats}
            className="col-md-5">
              <div
                className="projectcard"
                style={{
                 
                  overflow: "hidden",
                }}
              >
                
                  <img src={p4}  alt="" />
                  <div className="project-buttons">
                  <a href="https://aswin-k-s.github.io/Travel-Blog/" className="live btn btn-secondary w-25">Live</a>
                  <a href="https://github.com/Aswin-K-S/Travel-Blog.git" className="github btn btn-secondary w-25">GitHub</a>
                </div>
              </div>
       
            </motion.div>
          <div className="col-md-2"></div>

            <div className="col-md-5">
             
            <div
                className="projectcard"
                style={{
                 
                  overflow: "hidden",
                }}
              >
                
                  <img src={p5}  alt="" />
                  <div className="project-buttons">
                  <a href="https://aswin-k-s.github.io/Travel-Blog/" className="live btn btn-secondary w-25">Live</a>
                  <a href="https://github.com/Aswin-K-S/Travel-Blog.git" className="github btn btn-secondary w-25">GitHub</a>
                </div>
              </div>
            </div>
          </motion.div>
          <MDBCollapse open={isOpen}>
            <motion.div 
             ref={ref}
             variants={projectvarinats}
             initial="initial"
             whileInView="animate"
             transition={{duration:1}}
         
            className="row">
              <motion.div 
              variants={projectvarinats}
              className="col-md-5">
                <div
                  className="projectcard"
                  style={{
                   
                    overflow: "hidden",
                  }}
                >
                 
                    <img src={p2}  alt="" />
                    <div className="project-buttons">
                  <a href="https://aswin-bmicalculator.netlify.app/" className="live btn btn-secondary w-25">Live</a>
                  <a className="github btn btn-secondary w-25">GitHub</a>
                </div>
                </div>
          
              </motion.div>
             <div className="col-md-2"></div>
              <motion.div 
              variants={projectvarinats}
              className="col-md-5">
                <div
                  className="projectcard"
                  style={{
                  
                    overflow: "hidden",
                  }}
                >
                 
                    <img src={p6}  alt="" />
                    <div className="project-buttons">
                  <a href="https://github.com/Aswin-K-S/Contact-app-backend.git"  className="live btn btn-secondary w-25">Live</a>
                  <a href="https://github.com/Aswin-K-S/Contact-app-frontend.git" className="github btn btn-secondary w-25">GitHub</a>
                </div>
                </div>
        
              </motion.div>
            </motion.div>
            <motion.div 
             ref={ref}
             variants={projectvarinats}
             initial="initial"
             whileInView="animate"
             transition={{duration:1}}
        
            className="row">
              <motion.div variants={projectvarinats} className="col-md-5">
                <div
                  className="projectcard"
                  style={{
                   
                    overflow: "hidden",
                  }}
                >
                 
                    <img src={p8}  alt="" />
                    <div className="project-buttons">
                  <a href="https://aswin-cart.netlify.app/" className="live btn btn-secondary w-25">Live</a>
                  <a className="github btn btn-secondary w-25">GitHub</a>
                </div>
                </div>
          
              </motion.div>
            <div className="col-md-2"></div>
              <motion.div variants={projectvarinats} className="col-md-5">
                <div
                  className="projectcard"
                  style={{
                  
                    overflow: "hidden",
                  }}
                >
                 
                    <img src={p7}  alt="" />
                    <div className="project-buttons">
                  <a href="https://aswin-k-s.github.io/Budget-Calculator/"  className="live btn btn-secondary w-25">Live</a>
                  <a href="https://github.com/Aswin-K-S/Budget-Calculator.git" className="github btn btn-secondary w-25">GitHub</a>
                </div>
                </div>
               
              </motion.div>
            </motion.div>
          </MDBCollapse>
          <div className="text-center">
            <button
              className="view btn btn-outline-warning rounded-pill mb-3 mt-5 "
              style={{marginTop:'20px'}}
              onClick={toggleOpen}
              
            >
              {knowmore}
            </button>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Projects;
