import React from 'react'
import './Judges.css'
import graceLing from '../s22_images/judges/grace-ling.svg'
import ea from '../s22_images/judges/ea.svg'
import andrewTolentino from '../s22_images/judges/andrew-tolentino.png'
import ck from '../s22_images/judges/credit-karma.svg'
import meaghanL from '../s22_images/judges/meaghan-long.png'
import bsh from '../s22_images/judges/bsh-overlay.svg'
import kellyO from '../s22_images/judges/kelly-onodera.png'
import relativity from '../s22_images/judges/relativity-overlay.svg'
import judgesTitle from '../s22_images/judges.svg'

export default function Judges() {
    return (
        <div className='judges'>
            <div className='judges-card-container'>
                <div className='judges-card'>
                    <p className='p-bold'>Grace Ling</p>
                    <p className='p'>Designer @ Electronic Arts </p>
                    <br/> 
                    <p className='p'> </p>
                    <div className='images-container'>
                        <img src={graceLing} className='headshot-img'/>
                        <img src={ea} className='company-img'/>
                    </div>
                </div>
                <div className='judges-card'>
                    <p className='p-bold'>Andrew Tolentino</p>
                    <p className='p'>Product Design Manager @ <br/> Credit Karma</p>
                    <div className='images-container'>
                        <img src={andrewTolentino} className='headshot-img'/>
                        <img src={ck} className='company-img'/>
                    </div>
                </div>
                <div className='judges-card'>
                    <p className='p-bold'>Meaghan Long</p>
                    <p className='p'>Senior Product Designer @ <br/> BSH Home Appliances</p>
                    <div className='images-container'>
                        <img src={meaghanL} className='headshot-img'/>
                        <img src={bsh} className='company-img'/>
                    </div>
                </div>
                <div className='judges-card'>
                    <p className='p-bold'>Kelly Onodera</p>
                    <p className='p'>Product Design @ Relativity</p>
                    <br/> 
                    <p className='p'> </p>
                    <div className='images-container'>
                        <img src={kellyO} className='headshot-img'/>
                        <img src={relativity} className='company-img'/>
                    </div>
                </div>
            </div>
            <img src={judgesTitle} className='judges-title'/>
        </div>
    )
}