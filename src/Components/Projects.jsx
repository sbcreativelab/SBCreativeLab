import React, { Component } from 'react';
import { ReactComponent as Logo } from "../images/logo.svg";
import './projects.css'
import Menu from './Menu';
// import $ from 'jquery'

const scrollTrigger = window.ScrollTrigger
const gsap = window.gsap;
const applicationLink = 'https://forms.gle/cm4kcFaSrsJowfvCA'
const currentQuarter = 'winter'
const currentYear = '2024'
const dueTime = 'November 28th 11:59pm'

gsap.registerPlugin(scrollTrigger)

export default class Projects extends Component {
  constructor(props) {
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
  
  componentDidUpdate() {
    let menu = document.getElementById("menu");
    var hideImg = document.getElementsByClassName('team-member-image');
    // var isMobile = window.matchMedia("only screen and (max-width: 768px)").matches;
    if (this.state.menuOpen === true) {
      menu.classList.add("drop");
      document.body.classList.add("no-scroll");
      document.body.addEventListener('touchmove', function(e){e.preventDefault()});
      for (var i = 0; i < hideImg.length; i++) {
        hideImg[i].classList.remove('opacity-transition-delay');
        hideImg[i].classList.add('opacity-transition');
        hideImg[i].style.opacity = 0;
      }
    } else if (this.state.menuOpen === false) {
      menu.classList.remove("drop");
      console.log(menu.classList);
      document.body.classList.remove("no-scroll");
      document.body.removeEventListener('touchmove', function(e){e.preventDefault()});
      for (var j = 0; j < hideImg.length; j++) {
        hideImg[j].classList.remove('opacity-transition');
        hideImg[j].classList.add('opacity-transition-delay');
        hideImg[j].style.opacity = 1;
      }
    }
  }

  componentDidMount() {
    var checkbox = document.querySelector("input[name=checkbox]");
    checkbox.addEventListener( 'change',this.handleMenu.bind(this));
    // const tilt = $('.team-member-container').tilt({
    //     maxTilt: 5,
    //     scale: 1.05,
    // });
  }

  render() {
    return (
      <div className="w23projects">
        <Menu />
        <section className="hero">
          <header>
            <div className="header-left">
              <div className="logo-wrapper">
                <a href="https://www.sbcreativelab.com">
                  <Logo id="logo"/>
                </a>
              </div>
            </div>
            <nav>
              <a
                href={applicationLink}
                className="tab"
                target="_blank"
                rel="noreferrer"
              >
                Apply
              </a>
              <a href="#about" className="tab">About</a>
              <a href="#faq" className="tab">FAQ</a>
            </nav>
            <div className="header-right">
              <div className="hamburger-circle">
                  <div className="menu1 cross menu--1">
                      <label>
                          <input name="checkbox" type="checkbox" />
                          <svg
                            className="menuSVG"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 80 80"
                          >
                            <circle cx="40" cy="40" r="30" />
                            <path
                              className="line--1"
                              d="M-10,30h62c13,0,6,28-4,18L25,25"
                            />
                            <path
                              className="line--1"
                              d="M-10,30h62c13,0,6,28-4,18L25,25"
                            />
                            <path
                              className="line--2"
                              d="M-10,40h70"
                            />
                            <path
                              className="line--2"
                              d="M-10,40h70"
                            />
                            <path
                              className="line--3"
                              d="M-10,50h62c13,0,6-28-4-18L25,55"
                            />
                            <path
                              className="line--3"
                              d="M-10,50h62c13,0,6-28-4-18L25,55"
                            />
                          </svg>
                      </label>
                  </div>
              </div>
            </div>
          </header>
          <div className="title-container">
            <h1 className="title">
              sb creative lab presents.<br/>
              <b>
                projects<br/>
                teams
              </b>
              <br/>
              {currentQuarter + " " + currentYear}.
            </h1>
            <div className="due-time">
              Applications close <strong>{dueTime}</strong>!
            </div>
            <a
              href={applicationLink}
              target="_blank"
              rel="noreferrer"
              className="button button-white"
            >
              Apply
            </a>
          </div>
        </section>
        <section className="content">
          <h2 id="winter-projects">winter projects.</h2>
          <h3>Learning Series</h3>
          <p>
            The Learning Series is a 10 week UI/UX course designed for 
            students to learn and gain experience in the field. You will be 
            placed in a team of 3-4 designers and be guided by a student 
            project manager and will come out of this project with the 
            knowledge needed for your future design endeavors as well as a 
            case study that is ready for your portfolio!
          </p>
          <ul className="learn-series-desc-container">
            <li>
              Learn about the foundation of UX design, user research, and 
              UI/UX principles
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
            Experience Level: Participants should have experience ranging from 
            no UI/UX experience to those who have completed at least 1 project.
          </p>
          <div className="learn-series-button-container">
            <a
              className="button button-white"
              href={applicationLink}
              rel="noreferrer"
              target="_blank"
            >
              Apply
            </a>
            {/* <small>
              Please look out for our <b>Fall</b> quarter applications soon!
            </small> */}
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
            designers! You'll get the opportunity to take on real life 
            projects that provide value and impact to potential users. 
          </p>
          <p>
            Experience Level: Participants should have completed at least 1 
            project and have some work examples to show as part of their 
            application. This should not be your first UI/UX project!
          </p>
          <small>
            &#10071;Note&#10071;: We currently do not have a partnered 
            project. If you are a student, please stay tuned for future Real 
            World Series projects. If you are a small business looking for UX 
            design work, please 
            contact <a href="mailto:ucsbsbcreativelab@gmail.com">ucsbsbcreativelab<wbr/>@gmail.com</a> to 
            partner with us!
          </small>
          {/* <div className="real-series-card-container">
            <div className="flex-item real-series-1">
              <h3 className="real-series-content">real series title</h3>
              <p className="real-series-content">
                real series description
              </p>
              <div className="real-series-content real-series-button">
                <button className="button" disabled>Application closed</button>
              </div>
            </div>
            <div className="flex-item real-series-2">
              <h3 className="real-series-content">real series title</h3>
              <p className="real-series-content">
                real series description
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
            SB Creative Lab presents our Projects Teams— a quarter-long 
            program where you can exercise your UX design skills and put 
            together a case study in a team setting. We want to give beginner 
            UX designers the building blocks to enter the UX space, and come 
            out with tangible oppurtunities for portfolios and interviews.
          </p>
          <p>
            We have recently expanded our Projects Teams Series to be more 
            experience-level inclusive as well as partnering with other 
            organizations and local businesses. So stay tuned to what we have 
            in store for you!
          </p>
          <h2 id="faqs">faqs.</h2>
          <h3>When?</h3>
          <p>
            We rotate between Fall, Winter, and Summer quarters. Each cycle 
            will last 9ish weeks (weeks 1-9).
          </p>
          <h3>Who?</h3>
          <p>
            All SBCL members can <a href={applicationLink}>apply</a>. All 
            experience levels are welcome (individuals with no experience as 
            well)!
          </p>
          <h3>What can I get out of this?</h3>
          <p>
            At the end of the 9-week program, projects team participants will 
            have developed a tangible case study or finished product for 
            portfolios and first-hand UX experience for UX design interviews.
          </p>
          <h3>How can I get involved?</h3>
          <p>
            Keep an eye on 
            our <a href="https://www.instagram.com/sbcreativelab/"><b>Instagram</b></a> to 
            know when applications open for each cycle!
          </p>
          <div className="bottom-button-container">
            <a
              className="button button-yellow"
              href="https://forms.gle/UvAzffBRRXjNCaFe9"
              rel="noreferrer"
              target="_blank"
            >
              Submit a project idea!
            </a>
            <a
              className="button button-yellow"
              href="http://eepurl.com/hcKGCP"
              rel="noreferrer"
              target="_blank"
            >
              Join SBCL mailing List
            </a>
          </div>
        </section>
      </div>
    )
  }
}