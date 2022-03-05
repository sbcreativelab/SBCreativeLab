import React, { Component } from 'react'
import { Route } from "react-router-dom";
import './index.css'
// import './main.css'
// import Home from './Components/Home'
// import Menu from './Components/Menu'
// import Oops from './Components/Oops'
// import About from './Components/About'
// import Resources from './Components/Resources'
// import Events from './Components/Events'
import ReactGA from 'react-ga'
// import Challenge from './Components/Challenge';
// import Designathon from './Components/Designathon';

import Navbar from './Components/s22/Navbar'
import Hero from './Components/s22/Hero'
import About from './Components/s22/About'
import Timeline from './Components/s22/Timeline'
import Judges from './Components/s22/Judges'
import Mentors from './Components/s22/Mentors'
import FAQ from './Components/s22/FAQ'
import Sponsors from './Components/s22/Sponsors'
import Footer from './Components/s22/Footer'

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
    }

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
        <head>
          <title>SB Creative Lab</title>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"></link>
        </head>
        <div>
          <Hero />
          <Navbar />
          <About />
          <Timeline />
          <Judges />
          <Mentors />
          <FAQ />
          <Sponsors />
          <Footer />
          {/* <Route exact path="/" render={(props) => <Designathon {...props} />} /> */}
          {/* <Route exact path="/challenge" render={(props) => <Challenge {...props}/>}/>
              <Route exact path="/oops" render={(props) => <Oops {...props}/>}/>
              <Route exact path="/about" render={(props) => <About {...props}/>}/>
              <Route exact path="/resources" render={(props) => <Resources {...props}/>}/>
              <Route exact path="/events" render={(props) => <Events {...props}/>}/>
              <Route exact path="/designathon" render={(props) => <Designathon {...props}/>}/> */}
        </div>
      </div>
    )
  }
}
export default App;
