import React from 'react'
import './Schedule.css'
import useWindowDimensions from '../../utils/useWindowDimensions'

import sectionTitlePhone from '../../images/s24_images/phone_view/schedule-title-phone.svg'

function ScheduleDay(props) {
	const {date, events} = props
	return <div className='schedule-table'>
		<b>{ date }</b>
		<table>
			{ events.map((val, key) => {
				return <tr key={ key }>
					<td>{ val.time }</td>
					<td>{ val.title }</td>
					<td>{ val.desc }</td>
				</tr>
			}) }
		</table>
	</div>
}

export default function Schedule() {
    const { width } = useWindowDimensions();
    const PHONE_SCREEN_BREAKPOINT = 600;
    const isPhoneScreen = width <= PHONE_SCREEN_BREAKPOINT;
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
						<h2>Schedule</h2>
						<p>In-Person events, marked "IP" are open to UCSB/SBCC students only</p>
						<ScheduleDay
							date='Friday - Apr. 5, 2024'
							events={[
								{
									time: '6:00pm',
									title: 'Team Formation Social (IP)',
									desc: 'Join us @ UCSB Student Health Lawn'
								},
							]} />
						<ScheduleDay
							date='Monday - Apr. 8, 2024'
							events={[
								{
									time: '5:00 - 5:30pm',
									title: 'Workshop: Motion Design 101',
									desc: <p>
										Hosted by LottieFiles<br/>
										Join us on Zoom
									</p>
								},
								{
									time: '5:30pm',
									title: 'Team Formation Social',
									desc: 'Join us on Zoom'
								},
							]} />
						<ScheduleDay
							date='Tuesday - Apr. 9, 2024'
							events={[
								{
									time: '6:00pm',
									title: 'Workshop',
									desc: <p>
										Hosted by TBA<br/>
										Join us on Zoom
									</p>
								},
							]} />
						<ScheduleDay
							date='Wednesday - Apr. 10, 2024'
							events={[
								{
									time: '6:00pm',
									title: 'Workshop: User Research',
									desc: <p>
										Hosted by Hannah Millar<br/>
										Join us on Zoom
									</p>
								},
							]} />
						<ScheduleDay
							date='Thursday - Apr. 11, 2024'
							events={[
								{
									time: '6:00pm',
									title: 'Opening Ceremony',
									desc: <p>
										Join us on Zoom<br/>
										Led by SBCL's Director: Tvisha Patel
									</p>
								},
								{
									time: '',
									title: 'Keynote Speech',
									desc: 'Led by Keynote Speaker: Felix Lee'
								},
								{
									time: '',
									title: 'Challenge Brief',
									desc: 'Announcing this year\'s designathon theme and prompt'
								},
								{
									time: '',
									title: 'Work Session (IP)',
									desc: <p>
										Teams can work in person together 
										at our work rooms. Free snacks and 
										possible peer mentorship are 
										provided.<br/>
										Location: Library rooms ####, #### (TBA)
									</p>
								},
							]} />
						<ScheduleDay
							date='Friday - Apr. 12, 2024'
							events={[
								{
									time: '6:00pm',
									title: 'Workshop',
									desc: <p>
										Hosted by TBA<br/>
										Join us on Zoom
									</p>
								},
								{
									time: '6:00pm',
									title: 'Work Session (IP)',
									desc: <p>
										Teams can work in person together 
										at our work rooms. Free snacks and 
										possible peer mentorship are 
										provided.<br/>
										Location: Library rooms ####, #### (TBA)
									</p>
								},
							]} />
						<ScheduleDay
							date='Wednesday - Apr. 17, 2024'
							events={[
								{
									time: '6:00pm',
									title: 'Closing Ceremony',
									desc: <p>
										Join us on Zoom<br/>
										Winners announced
									</p>
								},
							]} />
						<ScheduleDay
							date='Friday - Apr. 19, 2024'
							events={[
								{
									time: '6:00pm',
									title: 'After Party (IP)',
									desc: <p>
										Come join us in a celebration for 
										all of your amazing project 
										submissions! Free snacks and drinks 
										are provided.<br/>
										Location: Student Resources Building
									</p>
								},
							]} />
					</div>
				}
		</div>
	)
}
