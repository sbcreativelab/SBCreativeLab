import React, { Component } from 'react'
import { Routes, Route } from "react-router-dom";
import ReactGA from 'react-ga'

import Projects from './Components/Projects';
import OldProjects from './Components/OldProjects';

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
      <div className="main-body">
        <Routes>
          <Route exact path="/" element={<Projects />} />
          <Route exact path="/archived" element={<OldProjects />}  />
        </Routes>
      </div>
    )
  }
}
export default App;
