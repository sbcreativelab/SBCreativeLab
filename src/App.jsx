import React, { Component } from 'react'
import './App.css'
import './index.css'
import ReactGA from 'react-ga'

import Hero from './Components/s23/Hero'
import Timeline from './Components/s23/Timeline'
import Speakers from './Components/s23/Speakers'
import Judges from './Components/s23/Judges'
import Mentors from './Components/s23/Mentors'
import FAQs from './Components/s23/FAQs'
// import Sponsors from './Components/s23/Sponsors'
import Footer from './Components/s23/Footer'

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
    // eslint-disable-next-line
    const isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));

    return (
      <div>
        <div className='app-background' />
        <div className='noise-background' style={{zIndex: isSafari ? -2 : 1}} />
        <Hero />
        <Timeline />
        <Speakers />
        <Judges />
        <Mentors />
        <FAQs />
        {/*<Sponsors />*/}
        <Footer />
      </div>
    )
  }
}
export default App;
