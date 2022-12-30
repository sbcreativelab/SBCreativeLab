import React from 'react'
import './Hero.css'

// import heroTextStyling from './imgs/hero-text-styling.svg'
// import heroStar from './imgs/hero-star.svg'

import heroImg from './imgs/hero-img.svg'

export default function Hero() {
    return (
        <div className='hero'>
            <img className='hero-img' src={heroImg} alt='' />
            <div className='register-button-container'>
                <div className='register-button'>Register Now</div>
            </div>
            <div className='hero-text-1'>Find the hidden colors.</div>
            <div className='hero-text-2'>Registration deadline: February 3</div>
        </div>
    )
}