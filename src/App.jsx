import React, { Component } from 'react'
import './App.css'
import './index.css'
import ReactGA from 'react-ga'
import { UserAgent } from "react-useragent"

import Hero from './Components/s24/Hero'
import RegisterSideButton from './Components/s24/RegisterSideButton'
import Teaser from './Components/s24/Teaser'
import Speakers from './Components/s24/Speakers'
// import Judges from './Components/s24/Judges'
// import Mentors from './Components/s24/Mentors'
// import Prompt from './Components/s24/Prompt'
import Schedule from './Components/s24/Schedule'
import Prizes from './Components/s24/Prizes'
import FAQs from './Components/s24/FAQs'
import Sponsors from './Components/s24/Sponsors'
import Footer from './Components/s24/Footer'

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  initializeReactGA() {
    ReactGA.initialize('UA-178117149-1');
    ReactGA.pageview('/app');
  }

  componentDidMount() {
    this.initializeReactGA();
  }

  render() {
    return (
      <div>
        <div className='app-background' />
        <UserAgent>
          {({ ua }) => {
            const iOS = ua.md.ua.match(/iP(ad|od|hone)/i)
            const desktopSafari = !iOS && ua.md.ua.match(/^((?!chrome|android).)*safari/i)
            return <div className='noise-background' style={{zIndex: (iOS || desktopSafari) ? -2 : 2}} />
          }}
        </UserAgent>
        <Hero />
        <Teaser />
        <Speakers />
        {/* <RegisterSideButton /> */}
        {/* <Judges /> */}
        {/* <Mentors /> */}
	{/* <Prompt /> */}
        <Schedule />
        <Prizes />
        <FAQs />
        <Sponsors />
        <Footer />
      </div>
    )
  }
}
export default App;
