import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './AboutTwo.css'

const AboutTwo = () => {
    return (
        <>
        {/* start sec-skill*/}
            <section className='sec-skill'>
          <Container>
            <Row>
              <Col lg={7} md={12} sm={12}>
                <div className="text">
                  <span>our skill</span>
                  <h2>our company vision</h2>
                  <h6>go global</h6>
                  <hr />
                  <p>It is a long established fact that a reader will be by the 
                    readable content distracted by the readable content of a page 
                    when looking at its layout.It is a long established fact that a 
                    reader will be distracted by the readable content of a page when 
                    looking at its layout.
                  </p>
                  <div className="level">
                    <p>understanding problem</p>
                    <div className='box'>
                      <span className='spnOne'>95%</span>
                        <div className='one' id='levelONE'></div>
                    </div>
                  </div>
                  <div className="level">
                    <p>social progress</p>
                    <div className='box'>
                    <span className='spnTow'>80%</span>
                        <div className='tow' id='levelTOW'></div>
                    </div>
                  </div>
                  <button>learn more</button>
                </div>
              </Col>
              <Col lg={5} md={12} sm={12}>
                <div className="img">
                  <img src="images/skill-image.png" alt="" />
                </div>

              </Col>
            </Row>
          </Container>
            </section>
        {/* end sec-skill*/}
        </>
    )
}

export default AboutTwo
