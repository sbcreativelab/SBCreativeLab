import React from 'react'
import './Hero.css'

import heroImg from './imgs/hero-img.svg'
import heroArrow from './imgs/hero-arrow.svg'

export default function Hero() {
    return (
        <div className='hero'>
            <img className='hero-img' src={heroImg} alt='' />
            <div className='register-button-container'>
                <div className='register-button'>Register Now</div>
            </div>
            <div className='learn-more-button-container'>
                <div className='learn-more-button'>Learn More</div>
            </div>
            <div className='hero-text-1'>Find the hidden colors.</div>
            <div className='hero-text-2'>Registration deadline: February 3</div>
            <img className='hero-arrow' src={heroArrow} alt='' />
        </div>
    )
}