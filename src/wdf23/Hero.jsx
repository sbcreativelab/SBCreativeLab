import React from 'react'
import './Hero.css'

import heroTextStyling from './imgs/hero-text-styling.svg'
import heroStar from './imgs/hero-star.svg'

export default function Hero() {
    return (
        <div className='hero'>
            <div className='hero-text-0'>*SBCreative Lab</div>
            <div className='hero-text-1'>presents...</div>
            <div className='hero-text-2'>Winter Design</div>
            <div className='hero-text-3'>Fest</div>
            <img className='hero-text-styling' src={heroTextStyling} alt='' />
            <img className='hero-text-4-star' src={heroStar} alt='' />
            <div className='hero-text-4'>Winter 2023</div>
            <div className='hero-text-5'>Find the hidden colors.</div>
            <div className='hero-text-6'>Registration deadline: February 3</div>
        </div>
    )
}