import React, { useState, useEffect } from 'react'
import './Hero.css'
import useWindowDimensions from '../../utils/useWindowDimensions'

import logo from '../../images/logo.svg'
import titleLarge from '../../images/s24_images/hero-title.svg'
import titleSmallSBCL from '../../images/s24_images/phone_view/hero-sbcl-phone.svg'
import titleSmallJumpstart from '../../images/s24_images/phone_view/hero-jumpstart-phone.svg'
import titleSmallDesignathon from '../../images/s24_images/phone_view/hero-spring_designathon-phone.svg'

export default function Hero() {
    const { width } = useWindowDimensions();
    const PHONE_SCREEN_BREAKPOINT = 600;
    const isPhoneScreen = width <= PHONE_SCREEN_BREAKPOINT;
    const applicationLink = 'https://forms.gle/JbbRT3279CfsNktMA'

    return (
        <div className='hero' id='hero'>
            <div className='hero-background' />
            <header>
                <a href="https://sbcreativelab.com">
                    <img src={logo} className='logo' alt='' />
                </a>
                <nav>
	            {/* (<NavBarItem name={"Prompt"} id={"prompt"} /> */}
                    {/* <NavBarItem name={"Speakers"} id={"speakers"} /> */}
                    {/* <NavBarItem name={"Judges"} id={"judges"} /> */}
                    {/* <NavBarItem name={"Mentors"} id={"mentors"} /> */}
	            <NavBarItem name={"Schedule"} id={"schedule"} />
                    {/* <NavBarItem name={"Prizes"} id={"prizes"} /> */}
                    <NavBarItem name={"FAQ"} id={"FAQs"} />
                    <NavBarItem name={"Sponsors"} id={"sponsors"} />
                </nav>
            </header>
            <div className='hero-content'>
                <div className='hero-title'>
                    {isPhoneScreen ?
                        <div className='hero-title-small-view'>
                            <img src={titleSmallSBCL} alt='' />
                            <img src={titleSmallJumpstart} alt='' />
                            <img src={titleSmallDesignathon} style={{ filter: "blur(2.5px)" }} alt='' />
                            <img src={titleSmallDesignathon} style={{ position: "absolute", top: "114px" }} alt='' />
                            <p>April 11th ~ 14th, 2024</p>
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
                <div className='register-deadline'>
	    	    Register now to access team formation events<br/>
	    	    Register Deadline: April 11th 6pm PST
	    	</div>
	    	{/* <div className='register-deadline'>Event ended, check back next year!</div> */}
                <p className='hero-description'>
                    SB Creative Lab presents its 2024 JUMPSTART 
                    Designathon! Get hands-on design experience by 
                    challenging the normal with out-of-the-box ideas and 
                    intentional design. Join us in kicking off our 4-day 
                    challenge April 11th through April 14th. During this 
                    time, students will participate on various design 
                    workshops and meet new friends from other college 
                    campuses to tackle a design challenge together! 
                </p>
	        <p className='eligibility-text'>Eligibility: any undergrad or grad students in North America can participate</p>
            </div>
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
