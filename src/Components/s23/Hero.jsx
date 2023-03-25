import React from 'react'
import './Hero.css'

import logo from '../s23_images/logo.svg'
import title from '../s23_images/hero-title.svg'
import descriptionDeco from '../s23_images/hero-description-deco.svg'
import blob1 from '../s23_images/blob-1.svg'

export default function Hero() {
    return (
        <div className='hero'>
            <img src={logo} className='logo' alt='' />
            <div className='navbar'>
                <NavBarItem name={"Prompt"} />
                <NavBarItem name={"Timeline"} />
                <NavBarItem name={"Judges"} />
                <NavBarItem name={"Mentors"} />
                <NavBarItem name={"Prizes"} />
                <NavBarItem name={"FAQ"} />
                <NavBarItem name={"Sponsors"} />
            </div>
            <div className='hero-content'>
                <img src={title} className='hero-title' alt='' />
                <div className='register-button-container'>
                    <div className='register-button register-button-blur'></div>
                    <div className='register-button'>
                        <div className='register-button-text'>Register</div>
                    </div>
                </div>
                <div className='register-deadline'>Register Deadline: April 13th 11:59</div>
                <div className='hero-description-container'>
                    <div className='hero-description'>
                        SB Creative Lab presents its 2023 JUMPSTART Designathon! Get hands-on design experience by challenging the normal with out-of-the-box ideas and intentional design. Join us in kicking off our 3-day challenge April 14th through April 16th. During this time, students will participate on various design workshops and meet new friends from other US college campuses to tackle a design challenge together! 
                    </div>
                    <img src={descriptionDeco} className='hero-description-deco' alt='' />
                </div>
            </div>
            <img src={blob1} className='blob-1' alt='' />
        </div>
    )
}

function NavBarItem({name}) {
    return (
        <div className='navbar-item'>
            <div className='navbar-item-text'>{name}</div>
        </div>
    )
}