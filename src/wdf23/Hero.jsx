import React from 'react'
import './Hero.css'

import heroImg from './imgs/hero-img.svg'
import heroArrow from './imgs/hero-arrow.svg'

export default function Hero() {
    return (
        <div className='hero'>
            <img className='hero-img' src={heroImg} alt='' />
            <div className='button-container'>
                <RegisterButton />
                <LearnMoreButton />
            </div>
            <div className='hero-text-1'>Find the hidden colors.</div>
            <div className='hero-text-2'>Registration deadline: February 3</div>
            <img className='hero-arrow' src={heroArrow} alt='' />
        </div>
    )
}

function RegisterButton() {
    const handleOnClick = () => window.open('https://forms.gle/8ETGQsboJ9JNzpt77', '_blank', 'noreferrer');

    return (
        <div className='register-button-container button' onClick={handleOnClick}>
            <div className='register-button'>Register Now</div>
        </div>
    )
}

function LearnMoreButton() {
    const handleClick = event => {
        event.preventDefault()
        document.getElementById('prompts').scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    return (
        <div className='learn-more-button-container button' onClick={handleClick} href=''>
            <div className='learn-more-button'>Learn More</div>
        </div>
    )
}