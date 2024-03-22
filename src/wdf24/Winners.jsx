import React from 'react'
import './Winners.css'

import First from './imgs/first-ashlyn_ko.jpeg'
import Second from './imgs/second-crystal_pham.jpeg'
import Third from './imgs/third-carly_gillman.jpeg'

export default function Winners() {
    return <div className='winners-section-bg'>
        <div className='winners-section'>
            <div className='second-third-place-container'>
                <h2>2nd Place</h2>
                <img alt='second place' src={Second}/>
            </div>
            <div className='first-place-container'>
                <h2>1st Place</h2>
                <img alt='first place' src={First}/>
            </div>
            <div className='second-third-place-container'>
                <h2>3rd Place</h2>
                <img alt='third place' src={Third}/>
            </div>
        </div>
    </div>
}
