import React from 'react'
import './Prizes.css'

import prize1 from './imgs/prize-1.png'
import prize2 from './imgs/prize-2.png'

export default function Prizes() {
    return (
    	<div className='prizes'>
    		<div className='prizes-title'>Prizes</div>
            <div className='prizes-container'>
                <Prize
                    title={'Album Cover'}
                    description={["2 art prints of your design", "Samsung Galaxy Pro wireless headphones"]}
                    image={prize1}
                    prizeClass={'1'}
                />
                <Prize
                    title={'Music Festival Poster'}
                    description={["1 full size poster of your design", "Fujifilm polaroid camera & extra packs of film"]}
                    image={prize2}
                    prizeClass={'2'}
                />
            </div>
    	</div>
    )
}

function Prize({title, description, image, prizeClass}) {
    return (
        <div className={'prize prize-' + prizeClass}>
            <div className='prize-title-container'>
                <div className='prize-title'>{title}</div>
            </div>
            <div className='prize-description'>
                {
                    description.map((pointText) => (
                        <div className='prize-description-line'>
                            <span className='prize-description-point' />
                            <span className='prize-description-text'>{pointText}</span>
                        </div>
                    ))
                }
            </div>
            <div className={'prize-image-container-' + prizeClass}>
                <img className={'prize-image-' + prizeClass} src={image} alt='' />
            </div>
        </div>
    )
}