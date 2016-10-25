import React, { Component } from 'react'
import NavbarContainer from './NavbarContainer.js.jsx'

class DashboardContainer extends Component {
  render () {
    return (
      <div className="dashboard">
        <NavbarContainer />
        { this.props.children }
      </div> 
    )
  }
}

export default DashboardContainer
