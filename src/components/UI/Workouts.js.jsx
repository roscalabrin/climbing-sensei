import React, { Component } from 'react'
import { Col, Row, Button } from 'react-bootstrap'
import './styles/Workouts.css'

class Workouts extends Component {
  render() {
    return (
      <Col sm={12} md={6} className='workouts-container'>
        <Row>
          <Col sm={20} md={10} className='workout-title'>
            <h4>Title of Workout #1</h4>
          </Col>
        </Row>
        <Row>
          <Col sm={20} md={10} className='workout-list'>
          </Col>
        </Row>
        <Row>
          <Col sm={20} md={10} className='workout-times'>
            <Row>
              <Col sm={12} md={6} className='min-time'>
                <strong>Min Time:</strong> 04:25
              </Col>
              <Col sm={12} md={6} className='max-time'>
                <strong>Max Time:</strong> 93:41
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col sm={20} md={10} className='workout-actions'>
            <Row>
              <Col sm={6} md={3} smOffset={2} mdOffset={1}>
                <Button bsStyle='success' bsSize='xsmall' className='save-day'>Save Day</Button>
              </Col>
              <Col sm={6} md={3} smOffset={8} mdOffset={4}>
                <Button bsStyle='danger' bsSize='xsmall' className='delete-day'>Delete Day</Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    )
  }
}

export default Workouts
