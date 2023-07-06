import React, { useRef, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import './Navs.css'


const Navs = () => {
  const linksRef = useRef()

  return (
    <>
        <section className='nav' >
          <Container>
          <Row>
            <Col md={3} lg={3} sm={6} className='col-6'>
              <div className="logo">
                <img src="images/logo-dark.png" alt="" />
              </div>
            </Col>
            <Col md={9} lg={9} sm={6} className='col-6'>
              <div className="links">
              <div className="links-nav" ref={linksRef} >
              
              <ul>
                <li>
                  <NavLink to="/">home</NavLink>
                </li>
                <li>
                  <NavLink to="/services">services</NavLink>
                </li>
                <li>
                  <NavLink to="/About">about us</NavLink>
                </li>
                {/* <li>
                  <NavLink to="/">portfolio</NavLink>
                </li> */}
                {/* <li>
                  <NavLink to="/">blog</NavLink>
                </li> */}
                <li>
                  <NavLink to="/Contact">contact</NavLink>
                </li>
                <i class="fa-sharp fa-solid fa-xmark close-nav" onClick={()=>{
                  linksRef.current.style.left = '-100%'
                }}></i>
              </ul>
            
            
            </div>
            <div className="icon-menu" onClick={()=>{
              linksRef.current.style.left = '0%'
            }}>
            <i class="fa-sharp fa-solid fa-bars"></i>
            </div>
              </div>
            </Col>
          </Row>
          </Container>
        </section>
    </>
  )
}

export default Navs
