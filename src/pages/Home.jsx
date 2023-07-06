import React, { useEffect, useRef, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Navs from '../components/Navs'
import './Home.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import AboutOne from '../components/About/AboutOne'
import AboutTwo from '../components/About/AboutTwo'
import AboutThree from '../components/About/AboutThree'
import AboutF from '../components/About/AboutF'
import About5 from '../components/About/About5'
import About6 from '../components/About/About6'
import Foot from '../components/Foot'
import Service from '../components/Service'


const Home = () => {




  return (
    <>
        {/* start navbar */}
        <Navs/>
        {/* end navbar */}
        {/* start header */}
        <header>
          <Container>
              <div className="text">
                <h1>WE ARE CREATIVE TO FIND BUSINESS SOLUTIONS</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Ipsum, aspernatur voluptate, quibusdam illo est sint, omnis 
                  numquam nostrum perferendis laboriosam modi sit corporis odio 
                  in tenetur ea aperiam voluptatum quisquam.
                </p>
                <div className="btn">
                  <Link><div className='one'>our portfolio</div></Link>
                  <Link><div className='tow'>contact us</div></Link>
                </div>
              </div>
          </Container>
        </header>
        <button className='up-sec'  onClick={()=>{
            window.scroll({
              left:0,
              top:0,
              behavior:'smooth'
            })
        }}>
        <i class="fa-solid fa-angles-up"></i>
        </button>
        {/* end header */}
        {/* start sec-1*/}
        <AboutOne/>
        {/* end sec-1*/}
        {/* start sec-skill*/}
        <AboutTwo/>
        {/* end sec-skill*/}
        {/* start services*/}
        <Service/>
        {/* end services*/}
        {/* start contact */}
        <AboutThree/>
        {/* end contact */}
        {/* start sec-video */}
        <AboutF/>
        {/* end sec-video */}
        {/* start studies */}
        <section className="studies">
          <Container>
            <Row>
              <Col lg={5} md={12} sm={12}>
                <div className="head">
                  <span>our works</span>
                  <h3>case studies</h3>
                  <p>help for your success business</p>
                </div>
              </Col>
              <Col lg={7} md={12} sm={12} className='d-flex align-items-center'>
                <div className="links">
                  <ul>
                    <li className='one mt-3'>all</li>
                    <li className='tow mt-3'>business</li>
                    <li className='one mt-3'>finance</li>
                    <li className='tow mt-3'>branding</li>
                    <li className='one mt-3'>consallting</li>
                  </ul>
                </div>
              </Col>
            </Row>
            <Row className='mt-5'>
              <Col lg={4} md={6} sm={12} className='mt-4 mb-2'>
                  <div className="box-img">
                    <img src="images/pf1.jpg" alt="" />
                    <div className="box">
                      <h5>consultinc</h5>
                      <p>Investingate how the process 
                        can be improved
                      </p>
                      <div className="icon-div">
                        <div className="icon">
                        <i class="fa-solid fa-arrow-right"></i>
                        </div>
                      </div>
                    </div>
                  </div>
              </Col>
              <Col lg={4} md={6} sm={12} className='mt-4 mb-2'>
                  <div className="box-img">
                    <img src="images/pf2.jpg" alt="" />
                    <div className="box">
                      <h5>consultinc</h5>
                      <p>Investingate how the process 
                        can be improved
                      </p>
                      <div className="icon-div">
                        <div className="icon">
                        <i class="fa-solid fa-arrow-right"></i>
                        </div>
                      </div>
                    </div>
                  </div>
              </Col>
              <Col lg={4} md={6} sm={12} className='mt-4 mb-2'>
                  <div className="box-img">
                    <img src="images/pf3.jpg" alt="" />
                    <div className="box">
                      <h5>consultinc</h5>
                      <p>Investingate how the process 
                        can be improved
                      </p>
                      <div className="icon-div">
                        <div className="icon">
                        <i class="fa-solid fa-arrow-right"></i>
                        </div>
                      </div>
                    </div>
                  </div>
              </Col>
              <Col lg={4} md={6} sm={12} className='mt-4 mb-2'>
                  <div className="box-img">
                    <img src="images/pf4.jpg" alt="" />
                    <div className="box">
                      <h5>consultinc</h5>
                      <p>Investingate how the process 
                        can be improved
                      </p>
                      <div className="icon-div">
                        <div className="icon">
                        <i class="fa-solid fa-arrow-right"></i>
                        </div>
                      </div>
                    </div>
                  </div>
              </Col>
              <Col lg={4} md={6} sm={12} className='mt-4 mb-2'>
                  <div className="box-img">
                    <img src="images/pf5.jpg" alt="" />
                    <div className="box">
                      <h5>consultinc</h5>
                      <p>Investingate how the process 
                        can be improved
                      </p>
                      <div className="icon-div">
                        <div className="icon">
                        <i class="fa-solid fa-arrow-right"></i>
                        </div>
                      </div>
                    </div>
                  </div>
              </Col>
              <Col lg={4} md={6} sm={12} className='mt-4 mb-2'>
                  <div className="box-img">
                    <img src="images/pf6.jpg" alt="" />
                    <div className="box">
                      <h5>consultinc</h5>
                      <p>Investingate how the process 
                        can be improved
                      </p>
                      <div className="icon-div">
                        <div className="icon">
                        <i class="fa-solid fa-arrow-right"></i>
                        </div>
                      </div>
                    </div>
                  </div>
              </Col>
            </Row>
          </Container>
        </section>
        {/* end studies */}
        {/* srtart sec-team */}
        <About5/>
        {/* end sec-team */}
        {/* start sec-request */}
        <section className='sec-request'>
            <Row className='m-0'>
              <Col lg={6} md={12} sm={12} className='p-0'>
                <div className="text">
                  <span>TESTIMONIALS</span>
                  <h3>What Our Client Say</h3>
                  <div className="slid">
                  <Swiper className="mySwiper">
                    <SwiperSlide>
                    <i class="fa-solid fa-quote-left"></i>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente 
                      obcaecati molestiae accusamus 
                      voluptates placeat ad ipsam autem unde repellendus reprehenderit!
                    </p>
                    <div className='sld'>
                      <img src="images/testi-1.png" alt="" />
                      <h6>jama karle</h6>
                      <span>ceo</span>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <i class="fa-solid fa-quote-left"></i>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente 
                      obcaecati molestiae accusamus 
                      voluptates placeat ad ipsam autem unde repellendus reprehenderit!
                    </p>
                    <div className='sld'>
                      <img src="images/testi-2.png" alt="" />
                      <h6>ivonne dernnan</h6>
                      <span>manager</span>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <i class="fa-solid fa-quote-left"></i>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente 
                      obcaecati molestiae accusamus 
                      voluptates placeat ad ipsam autem unde repellendus reprehenderit!
                    </p>
                    <div className='sld'>
                      <img src="images/testi-3.png" alt="" />
                      <h6>bettye mauck</h6>
                      <span>designer</span>
                    </div>
                    </SwiperSlide>
                  </Swiper>
                  </div>
                </div>
              </Col>
              <Col lg={6} md={12} sm={12} className='form'>
                <form action="">
                  <span>REQUEST</span>
                  <h2>Let's Request a Call Back</h2>
                  <input type="text" placeholder='Your Name:'/>
                  <div className='box-inpt'>
                    <input type="text" placeholder='Phone:' className='tow' />
                    <input type="email" placeholder='Email:' className='three'/>
                  </div>
                  <textarea name="" id="" cols="30" rows="10" placeholder='Message:'></textarea>
                  <button>sumbit</button>
                </form>
              </Col>
            </Row>
        </section>
        {/* end sec-request */}
        {/* start sec-table */}
        <section className="sec-table">
          <Container>
            <div className="head">
              <span>WHAT WE OFFER</span>
              <h2>Pricing Table</h2>
              <p>Best Strategy</p>
            </div>
            <Row className='mt-5'>
              <Col lg={4} md={6} sm={12}>
                <div className="table-box">
                  <div className="title">
                    <h2>Standar</h2>
                    <span>10<sup>$</sup></span>
                    <p>per month</p>
                  </div>
                  <ul>
                    <li>1 Website</li>
                    <li>15 Gb Bandwidth</li>
                    <li>15 Gb Space</li>
                    <li>6 Month Support</li>
                    <li>Free Domain</li>
                    <li>Free Email</li>
                  </ul>
                  <button>get started</button>
                </div>
              </Col>
              <Col lg={4} md={6} sm={12}>
                <div className="table-box2">
                  <div className="title">
                    <h2>Professional</h2>
                    <h3>35<sup>$</sup></h3>
                    <span>per month</span>
                  </div>
                  <ul>
                    <li>3 Website</li>
                    <li>30 Gb Bandwidth</li>
                    <li>15 Gb Space</li>
                    <li>9 Month Support</li>
                    <li>Free Domain</li>
                    <li>Free Email</li>
                  </ul>
                  <button>get started</button>
                  <div className="message">
                    <p>MOST POPULAR</p>
                  </div>
                </div>
              </Col>
              <Col lg={4} md={6} sm={12}>
                <div className="table-box">
                  <div className="title">
                    <h2>Business</h2>
                    <span>99<sup>$</sup></span>
                    <p>per month</p>
                  </div>
                  <ul>
                    <li>5 Website</li>
                    <li>50 Gb Bandwidth</li>
                    <li>300 Gb Space</li>
                    <li>12 Month Support</li>
                    <li>Free Domain</li>
                    <li>Free Email</li>
                  </ul>
                  <button>get started</button>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        {/* end sec-table */}
        {/* start sec-questio */}
        <section className="sec-questio">
          <Container>
            <Row>
              <Col lg={6} md={12} sm={12}>
                <div className="img">
                  <div className="head">
                    <span>FAQS</span>
                    <h3>Popular Question</h3>
                    <p>Help You Develop Your Business</p>
                  </div>
                  <div className="image">
                    <img src="images/faq.jpg" alt="" />
                  </div>
                </div>
              </Col>
              <Col lg={6} md={12} sm={12}>
                <div className="questions" id="heit">
                  <div className="ques" id='ques'>
                  <p>Do I need a business plan?</p>
                  <i class="fa-solid fa-plus"></i>
                  <div>
                    <p>Lorem ipsum dolor, sit amet consectetur 
                      adipisicing elit. Dolorem distinctio in 
                      reiciendis quaerat ullam cum maiores
                      maxime culpa accusamus, dolor, laborum 
                      aspernatur doloremque suscipit ducimus 
                      debitis sunt tempore commodi aliquid.
                    </p>
                  </div>
                  </div>
                  
                </div>
                <div className="questions">
                  <div className="ques">
                  <p>How long should a business plan be?</p>
                  <i class="fa-solid fa-plus"></i>
                  <div>
                    <p>Lorem ipsum dolor, sit amet consectetur 
                      adipisicing elit. Dolorem distinctio in 
                      reiciendis quaerat ullam cum maiores
                      maxime culpa accusamus, dolor, laborum 
                      aspernatur doloremque suscipit ducimus 
                      debitis sunt tempore commodi aliquid.
                    </p>
                  </div>
                  </div>
                  
                </div>
                <div className="questions">
                  <div className="ques">
                  <p>What goes into a business plan?</p>
                  <i class="fa-solid fa-plus"></i>
                  <div>
                    <p>Lorem ipsum dolor, sit amet consectetur 
                      adipisicing elit. Dolorem distinctio in 
                      reiciendis quaerat ullam cum maiores
                      maxime culpa accusamus, dolor, laborum 
                      aspernatur doloremque suscipit ducimus 
                      debitis sunt tempore commodi aliquid.
                    </p>
                  </div>
                  </div>
                  
                </div>
                <div className="questions">
                  <div className="ques">
                  <p>Where do I start?</p>
                  <i class="fa-solid fa-plus"></i>
                  <div>
                    <p>We began our a few decades ago and have grown due to excellent relationships with our clients. We started out small, with just a few people and a small office, but today we have offices in multiple countries with hundreds of people working inside them. We started out smal.
                    </p>
                  </div>
                  </div>
                  
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        {/* end sec-questio */}
        {/* start cards */}
        <section className='sec-cards'>
          <Container>
            <div className="head">
              <span>OUR STORIES</span>
              <h2>latest News</h2>
              <p>Don't Miss It</p>

            </div>
            <Row>
              <Col lg={4} md={6} sm={12}>
                <div className="div-card">
                  <div className="img">
                    <img src="images/blog1.jpg" alt="" />
                  </div>
                  <div className="text">
                    <h3>Can your business become better with new technology?</h3>
                    <p>Almighty, O my friend — but it is too much for my strength — I sink under the weight of the splendour of these visions!</p>
                    <div className="foot">
                      <span>
                      <i class="fa-sharp fa-solid fa-clock"></i>
                      may 13,2023
                      </span>
                      <span>
                      <i class="fa-sharp fa-solid fa-comments"></i>
                      5 comments
                      </span>
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg={4} md={6} sm={12}>
                <div className="div-card">
                  <div className="img">
                    <img src="images/blog2.jpg" alt="" />
                  </div>
                  <div className="text">
                    <h3>Can your business become better with new technology?</h3>
                    <p>Almighty, O my friend — but it is too much for my strength — I sink under the weight of the splendour of these visions!</p>
                    <div className="foot">
                      <span>
                      <i class="fa-sharp fa-solid fa-clock"></i>
                      may 13,2023
                      </span>
                      <span>
                      <i class="fa-sharp fa-solid fa-comments"></i>
                      5 comments
                      </span>
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg={4} md={6} sm={12}>
                <div className="div-card">
                  <div className="img">
                    <img src="images/blog3.jpg" alt="" />
                  </div>
                  <div className="text">
                    <h3>Can your business become better with new technology?</h3>
                    <p>Almighty, O my friend — but it is too much for my strength — I sink under the weight of the splendour of these visions!</p>
                    <div className="foot">
                      <span>
                      <i class="fa-sharp fa-solid fa-clock"></i>
                      may 13,2023
                      </span>
                      <span>
                      <i class="fa-sharp fa-solid fa-comments"></i>
                      5 comments
                      </span>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        {/* end cards */}
        {/* start sec-Clients */}
        <About6/>
        {/* end sec-Clients */}
        {/* start footer */}
        <Foot/>
        {/* end footer */}
        
    </>
  )
}

export default Home
