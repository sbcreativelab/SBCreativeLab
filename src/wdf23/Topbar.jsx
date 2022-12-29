import React from 'react'
import './Topbar.css'

export default function Topbar() {
    return (
        <div className='topbar'>
            <div className='corner-logo'></div>
            <div className='logo-separator'></div>
            <div className='quarter-text'>Winter 2023</div>
            <div className='quarter-separator'></div>
            <div className='tagline-text'>Unleash your creativity.</div>
            {/*<div className='header-winter-text'>January 09 - February 05</div>*/}
        </div>
    )
}