import React, { Component } from 'react'
import { Link } from 'react-router'
import './UI/styles/App.css'
import SessionContainer from './containers/SessionContainer.js.jsx'
import BuilderContainer from './containers/BuilderContainer.js.jsx'
import DashboardContainer from './containers/DashboardContainer.js.jsx'
import Ajax from './helpers/ajax.js'
import { connect } from 'react-redux'

class App extends Component {

  componentDidMount() {
    const api = new Ajax()
    api.fetchTags().then(this.storeTags)
  }

  storeTags = (responseBody) => {
    this.props.dispatch({
      type: 'STORE_TAGS',
      payload: {
        tags: responseBody.data
      }
    })
  }

  render() {
    return (
      <div className="App">
        <p><Link to="/my-account">My Account</Link></p>
        <p><Link to="/builder">Workout Builder</Link></p>
        { this.props.children }
        <SessionContainer />
        {/* <footer>
          <p className="text-muted">© 2016 by Climbing Sensei, Inc.</p>
        </footer> */}
        
      </div>
    )
  }
}

export default connect()(App)
