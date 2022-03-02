import React from 'react'
import './Navbar.css'
import logo from '../s22_images/white-sbcl-logo.svg'
import spring from '../s22_images/spring-2020.svg'

export default function Navbar() {
    return (
        <div className='sticky'>
            <div className='navbar'>
                <div className='logo'>
                    <img src={logo} alt='logo' className='image'></img>
                </div>
                <div className='spring-icon'>
                    <img src={spring} alt='' className='image'></img>     
                </div> 
            </div>
        </div>
    )
}