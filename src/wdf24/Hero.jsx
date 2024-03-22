import React from 'react'
import { useMediaQuery } from 'react-responsive'
import './Hero.css'

import CurtainBackground from './imgs/curtain-background.svg';
import WhiteLogo from './imgs/whitelogo.svg';
import HeroBannerBg from './imgs/HeroBannerBg.svg';
import DownButton from './imgs/DownButton.svg';
import mobileCurtainBg from './imgs/mobile-curtain-bg.svg';

export default function Hero() {
    const isMobile = useMediaQuery({ query: `(max-width: 1300px)` });

    return (
        <div className='hero'>
            <img className='sbclLogo' src={WhiteLogo} alt=''/>

            <div className='hero-tagline'>SB Creative Lab Presents</div>
            
            <div className='hero-banner'>
                <div className='wdf-title'>Winter 2024 <br/> Design Festival</div>
                <div className='wdf-date'>Feb 10 - Feb 25</div>
            </div>
            <div className='button-section'> {/* //button containers */}
                <div className='button-container'>
                    <RegisterButton />

                    {/* <div className='button'>Register Now
                    </div> */}
                    <div className='button-des'>Registeration Deadline: February 24 <br/> @11:59pm EST</div>
                </div>
                <div className='button-container'>
                    <SubmitButton />

                {/* <div className='button'>Submit Now
                </div> */}
                <div className='button-des'>Submission Deadline: February 25 <br/> @11:59Pm EST</div>
                </div>
            </div>
            <img className='down-button' src={DownButton} alt=''/>

            
        </div>
    )
}

function RegisterButton() {
    return (
        <div className='button-container'>
            <button className='button' disabled>Event ended</button>
        </div>
    )
}

function SubmitButton() {
    return (
        <div className='button-container'>
            <button className='button' disabled>Event ended</button>
        </div>
    )
}
