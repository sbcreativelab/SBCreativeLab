import React from 'react'
import './Schedule.css'
import useWindowDimensions from '../../utils/useWindowDimensions'

import sectionTitle from '../../images/s24_images/schedule-title.svg'
import sectionTitlePhone from '../../images/s24_images/phone_view/schedule-title-phone.svg'

export default function Schedule() {
    const { width } = useWindowDimensions();
    const PHONE_SCREEN_BREAKPOINT = 600;
    const isPhoneScreen = width <= PHONE_SCREEN_BREAKPOINT;
	const gcalLink = "https://calendar.google.com/calendar/u/1?cid=ZjBiZmEyNzUxOWQ5MTNiNjQ3NzVjMDI0ZTc5MzA0MDNhYWE1ZjhhMTBiYWMwZjhlYTM5MDA5M2ExNTA1NGNkYkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t"

	return (
		<div className='schedule' id='schedule'>
			<div className='schedule-background' />
				{isPhoneScreen ?
					<div style={{ paddingBottom: '10vw' }}>
						<div style={{ position: 'relative' }}>
							<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1em', position: 'absolute', right: '2em', top: '2em', width: '40%' }}>
								<img src={sectionTitlePhone} alt='Schedule' style={{ width: '100%' }} />
							</div>
						</div>
						{ /* <img src={schedulePhone} alt='' className='schedule-phone' style={{ width: '100%' }} /> */ }
					</div>
					:
					<div className='schedule-container'>
						{ /* <img src={sideDeco} alt='' className='schedule-side-deco' /> */ }
						<div className='schedule-content'>
							<div className='schedule-header'>
								<img src={sectionTitle} alt='Schedule' className='schedule-title' />
							</div>
						{ /* <img src={schedule} alt='' className='schedule-body' /> */ }
						</div>
					</div>
				}
		</div>
	)
}
