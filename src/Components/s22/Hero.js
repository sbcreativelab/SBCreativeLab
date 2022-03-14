import React from 'react'
import './Hero.css'
import hero from '../s22_images/hero-img.svg'
import dateFrame from '../s22_images/date.svg'
import apply from '../s22_images/apply-now.svg'
import applyHover from '../s22_images/apply-now-on-hover.svg'
import applyButton from '../images/new-apply-button.svg'
import applyButtonOverlay from '../images/new-apply-overlay.svg'

export default function Hero() {
    return (
        <div className='hero'>
            <div className='hero-background'>
                <div className='frame'>
                    <img src={hero} alt='' className='hero-image'/>
                </div>
            </div>
            <div>
                <img src={dateFrame} alt='' className='date-frame'/>
            </div>
            <a href='https://docs.google.com/forms/d/e/1FAIpQLSdq_mZQnj3v7aq9GhKw_-EPX_T2a3UDkK47b2g_37tOTRo9TQ/viewform' target='_blank'>
                <div className='apply-button-container'>
                    <img src={applyButtonOverlay} alt='' className='apply-button-overlay' />
                    <img src={applyButton} alt='Apply Now' className='apply-button' />
                    <img src={applyHover} alt='' className='apply-now-hover'/>
                    <img src={apply} alt='Apply Now' className='apply-now'/>
                </div>
            </a>
        </div>
    )
}