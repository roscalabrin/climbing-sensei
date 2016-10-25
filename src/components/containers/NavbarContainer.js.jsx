import React,{ Component } from 'react'
import NewDay from './../UI/NewDay.js.jsx'
import SavedDays from './../UI/SavedDays.js.jsx'
import './../UI/styles/Navbar.css'

class NavbarContainer extends Component {
  render () {
    return (
      <div className="navbar-container">
        <ul className="navbar-list">
          < NewDay />
          < SavedDays />
        </ul>
      </div>
    )
  }
}

export default NavbarContainer
