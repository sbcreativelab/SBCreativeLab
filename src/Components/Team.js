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
    let imgStyles = [
        {transform: "rotateX(180deg)"},
        {transform: "rotateY(180deg)"},
        {transform: "rotateZ(180deg)"},
        {},
        {filter: "hue-rotate(180deg)"},
        {filter: "hue-rotate(270deg)"},
        {filter: "hue-rotate(90deg)"},
    ];
    // for concatenating objects
    let imgStyle = Object.assign(imgStyles[Math.floor(Math.random()*imgStyles.length)], imgStyles[Math.floor(Math.random()*imgStyles.length)])
    
    return(
        // <div className="team-member" style={ {display: (props.imgsrc ? "initial" : "none")}}>
        <div className="team-member">
            <img
                className={"team-member-image"}
                src={"/images/member/" + props.imgsrc}
                style={ (props.imgsrc==="finn.png") && (props.name!=="Finn the Fox") ? imgStyle : {} }
            />
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
                <img className="decoration-sparkle" src={"/sparkle.png"} style={{ height: "90px", left: "6%", top: "200%", width: "50px" }} />
                <img className="decoration-sparkle" src={"/sparkle.png"} style={{ height: "90px", left: "90%", top: "240%", width: "50px" }} />
                <img className="decoration-sparkle" src={"/sparkle.png"} style={{ height: "80px", left: "2%", top: "280%", width: "40px" }} />
                <img className="decoration-sparkle" src={"/sparkle.png"} style={{ height: "70px", left: "48%", top: "320%", width: "40px" }} />
                <img className="decoration-sparkle" src={"/sparkle.png"} style={{ height: "70px", left: "84%", top: "360%", width: "30px" }} />
                <img className="decoration-sparkle" src={"/sparkle.png"} style={{ height: "70px", left: "35%", top: "400%", width: "30px" }} />
                <img className="decoration-sparkle" src={"/sparkle.png"} style={{ height: "90px", left: "90%", top: "440%", width: "50px" }} />
                <img className="decoration-sparkle" src={"/sparkle.png"} style={{ height: "80px", left: "62%", top: "480%", width: "40px" }} />
                <div className="gallery-container">
                    <TeamMember
                        imgsrc="elyse.png"
                        name="Elyse Denzler"
                        role={<div>Director of Publicity</div>}
                    />
                    <TeamMember
                        imgsrc="benny.png"
                        name="Benny Ruehlman"
                        role={<div>Director of Logistics</div>}
                    />
                    <TeamMember
                        imgsrc="caren.png"
                        name="Caren Chua"
                        role={<div>Project Teams Lead</div>}
                    />
                    <TeamMember
                        imgsrc="masayo.png"
                        name="Masayo Machii"
                        role={<div>Director of Design</div>}
                    />
                    <TeamMember
                        imgsrc="christy.png"
                        name="Christy Yu"
                        role={<div>Director of Web Dev {'\u2022'} Design</div>}
                    />
                    <TeamMember
                        imgsrc="may.png"
                        name="May Wong"
                        role={<div>Treasurer</div>}
                    />
                    <TeamMember
                        imgsrc="michelle.png"
                        name="Michelle Dominguez"
                        role={<div>Social Media Manager</div>}
                    />
                    <TeamMember
                        imgsrc="aastha.png"
                        name="Aastha Prakash"
                        role={<div>Programmer</div>}
                    />
                    <TeamMember
                        imgsrc="kavya.png"
                        name="Kavya Verma"
                        role={<div>UI/UX Designer</div>}
                    />
                    <TeamMember
                        imgsrc="priyanka.png"
                        name="Priyanka Ballani"
                        role={<div>Event Coordinator {'\u2022'} Programmer</div>}
                    />
                    <TeamMember
                        imgsrc="cat.png"
                        name="Cat Li"
                        role={<div>Graphic Designer {'\u2022'} Event Coordinator</div>}
                    />
                    <TeamMember
                        imgsrc="amelie.png"
                        name="Amelie Machatzke"
                        role={<div>Social Media Manager {'\u2022'} UI/UX Desginer</div>}
                    />
                    <TeamMember
                        imgsrc="claire.png"
                        name="Claire Herzog"
                        role={<div>UX Intern</div>}
                    />
                    <TeamMember
                        imgsrc="ashlyn.png"
                        name="Ashlyn Ko"
                        role={<div>Graphic Designer {'\u2022'} UX Intern</div>}
                    />
                    <TeamMember
                        imgsrc="finn.png"
                        name="Finn the Fox"
                        role={<div>Team Captain</div>}
                    />
                </div>
                {/* <div className="gallery-container">
                    <img className="group-member-image" src="images/member/group.png"></img>
                </div> */}
            </div>
        </div>
    );
}
