import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './About6.css'

const About6 = () => {
    return (
        <>
            {/* start sec-Clients */}
            <section className="clients">
            <Container>
                <Row>
                <Col lg={5} md={12} sm={12}>
                    <div className="text">
                    <div className="head">
                        <span>OUR AWESOME</span>
                        <h2>Clients</h2>
                        <p>Have A Look</p>
                    </div>
                    <p className='mb-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim.</p>
                    <button>become a client</button>
                    </div>
                </Col>
                <Col lg={7} md={12} sm={12}>
                    <Row>
                        <Col lg={4} md={6} sm={12}>
                            <div className="img">
                                <img src="images/client1.png" alt="" />
                            </div>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <div className="img">
                                <img src="images/client3.png" alt="" />
                            </div>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <div className="img">
                                <img src="images/client5.png" alt="" />
                            </div>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <div className="img">
                                <img src="images/client4.png" alt="" />
                            </div>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <div className="img">
                                <img src="images/client5 (1).png" alt="" />
                            </div>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <div className="img">
                                <img src="images/client7.png" alt="" />
                            </div>
                        </Col>
                    </Row>
                </Col>
                </Row>
            </Container>
            </section>
            {/* end sec-Clients */}
        </>
    )
}

export default About6
