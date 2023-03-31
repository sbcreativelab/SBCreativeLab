import React from 'react'
import './Timeline.css'
import useWindowDimensions from '../../utils/useWindowDimensions'

import sideDeco from '../../images/s23_images/timeline-background.svg'
import sectionTitle from '../../images/s23_images/timeline-title.svg'
import sectionTitlePhone from '../../images/s23_images/phone_view/timeline-title-phone.svg'

import timeline from '../../images/s23_images/timeline.svg'
import timelinePhone from '../../images/s23_images/phone_view/timeline-phone.svg'

export default function Timeline() {
    const { width } = useWindowDimensions();
    const PHONE_SCREEN_BREAKPOINT = 600;
    const isPhoneScreen = width <= PHONE_SCREEN_BREAKPOINT;
	const gcalLink = "https://calendar.google.com/calendar/u/1?cid=ZjBiZmEyNzUxOWQ5MTNiNjQ3NzVjMDI0ZTc5MzA0MDNhYWE1ZjhhMTBiYWMwZjhlYTM5MDA5M2ExNTA1NGNkYkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t"

	return (
		<div className='timeline' id='timeline'>
			<div className='timeline-background' />
				{isPhoneScreen ?
					<div style={{ paddingBottom: '10vw' }}>
						<div style={{ position: 'relative' }}>
							<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1em', position: 'absolute', right: '2em', top: '2em', width: '40%' }}>
								<img src={sectionTitlePhone} alt='Timeline' style={{ width: '100%' }} />
								<a className='timeline-gcal' href={gcalLink} target="_blank" rel="noreferrer">
									<div className='timeline-gcal-text'>+ ADD TO YOUR GCAL</div>
								</a>
							</div>
						</div>
						<img src={timelinePhone} alt='' className='timeline-phone' style={{ width: '100%' }} />
					</div>
					:
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
				}
		</div>
	)
}