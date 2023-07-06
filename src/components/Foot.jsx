import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './Foot.css'

const Foot = () => {
    return (
        <>
            <footer>
                <Container>
                    <Row>
                        <Col lg={4} md={6} sm={12}>
                            <div className="logo">
                                <img src="images/logo-light.png" alt="" />
                            </div>
                            <p>
                            Excellence decisively nay man yet impression for contrasted 
                            remarkably. There spoke happy for you are out. 
                            Fertile how old address did 
                            showing because sitting 
                            replied six. Had arose guest visit going off child
                            </p>
                            <div className="icons mb-5">
                                <div className="icon">
                                <i class="fa-brands fa-facebook-f"></i>
                                </div>
                                <div className="icon">
                                <i class="fa-brands fa-twitter"></i>
                                </div>
                                <div className="icon">
                                <i class="fa-brands fa-pinterest"></i>
                                </div>
                                <div className="icon">
                                <i class="fa-brands fa-linkedin-in"></i>
                                </div>
                            </div>
                        </Col>
                        <Col lg={2} md={6} sm={12}>
                            <div className="links mt-md-0 mt-sm-5">
                                <h4>OUR SERVICES</h4>
                                <ul>
                                    <li><i class="fa-solid fa-angle-right"></i><span>Financial Planning</span></li>
                                    <li><i class="fa-solid fa-angle-right"></i><span>Lead Generation</span></li>
                                    <li><i class="fa-solid fa-angle-right"></i><span>Mutual Funds</span></li>
                                    <li><i class="fa-solid fa-angle-right"></i><span>Social Marketing</span></li>
                                    <li><i class="fa-solid fa-angle-right"></i><span>Markets Research</span></li>
                                </ul>
                            </div>
                        </Col>
                        <Col lg={2} md={6} sm={12}>
                        <div className="links mt-md-0 mt-sm-5">
                                <ul className='mt-5'>
                                    <li><i class="fa-solid fa-angle-right"></i><span>Investment Planning</span></li>
                                    <li><i class="fa-solid fa-angle-right"></i><span>Email Marketing</span></li>
                                    <li><i class="fa-solid fa-angle-right"></i><span>Business Services</span></li>
                                    <li><i class="fa-solid fa-angle-right"></i><span>Growth Hacking</span></li>
                                    <li><i class="fa-solid fa-angle-right"></i><span>Financial Planning</span></li>
                                </ul>
                            </div>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <div className="posts mt-md-0 mt-sm-5">
                                <h4>RECENT POSTS</h4>
                                <div className="img">
                                    <img src="images/1.jpg" alt="" />
                                    <div className="text">
                                        <p>Debating all she 
                                            mistaken indulged believed 
                                            provided declared
                                        </p>
                                        <span>12 FEB, 2019 - BY AUTHOR</span>
                                    </div>
                                </div>
                                <hr />
                                <div className="img">
                                    <img src="images/2.jpg" alt="" />
                                    <div className="text">
                                        <p>Debating all she 
                                            mistaken indulged believed 
                                            provided declared
                                        </p>
                                        <span>12 FEB, 2019 - BY AUTHOR</span>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <div className="copyright">
                        <p>© Copyright 2019. All Rights Reserved by M.Moawad</p>
                        <ul>
                            <li>Terms of user</li>
                            <li>License</li>
                            <li>Support</li>
                        </ul>
                </div>
            </footer>
        </>
    )
}

export default Foot
