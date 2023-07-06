import React from 'react'
import './Services.css'
import { Link } from 'react-router-dom'
import Service from '../components/Service'
import Foot from '../components/Foot'
import Navs from '../components/Navs'

const Services = () => {
    return (
        <>
            <div className="Services">
                <Navs/>
                <div className="heading">
                    <div>
                        <h2>Our Services</h2>
                        <div className="links">
                            <Link to='/Home.jsx'>Home</Link>
                            <i class="fa-solid fa-chevron-right"></i>
                            <Link to='./Services.jsx'>Services</Link>
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
                <Service/>
                <Foot/>
            </div>
        </>
    )
}

export default Services
