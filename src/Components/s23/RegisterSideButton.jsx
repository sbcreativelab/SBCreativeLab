import React from 'react'
import './RegisterSideButton.css'

export default function RegisterSideButton() {
	const applicationLink = 'https://tinyurl.com/SBCLDesignathon23'

	return (
		<a className='register-side-button' href={applicationLink} target="_blank" rel="noreferrer">
			<div className='register-side-button-text'>Register Now!</div>	
		</a>
	)
}