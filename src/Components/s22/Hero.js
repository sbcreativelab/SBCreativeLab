import React from 'react'
import './Hero.css'
import hero from '../s22_images/hero-img.svg'
import dateFrame from '../s22_images/date.svg'
import apply from '../s22_images/apply-now.svg'
import applyHover from '../s22_images/apply-now-on-hover.svg'
import applyBtn from '../s22_images/apply-btn.svg'
import applyButtonOverlay from '../s22_images/new-apply-overlay.svg'
import viewPrompt from '../s22_images/view-prompt.svg'
import viewPromptOverlay from '../s22_images/view-prompt-overlay2.svg'


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
            <a href='https://sbcreativelab.notion.site/2022-PiXEL-Designathon-fea4c3d055b14a569d667b6b4b965e2c' target='_blank'>
                <div className='apply-button-container'>
                    {/* <img src={applyButtonOverlay} className='apply-button-overlay' />
                    <img src={applyBtn} className='apply-now-btn'/>
                    <img src={applyHover} alt='' className='apply-now-hover'/>
                    <img src={apply} alt='Apply Now' className='apply-now'/> */} 
                </div>
                <div className='view-prompt-container'>
                    <img src={viewPromptOverlay} className='view-prompt-overlay' />
                    <img src={viewPrompt} className='view-prompt' />
                </div>
            </a>
        </div>
    )
}