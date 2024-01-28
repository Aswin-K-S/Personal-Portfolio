import React, { useState } from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBIcon,
    MDBCollapse
  } from 'mdb-react-ui-kit';
import ThemeButton from './ThemeButton';

import { Element, animateScroll as scroll, Link as ScrollLink } from 'react-scroll';


function Header(id) {
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


  return (
    <div>
        <MDBNavbar className='Mheader'  style={{zIndex:100,position:'sticky',top:'0',}} expand='lg' >
      <MDBContainer fluid>
       <MDBNavbarBrand href='#' className='navbarlink' style={{fontWeight:'500',position:'relative',left:'3.2552083333333335vw'}}>ASWIN</MDBNavbarBrand>
        <MDBNavbarToggler
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setOpenNavSecond(!openNavSecond)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>
        <MDBCollapse  navbar open={openNavSecond}>
          <MDBNavbarNav className='d-flex justify-content-center' >
            <MDBNavbarLink className='navbarlink' active aria-current='page' onClick={() => scrollToSection('home')}>
              Home
            </MDBNavbarLink>
            <MDBNavbarLink className='navbarlink' onClick={() => scrollToSection('about')}>About</MDBNavbarLink>
            <MDBNavbarLink className='navbarlink' onClick={() => scrollToSection('services')}>Services</MDBNavbarLink>
            <MDBNavbarLink className='navbarlink' onClick={() => scrollToSection('project')}>Project</MDBNavbarLink>
            <MDBNavbarLink className='navbarlink' onClick={() => scrollToSection('contact')}>Contact</MDBNavbarLink>
           
          </MDBNavbarNav>
        </MDBCollapse>
       <ThemeButton />
      </MDBContainer>
    </MDBNavbar>
    </div>
  )
}

export default Header