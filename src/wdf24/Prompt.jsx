import React from 'react'
import './Prompt.css'

import PromptTicket from './imgs/PromptTicket.svg'
//import Coke from './imgs/coke.svg'
//import Hotdog from './imgs/Hotdog.svg'
//import Popcorn from './imgs/Popcorn.svg'
import Snacks from './imgs/theater-snacks.svg'

export default function Prompt() {
    return <div className='prompt-section'>
        <img
            alt='prompt ticket'
            className='prompt-ticket'
            src={PromptTicket}/>
        <img
            alt=''
            className='snacks-img'
            src={Snacks}/>
    </div>
}
