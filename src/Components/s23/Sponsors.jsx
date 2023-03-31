import React from 'react'
import './Sponsors.css'
import useWindowDimensions from '../../utils/useWindowDimensions'

import sponsorsHeaderDeco from '../../images/s23_images/sponsors-header-deco.svg'
import sponsorsHeader from '../../images/s23_images/sponsors-header.svg'
import finn from '../../images/finn-head.png'
import protoio from '../../images/s23_images/sponsor_logo/protoio.png'
import adobe from '../../images/s23_images/sponsor_logo/adobe.png'
import rosenfeld from '../../images/s23_images/sponsor_logo/rosenfeld.png'
import poolup from '../../images/s23_images/sponsor_logo/poolup.png'
import asfb from '../../images/s23_images/sponsor_logo/asfb.png'

function SponsorsCell(props) {
    return (
        <div className='sponsors-cell sponsors-cell-white'>
            <a className='sponsors-image-container' href={props.link}>
                <img className='sponsors-image' src={props.img} alt={props.name} />
            </a>
        </div>
    )
}

export default function Sponsors() {
    return (
        <div className='sponsors' id='sponsors'>
            <div className='sponsors-background' />
            <div className='sponsors-grid'>
                <div className='sponsors-cell sponsors-cell-purple' />
                <SponsorsCell img={finn} link='' name='finn' />
                <div className='sponsors-cell sponsors-cell-purple' />
                <SponsorsCell img={protoio} link='https://proto.io/' name='Protoio' />
                <div className='sponsors-cell sponsors-cell-purple' />
                <SponsorsCell img={adobe} link='https://www.adobe.com/' name='Adobe' />
                <div className='sponsors-cell sponsors-cell-purple' />
                <div className='sponsors-cell'>
                    <img className='sponsors-header' src={sponsorsHeaderDeco} alt='' />
                    <img className='sponsors-header' src={sponsorsHeader} alt='sponsors' />
                </div>
                <div className='sponsors-cell sponsors-cell-purple' />
                <SponsorsCell img={rosenfeld} link='https://rosenfeldmedia.com/' name='Rosenfeld' />
                <div className='sponsors-cell sponsors-cell-purple' />
                <SponsorsCell img={poolup} link='https://www.poolup.co/' name='Poolup' />
                <div className='sponsors-cell sponsors-cell-purple' />
                <SponsorsCell img={asfb} link='https://asfb.as.ucsb.edu/' name='UCSB AS Finance & Business Committee' />
                <div className='sponsors-cell sponsors-cell-purple' />
            </div>
        </div>
    )
}