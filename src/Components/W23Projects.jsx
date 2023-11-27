import React, { useEffect, useState } from 'react';
import ReactGA from 'react-ga'
import { ReactComponent as Logo } from "./logo.svg";
import useWindowDimensions from '../utils/useWindowDimensions';
import { HashLink } from 'react-router-hash-link';
import '../w23proj.css'

const scrollTrigger = window.ScrollTrigger
const gsap = window.gsap;

gsap.registerPlugin(scrollTrigger)

function W23Projects() {
  const applicationLink = 'https://forms.gle/cm4kcFaSrsJowfvCA'
  const currentQuarter = 'winter'
  const currentYear = '2024'
  const dueTime = 'November 28th 11:59pm'
  return (
    <div className="w23projects">
      <div className="title-section">
        <div className="header">
          <div className="logo-wrapper">
            <a href="https://www.sbcreativelab.com">
              <Logo id="logo"/>
            </a>
          </div>
          <div className="nav">
            <a href={applicationLink} className="tab" target="_blank" rel="noreferrer">Apply</a>
            <a href="#about" className="tab">About</a>
            <a href="#faq" className="tab">FAQ</a>
          </div>
        </div>
        <div className="title-container">
          <div>
            <h1 className="title">
              sb creative lab presents.<br/>
              <strong>
                projects<br/>
                teams
              </strong>
              <br/>
              {currentQuarter + " " + currentYear}.
            </h1>
            <p className="due-time">
              Applications close <b>{dueTime}</b>!
            </p>
          </div>
          <p className="title-skill title-skill-1">team work</p>
          <p className="title-skill title-skill-2">mentorship</p>
          <p className="title-skill title-skill-3">networking</p>
        </div>
        <div style={{textAlign: 'center'}}>
          <a className="button button-white top-button" href="#winter-projects">See Projects</a>
        </div>
      </div>
      <div className="content">
        <h2 id="winter-projects">winter projects.</h2>
        <h3>Learning Series</h3>
        <p>
          The Learning Series is a 10 week UI/UX course designed for students to 
          learn and gain experience in the field. You will be placed in a team 
          of 3-4 designers and be guided by a student project manager and will 
          come out of this project with the knowledge needed for your future 
          design endeavors as well as a case study that is ready for your 
          portfolio!
        </p>
        <ul style="display: flex; list-style-type: none">
          <li>
            Learn about the foundation of UX design, user research, and UI/UX 
            principles
          </li>
          <li>
            Brainstorm and work within a team setting to solve a complex 
            design problem
          </li>
          <li>
            Create a case study and present it at a project showcase at the 
            end of the quarter
          </li>
        </ul>
        <p>
          Experience Level: Participants should have experience ranging from no 
          UI/UX experience to those who have completed at least 1 project. 
        </p>
        <div style={{ textAlign: "center" }} className="learn-series-button-container">
        <a className="button button-white" href={applicationLink} rel="noreferrer" target="_blank">
          <button>Apply</button>
        </a>
          {/* <small>Please look out for our <b>Fall</b> quarter applications soon!</small> */}
        </div>
        <div className="learn-series-card-container">
          <div className="flex-item learn-series-beginner">
            <h3>Beginners</h3>
            <p>
              If you've never touched Figma 
              before, don't worry! The 
              beginners team is perfect for 
              students with little to no 
              experience and are curious 
              about UI/UX design!
            </p>
          </div>
          <div className="flex-item learn-series-intermediate">
            <h3>Intermediate +</h3>
            <p>
              If you've worked on UI/UX projects 
              before, join our intermediate+ 
              team to work with other designers 
              and challenge your creativity and 
              work on more challenging 
              prompts to fill that portfolio up!
            </p>
          </div>
        </div>
        <h3>Real World Series (a.k.a Clients Teams)</h3>
        <p>
          Want to try out the real deal? Join our Clients Team to work with 
          industry professionals and receive mentorship from experienced 
          designers! You'll get the opportunity to take on real life projects 
          that provide value and impact to potential users. 
        </p>
        <p>
          Experience Level: Participants should have completed at least 1 project 
          and have some work examples to show as part of their application. This 
          should not be your first UI/UX project!
        </p>
        <small>
          ❗️Note❗️: We currently do not have a partnered project. If you are a 
          student, please stay tuned for future Real World Series projects. If 
          you are a small business looking for UX design work, please contact 
          <a href="mailto:ucsbsbcreativelab@gmail.com">ucsbsbcreativelab@gmail.com</a> 
          to partner with us!
        </small>
        {/* <div className="real-series-card-container">
          <div className="flex-item real-series-sas">
            <h3 className="real-series-content">SAS x SBCL</h3>
            <p className="real-series-content">
              Work with <u>Small Acts for 
              Sustainability</u> to create a better 
              world for the underserved!
              <br/><br/>
              Students of the SAS x SBCL Project 
              Team will work with software 
              developers from BUILD UMass 
              and Founder of SAS to create an 
              educational menstrual app that 
              helps educate and empower 
              uterus owners in their 
              mentruational processes.
            </p>
            <small>Note: Graphic Designers & Illustrators welcome to apply!</small>
            <div className="real-series-content real-series-button">
              <button className="button" disabled>Application closed</button>
            </div>
          </div>
          <div className="flex-item real-series-poolup">
            <h3 className="real-series-content">PoolUp x SBCL</h3>
            <p className="real-series-content">
              A one-quarter internship 
              experience working under PoolUP 
              design leads to conduct UX 
              research at UCSB and help 
              consolidate design decisions!
              <br/><br/>
              PoolUp is looking for 2 UX 
              designers and 2 UI designers who 
              can work efficiently and create 
              beautiful designs.
            </p>
            <div className="real-series-content real-series-button-container">
              <button className="button" disabled>Application closed</button>
            </div>
          </div>
        </div> */}
        <h2 id="about">about.</h2>
        <p>
          Interested in UX design, but don't know where to start?
        </p>
        <p>
          SB Creative Lab presents our Projects Teams— a quarter-long program where 
          you can exercise your UX design skills and put together a case study in a team 
          setting. We want to give beginner UX designers the building blocks to enter the 
          UX space, and come out with tangible oppurtunities for portfolios and interviews.
        </p>
        <p>
          We have recently expanded our Projects Teams Series to be more experience-
          level inclusive as well as partnering with other organizations and local businesses. 
          So stay tuned to what we have in store for you!
        </p>
        <h2 id="faq">faqs.</h2>
        <h3>When?</h3>
        <p>
          We rotate between Fall, Winter, and Summer quarters. Each cycle will 
          last 9ish weeks (weeks 1-9).
        </p>
        <h3>Who?</h3>
        <p>
          All SBCL members can <a href={applicationLink}>apply</a>. All experience levels are welcome 
          (individuals with no experience as well)!
        </p>
        <h3>What can I get out of this?</h3>
        <p>
          At the end of the 9-week program, projects team participants will have 
          developed a tangible case study or finished product for portfolios and 
          first-hand UX experience for UX design interviews.
        </p>
        <h3>How can I get involved?</h3>
        <p>
          Keep an eye on our <b>Instagram</b> to know when applications open for 
          each cycle!
        </p>
        <div className="bottom-button-container">
          <a className="button button-yellow" href="https://forms.gle/UvAzffBRRXjNCaFe9" rel="noreferrer" target="_blank">Submit a project idea!</a>
          <a className="button button-yellow" href="http://eepurl.com/hcKGCP" rel="noreferrer" target="_blank">Join SBCL mailing List</a>
        </div>
      </div>
    </div>
  );
}

export default W23Projects;
