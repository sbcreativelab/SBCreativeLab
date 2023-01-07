import React, { useState, useEffect } from 'react'
import './SectionsBar.css'

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
        </div>
    )
}