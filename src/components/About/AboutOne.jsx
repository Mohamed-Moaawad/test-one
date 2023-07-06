import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './AboutOne.css'

const AboutOne = () => {
    return (
        <>
            {/* start sec-1*/}
        <section className='sec-1'>
          <Container>
            <Row>
              <Col lg={6} md={12} sm={12} className='d-flex justify-content-center align-items-center ة'>
                <div className="image">
                  <img src="images/about-2.jpg" alt="" />
                </div>
              </Col>
              <Col lg={6} md={12} sm={12} className=''>
                <div className="text ms-3">
                  <h2>20 years <br /> of experience</h2>
                  <p>Seven world think timed while her. Spoil large oh he rooms on 
                    since an. Am up unwilling eagerness perceived incommode. Are not 
                    windows set luckily musical hundred can. Collecting if sympathize 
                    middletons be of of reasonably.
                  </p>
                  <div className="div-center">
                    <div className="img">
                      <img src="images/signature.png" alt="" />
                    </div>
                    <p>- CEO Corpress</p>
                    <div className="number">
                      <span>Call to ask any question :</span>
                      <h3>0106-2026-826</h3>
                    </div>
                  </div>
                  <div className="divs">
                    <div>
                    <i class="fa-solid fa-rocket"></i>
                    <span>48+</span>
                    <p>Professional Agen</p>
                    </div>
                    <div>
                    <i class="fa-solid fa-rocket"></i>
                    <span>48+</span>
                    <p>Professional Agen</p>
                    </div>
                    <div>
                    <i class="fa-solid fa-rocket"></i>
                    <span>48+</span>
                    <p>Professional Agen</p>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        {/* end sec-1*/}
        </>
    )
}

export default AboutOne
