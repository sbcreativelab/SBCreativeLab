import React, { Component } from 'react';
import { ReactComponent as Logo } from "./logo.svg";
import Menu from './Menu';
import imagesLoaded from 'imagesloaded';
import Masonry from 'masonry-layout';
import ReactGA from 'react-ga';

import EventItem from './EventItem';

// const hexRgb = require('hex-rgb');
let backgroundColor="#faf2e6"
let primaryColor="#1BB994"
let darkColor="#356A69"
const gsap = window.gsap;
 
export default class Home extends Component {
    
    constructor(props){
        super(props);

        this.state = {
        wave: "",
        menuOpen: false,
        }
    }
    handleMenu() {
        this.setState(prevState => ({
            menuOpen: !prevState.menuOpen
        }))
    }
    initializeReactGA() {
        ReactGA.initialize('UA-178117149-1');
        ReactGA.pageview('/events');
    }
    
    componentDidUpdate(){
        let menu = document.getElementById("menu");
        if(this.state.menuOpen === true){
            menu.classList.add("drop");
            document.body.classList.add("no-scroll");
            document.body.addEventListener('touchmove', function(e){e.preventDefault()});
        }else if(this.state.menuOpen === false){
            menu.classList.remove("drop");
            console.log(menu.classList);
            document.body.classList.remove("no-scroll");
            document.body.removeEventListener('touchmove', function(e){e.preventDefault()});
        }
    }


    componentDidMount(){
        var checkbox = document.querySelector("input[name=checkbox]");
        checkbox.addEventListener( 'change',this.handleMenu.bind(this));
        // imagesLoaded( document.querySelector('.resources'), function( instance ) {
        //     // images have loaded        
        //     var container = document.querySelector('.masonry-grid');
        //     var msnry = new Masonry( container, {
        //     columnWidth: 100,
        //     itemSelector: '.grid-item'
        //     });    
        // });
        this.initializeReactGA();
    }

    render() {
        return (
            <div style={{backgroundColor: backgroundColor}} className="content">
                <Menu/>
                <div className="header">
                    <div className="header-left">
                        <div className="logo-wrapper">
                            <a href="/">
                                <Logo width="100%" display="block" height="auto"/>
                            </a>
                        </div>
                    </div>    
                    <div className="header-right">
                        <div className="hamburger-circle">
                            <div className="menu1 cross menu--1">
                                <label>
                                <input name="checkbox" type="checkbox"/>
                                <svg className="menuSVG" xmlns="http://www.w3.org/2000/svg" 
                                    viewBox="0 0 80 80">
                                    <circle cx="40" cy="40" r="30"/>
                                    <path className="line--1" d="M-10,30h62c13,0,6,28-4,18L25,25"/>
                                    <path className="line--1" d="M-10,30h62c13,0,6,28-4,18L25,25"/>
                                    <path className="line--2" d="M-10,40h70"/>
                                    <path className="line--2" d="M-10,40h70"/>
                                    <path className="line--3" d="M-10,50h62c13,0,6-28-4-18L25,55"/>
                                    <path className="line--3" d="M-10,50h62c13,0,6-28-4-18L25,55"/>
                                </svg>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{paddingBottom: "3%"}} className="events">
                    <div style={{color: darkColor, marginBottom: "1rem"}} className="title about-title-2">
                        Events
                    </div>
                        <div className="about-title-2" style={{marginBottom: "2rem"}}>
                        <span className="event-subtitle subtitle-med color-black">
                            Spring Designathon coming soon!
                        </span>
                        {/* <a target="blank" href="/challenge" className="button-small button-dark">
                                        Check out our Winter Design Challenge!&nbsp;&nbsp;<i class="fas fa-palette fa-lg"></i></a> */}
                    </div>
                    <div className='calendar-months-container'>
                        <img className='calendar-month-image' src='/images/events/January.svg' />
                        <img className='calendar-month-image' src='/images/events/February.svg' />
                        <img className='calendar-month-image' src='/images/events/March.svg' />
                    </div>
                </div>
            </div>
        )
    }
}
