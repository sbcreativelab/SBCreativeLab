import React from 'react'
import './Rubric.css'

import RubricBanner from './imgs/rubric-banner.svg'
import RubricComp from './imgs/rubric-comp.svg'
import RubricOrg from './imgs/rubric-org.svg'
import RubricTextUse from './imgs/rubric-text-use.svg'
import RubricGram from './imgs/rubric-gram.svg'

export default function Rubric() {
    return <div className='rubric-section-bg'>
        <div className='rubric-section'>
            <img
                alt='rubric banner'
                className='rubric-banner'
                src={RubricBanner}/>
            <div className='rubric-container'>
                <img
                    alt='composition and design'
                    src={RubricComp}/>
                <img
                    alt='originality and creativity'
                    src={RubricOrg}/>
                <img
                    alt='use of text and legibility'
                    src={RubricTextUse}/>
                <img
                    alt='grammar and mechanics'
                    src={RubricGram}/>
            </div>
        </div>
    </div>
}
