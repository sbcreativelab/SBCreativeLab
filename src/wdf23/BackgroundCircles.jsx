import React from 'react'
import './BackgroundCircles.css'

import backgroundCircles1 from '../wdf23/imgs/background-circles-1.svg'
import backgroundCircles2 from '../wdf23/imgs/background-circles-2.svg'
import backgroundCircles3 from '../wdf23/imgs/background-circles-3.svg'
import backgroundCircles4 from '../wdf23/imgs/background-circles-4.svg'
import backgroundCircles5 from '../wdf23/imgs/background-circles-5.svg'
import backgroundCircles6 from '../wdf23/imgs/background-circles-6.svg'
import backgroundCircles7 from '../wdf23/imgs/background-circles-7.svg'
import backgroundCircles8 from '../wdf23/imgs/background-circles-8.svg'
import backgroundCircles9 from '../wdf23/imgs/background-circles-9.svg'

export default function BackgroundCircles() {
    return (
    	<div className='background-circles'>
    		<img className='background-circles-1' src={backgroundCircles1} alt='' />
            <img className='background-circles-2' src={backgroundCircles2} alt='' />
            <img className='background-circles-3' src={backgroundCircles3} alt='' />
            <img className='background-circles-4' src={backgroundCircles4} alt='' />
            <img className='background-circles-5' src={backgroundCircles5} alt='' />
            <img className='background-circles-6' src={backgroundCircles6} alt='' />
            <img className='background-circles-7' src={backgroundCircles7} alt='' />
            <img className='background-circles-8' src={backgroundCircles8} alt='' />
            <img className='background-circles-9' src={backgroundCircles9} alt='' />
    	</div>
    )
}