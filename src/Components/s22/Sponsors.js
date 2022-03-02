import React from 'react'
import './Sponsors.css'
import sponsors from '../s22_images/sponsors.svg'
import figma from '../s22_images/figma.svg'
import balsamiq from '../s22_images/balsamiq.svg'


export default function Sponsors() {
    return (
        <div className='sponsors-container'>
            <img src={sponsors} className='title'/>
            <div className='sponsors'>
                <img src={figma} className='figma'/>
                <img src={balsamiq} className='balsamiq'/>
            </div>
        </div>
    )
}