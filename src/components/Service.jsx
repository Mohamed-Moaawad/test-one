import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './Service.css'

const Service = () => {
    return (
        <>
            {/* start services*/}
        <section className='services'>
          <Container>
            <div className="head">
              <span>our features</span>
              <h3>services we provide</h3>
              <p>Business Consulting Solution</p>
            </div>
            <Row>
              <Col lg={4} md={6} sm={12}>
              <div className="card-services">
              <div className="icon">
              <i class="fa-solid fa-lightbulb"></i>
              <span>01</span>
              </div>
              <h5>Startegies & Planing</h5>
              <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
              Aspernatur ipsum necessitatibus, et doloribus, quaerat at 
              itaque debitis ducimus odio modi voluptatum quae. Iure natus 
              quas ea enim facere asperiores consequuntur!
              </p>
              </div>
              </Col>
              <Col lg={4} md={6} sm={12}>
              <div className="card-services tow">
              <div className="icon">
              <i class="fa-solid fa-puzzle-piece"></i>
              <span>02</span>
              </div>
              <h5>Startup Consulting</h5>
              <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
              Aspernatur ipsum necessitatibus, et doloribus, quaerat at 
              itaque debitis ducimus odio modi voluptatum quae. Iure natus 
              quas ea enim facere asperiores consequuntur!
              </p>
              </div>
              </Col>
              <Col lg={4} md={6} sm={12}>
              <div className="card-services">
              <div className="icon">
              <i class="fa-solid fa-arrow-trend-up"></i>
              <span>03</span>
              </div>
              <h5>Finance Solution</h5>
              <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
              Aspernatur ipsum necessitatibus, et doloribus, quaerat at 
              itaque debitis ducimus odio modi voluptatum quae. Iure natus 
              quas ea enim facere asperiores consequuntur!
              </p>
              </div>
              </Col>
              <Col lg={4} md={6} sm={12}>
              <div className="card-services">
              <div className="icon">
              <i class="fa-solid fa-pen-to-square"></i>
              <span>04</span>
              </div>
              <h5>Audit & Evaluation</h5>
              <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
              Aspernatur ipsum necessitatibus, et doloribus, quaerat at 
              itaque debitis ducimus odio modi voluptatum quae. Iure natus 
              quas ea enim facere asperiores consequuntur!
              </p>
              </div>
              </Col>
              <Col lg={4} md={6} sm={12}>
              <div className="card-services">
              <div className="icon">
              <i class="fa-solid fa-hand-holding-dollar"></i>
              <span>05</span>
              </div>
              <h5>Investment Solution</h5>
              <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
              Aspernatur ipsum necessitatibus, et doloribus, quaerat at 
              itaque debitis ducimus odio modi voluptatum quae. Iure natus 
              quas ea enim facere asperiores consequuntur!
              </p>
              </div>
              </Col>
              <Col lg={4} md={6} sm={12}>
              <div className="card-services">
              <div className="icon">
              <i class="fa-solid fa-magnifying-glass-dollar"></i>
              <span>06</span>
              </div>
              <h5>Market Analysis</h5>
              <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
              Aspernatur ipsum necessitatibus, et doloribus, quaerat at 
              itaque debitis ducimus odio modi voluptatum quae. Iure natus 
              quas ea enim facere asperiores consequuntur!
              </p>
              </div>
              </Col>
            </Row>
          </Container>
        </section>
        {/* end services*/}
        </>
    )
}

export default Service
