import React from 'react'
import './Calendar.css'

import judgingNoteArrow from './imgs/judging-note-arrow.svg'

export default function Calendar() {
    return (
    	<div className='calendar'>
            <div className='calendar-title'>WDF Calendar</div>
            <div className='calendar-container'>
                <div className='calendar-dates-container'>
                    <div className='calendar-date calendar-registration-event'>January 9</div>
                    <div className='calendar-date'>January 17</div>
                    <div className='calendar-date'>January 19</div>
                    <div className='calendar-date'>January 26</div>
                    <div className='calendar-date'>February 3</div>
                    <div className='calendar-date calendar-submission-event'>February 5</div>
                    <div className='calendar-date'>February 22</div>
                    <div className='calendar-date'>MONTH DATE</div>
                </div>
                <div className='calendar-events-container'>
                    <div className='calendar-event calendar-registration-event'>Registration Open</div>
                    <div className='calendar-event'>Illustration Workshop</div>
                    <div className='calendar-event'>Poster Design / Fonts workshop</div>
                    <div className='calendar-event'>GM2 - WDF Worktime</div>
                    <div className='calendar-event'>Registration Deadline</div>
                    <div className='calendar-event calendar-submission-event'>Submission Deadline</div>
                    <div className='calendar-event'>Results Announced</div>
                    <div className='calendar-event'>Prizes Sent!</div>
                </div>
            </div>
            <div className='calendar-judging-note'>
                <img className='calendar-judging-note-arrow' src={judgingNoteArrow} alt='' />
                <div className='calendar-judging-note-text'>Judging Period</div>
            </div>
        </div>
    )
}