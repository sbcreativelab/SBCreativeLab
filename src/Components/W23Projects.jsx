import React, { useEffect, useState } from 'react';
import ReactGA from 'react-ga'
import { ReactComponent as Logo } from "./logo.svg";
import useWindowDimensions from '../utils/useWindowDimensions';
import { HashLink } from 'react-router-hash-link';

const scrollTrigger = window.ScrollTrigger
const gsap = window.gsap;

gsap.registerPlugin(scrollTrigger)

const W23Projects = () => {
    const applicationLink = "https://forms.gle/6zuYsBn22MkPw1W67"
    const currentQuarter = "Fall 2022"
    return (
        <div>
            <div className="title-section">
                <div className="logo-wrapper">
                    <a href="https://www.sbcreativelab.com">
                        <Logo id="logo"/>
                    </a>
                </div>
                <div className="tab-list">
                    <a href={applicationLink} target="_blank" className='tab'>Apply</a>
                    <HashLink smooth to={`#about`} className='tab'>About</HashLink>
                    <HashLink smooth to={`#faq`} className='tab'>FAQ</HashLink>
                </div>
            </div>
        </div>
    )
};

export default Projects;
