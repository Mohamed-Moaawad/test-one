import React from 'react'
import './Contact.css'
import Navs from '../components/Navs'
import { Link } from 'react-router-dom'
import Foot from '../components/Foot'

const Contact = () => {
    return (
        <>
                <div className="contact-us">
                    <Navs/>
                    <div className="heading">
                        <div>
                            <h2>Contact Us</h2>
                            <div className="links">
                                <Link to='/Home.jsx'>Home</Link>
                                <i class="fa-solid fa-chevron-right"></i>
                                <Link to='./Services.jsx'>Contact Us</Link>
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
                    <div className="contact-form">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-3 col-md-12 col-sm-12">
                                    <div className="title-box">
                                        <h5>Office Location</h5>
                                        <div>
                                            <div className="icon">
                                            <i class="fa-sharp fa-solid fa-map-location-dot"></i>
                                            </div>
                                            <p>
                                                22 Baker Street,
                                                London, United Kingdom,
                                                W1U 3BW
                                            </p>
                                        </div>
                                    </div>
                                    <div className="title-box">
                                        <h5>Office Hours</h5>
                                        <div>
                                            <div className="icon">
                                            <i class="fa-sharp fa-solid fa-clock"></i>
                                            </div>
                                            <p>
                                            10.00am - 8.00pm
                                            <br />
                                            8.00pm - 10.00am
                                            </p>
                                        </div>
                                    </div>
                                    <div className="title-box">
                                        <h5>Phone</h5>
                                        <div>
                                            <div className="icon">
                                            <i class="fa-sharp fa-solid fa-phone"></i>
                                            </div>
                                            <p>
                                                +201062026826
                                            </p>
                                        </div>
                                    </div>
                                    <div className="title-box">
                                        <h5>Email</h5>
                                        <div>
                                            <div className="icon">
                                            <i class="fa-sharp fa-solid fa-envelope"></i>
                                            </div>
                                            <p>
                                                mohamedmoawad531@icloud.com
                                                <br />
                                                moawadmohamed084@gmail.com
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-9 col-md-12 col-sm-12 mt-lg-0 mt-md-5">
                                    <div className="form">
                                        <h3>Request A Contact Us</h3>
                                        <p>Our next drew much you with rank. Tore many held age hold rose 
                                            than our. She literature sentiments any contrasted. 
                                            Set aware joy sense young now tears china shy.
                                        </p>
                                        <form action="">
                                            <input type="text" placeholder='Name' />
                                            <div>
                                                <input type="email" placeholder='Email*' />
                                                <input type="text" placeholder='Phone' />
                                            </div>
                                            <textarea name="" id="" cols="30" rows="10" placeholder='Tell Us About Project*'></textarea>
                                            <button>send message <i class="fa-sharp fa-solid fa-paper-plane"></i></button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="iframe">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55203.47296328097!2d31.38985516902712!3d30.145209633735362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145810c330e05d5d%3A0x13ef89ed5e914b06!2z2YXYr9mK2YbZhyDYp9mE2LPZhNin2YXYjCDYp9mE2LPZhNin2YUg2KfZhNi62LHYqNmK2KnYjCDZgtiz2YUg2KPZiNmEINin2YTYs9mE2KfZhdiMINmF2K3Yp9mB2LjYqSDYp9mE2YLYp9mH2LHYqeKArA!5e0!3m2!1sar!2seg!4v1688654438654!5m2!1sar!2seg" width="600" height="450" style={{border: '0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className="news">
                        <h3>Sign Up To Newsletter</h3>
                        <p>Here ipsum dolor sit amet, consectetur adipiscing 
                            elit.Fusce metus lectus, 
                            placerat sed posuere ue, Aliquam erat volutpat.
                        </p>
                        <form action="">
                            <input type="email" placeholder='Your Email Address'/>
                            <button>send</button>
                        </form>
                    </div>
                    <Foot/>
            </div>
        </>
    )
}

export default Contact
