import React, { Component } from 'react'
import { Link } from 'react-router'
import '../css/App.css'
import BuilderContainer from './containers/BuilderContainer.js.jsx'
import DashboardContainer from './containers/DashboardContainer.js.jsx'
import Ajax from './helpers/ajax.js'
import { connect } from 'react-redux' 

class App extends Component {

  componentDidMount() {
    const api = new Ajax()
    api.fetchTags().then(response => this.storeTags(response.data))
  }

  storeTags = (tags) => {
    this.props.dispatch({
      type: 'STORE_TAGS',
      data: tags
    })
  }
  
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

export default connect()(App)
