import React from 'react'
import './FAQ.css'
import faq from '../s22_images/faq.svg'
import faqContent from '../s22_images/faq-content.svg'

export default function FAQ() {
    return (
        <div className='faq-container'>
            <img src={faq} className='faq-title'/>
            <img src={faqContent} className='faq-content'/>
        </div>
    )
}