import React from 'react';
import './Timeline.css';
import gradient from '../s22_images/gradient.svg'

function Timeline () {
  return (
    <div class="container">
      <img class="line1" src="images/s22/Frame 1619.svg"></img>
      <div class="words-and-finn">
        <p class="words">GET READY TO <span class="pixelate">PIXEL-ATE</span> FROM APRIL 7TH TO 13TH. SUBMISSIONS ARE DUE AT <span class="deadline">11:59PM PST ON APRIL 10TH</span> AND THE CLOSING CEREMONY WILL BE ON <span class="closing">APRIL 13TH.</span></p> 
        
        {/* i will attempt fading finn now */}
        <div class="finn-container">
          <img class="finn-line" src="images/s22/Finn 3.svg"></img>
          <div class="finn-overlay">
            <img class="finn-colored" src="images/s22/Finn 1 (Colored).svg"></img>
          </div>
        </div>
      </div>
      <img class="line2" src="images/s22/Frame 1619.svg"></img>
      
      <p class="timeline-date">APRIL 7-13, 2022</p>
      <img class="timeline" src="images/s22/Group 1644.svg"></img>

      <img class="line3" src="images/s22/Frame 1619.svg"></img>
      <div className='gradient-wrapper'>
        
      <div className="timeline-wrapper">
        <img src={gradient} className="timeline-gradient"></img>
        <div className="timeline-card-first">
          <p className="timeline-date">07</p> 
          <p className="card-words">
            Opening Ceremony at 6PM PST — with prompt announcement and keynote speaker X.
            <br/>
            Live Figma workshop with Chloe Chow, SB Creative Lab Co-Lead at 0 PM PST.
          </p>
        </div>
        <div className="timeline-card">
          <p className="timeline-date">08</p> 
          <p className="card-words">
          Designathon continues through day 2!
          <br/>
          Live workshop number 4 at 0PM PST.
          <br/>
          Workshop replay number 1 at 0PM PST.
          </p>
        </div>
        <div className="timeline-card">
          <p className="timeline-date">09</p> 
          <p className="card-words">
            Designathon continues through day 2! Live prototyping workshop at 2PM PST, hosted by Figma’s Jr. Educator and Designer, Miggi Cardona. Workshop replay number 1 at 0PM PST.
          </p>
        </div>
        <div className="timeline-card">
          <p className="timeline-date-bold">10</p> 
          <p className="card-words">
            Last day! Submissions are due at <span className="card-words-bold">11:59PM PST</span> — this is a hard deadline. Great job putting all your skills to work; you deserve a break.
          </p>
        </div>
        <div className="timeline-card">
          <p className="timeline-date">11</p> 
          <p className="card-words">
            TBD
          </p>
        </div>
        <div className="timeline-card-last">
          <p className="timeline-date">12</p> 
          <p className="card-words">
            TBD
          </p>
        </div>
      </div>
      </div>
      {/* scrollable timeline */}
      {/* <div class="timeline-wrapper">

        <div class="day">    
          <div class="card-container">
            <div class="layer-1">
              <img class="card-background" src="images/s22/purple.svg"></img>
            </div>
            <div class="layer-2">
              <img class="card-num" src="images/s22/07.svg"></img>
            </div>
            <div class="layer-3">
              <p class="card-words-07-1">Opening Ceremony at <span class="emph07">6PM PST</span> — with prompt announcement and keynote speaker X.</p>
              <p class= "card-words-07-2">Live Figma workshop with Chloe Chow, SB Creative Lab Co-Lead at <br/>0 PM PST.</p>
            </div>
          </div>
        </div>

        <div class="day">
          <div class="card-container">
            <div class="layer-1">
              <img class="card-background" src="images/s22/purple.svg"></img>
            </div>
            <div class="layer-2">
              <img class="card-num" src="images/s22/08.svg"></img>
            </div>
            <div class="layer-3">
              <p class="card-words-08-1">Designathon continues through day 2!</p>
              <p class= "card-words-08-2">Live workshop number 4 at 0PM PST.</p>
              <p class="card-words-08-3">Workshop replay number 1 at 0PM PST.</p>
            </div>
          </div>
        </div>

        <div class="day">
          <div class="card-container">
            <div class="layer-1">
              <img class="card-background" src="images/s22/purple.svg"></img>
            </div>
            <div class="layer-2">
              <img class="card-num" src="images/s22/09.svg"></img>
            </div>
            <div class="layer-3">
              <p class="card-words-09-1">Almost at the home stretch! No workshops this day but continue working with your teams.</p>
            </div>
          </div>
        </div>

        <div class="day">
          <div class="card-container">
            <div class="layer-1">
              <img class="card-background" src="images/s22/purple.svg"></img>
            </div>
            <div class="layer-2">
              <img class="card-num" src="images/s22/10.svg"></img>
            </div>
            <div class="layer-3">
              <p class="card-words-09-1">Last day! Submissions are due at <span class="emph10">11:59PM PST</span> — this is a hard deadline. Great job putting all your skills to work; you deserve a break.</p>
            </div>
          </div>
        </div>

        <div class="day">
          <div class="card-container">
            <div class="layer-1">
              <img class="card-background" src="images/s22/purple.svg"></img>
            </div>
            <div class="layer-2">
              <img class="card-num" src="images/s22/11.svg"></img>
            </div>
            <div class="layer-3">
              <p class="card-words-09-1">Details Details Details Details  Details Details Details Details Details Details Details Details Details Details Details Details</p>
            </div>
          </div>
        </div>

        <div class="day">
          <div class="card-container">
            <div class="layer-1">
              <img class="card-background" src="images/s22/purple.svg"></img>
            </div>
            <div class="layer-2">
              <img class="card-num" src="images/s22/12.svg"></img>
            </div>
            <div class="layer-3">
              <p class="card-words-09-1">Details Details Details Details  Details Details Details Details Details Details Details Details Details Details Details Details</p>
            </div>
          </div>
        </div>

        <div class="day">
          <div class="card-container">
            <div class="layer-1">
              <img class="card-background" src="images/s22/purple.svg"></img>
            </div>
            <div class="layer-2">
              <img class="card-num" src="images/s22/13.svg"></img>
            </div>
            <div class="layer-3">
              <p class="card-words-09-1">Details Details Details Details  Details Details Details Details Details Details Details Details Details Details Details Details</p>
            </div>
          </div>
        </div>

      </div> */}
    </div>
  );
}

export default Timeline;
