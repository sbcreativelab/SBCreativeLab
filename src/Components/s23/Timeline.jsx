import React from 'react'
import './Timeline.css'

import sideDeco from '../../images/s23_images/timeline-background.svg'
import sectionTitle from '../../images/s23_images/timeline-title.svg'

import timeline from '../../images/s23_images/timeline.svg'

export default function Timeline() {
	const gcalLink = "https://calendar.google.com/calendar/u/1?cid=ZjBiZmEyNzUxOWQ5MTNiNjQ3NzVjMDI0ZTc5MzA0MDNhYWE1ZjhhMTBiYWMwZjhlYTM5MDA5M2ExNTA1NGNkYkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t"

	return (
		<div className='timeline'>
			<div className='timeline-background' />
			<div className='timeline-container'>
				<img src={sideDeco} alt='' className='timeline-side-deco' />
				<div className='timeline-content'>
					<div className='timeline-header'>
						<img src={sectionTitle} alt='Timeline' className='timeline-title' />
						<a className='timeline-gcal' href={gcalLink} target="_blank" rel="noreferrer">
							<div className='timeline-gcal-text'>+ ADD TO YOUR GCAL</div>
						</a>
					</div>
					<img src={timeline} alt='' className='timeline-body' />
				</div>
			</div>
		</div>
	)
}