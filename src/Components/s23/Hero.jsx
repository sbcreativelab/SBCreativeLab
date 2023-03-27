import React from 'react'
import './Hero.css'

import logo from '../../images/s23_images/logo.svg'
import titleLarge from '../../images/s23_images/hero-title.svg'
import blob1 from '../../images/s23_images/blob-1.svg'
import titleSmallSBCL from '../../images/s23_images/phone_view/hero-sbcl.svg'
import titleSmallJumpstart from '../../images/s23_images/phone_view/hero-jumpstart.svg'
import titleSmallDesignathon from '../../images/s23_images/phone_view/hero-spring_designathon.svg'

export default function Hero() {
    const applicationLink = 'https://tinyurl.com/SBCLDesignathon23'
    return (
        <div className='hero'>
            <header>
                <img src={logo} className='logo' alt='' />
                <nav style={{ display: 'none' }}>
                    <NavBarItem name={"Prompt"} />
                    <NavBarItem name={"Timeline"} />
                    <NavBarItem name={"Judges"} />
                    <NavBarItem name={"Mentors"} />
                    <NavBarItem name={"Prizes"} />
                    <NavBarItem name={"FAQ"} />
                    <NavBarItem name={"Sponsors"} />
                </nav>
            </header>
            <div className='hero-content'>
                <div className='hero-title'>
                    <img className='hero-title-large-view' src={titleLarge} alt='' />
                    <div className='hero-title-small-view'>
                        <img src={titleSmallSBCL} alt='' />
                        <img src={titleSmallJumpstart} alt='' />
                        <img src={titleSmallDesignathon} alt='' />
                        <p>April 14th ~ 16th, 2023</p>
                    </div>
                </div>
                <div className='register-button-container'>
                    <div className='register-button register-button-blur'></div>
                    <a className='register-button' href={applicationLink} target="_blank">
                        <div className='register-button-text'>Register</div>
                    </a>
                </div>
                <div className='register-deadline'>Register Deadline: April 13th 11:59 P.M.</div>
                <p className='hero-description'>
                    SB Creative Lab presents its 2023 JUMPSTART 
                    Designathon! Get hands-on design experience by 
                    challenging the normal with out-of-the-box ideas and 
                    intentional design. Join us in kicking off our 3-day 
                    challenge April 14th through April 16th. During this 
                    time, students will participate on various design 
                    workshops and meet new friends from other US college 
                    campuses to tackle a design challenge together! 
                </p>
            </div>
            <img src={blob1} className='blob-1' alt='' style={{ position: 'fixed', bottom: '-2px' }}/>
            <footer style={{ fontSize: '12px', margin: '24px', textAlign: 'right' }}>more info coming soon...</footer>
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