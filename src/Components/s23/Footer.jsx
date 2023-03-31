import React from 'react'
import './Footer.css'

import sbclLogo from '../../images/s23_images/logo.svg'
import facebookLogo from '../../images/s23_images/facebook.svg'
import instagramLogo from '../../images/s23_images/instagram.svg'
import linkedinLogo from '../../images/s23_images/linkedin.svg'
import discordLogo from '../../images/s23_images/discord.svg'

export default function Footer() {
	const applicationLink = 'https://tinyurl.com/SBCLDesignathon23'

	const facebookLink = "https://www.facebook.com/sbcreativelab/"
	const instagramLink = "https://www.instagram.com/sbcreativelab/"
	const linkedinLink = "https://www.linkedin.com/company/sbcreativelab/"
	const discordLink = "https://discord.gg/fc8Rrn7VdV"

	const beigeColor = "#E1DBD2"
	const purpleColor = "#8151FB"

	return (
		<div className='footer'>
			<div className='footer-background' />
			<div className='footer-container'>
				<div className='footer-top'>
					<div className='footer-link-sections'>
						<div className='footer-links-container'>
							<a href='#hero' className='footer-links-header'>JUMPSTART</a>
							{/*<a href='#prompt' className='footer-link'>Prompt</a>*/}
							<a href='#timeline' className='footer-link'>Timeline</a>
							<a href='#speakers' className='footer-link'>Speakers</a>
							<a href='#judges' className='footer-link'>Judges</a>
							<a href='#mentors' className='footer-link'>Mentors</a>
							{/*<a href='#prizes' className='footer-link'>Prizes</a>*/}
							<a href='#FAQs' className='footer-link'>FAQ</a>
							<a href='#sponsors' className='footer-link'>Sponsors</a>
						</div>
						<div className='footer-links-container'>
							<a href='https://sbcreativelab.com' className='footer-links-header'>SBCL</a>
							<a href='https://sbcreativelab.com/about' className='footer-link'>About</a>
							<a href='https://sbcreativelab.com/events' className='footer-link'>Events</a>
							<a href='https://projects.sbcreativelab.com' className='footer-link'>Projects Teams</a>
							<a href='https://sbcreativelab.com/merch' className='footer-link'>Merch</a>
						</div>
					</div>
					<div className='footer-buttons-container'>
						<a href={applicationLink} className='footer-button'>
							<div className='footer-button-text'>Register</div>
						</a>
						{/*<a className='footer-button'>
							<div className='footer-button-text'>Submit Project</div>
						</a>*/}
					</div>
				</div>
				<div className='footer-bottom'>
					<div className='footer-socials-container'>
						<img src={sbclLogo} alt='' className='footer-logo' />
						<div className='footer-socials'>
							<SocialBox image={facebookLogo} link={facebookLink} color={beigeColor} />
							<SocialBox image={instagramLogo} link={instagramLink} color={purpleColor} />
							<SocialBox image={linkedinLogo} link={linkedinLink} color={beigeColor} />
							<SocialBox image={discordLogo} link={discordLink} color={purpleColor} />
						</div>
					</div>
					<div className='footer-designathon-container'>
						<div className='footer-designathon-top'>
							<div className='footer-designathon-top-text'>SBCL 2023</div>
							<div className='footer-designathon-top-text'>JUMPSTART</div>
						</div>
						<div className='footer-designathon-bottom-text'>Spring Designathon</div>
					</div>
				</div>
			</div>
		</div>
	)
}

function SocialBox({image, link, color}) {
	return (
		<a href={link} className='footer-social' style={{backgroundColor: color}}>
			<img src={image} alt='' className='footer-social-image' />
		</a>
	)
}