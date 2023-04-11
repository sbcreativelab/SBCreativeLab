import React from 'react'
import './Prizes.css'
import useWindowDimensions from '../../utils/useWindowDimensions'
import prizesHeader from '../../images/s23_images/prizes-header.svg'

export default function Prizes() {
    const { width } = useWindowDimensions();
    const PHONE_SCREEN_BREAKPOINT = 600;
    const isPhoneScreen = width <= PHONE_SCREEN_BREAKPOINT;

    return (
        <div className='prizes' id='prizes'>
            <div className='prizes-background'/>
            {isPhoneScreen ?
                <div className='prizes-frame'>
                    <div className='prizes-header'>
                        <img src={prizesHeader} alt='prizes' />
                    </div>
                    <div className='prizes-grid'></div>
                </div>
                :
                <div className='prizes-frame'>
                    <div className='prizes-header'>
                        <img src={prizesHeader} alt='prizes' />
                    </div>
                    <div className='prizes-grid'></div>
                </div>
            }
        </div>
    )
}