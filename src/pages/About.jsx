import React from 'react'
import Navs from '../components/Navs'
import AboutOne from '../components/About/AboutOne'
import AboutTwo from '../components/About/AboutTwo'
import AboutThree from '../components/About/AboutThree'
import About5 from '../components/About/About5'
import AboutF from '../components/About/AboutF'
import About6 from '../components/About/About6'
import Foot from '../components/Foot'
import { Link } from 'react-router-dom'
import './About.css'


const About = () => {
  return (
    <>
        <div className="aboutPage">
          <div className="heading">
                      <div>
                          <h2>About Our Company</h2>
                          <div className="links">
                              <Link to='/Home.jsx'>Home</Link>
                              <i class="fa-solid fa-chevron-right"></i>
                              <Link to='./About.jsx'>About Us</Link>
                          </div>
                      </div>
          </div>
          <button className='up-sec'  onClick={()=>{
            window.scroll({
              left:0,
              top:0,
              behavior:'smooth'
            })
        }}>
        <i class="fa-solid fa-angles-up"></i>
        </button>
          <Navs/>
          <AboutOne/>
          <AboutTwo/>
          <AboutF/>
          <About5/>
          <AboutThree/>
          <About6/>
          <Foot/>
        </div>
    </>
  )
}

export default About
