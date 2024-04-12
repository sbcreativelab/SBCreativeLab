import React, { useState } from 'react'
import './Speakers.css'
import useWindowDimensions from '../../utils/useWindowDimensions'

import bergerj from '../../images/s24_images/speakers/bergerj.png'
import hor from '../../images/s24_images/speakers/hor.png'
import leef from '../../images/s24_images/speakers/leef.png'
import lottie from '../../images/s24_images/speakers/lottie.png'
import millarh from '../../images/s24_images/speakers/millarh.png'
import xuej from '../../images/s24_images/speakers/xuej.png'
import vov from '../../images/s24_images/speakers/vov.png'

function SpeakersSection(props) {
    return (
        <div className='speakers-section'>
            <div className={`speakers-header speakers-header-${props.color}`}>{props.title}</div>
            <div className={'speakers-row'}>
            {
                props.speakers.map(speaker => {
                    return <SpeakersCell
                        img={speaker.image}
                        name={speaker.name}
                        pronouns={speaker.pronouns}
                        position={speaker.position}
                        company={speaker.company}
                        workshop={speaker.workshop}
                        description={speaker.description}
                        link={speaker.link}
                        color={props.color}
                        textColor={props.textColor} 
                    />
                })
            }
            </div>
        </div>
    )
}

function SpeakersCell(props) {
    const { width, height } = useWindowDimensions();
    const PHONE_SCREEN_BREAKPOINT = 600;
    const isPhoneScreen = width <= PHONE_SCREEN_BREAKPOINT;
    
    const [hover, setHover] = useState(false);
    const [tooltipPos, setTooltipPos] = useState({x: 0, y: 0});
    
    const tooltipWidth = 543;
    const tooltipHeight = 507;
    
    const handleMouseIn = function() {
        setHover(true);
    };
    
    const handleMouseOut = function() {
        setHover(false);
    };
    
    const handleMouseMove = function(e) {
        setTooltipPos({x: e.pageX, y: e.clientY});
    }
    
    const handleClick = function() {
        if (props.link == null) return;
        window.open(props.link, '_blank');
    }
    
    return (
        <>
            <div className={'speakers-cell'}
            onMouseOver={handleMouseIn.bind(this)}
            onMouseOut={handleMouseOut.bind(this)}
            onMouseMove={handleMouseMove.bind(this)}
            onClick={handleClick.bind(this)}>
                <img className={`speakers-profile speakers-profile-${props.color}`} src={props.img} alt={props.name} />
                <div className={`speakers-desc speakers-desc-${props.color}`}>
                    <div className={`speakers-name speakers-text-${props.textColor}`}>{props.name}</div>
                    <div className={`speakers-info speakers-text-${props.textColor}`}>{props.pronouns}</div>
                    {props.workshop ?
                        <div className={`speakers-workshop speakers-text-${props.textColor}`}>{`Workshop: ${props.workshop}`}</div>
                        :
                        <>
                            <div className={`speakers-info speakers-text-${props.textColor}`}>[{props.position}</div>
                            <div className={`speakers-info speakers-text-${props.textColor}`}>{`@ ${props.company}`}]</div>
                        </>
                    }
                </div>
            </div>
            {
                !isPhoneScreen && props.company ?
                <div style={{"visibility": hover ? "visible" : "hidden", "position": "fixed", "left": Math.min(tooltipPos.x, width-tooltipWidth), "top": Math.min(tooltipPos.y, height-tooltipHeight), "pointer-events": "none"}}>
                    <Tooltip
                        img={props.img}
                        name={props.name}
                        pronouns={props.pronouns}
                        position={props.position}
                        company={props.company}
                        description={props.description}
                    />
                </div>
                : <></>
            }
        </>
    )
}

function Tooltip(props) {
    return (
        <div className={'speakers-tooltip-frame'}>
            <div className={'speakers-tooltip-header'}>
                <img className={'speakers-tooltip-profile'} src={props.img} />
                <div className={'speakers-tooltip-header-info'}>
                    <div className={'speakers-tooltip-name'}>{props.name}</div>
                    <div className={'speakers-tooltip-info'}>{props.pronouns}</div>
                    <div className={'speakers-tooltip-info'}>[{props.position}</div>
                    <div className={'speakers-tooltip-info'}>{`@ ${props.company}`}]</div>
                </div>
            </div>
            <div className={'speakers-tooltip-description'}>
                {props.description}
            </div>
        </div>
    )
}

export default function Speakers() {
    return (
        <div className='speakers' id='speakers'>
            <div className='speakers-background'/>
            <div className='speakers-frame'>
                <SpeakersSection title={'Keynote Speaker'} color={'teal'} textColor={'dark'}
                    speakers={[
                        {image: leef, name: "Felix Lee", pronouns: "He/Him", position: "Co-founder & CEO", company: "ADP List", description: "Felix is the Co-founder & CEO of ADPList and sets the vision and strategy for the company. Founded in 2021, the company grew into a global townsquare for expert knowledge, with 20K+ Mentors from companies like Netflix, Airbnb, and Google, hosting over 100 million minutes of sessions on topics such as product design, product management, and coding in 140+ countries. As a designer, Felix has embedded his creative roots in ADPList's culture, product, and community.", link: "https://www.linkedin.com/in/felixleezd/"}
                    ]}
                />
                <SpeakersSection title={'Judges'} color={'blue'} textColor={'light'}
                    speakers={[
                        {image: bergerj, name: "Jason Berger", pronouns: "He/Him", position: "Senior Product Designer", company: "Betterhelp", description: "Jason has a passion for the intersection of psychology and design, maintaining a keen sense of empathy for the user through each stage of the design process. He is currently a Senior Product Designer at BetterHelp, with prior experience at Bird as well as a number of tech startups. He also has a passion for film, reading, music, and spending time with his little Shih Tzu Howard.", link: "https://www.linkedin.com/in/jason-berger/"},
                        {image: hor, name: "Raven Ho", pronouns: "She/Her", position: "UX Designer", company: "Precisely", description: "Raven is a UX designer based in Austin, currently, leading the designs of a B2B security product at Precisely. Coming from a user research and information architecture background, she emphasizes user context, interface interactions, and information structure when designing. Recently, she’s started on a first-time user experience project and finds it interesting but also challenging to streamline users’ onboarding process in a complex and technical product context. Outside of work, she enjoys watching films, dancing, and playing with her hamster. She is looking forward to seeing some innovative designs from you!", link: "https://www.linkedin.com/in/raven-ho-199712136/"},
                        {image: xuej, name: "Janny Xue", pronouns: "She/Her", position: "UX Designer", company: "Riot Games", description: "Janny graduated from UCSB in 2021 with BS in PBS. She switched from Biology/Pre-Health to UX design in her 4th year, gaining UX experience in school orgs (SBCL, Gaucho Creative) and college startups (PoolUp, Openmeal). She got her first UX job at Accenture 3 months post-grad and is currently a UX designer on the Localization Technology team at Riot Games and has been there for 2 years! In her free time she loves to game: Valorant, LoL, Stardew Valley, and others :) She also has two cats named Yuumi and Iso and a dog named Yuuki!", link: "https://www.linkedin.com/in/jannyxue/"},
                        {image: millarh, name: "Hannah Millar", pronouns: "She/Her", position: "Associate Product Designer", company: "Betterhelp", description: "Hannah’s background in graphic design and marketing provided her with a solid foundation in visual communication and user engagement strategies. She joined Gaucho Creative Marketing Group in 2020 and collaborated with companies like Cisco, Zoom, and PoolUp. Now, as an Associate Product Designer at BetterHelp, she specializes in therapist acquisition and retention. She assists therapists in onboarding to the platform, growing their caseloads, and expanding their therapy delivery methods.", link: "https://www.linkedin.com/in/hannah--millar/"}
                    ]}
                />
                <SpeakersSection title={'Workshop Hosts'} color={'purple'} textColor={'light'}
                    speakers={[
                        {image: millarh, name: "Hannah Millar", pronouns: "She/Her", workshop: "User Research", link: "https://www.linkedin.com/in/hannah--millar/"},
                        {image: lottie, name: "Lottie Files", pronouns: "Very cool company", workshop: "Motion Design 101", link: "https://lottiefiles.com"},
                        {image: vov, name: "Van Vo", pronouns: "She/Her", workshop: "Intro to Figma", link: "https://www.linkedin.com/in/vovvan"}
                    ]}
                />
            </div>
        </div>
    )
}
