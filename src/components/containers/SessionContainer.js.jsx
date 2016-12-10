import React, { Component} from 'react'
import { connect } from 'react-redux'
import Login from './../UI/Login.js.jsx'

class SessionContainer extends Component {
  render() {
    return (
      <div className="login">
        <Login />
      </div>
    )
  }
}

export default connect()(SessionContainer);
