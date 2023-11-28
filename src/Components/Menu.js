import React, { Component } from 'react';

const baseURL = "https://www.sbcreativelab.com";

export default class Home extends Component {
  render() {
    return (
      <div className="menu" id="menu">
        <div className="menu-container">
          <div className="menu-text">
            <div>
              <a href={baseURL + "/about"} data-content="about" className="menu-link">
                about
              </a>
            </div>
            <div>
              <a href={baseURL + "/resources"} data-content="resources" className="menu-link">
                resources
              </a>
            </div>
            <div>
              <a href={baseURL + "/events"} data-content="events" className="menu-link">
                events
              </a>
            </div>
            <div>
              <a href="/" data-content="projects teams" className="menu-link">
                projects teams
              </a>
            </div>
            <div>
              <a href={baseURL + "/merch"} data-content="merch" className="menu-link">
                merch
              </a>
            </div>
          </div>
          <div className="menu-socials">
            <a target="_blank" href="https://www.facebook.com/sbcreativelab/" rel="noreferrer" >
              <div className="social-container">
                <i class="fab fa-lg fa-facebook"></i>
                <span class="social-background">
                  <span class="social-background-inner"></span>
                </span>
              </div>
            </a>
            <a target="_blank" href="https://www.instagram.com/sbcreativelab/" rel="noreferrer" >
              <div className="social-container">
                <i class="fab fa-lg fa-instagram"></i>
                <span class="social-background">
                  <span class="social-background-inner"></span>
                </span>
              </div>
            </a>
            <a target="_blank" href="https://www.linkedin.com/company/sbcreativelab/" rel="noreferrer" >
              <div className="social-container">
                <i class="fab fa-lg fa-linkedin"></i>
                <span class="social-background">
                  <span class="social-background-inner"></span>
                </span>
              </div>
            </a>
            <a target="_blank" href="https://rebrand.ly/sbcl-slack" rel="noreferrer" >
              <div className="social-container">
                <i class="fab fa-lg fa-slack"></i>
                <span class="social-background">
                  <span class="social-background-inner"></span>
                </span>
              </div>
            </a>
            <a target="_blank" href="https://discord.gg/fc8Rrn7VdV" rel="noreferrer" >
              <div className="social-container">
                <i class="fab fa-lg fa-discord"></i>
                <span class="social-background">
                  <span class="social-background-inner"></span>
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    )
  }
}