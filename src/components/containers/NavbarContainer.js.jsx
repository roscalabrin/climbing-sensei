import React,{ Component } from 'react'
import NewDay from './../UI/NewDay.js.jsx'
import SavedDays from './../UI/SavedDays.js.jsx'

class NavbarContainer extends Component {
  render () {
    return (
      <div className="Navbar">
        < NewDay />
        < SavedDays />
      </div>
    )
  }
}

export default NavbarContainer
