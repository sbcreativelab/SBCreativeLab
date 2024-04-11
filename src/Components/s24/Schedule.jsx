import React from 'react'
import './Schedule.css'

function ScheduleDay(props) {
    const {date, events} = props
    return <div className='schedule-table'>
        <h5>{ date }</h5>
        { events.map((val, key) => {
            return <div key={ key }>
                <span>{ val.time }</span>
                <span>{ val.title }</span>
                <span>{ val.desc }</span>
            </div>
        }) }
    </div>
}

export default function Schedule() {
    return (
        <div className='schedule' id='schedule'>
            <div className='schedule-background' />
            <div className='schedule-container'>
            <h2>Schedule</h2>
            <p>
                In-Person events, marked "IP" are open to UCSB/SBCC students only<br/>
                All Studio Hours are hosted at the UCSB library 2nd floor study rooms.
            </p>
            <ScheduleDay
            	date='Friday - Apr. 5, 2024'
            	events={[
            		{
            			time: '6:00 pm',
            			title: 'Team Formation Social (IP)',
            			desc: 'Join us @ UCSB Student Health Lawn'
            		},
            	]} />
            <hr color="black"/>
            <ScheduleDay
            	date='Monday - Apr. 8, 2024'
            	events={[
            		{
            			time: '5:00-5:30 pm',
            			title: 'Workshop: Motion Design 101',
            			desc: <p>
            				Hosted by LottieFiles<br/>
            				Join us on <a href='https://ucsb.zoom.us/j/8215276243'>Zoom</a>
            			</p>
            		},
            		{
            			time: '5:30 pm',
            			title: 'Team Formation Social',
            			desc: <p>Join us on <a href='https://ucsb.zoom.us/j/8215276243'>Zoom</a></p>
            		},
            	]} />
            <hr color="black"/>
            <ScheduleDay
            	date='Wednesday - Apr. 10, 2024'
            	events={[
            		{
            			time: '6:00 pm',
            			title: 'Workshop: User Research',
            			desc: <p>
            				Hosted by Hannah Millar<br/>
            				Join us on <a href='https://ucsb.zoom.us/j/8215276243'>Zoom</a>
            			</p>
            		},
            	]} />
            <hr color="black"/>
            <ScheduleDay
            	date='Thursday - Apr. 11, 2024'
            	events={[
            		{
            			time: '6:00 pm',
            			title: 'Opening Ceremony',
            			desc: <p>
            				Join us on <a href='https://ucsb.zoom.us/j/8215276243'>Zoom</a><br/>
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
            			desc: 'Announcing this year\'s designathon theme and prompts'
            		},
            		{
            			time: '8:00-9:00 pm',
            			title: 'Studio Hours (IP)',
            			desc: <p>
            				Teams can work in person together 
            				at our work rooms. Possible peer 
            				mentorship is provided. <br/>
            				<br/>
            				Location: Library room 2528
            			</p>
            		},
            	]} />
            <hr color="black"/>
            <ScheduleDay
            	date='Friday - Apr. 12, 2024'
            	events={[
            		{
            			time: '1:00-5:00 pm',
            			title: 'Studio Hours (IP)',
            			desc: <p>
            				Teams can work in person together 
            				at our work rooms. Possible peer 
            				mentorship is provided. <br/>
            				<br/>
            				Location: Library room 2503
            			</p>
            		},
            
            		{
            			time: '6:00pm',
            			title: 'Workshop: Intro to Figma',
            			desc: <p>
            				Led by Van Vo<br/>
            				Join us on <a href='https://ucsb.zoom.us/j/8215276243'>Zoom</a>
            			</p>
            		},
            		{
            			time: '7:00-11:00 pm',
            			title: 'Studio Hours (IP)',
            			desc: <p>
            				Teams can work in person together 
            				at our work rooms. Possible peer 
            				mentorship is provided.<br/>
            				<br/>
            				Location: Library rooms 2326&nbsp;(7-10 pm), <wbr/>
            				2332&nbsp;(rest of the time)
            			</p>
            		},
            	]} />
            <hr color="black"/>
            <ScheduleDay
            	date='Saturday - Apr. 13, 2024'
            	events={[
            		{
            			time: '1:00-8:00 pm',
            			title: 'Studio Hours (IP)',
            			desc: <p>
            				Teams can work in person together 
            				at our work rooms. Possible peer 
            				mentorship is provided.<br/>
            				<br/>
            				Location: Library room 2332
            			</p>
            		},
            	]} />
            <hr color="black"/>
            <ScheduleDay
            	date='Sunday - Apr. 13, 2024'
            	events={[
            		{
            			time: '1:00-6:00 pm',
            			title: 'Studio Hours (IP)',
            			desc: <p>
            				Teams can work in person together 
            				at our work rooms. Possible peer 
            				mentorship is provided.<br/>
            				<br/>
            				Location: Library rooms 2326&nbsp;(1-5pm), <wbr/>
            				2332&nbsp;(5-6pm)
            			</p>
            		},
            		{
            			time: '5:59 pm',
            			title: 'PROJECT SUBMISSION DEADLINE',
            			desc: 'All projects must be submitted on Devpost by 5:59 pm!!!'
            		},
            	]} />
            <hr color="black"/>
            <ScheduleDay
            	date='Wednesday - Apr. 17, 2024'
            	events={[
            		{
            			time: '6:00pm',
            			title: 'Closing Ceremony',
            			desc: <p>
            				Join us on <a href='https://ucsb.zoom.us/j/8215276243'>Zoom</a><br/>
            				Winners announced
            			</p>
            		},
            	]} />
            <hr color="black"/>
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
            				<br/>
            				Location: Student Resources Building
            			</p>
            		},
            	]} />
            </div>
        </div>
    )
}
