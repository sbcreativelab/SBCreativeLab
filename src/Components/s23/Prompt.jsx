import React from 'react'
import './Prompt.css'
import useWindowDimensions from '../../utils/useWindowDimensions'

import sectionTitle from '../../images/s23_images/prompt-title.svg'
import sideDeco from '../../images/s23_images/prompt-background.svg'
import sideDecoPhone from '../../images/s23_images/phone_view/prompt-background-phone.svg'
import blobDeco from '../../images/s23_images/blob.svg'
import blobDecoPhone from '../../images/s23_images/phone_view/blob-phone.svg'

import promptPieDiagram from '../../images/s23_images/prompt-pie-diagram.svg'
import promptArrow from '../../images/s23_images/prompt-arrow.svg'
import promptArrowPhone from '../../images/s23_images/phone_view/prompt-arrow-phone.svg'

export default function Prompt() {
	const { width } = useWindowDimensions();
	const PHONE_SCREEN_BREAKPOINT = 600;
	const isPhoneScreen = width <= PHONE_SCREEN_BREAKPOINT;
	
	const promptStatLink = "https://www.foodservicedirector.com/operations/over-half-todays-college-students-report-feeling-lonely-sodexo-survey-reveals"
	
	return (
		<div className='prompt' id='prompt'>
			<div className='prompt-background' />
			<img src={sectionTitle} alt='' className='prompt-title' />
			<img src={isPhoneScreen ? sideDecoPhone : sideDeco} alt='' className='prompt-side-deco' />
			<img src={isPhoneScreen ? blobDecoPhone : blobDeco} alt='' className='blob-deco' />
			<div className='prompt-content'>
				<div className='prompt-subtitle'>Meeting people is hard.</div>
				<div className='prompt-row' style={{marginTop: "0.66vw"}}>
					<div className='prompt-stat-container'>
						<img className='prompt-stat-diagram' src={promptPieDiagram} alt='' />
						<div className='prompt-stat-text-container'>
							<div className='prompt-stat-percentage'>53%</div>
							<div className='prompt-stat-info'>of current college students say that they’re lonely</div>
							<a className='prompt-stat-link' href={promptStatLink}>Sodexo</a>
						</div>
					</div>
					<div className='prompt-text' style={{marginLeft: isPhoneScreen ? "0" : "3.4vw", width: isPhoneScreen ? "62.0vw" : "inherit"}}>
						With how busy the average college student is, the importance of forming authentic connections without being emotionally drained grows higher and higher. 
					</div>
				</div>
				<div className='prompt-row' style={{marginTop: isPhoneScreen ? "7.9vw" : "2.8vw", flexDirection: "column", alignItems: "flex-start", gap: isPhoneScreen ? "4.0vw" : "1.2vw"}}>
					<div className='prompt-arrow-container'>
						<img className='prompt-arrow' src={isPhoneScreen ? promptArrowPhone : promptArrow} alt='' />
						<div className='prompt-arrow-text'>For <span className='prompt-arrow-text-blue'>Intermediate+</span> Designers:</div>
					</div>
					<div className='prompt-text'>
						Your challenge is to design a mobile app that <span className='prompt-text-bold'><span className='prompt-text-highlight'>facilitates authentic connections and builds genuine relationships between college students</span> -- providing an interesting yet safe experience to engage with other students.</span>
					</div>
				</div>
				<div className='prompt-row' style={{marginTop: isPhoneScreen ? "7.9vw" : "2.8vw", flexDirection: "column", alignItems: "flex-start", gap: isPhoneScreen ? "4.0vw" : "1.2vw"}}>
					<div className='prompt-arrow-container'>
						<img className='prompt-arrow' src={isPhoneScreen ? promptArrowPhone : promptArrow} alt='' />
						<div className='prompt-arrow-text'>For <span className='prompt-arrow-text-orange'>Beginner+</span> Designers:</div>
					</div>
					<div className='prompt-text'>
						Your challenge is to reflect on the apps used for making connections -- whether it's <span className='prompt-text-bold'>platonic, romantic, or professional! <span className='prompt-text-highlight'>Analyze your chosen app for any areas of improvement and design a prototype that implements a new feature.</span></span> This feature should <span className='prompt-text-bold'>promote relationship-building</span> alongside the app's current features & functions.
					</div>
					<div className='prompt-text'>
						Feeling stuck? Some apps we recommend are Hinge, Bumble, Tinder, LinkedIn, or Clubhouse!
					</div>
					<div className='prompt-text-small' style={{width: isPhoneScreen ? "75.9vw" : "39.1vw"}}>
						<span className='prompt-text-bold'>Note:</span> To qualify as a beginner, you must have not participated in another Designathon and/or have little to no UI/UX design experience. 
					</div>
				</div>
				<div className='prompt-row' style={{marginTop: isPhoneScreen ? "6.0vw" : "2.2vw", flexDirection: "column", alignItems: isPhoneScreen ? "flex-start" : "flex-end", width: "81.2vw"}}>
					<div className='prompt-tip-container'>
						<div className='prompt-text-small'>
							<span className='prompt-text-bold'>Design Tip:</span>
						</div>
						<div className='prompt-text-small'>
							Consider common social media app pain points while designing, such as aversion to small talk, safety concerns, & ambiguous intentions.
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}