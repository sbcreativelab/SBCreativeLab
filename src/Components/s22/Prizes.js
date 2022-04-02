import React from 'react'
import './Prizes.css'
import prizes from '../s22_images/prizes.svg'

export default function Prizes() {
    return (
        <div>
            <img src={prizes} className='prizes'></img>
        </div>
    )
}