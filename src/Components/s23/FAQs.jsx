import React from 'react'
import './FAQs.css'
import useWindowDimensions from '../../utils/useWindowDimensions'

import faqsHeaderDeco from '../../images/s23_images/faqs-header-deco.svg'
import faqsHeader from '../../images/s23_images/faqs-header.svg'
import faqsHeaderPhoneDeco from '../../images/s23_images/phone_view/faqs-header-deco-phone.svg'
import faqsHeaderPhone from '../../images/s23_images/phone_view/faqs-header-phone.svg'

export default function FAQs() {
    const { width } = useWindowDimensions();
    const PHONE_SCREEN_BREAKPOINT = 600;
    const isPhoneScreen = width <= PHONE_SCREEN_BREAKPOINT;

    return (
        <div className='FAQs' id='FAQs'>
            <div className='FAQs-background' />
            <div className='FAQs-frame'>
                <div className='FAQs-header'>
                    <img src={isPhoneScreen ? faqsHeaderPhoneDeco : faqsHeaderDeco} alt='' />
                    <img src={isPhoneScreen ? faqsHeaderPhone : faqsHeader} alt='Frequently Asked Questions' />
                </div>
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