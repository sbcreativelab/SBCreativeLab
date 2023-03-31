import React from 'react'
import './Mentors.css'
import useWindowDimensions from '../../utils/useWindowDimensions'

import mentorsHeaderDeco from '../../images/s23_images/mentors-header-deco.svg'
import mentorsHeader from '../../images/s23_images/mentors-header.svg'
import wu from '../../images/s23_images/mentors/wu.png'
import lo from '../../images/s23_images/mentors/lo.png'
import chow from '../../images/s23_images/mentors/chow.png'

function MentorsCell(props) {
    return (
        <div className={'mentors-cell ' + props.class}>
            <img src={props.img} alt={props.name} />
            <div className='mentors-desc'>
                <p className='mentors-name'>{props.name}</p>
                {props.company ?
                    <p className='mentors-position'>
                        [{props.position}<br/>
                        @ {props.company}]
                    </p>
                    :
                    <p className='mentors-position'>
                        [{props.position}<br/>
                        {props.position2}]
                    </p>
                }
            </div>
        </div>
    )
}

export default function Mentors() {
    return (
        <div className='mentors' id='mentors'>
            <div className='mentors-background'/>
            <div className='mentors-frame'>
                <div className='mentors-header'>
                    <img src={mentorsHeaderDeco} alt='' />
                    <img src={mentorsHeader} style={{ left: '1px' }} alt='mentors' />
                </div>
                <div className='mentors-grid'>
                    <MentorsCell class='mentors-cell-1' img={wu} name='Bianca Wu' position='Freelance Product' position2='Designer'/>
                    <MentorsCell class='mentors-cell-2' company='Blizzard' img={chow} name='Chloe Chow' position='Associate UX Designer'/>
                    <MentorsCell class='mentors-cell-3' company='PoolUp' img={lo} name='Felicia Lo' position='Product Designer'/>
                </div>
            </div>
        </div>
    )
}