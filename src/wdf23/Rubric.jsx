import React from 'react'
import './Rubric.css'

import rubricArrow from './imgs/rubric-arrow.svg'

export default function Rubric() {
    return (
    	<div className='rubric'>
    		<div className='rubric-title'>Rubric</div>
            <div className='rubric-subtitle'>Out of 4 pioints for each category</div>
            <div className='rubric-project-title rubric-album-cover-title'>
                <div className='rubric-project-title-text'>Album Cover.</div>
                <img className='rubric-project-title-arrow' src={rubricArrow} alt='' />
            </div>
            <div className='rubric-container rubric-album-cover-container'>
                <RubricSection
                    maxWidth={420}
                    title={"Composition & Design"}
                    description={"Strong and unique composition. Layout is cohesive and actively contributes to the meaning of the design."}
                />
                <RubricSection
                    maxWidth={420}
                    title={"Originality & Creativity"}
                    description={"Excellent approach to developing and clearly expressing an original idea, with evidence of risk-taking."}
                />
                <RubricSection
                    maxWidth={420}
                    title={"Rendering & Completion"}
                    description={"No noticeable gaps or discrepancies within the design. Design is mostly to fully done with a clear concept."}
                />
            </div>
            <div className='rubric-project-title rubric-music-fest-title'>
                <div className='rubric-project-title-text'>Music Festival Lineup Poster.</div>
                <img className='rubric-project-title-arrow' src={rubricArrow} alt='' />
            </div>
            <div className='rubric-container rubric-music-fest-container'>
                <RubricSection
                    maxWidth={320}
                    title={"Composition & Design"}
                    description={"Strong and unique composition. Layout is cohesive and actively contributes to the meaning of the design."}
                />
                <RubricSection
                    maxWidth={320}
                    title={"Originality & Creativity"}
                    description={"Excellent approach to developing and clearly expressing an original idea, with evidence of risk-taking."}
                />
                <RubricSection
                    maxWidth={320}
                    title={"Information Hierarchy"}
                    description={"Presents different types of text in an intuitive manner that does not overwhelm the reader."}
                />
                <RubricSection
                    maxWidth={320}
                    title={"Use of Copy & Legibility"}
                    description={"Utilizes copy efficiently and creatively, without compromising the legibility of the text."}
                />
            </div>
    	</div>
    )
}

function RubricSection({ title, description, maxWidth }) {
    return (
        <div className='rubric-section-container' style={{ maxWidth: maxWidth }}>
            <div className='rubric-section-title'>{title}</div>
            <div className='rubric-section-description'>{description}</div>
        </div>
    )
}