import React, { Component } from 'react'
import { Col } from 'react-bootstrap'
import './styles/Routines.css'

class Routines extends Component {
  render() {
    return (
      <Col sm={12} md={6} className='routines'>
        {this.props.routines}
      </Col>
    )
  }
}

export default Routines
