import React, { useRef } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './AboutF.css'



const AboutF = () => {
    const video = useRef()
    return (
        <>
            {/* start sec-video */}
            <section className="sec-video">
            <Container className='h-100'>
                <Row className='h-100'>
                    <Col lg={6} md={12} sm={12} className='mt-4'>
                    <div className="text">
                        <span>OUR FEATURES</span>
                        <h3>Services We Provide</h3>
                        <h5>Business Consulting Solution</h5>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing 
                        elit, sed do eiusmod tempor incididunt ut labore et 
                        dolore magna aliqua. Ut enim ad minim veniam, quis 
                        nostrud exercitation is more than 800 miles away 
                        consectetur adipisicing elit, sed do eiusmod tempor 
                        incididunt ut labore et dolore magna 
                        </p>
                        <ul>
                            <li>Safe and Trusty <i class="fa-solid fa-thumbs-up"></i> </li>
                            <li>Safe Professional Consulting Team <i class="fa-solid fa-thumbs-up"></i> </li>
                            <li>20 Years Of Consulting Experience <i class="fa-solid fa-thumbs-up"></i> </li>
                        </ul>
                        <button id='btn'>learn more</button>
                    </div>
                    </Col >
                    <Col lg={6} md={12} sm={12} className='mt-4'>
                    <div className="img">
                        <img className='img-one' src="images/why2.jpg" alt="" />
                        <img className='img-tow' src="images/why1.jpg" alt="" />
                        <div className="vedio-icon"  onClick={()=>{
                            video.current.style.display = 'flex'
                        }}>
                        <i class="fa-solid fa-play"></i>
                        
                        </div>
                        
                    </div>
                    <div className="video" id='video' ref={video}>
                        <i class="fa-sharp fa-solid fa-xmark"  onClick={()=>{
                            video.current.style.display = 'none'
                        }}></i>
                        <video src="" controls></video>
                        </div>
                    </Col>
                </Row>
            </Container>
            </section>
            {/* end sec-video */}
        </>
    )
}

export default AboutF
