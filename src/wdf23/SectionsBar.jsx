import React, { useState, useEffect } from 'react'
import './SectionsBar.css'

import instagramImg from './imgs/instagram-icon.png'
import discordImg from './imgs/discord-icon.png'
import emailImg from './imgs/email-icon.png'

export default function SectionsBar() {
    return (
        <div className='sectionsbar'>
            <div className='sections-text'>
                <SectionButton name='Prompts' id='prompts' />
                <SectionButton name='Workshops' id='workshops' />
                <SectionButton name='Schedule' id='schedule' />
                <SectionButton name='Rubric' id='rubric' />
                <SectionButton name='Judges' id='judges' />
                {/*<SectionButton name='Mentors' />*/}
                <SectionButton name='Prizes' id='prizes' />
                <SectionButton name='FAQ' id='faq' />
            </div>
            <div className='socials-container'>
                <SocialButton
                    img={instagramImg}
                    link={'https://www.instagram.com/sbcreativelab/'}
                />
                <SocialButton
                    img={discordImg}
                    link={'https://discord.gg/fc8Rrn7VdV'}
                />
                <SocialButton
                    img={emailImg}
                    link={''}
                />
            </div>
        </div>
    )
}

function SectionButton({name, id}) {
    const [anchorTarget, setAnchorTarget] = useState(null)

    useEffect(() => {
        setAnchorTarget(document.getElementById(id))
    }, [id])

    const handleClick = event => {
        event.preventDefault()
        anchorTarget.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    return (
        <a className='section-button-container' href={"#" + id} onClick={handleClick}>
            <div className='section-button'>
                {name}
            </div>
        </a>
    )
}

function SocialButton({img, link}) {
    const handleOnClick = () => window.open(link, '_blank', 'noreferrer');

    return (
        <img className='social-button' src={img} alt='' onClick={handleOnClick} />
    )
}