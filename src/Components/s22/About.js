import React from 'react'
import './About.css'
import about from '../s22_images/about.svg'
import finnOrange from '../s22_images/finn-orange.svg'

export default function About() {
    return (
        <div className='about'>
            <img src={about} className='about-title'/>
            <div className='about-content'>
                <img src={finnOrange} className='finn-orange'/>
                <p className='about-text'>
                SB Creative Lab presents its 2022 PiXEL Designathon! Get hands-on design experience by challenging the normal with out-of-the-box ideas and intentional design. Not to mention you also get to work with your friends to win cool prizes and receive feedback from industry professionals!!
                <br />
                Join us in kicking off our 6-day challenge with an Opening Ceremony on Thursday April 7. During this time, we'll present the design brief with challenge details and you get to hear from a guest speaker! Design submissions will be due on Sunday, April 10 and the Closing Ceremony will take place on Wednesday, April 13.
                </p>
            </div>
        </div>
    )
}