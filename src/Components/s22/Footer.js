import React from 'react'
import './Footer.css'
import email from '../s22_images/email.svg'
import instagram from '../s22_images/instagram.svg'
import discord from '../s22_images/discord.svg'

export default function Sponsors() {
    return (
        <div className='footer-container'>
            <p className='footer-title'>Talk to us!</p>
            <div className='footer-card-container'>
                <div className='footer-card-right-margin'>
                    <img src={email} className='icon'/>
                    <a href='mailto:ucsbcreativelab.gmail.com' className='link'>
                        <p className='footer-p'>Email</p>
                    </a>
                </div>
                <div className='footer-card-right-margin'>
                    <img src={instagram} className='icon'/>
                    <a href='https://www.instagram.com/sbcreativelab/' target='_blank' className='link'>
                    <p className='footer-p'>Instagram</p>
                    </a>
                </div>
                <div className='footer-card'>
                    <img src={discord} className='icon'/>
                    <a href='https://discord.com/invite/fc8Rrn7VdV' target='_blank' className='link'>
                    <p className='footer-p'>Discord</p>
                    </a>
                </div>
            </div>
        </div>
    )
}