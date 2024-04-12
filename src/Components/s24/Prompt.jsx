import React from 'react'
import './Prompt.css'
import useWindowDimensions from '../../utils/useWindowDimensions'

function PromptBox(props) {
	return (
		<div className={`prompt-box prompt-box-${props.color}`}>
			<div className={'prompt-header'}>{props.title}</div>
			<div className={'prompt-description'}>{props.description}</div>
			{
				props.note ?? <div className={'prompt-description'}>{props.note}</div>
			}
			<a className={'prompt-button'} href={props.link}>{props.linkTitle}</a>
		</div>
	)
}

export default function Prompt() {
	const { width } = useWindowDimensions();
	const PHONE_SCREEN_BREAKPOINT = 600;
	const isPhoneScreen = width <= PHONE_SCREEN_BREAKPOINT;
	
	return (
		<div className='prompt' id='prompt'>
			<PromptBox
				color={'purple'}
				title={'Design Brief'}
				description={'See information on submission requirements, experience level criteria, event rules, prompts, and more'}
				linkTitle={'See Design Brief'}
				link={'https://drive.google.com/file/d/1KaFeZC0SC9RvboANhP0uJKZJEZxwNEsc/view?usp=drive_link'}
			/>
			<PromptBox
				color={'orange'}
				title={'Devpost'}
				description={'Click here to submit your project!'}
				note={'Reminder: You’ll need to sign in or create an account for Devpost.\nDeadline: Sunday April 14th 6pm PST'}
				linkTitle={'Submit Project'}
				link={'https://sbcl-2024-jumpstart.devpost.com/'}
			/>
			<PromptBox
				color={'blue'}
				title={'Beginners Rubric'}
				description={'See how your project will be graded. 4 categories, 4 points, each, 16 possible points.'}
				note={'Note: minimum 2 hi-fi screens required, see rubric for more details'}
				linkTitle={'See Rubric'}
				link={'https://drive.google.com/file/d/1FN6G0wJNqxDM4EFo3x8zRs-YlcyGR0J8/view?usp=drive_link'}
			/>
			<PromptBox
				color={'yellow'}
				title={'Intermediate+ Rubric'}
				description={'See how your project will be graded. 4 categories, 4 points, each, 16 possible points.'}
				linkTitle={'See Rubric'}
				link={'https://drive.google.com/file/d/1VBsmlQGMClKggoKsRAVtpzJ8jJOejK_O/view?usp=drive_link'}
			/>
		</div>
	)
}