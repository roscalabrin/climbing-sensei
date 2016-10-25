import React, { Component } from 'react'
import { Link } from 'react-router'
import '../css/App.css'
import BuilderContainer from './containers/BuilderContainer.js.jsx'
import DashboardContainer from './containers/DashboardContainer.js.jsx'

class App extends Component {
  render() {
    return (
      <div className="App">
        <p><Link to="/my-account">My Account</Link></p>
        <p><Link to="/builder">Workout Builder</Link></p>
        { this.props.children }
      </div>
    )
  }
}

export default App
