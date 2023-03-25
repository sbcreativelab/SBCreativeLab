import React, { Component } from 'react'
import './App.css'
import './index.css'
import ReactGA from 'react-ga'

import Hero from './Components/s23/Hero'

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
        <div>
          <title>SB Creative Lab</title>
        </div>
        <div>
          <Hero />
        </div>
      </div>
    )
  }
}
export default App;
