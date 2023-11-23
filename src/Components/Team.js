import React, { Component } from 'react';
import Div100vh from 'react-div-100vh';
let backgroundColor = "#F7FDF4"
let primaryColor = "#1BB994"
let darkColor = "#356A69"

function TeamInfo(props) {
    let oddEven = Number(props.clsid) % 2
    let gridPosition = {
        gridColumn: `${oddEven ? 1 : 2} / ${oddEven ? 2 : 3}`,
        gridRow: `${Number(props.clsid)} / ${Number(props.clsid) + 2}`
    }
    return(
        <div className="team-info-shape" style={gridPosition}>
            <div className="title-small">{props.title}</div>
            <img src={"images/" + props.imgsrc} style={{ width: "100%" }}/>
            <div className="about-subtitle">{props.subtitle}</div>
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
        <div style={{ paddingBottom: "4rem" }}>
            <div className="about-section-3">
                <div style={{ color: darkColor }} className="title about-title-3">Our Teams</div>
                <div className="team-info-container">
                    <TeamInfo
                        clsid="1"
                        title="Logistics Team"
                        imgsrc="logistics-art.png"
                        subtitle="
                            Our Logistics Team is the backbone of SBCL! They 
                            are responsible for all of our events, GM's and 
                            design challenges.
                        "
                    />
                    <TeamInfo
                        clsid="2"
                        title="Design Team"
                        imgsrc="design-art.png"
                        subtitle="
                            Our Design Team is in charge of all of SCBL's 
                            marketing graphics as well as the design systems 
                            for our websites. The Design Team also designs 
                            SBCL's stickers and other merch!
                        "
                    />
                    <TeamInfo
                        clsid="3"
                        title="Marketing Team"
                        imgsrc="marketing-art.png"
                        subtitle="
                            Our Marketing Team is in charge of maintaining 
                            SBCL's social media and advertising all of our 
                            events to the campus!
                        "
                    />
                    <TeamInfo
                        clsid="4"
                        title="Web Development Team"
                        imgsrc="webdev-art.png"
                        subtitle="
                            The web dev team focuses on maintaining SBCL's 
                            main website as well as creating any events 
                            websites such as for our WDC’s and Designathons!
                        "
                    />
                </div>
                <div className="team-join">
                    <p className="title-small">Want to join our team?</p>
                    <p className="about-subtitle">Stay tuned to our upcoming recruitment cycle! All updates will be posted on Instagram.</p>
                </div>
            </div>
            <div className="about-section-4">
                <div style={{ color: darkColor }} className="title about-title-4">Meet our Executive Team</div>
                <div style={{ width: "50em", marginBottom: "2em" }} id="gallery-container" className="gallery-container">
                    <TeamMember
                        imgsrc="kaien.png"
                        name="Kai En Lee"
                        role={<div>Co-Director {'\u2022'} Design</div>}
                    />
                    <TeamMember
                        imgsrc="tvisha.png"
                        name="Tvisha Patel"
                        role={<div>Co-Director {'\u2022'} Logistics</div>}
                    />
                </div>
                {/* <img className="decoration-sparkle" src={"/sparkle.png"} style={{ height: "90px", left: "6%", top: "320%", width: "50px" }} />
                <img className="decoration-sparkle" src={"/sparkle.png"} style={{ height: "90px", left: "90%", top: "360%", width: "50px" }} />
                <img className="decoration-sparkle" src={"/sparkle.png"} style={{ height: "80px", left: "2%", top: "400%", width: "40px" }} />
                <img className="decoration-sparkle" src={"/sparkle.png"} style={{ height: "70px", left: "53%", top: "440%", width: "40px" }} />
                <img className="decoration-sparkle" src={"/sparkle.png"} style={{ height: "70px", left: "84%", top: "480%", width: "30px" }} />
                <img className="decoration-sparkle" src={"/sparkle.png"} style={{ height: "70px", left: "35%", top: "520%", width: "30px" }} />
                <img className="decoration-sparkle" src={"/sparkle.png"} style={{ height: "90px", left: "90%", top: "560%", width: "50px" }} />
                <img className="decoration-sparkle" src={"/sparkle.png"} style={{ height: "80px", left: "62%", top: "600%", width: "40px" }} />
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
                        imgsrc="felix.png"
                        name="Felix Lo"
                        role={<div>UIUX Lead {'\u2022'} Design {'\u2022'} PT Lead</div>}
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
                </div> */}
            </div>
        </div>
    );
}
