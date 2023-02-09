import React, { Component } from 'react';
import Div100vh from 'react-div-100vh';
let backgroundColor = "#F7FDF4"
let primaryColor = "#1BB994"
let darkColor = "#356A69"

function TeamInfo(props) {
    return(
        <div class={"team-info-shape team-info-shape" + props.clsid}>
            <div className="team-info-title">{props.title}</div>
            <img className="team-info-image" src={"images/" + props.imgsrc}/>
            <div className="about-subtitle team-info-subtitle">{props.subtitle}</div>
        </div>
    );
}

function TeamMember(props) {
    return(
        <div className="team-member" style={ {display: (props.imgsrc ? "initial" : "none")}}>
            <img className={"team-member-image"} src={"/images/member/" + props.imgsrc}></img>
            <div className="team-member-name title-small">{props.name}</div>
            <div className="about-subtitle longCaption">{props.role}</div>
        </div>
    );
}

export default function Team() {
    return (
        <div>
            <div className="about-section-3">
                <div style={{ color: darkColor }} className="title about-title-3">Our Teams</div>
                <div className="team-info-container">
                    <TeamInfo clsid="1" title="Logistics Team" imgsrc="logistics-art.png" subtitle="Our Logistics Team is the backbone of SBCL! They are responsible for all of our events, GM’s and design challenges." />
                    <TeamInfo clsid="2" title="Design Team" imgsrc="design-art.png" subtitle="Our Design Team is in charge of all of SCBL’s marketing graphics as well as the design systems for our websites. The Design Team also designs SBCL’s stickers and other merch!" />
                    <TeamInfo clsid="3" title="Marketing Team" imgsrc="marketing-art.png" subtitle="Our Marketing Team is in charge of maintaining SBCL’s social media and advertising all of our events to the campus!" />
                    <TeamInfo clsid="4" title="Web Development Team" imgsrc="webdev-art.png" subtitle="The “web-dev” team focuses on maintaining SBCL’s main website as well as creating any events websites such as for our WDC’s and Designathons!" />
                    <div className="team-join">
                        <p className="team-join-title">Want to join our team?</p>
                        <p className="about-subtitle team-join-subtitle">Stay tuned to our upcoming recruitment cycle! All updates will be posted on Instagram.</p>
                    </div>
                </div>
            </div>
            <div className="about-section-4">
                <div style={{ color: darkColor }} className="title about-title-4">Meet our Executive Team</div>
                <img className="decoration-sparkle" src={"/sparkle.png"} style={{ height: "79.58px", left: "14%", top: "455%", width: "43px" }} />
                <div style={{ width: "50em", marginBottom: "2em" }} id="gallery-container" className="gallery-container">
                    <TeamMember
                        imgsrc="aishwarya.png"
                        name="Aishwarya Harinath"
                        role={<div>Co-Director {'\u2022'} Logistics Co-Lead <br/> &nbsp; </div>}
                    />
                    <TeamMember
                        imgsrc="felix.png"
                        name="Felix Lo"
                        role={<div>Co-Director {'\u2022'} UIUX Lead {'\u2022'} Design {'\u2022'} <br/> Projects Teams Lead</div>}
                    />
                </div>
                <img className="decoration-sparkle" src={"/sparkle.png"} style={{ height: "70px", left: "93%", top: "470%", width: "40px" }} />
                <img className="decoration-sparkle" src={"/sparkle.png"} style={{ height: "90px", left: "6%", top: "495%", width: "50px" }} />
                <img className="decoration-sparkle" src={"/sparkle.png"} style={{ height: "90px", left: "90%", top: "520%", width: "50px" }} />
                <img className="decoration-sparkle" src={"/sparkle.png"} style={{ height: "70px", left: "84%", top: "554%", width: "30px" }} />
                <img className="decoration-sparkle" src={"/sparkle.png"} style={{ height: "80px", left: "2%", top: "580%", width: "40px" }} />
                <img className="decoration-sparkle" src={"/sparkle.png"} style={{ height: "70px", left: "35%", top: "610%", width: "30px" }} />
                <img className="decoration-sparkle" src={"/sparkle.png"} style={{ height: "90px", left: "90%", top: "660%", width: "50px" }} />
                <div style={{ marginBottom: "2em" }} id="gallery-container" className="gallery-container">
                    <TeamMember
                        imgsrc="alice.png"
                        name="Alice Hu"
                        role={<div>Design {'\u2022'} UIUX</div>}
                    />
                    <TeamMember
                        imgsrc="caren.png"
                        name="Caren Chua"
                        role={<div>Design</div>}
                    />
                    <TeamMember
                        imgsrc="glori.png"
                        name="Glori Zheng"
                        role={<div>Marketing Co-Lead</div>}
                    />
                    <TeamMember
                        imgsrc="hasith.png"
                        name="Hasith Basnayake"
                        role={<div>UIUX</div>}
                    />
                    <TeamMember
                        imgsrc="ian.png"
                        name="Ian Wen"
                        role={<div>Web Dev</div>}
                    />
                    <TeamMember
                        imgsrc="jackson.png"
                        name="Jackson Cooley"
                        role={<div>Web Dev Lead</div>}
                    />
                    <TeamMember
                        imgsrc=""
                        name="Jesse Zhao"
                        role={<div>Logistics</div>}
                    />
                    <TeamMember
                        imgsrc="kaien.png"
                        name="Kai En Lee"
                        role={<div>Design</div>}
                    />
                    <TeamMember
                        imgsrc=""
                        name="Keanna Lam"
                        role={<div>Design Co-Lead</div>}
                    />
                    <TeamMember
                        imgsrc=""
                        name="Kelly Quach"
                        role={<div>Marketing</div>}
                    />
                    <TeamMember
                        imgsrc="kelly.png"
                        name="Kelly Yan"
                        role={<div>Logistics Co-Lead</div>}
                    />
                    <TeamMember
                        imgsrc=""
                        name="Michelle Mumia"
                        role={<div>Marketing</div>}
                    />
                    <TeamMember
                        imgsrc=""
                        name="Sharon Tan"
                        role={<div>Design</div>}
                    />
                    <TeamMember
                        imgsrc="tvisha.png"
                        name="Tvisha Patel"
                        role={<div>Logistics</div>}
                    />
                    <TeamMember
                        imgsrc="van.png"
                        name="Van Vo"
                        role={<div>Design Co-Lead</div>}
                    />
                    <TeamMember
                        imgsrc="zoe.png"
                        name="Zoe Luu"
                        role={<div>Marketing Co-Lead</div>}
                    />
                    <TeamMember
                        imgsrc="finn.png"
                        name="Finn the Fox"
                        role={<div>Team Captain</div>}
                    />
                </div>
                <div id="gallery-container" className="gallery-container">
                    <img className="group-member-image" src="images/member/group.png"></img>
                </div>
            </div>
            <svg>
                <filter id="filter" x="0" y="0" width="100%" height="100%">
                    <feTurbulence id="sea-filter" numOctaves="3" seed="5" baseFrequency="0.02 0.05"></feTurbulence>
                    <feDisplacementMap scale="4" in="SourceGraphic"></feDisplacementMap>
                    <animate href="#sea-filter" attributeName="baseFrequency" dur="60s" keyTimes="0;0.5;1" values="0.02 0.06;0.04 0.08;0.02 0.06" repeatCount="indefinite"></animate>
                </filter>

            </svg>
            <svg style={{ transform: "translateZ(21px)" }} class="filter" xlmns="http://www.w3.org/2000/svg" version="1.1">
                <filter style={{ transform: "translateZ(-21px)" }} id="filter2" filterUnits="objectBoundingBox" x="0" y="0" width="100%" height="100%">
                    <feTurbulence style={{ transform: "translateZ(21px)" }} id="z-filter" numOctaves="5" seed="5" baseFrequency="0.02 0.02"></feTurbulence>
                    <feDisplacementMap style={{ transform: "translateZ(21px)" }} scale="2" in="SourceGraphic"></feDisplacementMap>
                    <animate href="#z-filter" attributeName="baseFrequency" dur="120s" keyTimes="0;0.5;1" values="0.02 0.02;0.04 0.04;0.02 0.02" repeatCount="indefinite"></animate>
                </filter>
            </svg>
        </div>
    );
}