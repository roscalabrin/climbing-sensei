import React, { Component } from 'react'
import '../css/App.css'
import BuilderContainer from './containers/BuilderContainer.js.jsx'

class App extends Component {
  render() {
    return (
      <div className="App">
        // <BuilderContainer />
        <DashboardContainer />
      </div>
    )
  }
}

export default App
