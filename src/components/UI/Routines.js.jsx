import React, { Component } from 'react'
import { Link } from 'react-router'
import { Col } from 'react-bootstrap'
import Routine from './Routine.js.jsx'
import KeyGenerator from './../helpers/keyGenerator'
import './styles/Routines.css'

class Routines extends Component {
  render() {
    return (
      <Col sm={12} md={6} className='routines'>
      </Col>
    )
  }
}

export default Routines
