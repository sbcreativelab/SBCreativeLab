import React, { useState, useEffect } from 'react'
import './Hero.css'
import useWindowDimensions from '../../utils/useWindowDimensions'

import logo from '../../images/s23_images/logo.svg'
import titleLarge from '../../images/s23_images/hero-title.svg'
import blob1 from '../../images/s23_images/blob-1.svg'
import titleSmallSBCL from '../../images/s23_images/phone_view/hero-sbcl-phone.svg'
import titleSmallJumpstart from '../../images/s23_images/phone_view/hero-jumpstart-phone.svg'
import titleSmallDesignathon from '../../images/s23_images/phone_view/hero-spring_designathon-phone.svg'

export default function Hero() {
    const { width } = useWindowDimensions();
    const PHONE_SCREEN_BREAKPOINT = 600;
    const isPhoneScreen = width <= PHONE_SCREEN_BREAKPOINT;
    const applicationLink = 'https://tinyurl.com/SBCLDesignathon23'

    return (
        <div className='hero' id='hero'>
            <div className='hero-background' />
            <header>
                <img src={logo} className='logo' alt='' />
                <nav>
                    {/*<NavBarItem name={"Prompt"} id={"prompt"} />*/}
                    <NavBarItem name={"Timeline"} id={"timeline"} />
                    <NavBarItem name={"Speakers"} id={"speakers"} />
                    <NavBarItem name={"Judges"} id={"judges"} />
                    <NavBarItem name={"Mentors"} id={"mentors"} />
                    {/*<NavBarItem name={"Prizes"} id={"prizes"} />*/}
                    <NavBarItem name={"FAQ"} id={"FAQs"} />
                    <NavBarItem name={"Sponsors"} id={"sponsors"} />
                </nav>
            </header>
            <div className='hero-content'>
                <div className='hero-title'>
                    {isPhoneScreen ?
                        <div className='hero-title-small-view'>
                            <img src={titleSmallSBCL} style={{ filter: "blur(0.3px)" }} alt='' />
                            <img src={titleSmallJumpstart} style={{ filter: "blur(0.3px)" }} alt='' />
                            <img src={titleSmallDesignathon} style={{ filter: "blur(2.5px)" }} alt='' />
                            <img src={titleSmallDesignathon} style={{ position: "absolute", top: "114px" }} alt='' />
                            <p>April 14th ~ 16th, 2023</p>
                        </div>
                        :
                        <img className='hero-title-large-view' src={titleLarge} alt='' />
                    }
                </div>
                <div className='register-button-container'>
                    <div className='register-button register-button-blur'></div>
                    <a className='register-button' href={applicationLink} target="_blank" rel="noreferrer">
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
            <img src={blob1} className='blob-1' alt='' />
            {/*<footer style={{ fontSize: '12px', margin: '24px', textAlign: 'right' }}>more info coming soon...</footer>*/}
        </div>
    )
}

function NavBarItem({ name, id }) {
    const [anchorTarget, setAnchorTarget] = useState(null);

    useEffect(() => {
        setAnchorTarget(document.getElementById(id));
    }, [id])

    const handleClick = event => {
        event.preventDefault();
        anchorTarget.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    return (
        <div className='navbar-item' onClick={handleClick}>
            <div className='navbar-item-text'>{name}</div>
        </div>
    )
}