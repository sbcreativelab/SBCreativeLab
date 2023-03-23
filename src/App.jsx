import React, { Component } from 'react'
import './index.css'
import ReactGA from 'react-ga'

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
        <head>
          <title>SB Creative Lab</title>
        </head>
        <div>
          
        </div>
      </div>
    )
  }
}
export default App;
