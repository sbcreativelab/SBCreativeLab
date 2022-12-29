import React from 'react'
import './SectionsBar.css'

function SectionButton({name}) {
    return (
        <div className='section-button-container'>
            <div className='section-button'>
                {name}
            </div>
        </div>
    )
}

export default function SectionsBar() {
    return (
        <div className='sectionsbar'>
            <div className='sections-text'>
                <SectionButton name='Prompts' />
                <SectionButton name='Workshops' />
                <SectionButton name='Schedule' />
                <SectionButton name='Rubric' />
                <SectionButton name='Judges' />
                <SectionButton name='Mentors' />
                <SectionButton name='Prizes' />
                <SectionButton name='FAQ' />
            </div>
        </div>
    )
}