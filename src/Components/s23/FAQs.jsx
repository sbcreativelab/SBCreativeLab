import React from 'react'
import './FAQs.css'

export default function FAQs() {
    return (
        <div className='FAQs'>
            <div className='FAQs-background' />
            <div className='FAQs-frame'>
                <h1 className='FAQs-header'>Frequently Asked Questions</h1>
                <h2 className='FAQs-question'>What is a <b>designathon</b>?</h2>
                <p className='FAQs-answer'>
                    A designathon is an event where teams of designers are tasked 
                    with designing a solution to a given prompt. It's also a fun 
                    way to practice your skills, meet new people + win awesome 
                    prizes!
                </p>
                <h2 className='FAQs-question'>Who can participate?</h2>
                <p className='FAQs-answer'>
                    Any college student in North America may participate in the 
                    designathon. We welcome designers from all levels and 
                    backgrounds!
                </p>
                <h2 className='FAQs-question'>How much does it cost to attend the event?</h2>
                <p className='FAQs-answer'>
                    SB Creative Lab events are all free of charge! You do not have 
                    to pay to participate in the event. Register on our 
                    registration form!
                </p>
                <h2 className='FAQs-question'>Can I participate with a team?</h2>
                <p className='FAQs-answer'>
                    Absolutely! We are requiring students to compete in teams of 
                    2-3 designers.
                </p>
                <h2 className='FAQs-question'>How do I prepare?</h2>
                <p className='FAQs-answer'>
                    We will be hosting workshops catered towards guiding you 
                    through some important step for creating your projects! We 
                    will also be having some speakers come in to share some tips!
                </p>
                <h2 className='FAQs-question'>Where is the event taking place?</h2>
                <p className='FAQs-answer'>
                    The event will be hybrid this year with work sessions 
                    available for UCSB students at the library. We are using 
                    Discord and Zoom to host the designathon.
                </p>
            </div>
        </div>
    )
}