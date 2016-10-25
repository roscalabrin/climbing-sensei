import React, { Component } from 'react'
import { Link } from 'react-router'
import { Col } from 'react-bootstrap'
import Routine from './Routine.js.jsx'
import './styles/Routines.css'

class Routines extends Component {
  componentDidMount() {
    this.getRoutines(8)
  }

  getRoutines = (num) => {
    const routines = []
    for (let i = 1; i < num; i++) {
      let path = `/workouts/${i}`
      routines.push(
        <Link to={path}><h2 className='routine'>Workout #{ i }</h2></Link>
      )
    }
    return routines
  }

  render() {
    const routines = this.getRoutines(7)
    return (
      <Col sm={12} md={6} className='routines'>
        {routines}
      </Col>
    )
  }
}

export default Routines
