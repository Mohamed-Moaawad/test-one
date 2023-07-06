import React from 'react'
import './Error.css'
import Navs from '../components/Navs'
import Foot from '../components/Foot'
import { Link } from 'react-router-dom'

const Error = () => {
    return (
        <>
            <div className="error-page">
                <Navs/>
                <div className="body">
                    <div className="text">
                        <h2>4<span>0</span>4</h2>
                        <p>This page cannot be founded</p>
                        <Link to='/'>go home</Link>
                    </div>
                </div>
                <Foot/>
            </div>
        </>
    )
}

export default Error
