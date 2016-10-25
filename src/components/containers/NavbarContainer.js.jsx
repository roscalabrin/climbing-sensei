import React,{ Component } from 'react'
import { Link } from 'react-router'
import './../UI/styles/Navbar.css'

class NavbarContainer extends Component {
  render () {
    return (
      <div className="navbar-container">
        <ul className="navbar-list">
          <li className="navbar-list-item"><Link to="/saved-days/new">New Day</Link></li>
          <li className="navbar-list-item"><Link to="/saved-days/index">Saved Days</Link></li>
        </ul>
      </div>
    )
  }
}

export default NavbarContainer
