import React, { useState, useEffect } from 'react'
import './Footer.css'

import sbclLogo from '../../images/logo.svg'
import facebookLogo from '../../images/facebook.svg'
import instagramLogo from '../../images/instagram.svg'
import linkedinLogo from '../../images/linkedin.svg'
import discordLogo from '../../images/discord.svg'

export default function Footer() {
        const applicationLink = 'https://forms.gle/JbbRT3279CfsNktMA'
	const submitLink = ''

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
						    <SectionButton name={"JUMPSTART"} id={"hero"} isHeader={true} />
						{/*     <SectionButton name={"Prompt"} id={"prompt"} /> */}
						    <SectionButton name={"Speakers"} id={"speakers"} />
						{/*     <SectionButton name={"Judges"} id={"judges"} /> */}
						{/*     <SectionButton name={"Mentors"} id={"mentors"} /> */}
						    <SectionButton name={"Schedule"} id={"schedule"} />
						    <SectionButton name={"Prizes"} id={"prizes"} />
						    <SectionButton name={"FAQ"} id={"FAQs"} />
						    <SectionButton name={"Sponsors"} id={"sponsors"} />
						</div>
						<div className='footer-links-container'>
							<a href='https://sbcreativelab.com' className='footer-links-header'>SBCL</a>
							<a href='https://sbcreativelab.com/about' className='footer-link'>About</a>
							<a href='https://sbcreativelab.com/resources' className='footer-link'>Resources</a>
							<a href='https://sbcreativelab.com/events' className='footer-link'>Events</a>
							<a href='https://projects.sbcreativelab.com' className='footer-link'>Projects Teams</a>
							<a href='https://sbcreativelab.com/merch' className='footer-link'>Merch</a>
						</div>
					</div>
					<div className='footer-buttons-container'>
						<a href={applicationLink} className='footer-button'>
							<div className='footer-button-text'>Register</div>
						</a>
                                                {/* <a className='footer-button'>
							<div className='footer-button-text'>Submit Project</div>
						</a> */}
					</div>
				</div>
				<div className='footer-bottom'>
					<div className='footer-socials-container'>
						<a href="https://sbcreativelab.com">
		                    <img src={sbclLogo} alt='' className='footer-logo' />
		                </a>
						<div className='footer-socials'>
							<SocialBox image={facebookLogo} link={facebookLink} color={beigeColor} />
							<SocialBox image={instagramLogo} link={instagramLink} color={purpleColor} />
							<SocialBox image={linkedinLogo} link={linkedinLink} color={beigeColor} />
							<SocialBox image={discordLogo} link={discordLink} color={purpleColor} />
						</div>
					</div>
					<div className='footer-designathon-container'>
						<div className='footer-designathon-top'>
							<div className='footer-designathon-top-text'>SBCL 2024</div>
							<div className='footer-designathon-top-text'>JUMPSTART</div>
						</div>
						<div className='footer-designathon-bottom-text'>Spring Designathon</div>
					</div>
				</div>
			</div>
		</div>
	)
}

function SectionButton({ name, id, isHeader = false }) {
    const [anchorTarget, setAnchorTarget] = useState(null);

    useEffect(() => {
        setAnchorTarget(document.getElementById(id));
    }, [id])

    const handleClick = event => {
        event.preventDefault();
        anchorTarget.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    return (
		<a href={'#' + id} className={isHeader ? 'footer-links-header' : 'footer-link'} onClick={handleClick}>{name}</a>
    )
}

function SocialBox({image, link, color}) {
	return (
		<a href={link} className='footer-social' style={{backgroundColor: color}}>
			<img src={image} alt='' className='footer-social-image' />
		</a>
	)
}
