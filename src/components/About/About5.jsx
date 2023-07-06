import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './About5.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";

const About5 = () => {
    return (
        <>
                    {/* srtart sec-team */}
        <section className="sec-team">
            <Container>
              <Row>
                <Col lg={3} md={12} sm={12}>
                  <div className="text">
                    <div className="head">
                    <span>our experts</span>
                    <h3>meet team</h3>
                    <h6>experience</h6>
                    </div>
                    <p>Lorem ipsum dolor amet, consectetuer 
                      adipiscing elit, sed diam nonummy nibh 
                      euismod tincidunt ut laoreet .Lorem ipsum 
                      dolor amet, consectetuer adipiscing elit, sed 
                      diam nonummy nibh euismod tincidunt ut laoreet .
                    </p>
                    <div className="icons">
                      <div className="icon">
                      <i class="fa-solid fa-angle-left"></i>
                      </div>
                      <div className="icon">
                      <i class="fa-solid fa-angle-right"></i>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col lg={9} dm={12} sm={12}>
                <Swiper watchSlidesProgress={true} slidesPerView={3} className="mySwiper">
                  <SwiperSlide>
                    <div className="cards">
                      <div className="img">
                        <img src="images/team-1.jpg" alt="" />
                        <div className="icons">
                        <i class="fa-brands fa-facebook-f"></i>
                        <i class="fa-brands fa-twitter"></i>
                        <i class="fa-brands fa-linkedin-in"></i>
                        <i class="fa-brands fa-instagram"></i>
                        </div>
                      </div>
                      <div className="info">
                        <h5>david william</h5>
                        <p>sales & marketing</p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                  <div className="cards">
                      <div className="img">
                        <img src="images/team-2.jpg" alt="" />
                        <div className="icons">
                        <i class="fa-brands fa-facebook-f"></i>
                        <i class="fa-brands fa-twitter"></i>
                        <i class="fa-brands fa-linkedin-in"></i>
                        <i class="fa-brands fa-instagram"></i>
                        </div>
                      </div>
                      <div className="info">
                        <h5>robert dany</h5>
                        <p>ui/ux designer</p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                  <div className="cards">
                      <div className="img">
                        <img src="images/team-3.jpg" alt="" />
                        <div className="icons">
                        <i class="fa-brands fa-facebook-f"></i>
                        <i class="fa-brands fa-twitter"></i>
                        <i class="fa-brands fa-linkedin-in"></i>
                        <i class="fa-brands fa-instagram"></i>
                        </div>
                      </div>
                      <div className="info">
                        <h5>ana mariea</h5>
                        <p>data scientist</p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                  <div className="cards">
                      <div className="img">
                        <img src="images/team-4.jpg" alt="" />
                        <div className="icons">
                        <i class="fa-brands fa-facebook-f"></i>
                        <i class="fa-brands fa-twitter"></i>
                        <i class="fa-brands fa-linkedin-in"></i>
                        <i class="fa-brands fa-instagram"></i>
                        </div>
                      </div>
                      <div className="info">
                        <h5>ana mariea</h5>
                        <p>data scientist</p>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
                </Col>
                
              </Row>
            </Container>
        </section>
        {/* end sec-team */}
        </>
    )
}

export default About5
